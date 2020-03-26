# The code in this file is copied from https://github.com/praekelt/vumi/blob/master/vumi/codecs/vumi_codecs.py
# which is in turn largely copied from http://stackoverflow.com/questions/13130935/decode-7-bit-gsm
# Vumi's license is included below:

# Copyright (c) Praekelt Foundation and individual contributors.
# All rights reserved.

# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:

#     1.  Redistributions of source code must retain the above copyright notice,
#         this list of conditions and the following disclaimer.

#     2.  Redistributions in binary form must reproduce the above copyright
#         notice, this list of conditions and the following disclaimer in the
#         documentation and/or other materials provided with the distribution.

#     3.  Neither the name of the Praekelt Foundation nor the names of its
#         contributors may be used to endorse or promote products derived from
#         this software without specific prior written permission.

# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
# LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
# SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
# CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
# POSSIBILITY OF SUCH DAMAGE.


import sys
import abc
import codecs

from . import state

# An alternative to using this codec module is to use: https://github.com/dsch/gsm0338
# however, I'm guessing that vumi has been in use longer and we should thus go with it.


class NazCodecException(Exception):
    pass


class GSM7BitCodec(codecs.Codec):
    """
    """

    gsm_basic_charset = (
        "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞ\x1bÆæßÉ !\"#¤%&'()*+,-./0123456789:;"
        "<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ`¿abcdefghijklmnopqrstuvwxyzäö"
        "ñüà"
    )

    gsm_basic_charset_map = dict((l, i) for i, l in enumerate(gsm_basic_charset))

    gsm_extension = (
        "````````````````````^```````````````````{}`````\\````````````[~]`"
        "|````````````````````````````````````€``````````````````````````"
    )

    gsm_extension_map = dict((l, i) for i, l in enumerate(gsm_extension))

    def encode(self, input, errors="strict"):
        """
        errors can be 'strict', 'replace' or 'ignore'
        eg:
            xcodec.encode("Zoë","gsm0338") will fail with UnicodeEncodeError
            but
            xcodec.encode("Zoë","gsm0338", 'replace') will return b'Zo?'
            and
            xcodec.encode("Zoë","gsm0338", 'ignore') will return b'Zo'
        """
        result = []
        for position, c in enumerate(input):
            idx = self.gsm_basic_charset_map.get(c)
            if idx is not None:
                result.append(chr(idx))
                continue
            idx = self.gsm_extension_map.get(c)
            if idx is not None:
                result.append(chr(27) + chr(idx))
            else:
                result.append(self.handle_encode_error(c, errors, position, input))

        obj = "".join(result)
        # this is equivalent to;
        # import six; six.b('someString')
        # see:
        # https://github.com/benjaminp/six/blob/68112f3193c7d4bef5ad86ed1b6ed528edd9093d/six.py#L625
        obj = obj.encode("latin-1")
        return (obj, len(obj))

    def handle_encode_error(self, char, handler_type, position, obj):
        handler = getattr(self, "handle_encode_%s_error" % (handler_type,), None)
        if handler is None:
            raise NazCodecException("Invalid errors type %s for GSM7BitCodec", handler_type)
        return handler(char, position, obj)

    @staticmethod
    def handle_encode_strict_error(char, position, obj):
        raise UnicodeEncodeError("gsm0338", char, position, position + 1, repr(obj))

    @staticmethod
    def handle_encode_ignore_error(char, position, obj):
        return ""

    def handle_encode_replace_error(self, char, position, obj):
        return chr(self.gsm_basic_charset_map.get("?"))

    def decode(self, input, errors="strict"):
        """
        errors can be 'strict', 'replace' or 'ignore'
        """
        res = iter(input)
        result = []
        for position, c in enumerate(res):
            try:
                if c == 27:
                    c = next(res)
                    result.append(self.gsm_extension[c])
                else:
                    result.append(self.gsm_basic_charset[c])
            except IndexError as indexErrorException:
                result.append(
                    self.handle_decode_error(c, errors, position, input, indexErrorException)
                )

        obj = "".join(result)
        return (obj, len(obj))

    def handle_decode_error(self, char, handler_type, position, obj, indexErrorException):
        handler = getattr(self, "handle_decode_%s_error" % (handler_type,), None)
        if handler is None:
            raise NazCodecException("Invalid errors type %s for GSM7BitCodec", handler_type)
        return handler(char, position, obj, indexErrorException)

    @staticmethod
    def handle_decode_strict_error(char, position, obj, indexErrorException):
        # https://github.com/google/pytype/issues/349
        raise UnicodeDecodeError(
            "gsm0338",
            chr(char).encode("latin-1"),
            position,
            position + 1,
            repr(obj),  # pytype: disable=wrong-arg-types
        ) from indexErrorException

    @staticmethod
    def handle_decode_ignore_error(char, position, obj, indexErrorException):
        return ""

    @staticmethod
    def handle_decode_replace_error(char, position, obj, indexErrorException):
        return "?"


