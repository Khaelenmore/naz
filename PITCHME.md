pip install -U jupyter jupyterlab      
jupyter lab -y 
jupyter nbconvert pres.ipynb --to slides --post serve --SlidesExporter.reveal_theme=serif --SlidesExporter.reveal_scroll=True --SlidesExporter.reveal_transition=none    

---

#### topics                   
1. SMPP spec intro               
2. SMPP & python intro        
3. current lay of the land                  
4. naz intro                                       
5. naz features                    
6. then what?         

---
#### 1. SMPP spec intro                 
The SMPP protocol is designed for transfer of short messages between a Message Center(SMSC/USSD server etc) & an SMS app system.                
It's ased on exchange of request/response protocol data units(PDUs) between the client and the server over a TCP/IP network.                

---
#### 1.1 sequence of requests
![Image of sequence](docs/sequence.png)
                             
---
#### 1.2 PDU format
![Image of pdu format](docs/pdu_format.png)

---
#### 2. SMPP & python intro         
```python
import socket, struct

# 1. network connect
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.settimeout(5)
sock.connect(('127.0.0.1', 2775))

# 2. create PDU
body = b""
command_length = 16 + len(body)  # 16 is for headers
command_id = 21 # enquire_link PDU
command_status = 0
sequence_number = 1
header = struct.pack(
    ">IIII", command_length, command_id, command_status, sequence_number
)

# send PDU
full_pdu = header + body
sock.send(full_pdu)
```          

---
#### 3. current lay of the land               
- github.com/podshumok/python-smpplib               
- github.com/praekelt/vumi                    
- ... couple more          

---
#### 3.1 problems with current solutions           
    - complexity of code base    
    - coupling with other things(rabbitMQ, redis, Twisted)      
    - non-granular configurability         
      - (PR #352 you can only set `throttle_delay: X seconds` )
    - maintenance debt:
      - (PR #342 disable vumi sentry integration; vumi outdated raven dependancies)
      - cant migrate transport to py3(because vumi is py2)
    - lack of visibility      
      - (PR #335 and PR #327 enrich queue to vumi logging). 
      - PR #336, PR #339


---
#### 4. naz intro                     



#### 4.1 architecture              
#### 4.2 usage                    

---
#### 5. naz features        
#### 5.1 async          
#### 5.2 observability         
5.2.1 logging               
5.2.2 hooks         
5.3 Rate limiting             
5.4 Throttle handling              
5.5 Queuing          

---
#### 6. then what?         


vumi smpp config:     
https://github.com/praekelt/vumi/blob/master/vumi/transports/smpp/config.py