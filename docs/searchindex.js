Search.setIndex({docnames:["client","correlater","example_demo","hooks","index","introduction","logger","nazcodec","queue","ratelimiter","sequence","state","throttle"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["client.rst","correlater.rst","example_demo.rst","hooks.rst","index.rst","introduction.rst","logger.rst","nazcodec.rst","queue.rst","ratelimiter.rst","sequence.rst","state.rst","throttle.rst"],objects:{"naz.client":{Client:[0,1,1,""],NazClientError:[0,3,1,""]},"naz.client.Client":{__init__:[0,2,1,""],command_handlers:[0,2,1,""],connect:[0,2,1,""],deliver_sm_resp:[0,2,1,""],dequeue_messages:[0,2,1,""],enquire_link:[0,2,1,""],enquire_link_resp:[0,2,1,""],re_establish_conn_bind:[0,2,1,""],receive_data:[0,2,1,""],send_data:[0,2,1,""],shutdown:[0,2,1,""],submit_sm:[0,2,1,""],tranceiver_bind:[0,2,1,""],unbind:[0,2,1,""],unbind_resp:[0,2,1,""]},"naz.correlater":{BaseCorrelater:[1,1,1,""],SimpleCorrelater:[1,1,1,""]},"naz.correlater.BaseCorrelater":{get:[1,2,1,""],put:[1,2,1,""]},"naz.correlater.SimpleCorrelater":{__init__:[1,2,1,""],delete_after_ttl:[1,2,1,""],get:[1,2,1,""],put:[1,2,1,""]},"naz.hooks":{BaseHook:[3,1,1,""],SimpleHook:[3,1,1,""]},"naz.hooks.BaseHook":{request:[3,2,1,""],response:[3,2,1,""]},"naz.hooks.SimpleHook":{__init__:[3,2,1,""],request:[3,2,1,""],response:[3,2,1,""]},"naz.logger":{BaseLogger:[6,1,1,""],SimpleLogger:[6,1,1,""]},"naz.logger.BaseLogger":{bind:[6,2,1,""],log:[6,2,1,""]},"naz.logger.SimpleLogger":{__init__:[6,2,1,""],bind:[6,2,1,""],log:[6,2,1,""]},"naz.nazcodec":{BaseNazCodec:[7,1,1,""],SimpleNazCodec:[7,1,1,""]},"naz.nazcodec.BaseNazCodec":{decode:[7,2,1,""],encode:[7,2,1,""]},"naz.nazcodec.SimpleNazCodec":{decode:[7,2,1,""],encode:[7,2,1,""]},"naz.q":{BaseOutboundQueue:[8,1,1,""],SimpleOutboundQueue:[8,1,1,""]},"naz.q.BaseOutboundQueue":{dequeue:[8,2,1,""],enqueue:[8,2,1,""]},"naz.q.SimpleOutboundQueue":{__init__:[8,2,1,""],dequeue:[8,2,1,""],enqueue:[8,2,1,""]},"naz.ratelimiter":{BaseRateLimiter:[9,1,1,""],SimpleRateLimiter:[9,1,1,""]},"naz.ratelimiter.BaseRateLimiter":{limit:[9,2,1,""]},"naz.ratelimiter.SimpleRateLimiter":{__init__:[9,2,1,""],limit:[9,2,1,""]},"naz.sequence":{BaseSequenceGenerator:[10,1,1,""],SimpleSequenceGenerator:[10,1,1,""]},"naz.sequence.BaseSequenceGenerator":{next_sequence:[10,2,1,""]},"naz.sequence.SimpleSequenceGenerator":{__init__:[10,2,1,""],next_sequence:[10,2,1,""]},"naz.state":{CommandStatus:[11,1,1,""],DataCoding:[11,1,1,""],SmppCommand:[11,1,1,""],SmppCommandStatus:[11,1,1,""],SmppDataCoding:[11,1,1,""],SmppOptionalTag:[11,1,1,""],SmppSessionState:[11,1,1,""]},"naz.state.CommandStatus":{code:[11,2,1,""],description:[11,2,1,""],value:[11,2,1,""]},"naz.state.DataCoding":{code:[11,2,1,""],description:[11,2,1,""],value:[11,2,1,""]},"naz.throttle":{BaseThrottleHandler:[12,1,1,""],SimpleThrottleHandler:[12,1,1,""]},"naz.throttle.BaseThrottleHandler":{allow_request:[12,2,1,""],not_throttled:[12,2,1,""],throttle_delay:[12,2,1,""],throttled:[12,2,1,""]},"naz.throttle.SimpleThrottleHandler":{__init__:[12,2,1,""],allow_request:[12,2,1,""],not_throttled:[12,2,1,""],throttle_delay:[12,2,1,""],throttled:[12,2,1,""]},naz:{client:[0,0,0,"-"],correlater:[1,0,0,"-"],hooks:[3,0,0,"-"],logger:[6,0,0,"-"],nazcodec:[7,0,0,"-"],q:[8,0,0,"-"],ratelimiter:[9,0,0,"-"],sequence:[10,0,0,"-"],state:[11,0,0,"-"],throttle:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception"},terms:{"0r5nd6bsd3g4atwux":2,"16be":7,"20min":5,"2billion":1,"7wjf935mqgsjplq7e":2,"\u03c3cmt":2,"\u30c4":5,"abstract":[1,3,6,7,8,9,10,12],"byte":[0,7],"class":[0,1,2,3,5,6,7,8,9,10,11,12],"default":5,"final":5,"float":[0,1,9,12],"function":0,"h\u00fclk":7,"import":[0,2,5,9,12],"int":[0,1,6,8,10],"long":[2,5,12],"return":[0,1,2,3,5,6,7,8,9,10,12],"short":[0,5],"true":2,"try":5,"while":[0,2],"zo\u00e3":7,"zo\u00eb":7,AND:12,AWS:2,And:[2,5],But:2,For:[2,5],One:1,REs:5,SMS:0,SQS:2,That:[0,5],The:[0,1,2,5,6,8,10,12],With:2,__init__:[0,1,2,3,5,6,8,9,10,12],_get_redi:2,_redi:2,abc:[1,3,6,7,8,9,10,12],abil:5,abl:2,about:5,abov:[5,12],accept:2,acct:0,accur:[3,10],acknowledg:0,activ:[0,5],addhandl:5,addit:0,addr_npi:0,addr_ton:0,address:[0,2],address_rang:0,after:[0,1,3,5,12],again:12,agnost:2,aioredi:2,algorithm:[5,9],alia:11,all:[0,1,2,5,6],allow:[5,9,10],allow_request:12,alpin:2,also:[0,1,2,5,7,12],among:1,ani:[0,1,2,3,5,6,8,12],annot:5,anoth:[1,2,5],anymor:12,anyth:5,api:5,app:[2,4],applic:[0,1,2,3,5],argument:[0,2],around:[1,10],arrang:0,artist:5,associ:0,async:[0,1,2,3,8,9,12],asynchron:0,asyncio:[0,2,5],authent:0,auto:1,avail:2,await:[2,5,9],awesom:2,awesomestor:2,b526gdnxfbf8sqlzz:2,backward:5,band:5,base:[0,1,3,6,7,8,9,10,11,12],basecorrelat:[0,1],basehook:[0,3,5],baselogg:[0,5,6],basenazcodec:[0,7],baseoutboundqueu:[0,2,5,8],baseratelimit:[0,5,9],basesequencegener:[0,10],basethrottlehandl:[0,5,12],basi:1,been:[0,2,6],befor:[0,2,3,5,12],benchmark:4,best:1,between:[0,1,5],bind:[0,5,6],bind_receiv:0,bind_transceiv:0,bit:7,blah:[],block:0,bodi:0,body_data:0,bool:[0,12],both:2,bring:5,broker:2,brpop:2,bucket:[5,9],buffer:0,bug:4,busi:2,byte_str:7,cach:[],calcul:12,call:[0,1,2,3,5,6,7,8,12],can:[0,2,5,6,7,8,9,11],canari:5,center:5,chang:[2,5],charact:7,check:[0,5],choic:[2,5],choos:6,cleanli:0,cli:[2,4],client:[2,5,6,9,12],client_id:[0,2,5],close:5,cmt:0,code:[0,2,11],codec:7,codec_class:0,codec_errors_level:0,com:6,come:1,command:[1,2,3,11],command_handl:[0,2],command_statu:2,command_status_valu:0,commandlin:5,commandstatu:[3,11],commit:5,commun:2,compos:5,condit:12,config:5,confirm:2,conn:5,connect:[0,2,5],connection_lost:2,consult:[2,5],consum:5,contain:[2,5],content:5,continu:[0,5],control:[0,5,9],correl:[1,3,10],correlat:4,correlatinid:5,correlation_handl:0,counter:5,creat:[2,5],create_redis_pool:2,cthank:2,current:[2,5],cursor:5,custom:[2,5,9],customer_id:6,data:[0,5,11],databas:5,datacod:11,debug:[5,6],decid:[5,12],decis:12,declar:0,decod:[0,2,7],def:[2,5],defin:[0,7],delet:1,delete_after_ttl:1,deliv:5,deliver_sm:[1,5],deliver_sm_resp:0,deliveri:[0,1,5],demo:[4,5,8],demo_naz:2,deni:[5,12],deny_request_at:[5,12],depend:5,dequed_item:2,dequeu:[0,2,5,8],dequeue_messag:[0,2,5],deriv:5,descript:[5,11],design:[0,5],dest_addr_npi:0,dest_addr_ton:0,destin:0,destination_addr:[0,2,5],determin:12,develop:[2,5,6],dict:[0,6,8],dictionari:[1,5],differ:[0,1,3],directori:[2,5],doc:5,docker:[2,5],document:[2,5],doe:[0,5,9,12],domain:0,done:[1,2],dot:2,down:0,drain_dur:0,dry:2,dump:2,durat:[0,12],each:5,effort:1,els:2,emoji:5,empti:2,enabl:[6,12],encod:[0,7,11],encoding1:0,end:2,enqueu:[0,2,5,8],enquire_link:[0,5],enquire_link_interv:0,enquire_link_resp:0,entiti:5,environ:5,error:[0,5,7],esm:[0,5],esm_class:0,esme_rmsgq:12,esme_rthrottl:5,etc:[2,7],even:5,event:[2,5,6],everytim:[6,12],everywher:4,exampl:[0,4,5,6,7,9],example_config:5,examplequeu:5,exce:12,except:[0,5],execut:[2,5],exist:0,exit:2,expect:2,expir:1,extern:5,fals:[0,2,12],featur:[1,4],field:[0,11],file:[2,5],flag:0,flow:0,follow:5,forc:2,format:[2,5],formatt:5,found:5,from:[0,1,2,3,5,7,12],full:12,gatewai:[0,5],gather:[0,5],gener:[0,5,10],get:[0,1,2,5,12],get_event_loop:[0,2,5],getenv:0,getlogg:5,github:[],give:[2,5],given:[1,7],goe:12,going:[1,2],good:5,googl:6,got:12,greater:[5,12],gsm0338:[0,7],gsm:7,guarante:1,had:[1,2,3],hand:0,handl:[2,4,12],handler:[0,5,12],happen:5,happili:2,has:5,have:[2,5,12],hello:5,help:[2,3,10],here:[0,5],highlight:[],hip:5,hold:5,hook:[0,2,4],hook_metadata1:1,hook_metadata2:1,hook_metadata:[0,1,3,5],hop:5,host:[0,2,5],how:[2,5,12],howev:[1,2],html:[],http:[5,6],ident:0,identifi:[0,1],ignor:7,implement:[0,1,2,3,5,6,7,8,9,10,12],implemet:0,implemnet:2,impos:12,inc:5,includ:[0,2,6],incompat:5,increas:10,increment:5,indic:0,info:[0,6],inform:5,inherit:[1,3,6,7,8,9,10,12],init:5,initi:[3,10],inject:5,input:7,instal:[2,4],instanc:[0,2],instanci:[],instantait:2,instanti:[0,2,6],integ:10,integr:4,interact:0,interfac:[1,2,3,5,6,7,8,9,10,12],interface_vers:0,introduct:4,issu:5,item:[0,1,2,5,8],iter:1,its:[0,2],itself:[6,12],join:5,json:[2,5],just:[0,3,5,12],kafka:2,keep:5,kei:[1,5],kenyan:5,klqk248jsk8:2,komuw:2,kvlog:5,kvlogger:5,last:12,later:[0,5],learn:2,let:[2,5,9],level:[0,5,6],leverag:5,librari:4,like:[0,1,5],limit:[0,2,4,9,12],line:2,list:0,listen:[0,2],load:[2,5,12],localhost:2,log:[0,2,3,4,6],log_data:[5,6],log_handl:[0,3,5,9,12],log_id1:1,log_id2:1,log_id:[0,1,2,3,5],log_metadata:[0,5,6],logger:[4,5],logger_nam:6,logic:2,loglevel:[0,5,6],look:[1,2,5],loop:[0,2,5],lost:0,lot:2,lpush:2,mai:[1,3,5,9,12],main:2,make:[0,2,5,12],mandat:1,mandatori:5,manner:5,max_ttl:1,maximum:[8,9,10],maxsiz:[0,2,5,8],mean:0,mechan:[0,5],memori:[1,8],messag:[0,1,2,3,5,6,7,9,12],metadata:[0,6],method:[0,1,3,5,6,7,8,9,10,12],metric:5,minimum:12,minsiz:2,mkdir:2,mode:0,monitor:4,monoton:10,more:[2,5,12],msg:[0,2],msisdn:0,much:2,must:[1,3,6,7,8,9,10,12],my_app:5,my_client:2,my_config:5,my_naz_cli:[2,5],my_queu:[2,5],my_request:5,my_respons:5,myfil:5,myhook:5,myid12345:5,mykvlogg:5,mylimit:5,mylogg:6,myprometheushook:5,myredisqueu:2,mysmsdb:5,name:[0,5,6],naz:[0,1,3,6,7,8,9,10,11,12],naz_benchmarks_queu:2,nazclienterror:0,nazcodec:4,nazizi:5,ncodec:7,need:[2,5],network:0,next:2,next_sequ:10,none:[0,1,2,3,6,8,9,10,12],not_throttl:12,note:[1,8],notif:[1,5],notifi:6,now:2,npi:0,number:[0,1,5,8,11,12],object:[0,5,7,11],observ:4,occur:5,ofcours:5,off:2,okai:2,older:1,omit:1,onc:2,one:[1,2,3],onli:[2,5,8],option:[1,2,11],order:2,origin:0,other:[1,2,5],ought:10,our:2,out:[0,2,5],outbound:8,outboundqueu:[0,2,5],outgo:5,over:[0,1,5,12],own:[2,5],paramet:[0,1,3,5,6,7,8,9,11,12],parti:5,particular:[1,2,12],pass:[0,2,5],password:[0,2,5],path:2,pdu:0,per:[5,6],percent:12,percentag:[5,12],period:[0,5],pid:2,pip:[2,5],place:[2,5],plan:0,port:[0,2],possibl:2,predefin:0,previous:[1,3],print:5,prioriti:0,priority_flag:0,prod:2,product:5,prometheu:5,prometheus_cli:5,properti:11,protocol:[0,5],protocol_id:0,purchas:2,purpos:[5,8],put:[1,8],put_nowait:5,python3:5,python:[0,1,2,5,7],python_path:2,queu:[0,4],queue:[0,2,4,5,12],queue_nam:2,rabbitmq:[2,5],rais:0,rang:[0,5,10],rate:[0,2,4,9,12],ratelimit:[0,4,5],re_establish_conn_bind:0,reach:10,read:[0,5],reader:5,readi:2,real:2,reason:[1,5,12],rebind:0,receipt:0,receipted_message_id:1,receiv:[0,3],receive_data:[0,2,5],recipi:0,reconnect:0,record:5,redi:[2,5],registered_deliveri:0,regul:12,relat:[0,1,2],releas:5,reliabl:1,render:[5,6],replac:[0,2],replace_if_present_flag:0,repli:[5,12],repo:5,represenst:11,request:[0,3,5,9,10,12],requir:[0,5],respect:0,respond:12,respons:[0,2,3,5,10,12],round:5,rout:[0,5],run:[0,2,5],run_forev:5,run_until_complet:[0,2,5],sai:5,said:0,same:[0,7],sample_s:[5,12],sampling_period:[5,12],san:5,satisfi:[1,2,3,5,6,7,8,9,10,12],save:8,schedul:0,schedule_delivery_tim:0,scheme:7,sdk:5,second:[0,1,5,9,12],see:[2,3,10],self:[1,2,3,5,10,12],send:[0,2,5,9,12],send_data:[0,2],send_messag:2,send_messsag:9,send_rat:[5,9],send_request:2,sender:0,sens:5,sent:[0,2,3],sentri:5,sentry_sdk:5,sequenc:[0,1,4],sequence_gener:0,sequence_numb:[0,1,10],sequence_number1:1,serv:0,server:[0,2,5,9],servic:[0,5],service_typ:0,session:[0,11],set:[2,5,7],setformatt:5,setlevel:5,setmessagestatehook:5,setup:5,ship:[2,5],shoe:2,short_messag:[0,2,5],should:[0,1,2,3,5,6,7,8,9,10,12],show:[2,5],shown:[1,3,6,7,8,9,10,12],shutdown:0,signal:0,signatur:[1,3,6,7,8,9,10,12],signifi:0,simpl:[1,5],simplecorrelat:1,simplehook:[3,5],simplelogg:6,simplenazcodec:7,simpleoutboundqueu:[0,5,8],simpleratelimit:[5,9],simplesequencegener:10,simplethrottlehandl:[5,12],simul:[2,5],singl:0,size:8,sleep:2,sm_default_msg_id:0,sme:0,smpp:[0,1,2,5,7,10,11,12],smpp_command:[0,1,2,3,5],smpp_server:2,smppclient1:[0,2,5],smppcommand:[5,11],smppcommandstatu:11,smppdatacod:11,smppoptionaltag:11,smppsessionst:11,smsc:[0,1,2,3,5,9,12],smsc_host:[0,2,5],smsc_message_id1:1,smsc_message_id:1,smsc_port:[0,2,5],smsc_respons:[3,5],smstabl:5,socket:0,socket_timeout:0,softwar:2,some:0,someth:6,sometim:5,sourc:[0,1,3,6,7,8,9,10,11,12],source_addr:[0,2,5],source_addr_npi:0,source_addr_ton:0,specif:[0,10],specifi:[1,5,9],sql:5,sqlite3:5,stage:2,standard:7,standardconnectionhandl:2,start:[0,2,5,12],state:[0,2,3,4,5],statehook:5,statement:[0,6],statu:[0,5,11,12],status:11,stop:5,storag:1,store:[0,1,2],stored_at:1,str:[0,1,3,5,6,7],stream:[],streamhandl:5,streamread:0,streamwrit:0,strict:0,string:[0,1,3,5,7],string_to_encod:7,structur:6,style:5,submit:[0,2],submit_sm:[0,1,2,3,5],submit_sm_resp:[1,2,3],success:2,suppli:[1,3,5,6],support:[0,5],suppos:5,surpass:5,system:0,system_id:[0,2,5],system_typ:0,tabl:5,tag:[1,11],take:[2,5],talk:[2,5],task:[0,5],termin:[0,5],test:[0,5,8],than:[1,5,12],thank:2,thei:[2,6],them:0,thi:[0,1,2,3,5,6,7,8,9,10,12],thing:2,third:5,those:5,throparserttl:0,throtll:[5,12],throttl:[0,2,4],throttle_delai:12,throttle_handl:[0,5],throttle_wait:12,throttler:5,through:[0,2],thu:[5,12],time:[0,1,12],timeout:2,timestamp:2,tmp:[2,5],todo:0,token:[5,9],total:[5,12],track:[1,2,3],tracker:4,tracking_cod:2,tranceiv:[0,5],tranceiver_bind:[0,5],transceiv:0,transfer:5,tupl:[0,1,11],two:5,type:[0,1,3,6,7,8,9,10,12],typic:2,unbind:[0,5],unbind_resp:0,under:[5,12],union:[0,1,6],uniqu:[0,1,6],updat:5,upto:5,url:6,usag:[2,4,6,7,9],use:[1,2,5],used:[0,2,5,7,8],user:[0,1,3,6,7,8,9,10,12],uses:[0,1,5,7],using:[0,1,4,5,9],usual:[5,7],utf8:7,utf:7,valid:0,validity_period:0,valu:[1,5,11],variou:[0,2,11],version:[0,2,5,7],via:[0,5,12],wai:[2,5,6,12],wait:[0,2,12],want:[1,2,3,5,6],watch:5,web_request:6,wether:12,what:[0,2,5],whatev:[5,12],when:[0,2,3,5,6,10,12],whenev:[5,6],where:[2,5],wherea:2,whether:[0,2],which:[0,2,5,9,10,11,12],who:2,wikipedia:5,wire:0,work:[5,12],world:5,would:[0,5],wrap:[1,10],write:[0,5],writer:5,www:6,you:[0,2,5,9],your:[2,5],your_sentry_project_id:5,your_sentry_public_kei:5},titles:["Client","correlater","Example demo of using naz","hooks","naz - naz is an async SMPP client.","Introduction to naz","logger","nazcodec","queue","ratelimiter","sequence","state","throttle"],titleterms:{api:4,app:5,async:[4,5],benchmark:5,bug:5,cli:5,client:[0,4],content:4,correlat:1,demo:2,everywher:5,exampl:2,featur:5,handl:5,hook:[3,5],instal:5,integr:5,introduct:5,librari:5,limit:5,log:5,logger:6,monitor:5,naz:[2,4,5],nazcodec:7,observ:5,queu:5,queue:8,rate:5,ratelimit:9,refer:4,sequenc:10,smpp:4,state:11,throttl:[5,12],tracker:5,usag:5,using:2}})