class UCS2Codec(codecs.Codec):
    """
    UCS2 is for all intents & purposes assumed to be the same as
    big endian UTF16.
    """

    def encode(self, input, errors="strict"):
        # https://github.com/google/pytype/issues/348
        return codecs.utf_16_be_encode(input, errors)  # pytype: disable=module-attr

    def decode(self, input, errors="strict"):
        return codecs.utf_16_be_decode(input, errors)  # pytype: disable=module-attr


class BaseCodec(abc.ABC):
    """
    This is the interface that must be implemented to satisfy naz's encoding/decoding.
    User implementations should inherit this class and
    implement the :func:`__init__ <BaseCodec.__init__>`, :func:`encode <BaseCodec.encode>` and :func:`decode <BaseCodec.decode>`
    methods with the type signatures shown.

    naz calls an implementation of this class to encode/decode messages.
    """

    @abc.abstractmethod
    def __init__(self, encoding: str, errors: str) -> None:
        """
        Parameters:
            encoding: `encoding <https://docs.python.org/3/library/codecs.html#standard-encodings>`_ used to encode messages been sent to SMSC
                      The encoding should be one of the encodings recognised by the SMPP specification. See section 5.2.19 of SMPP spec
                      eg gsm0338, ucs2 etc
            errors:	same meaning as the errors argument to pythons' `encode <https://docs.python.org/3/library/codecs.html#codecs.encode>`_ method
        """
        self.encoding = encoding
        self.errors = errors

    @abc.abstractmethod
    def encode(self, input: str) -> bytes:
        """
        return an encoded version of the string as a bytes object

        Parameters:
            input: the string to encode
        """
        raise NotImplementedError("encode method must be implemented.")

    @abc.abstractmethod
    def decode(self, input: bytes) -> str:
        """
        return a string decoded from the given bytes.

        Parameters:
            input: the bytes to decode
        """
        raise NotImplementedError("decode method must be implemented.")

    @abc.abstractmethod
    def to_json(self) -> str:
        """
        Serializes the Codec to json.
        """
        raise NotImplementedError("to_json method must be implemented.")


class SimpleCodec(BaseCodec):
    """
    This is an implementation of `BaseCodec`

    SMPP uses a 7-bit GSM character set. This class implements that encoding/decoding scheme.
    This class can also be used with the usual `python standard encodings <https://docs.python.org/3/library/codecs.html#standard-encodings>`_

    example usage:

    .. highlight:: python
    .. code-block:: python

       ncodec = SimpleCodec(encoding="ucs2")

       ncodec.encode("Zoë")
       ncodec.decode(b'Zo\xc3\xab')
    """

    custom_codecs = {"gsm0338": GSM7BitCodec(), "ucs2": UCS2Codec()}

    def __init__(self, encoding: str = "gsm0338", errors: str = "strict") -> None:
        """
        Parameters:
            encoding: `encoding <https://docs.python.org/3/library/codecs.html#standard-encodings>`_ used to encode messages been sent to SMSC
                      The encoding should be one of the encodings recognised by the SMPP specification. See section 5.2.19 of SMPP spec
            errors:	same meaning as the errors argument to pythons' `encode <https://docs.python.org/3/library/codecs.html#codecs.encode>`_ method
        """
        if not isinstance(encoding, str):
            raise ValueError(
                "`encoding` should be of type:: `str` You entered: {0}".format(type(encoding))
            )
        if not isinstance(errors, str):
            raise ValueError(
                "`errors` should be of type:: `str` You entered: {0}".format(type(errors))
            )
        self.encoding = encoding
        self.errors = errors
        self.data_coding = state.SmppDataCoding._find_data_coding(self.encoding)

    def encode(self, input: str) -> bytes:
        if not isinstance(input, str):
            raise NazCodecException("Only strings accepted for encoding.")
        encoding = self.encoding or sys.getdefaultencoding()
        if encoding in self.custom_codecs:
            encoder = self.custom_codecs[encoding].encode
        else:
            encoder = codecs.getencoder(encoding)

        obj, _ = encoder(input, self.errors)
        return obj

    def decode(self, input: bytes) -> str:
        if not isinstance(input, (bytes, bytearray)):
            raise NazCodecException("Only bytestrings accepted for decoding.")
        encoding = self.encoding or sys.getdefaultencoding()
        if encoding in self.custom_codecs:
            decoder = self.custom_codecs[encoding].decode
        else:
            decoder = codecs.getdecoder(encoding)

        obj, _ = decoder(input, self.errors)
        return obj

    # TODO: add this method to base interface
    # TODO: check if python has protocol methods for json(akin to Golang's marshalJson interface methods)
    def to_json(self) -> str:
        """
        # TODO: add documentation
        """
        import json

        _item = dict(encoding=self.encoding, errors=self.errors)
        return json.dumps(_item)