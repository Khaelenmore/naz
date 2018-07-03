import time
import logging


class BaseThrottleHandler:
    """
    Interface that must be implemented to satisfy naz's throttle handling.
    User implementations should subclassing this class and
    implement the allow_request, not_throttled and throttled methods with the type signatures shown.
    """

    async def throttled(self) -> None:
        """
        this method will be called by naz everytime we get a throttling(ESME_RTHROTTLED) response from SMSC
        """
        raise NotImplementedError("throttled method must be implemented.")

    async def not_throttled(self) -> None:
        """
        this method will be called by naz everytime we get any response from SMSC that is not a throttling response.
        """
        raise NotImplementedError("not_throttled method must be implemented.")

    async def allow_request(self) -> bool:
        """
        this method will be called by naz just before sending a request to SMSC.
        The response from this method will determine wether naz will send the request or not.
        """
        raise NotImplementedError("allow_request method must be implemented.")


class SimpleThrottleHandler(BaseThrottleHandler):
    def __init__(
        self,
        logger: logging.Logger,
        sampling_period: float = 180,
        sample_size: float = 50,
        deny_request_at: float = 1,
    ) -> None:
        """
        :param sampling_period:                  (optional) [float]
            the duration in seconds over which we will calculate the percentage of throttled responses.
        :param sample_size:                  (optional) [int]
            the minimum number of responses we should have got from SMSC over :sampling_period duration to enable us make a decision.
        :param deny_request_at:                  (optional) [float]
            the percent of throtlled responses above which we will deny naz from sending more requests to SMSC.

        usage:
            throttle_handeler = SimpleThrottleHandler(sampling_period=180, sample_size=45, deny_request_at=1.2)
                this will calculate the percentage of throttles we are getting from SMSC.
                If the percentage of throttles goes above 1.2% over a period of 180 seconds and the total number of responses from
                SMSC is greater than 45, then deny making more requests to SMSC, ELSE allow requests to SMSC to continue
        """
        self.NON_throttle_responses: int = 0
        self.throttle_responses: int = 0
        self.updated_at: float = time.monotonic()

        self.logger = logger
        self.sampling_period: float = sampling_period
        self.sample_size: float = sample_size
        self.deny_request_at: float = deny_request_at

    @property
    def percent_throttles(self) -> float:
        total_smsc_responses: int = self.NON_throttle_responses + self.throttle_responses
        if total_smsc_responses < self.sample_size:
            # we do not have enough data to make decision, so asssume happy case
            return 0.0
        return round((self.throttle_responses / (total_smsc_responses)) * 100, 2)

    async def allow_request(self) -> bool:
        # calculat percentage of throttles before resetting NON_throttle_responses and throttle_responses
        current_percent_throttles: float = self.percent_throttles
        _throttle_responses: int = self.throttle_responses
        _NON_throttle_responses: int = self.NON_throttle_responses

        now: float = time.monotonic()
        time_since_update: float = now - self.updated_at
        if time_since_update > self.sampling_period:
            # we are only interested in percent throttles in buckets of self.sampling_period seconds.
            # so reset values after self.sampling_period seconds.
            self.NON_throttle_responses = 0
            self.throttle_responses = 0
            self.updated_at = now
        if current_percent_throttles > self.deny_request_at:
            self.logger.info(
                """deny_request. percent_throttles={0}.
                throttle_responses={1}.
                NON_throttle_responses={2}.
                sampling_period={3}.
                sample_size={4}.
                deny_request_at={5}%""".format(
                    current_percent_throttles,
                    _throttle_responses,
                    _NON_throttle_responses,
                    self.sampling_period,
                    self.sample_size,
                    self.deny_request_at,
                )
            )
            return False
        self.logger.info(
            """allow_request. percent_throttles={0}.
            throttle_responses={1}.
            NON_throttle_responses={2}.
            sampling_period={3}.
            sample_size={4}.
            deny_request_at={5}%""".format(
                current_percent_throttles,
                _throttle_responses,
                _NON_throttle_responses,
                self.sampling_period,
                self.sample_size,
                self.deny_request_at,
            )
        )
        return True

    async def not_throttled(self) -> None:
        self.NON_throttle_responses += 1

    async def throttled(self) -> None:
        self.throttle_responses += 1