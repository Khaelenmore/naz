Search.setIndex({docnames:["broker","client","codec","correlater","hooks","index","introduction","log","protocol","ratelimiter","sequence","state","step_by_step_demo","throttle"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["broker.rst","client.rst","codec.rst","correlater.rst","hooks.rst","index.rst","introduction.rst","log.rst","protocol.rst","ratelimiter.rst","sequence.rst","state.rst","step_by_step_demo.rst","throttle.rst"],objects:{"naz.broker":{BaseBroker:[0,1,1,""],SimpleBroker:[0,1,1,""]},"naz.broker.BaseBroker":{dequeue:[0,2,1,""],enqueue:[0,2,1,""]},"naz.broker.SimpleBroker":{__init__:[0,2,1,""],dequeue:[0,2,1,""],enqueue:[0,2,1,""]},"naz.client":{Client:[1,1,1,""],NazClientError:[1,3,1,""]},"naz.client.Client":{__init__:[1,2,1,""],command_handlers:[1,2,1,""],connect:[1,2,1,""],deliver_sm_resp:[1,2,1,""],dequeue_messages:[1,2,1,""],enquire_link:[1,2,1,""],enquire_link_resp:[1,2,1,""],re_establish_conn_bind:[1,2,1,""],receive_data:[1,2,1,""],send_data:[1,2,1,""],send_message:[1,2,1,""],shutdown:[1,2,1,""],tranceiver_bind:[1,2,1,""],unbind:[1,2,1,""],unbind_resp:[1,2,1,""]},"naz.codec":{BaseCodec:[2,1,1,""],SimpleCodec:[2,1,1,""]},"naz.codec.BaseCodec":{__init__:[2,2,1,""],decode:[2,2,1,""],encode:[2,2,1,""]},"naz.codec.SimpleCodec":{__init__:[2,2,1,""],decode:[2,2,1,""],encode:[2,2,1,""]},"naz.correlater":{BaseCorrelater:[3,1,1,""],SimpleCorrelater:[3,1,1,""]},"naz.correlater.BaseCorrelater":{get:[3,2,1,""],put:[3,2,1,""]},"naz.correlater.SimpleCorrelater":{__init__:[3,2,1,""],get:[3,2,1,""],put:[3,2,1,""]},"naz.hooks":{BaseHook:[4,1,1,""],SimpleHook:[4,1,1,""]},"naz.hooks.BaseHook":{from_smsc:[4,2,1,""],to_smsc:[4,2,1,""]},"naz.hooks.SimpleHook":{__init__:[4,2,1,""],from_smsc:[4,2,1,""],to_smsc:[4,2,1,""]},"naz.log":{BreachHandler:[7,1,1,""],SimpleLogger:[7,1,1,""]},"naz.log.BreachHandler":{__init__:[7,2,1,""],emit:[7,2,1,""],shouldFlush:[7,2,1,""]},"naz.log.SimpleLogger":{__init__:[7,2,1,""],log:[7,2,1,""]},"naz.protocol":{DeliverSmResp:[8,1,1,""],EnquireLinkResp:[8,1,1,""],Message:[8,1,1,""],NAZ_MESSAGE_PROTOCOL_VERSION:[8,4,1,""],SubmitSM:[8,1,1,""],json_to_Message:[8,5,1,""]},"naz.protocol.DeliverSmResp":{__init__:[8,2,1,""],from_json:[8,2,1,""],to_json:[8,2,1,""]},"naz.protocol.EnquireLinkResp":{__init__:[8,2,1,""],from_json:[8,2,1,""],to_json:[8,2,1,""]},"naz.protocol.Message":{__init__:[8,2,1,""],from_json:[8,2,1,""],to_json:[8,2,1,""]},"naz.protocol.SubmitSM":{__init__:[8,2,1,""],from_json:[8,2,1,""],to_json:[8,2,1,""]},"naz.ratelimiter":{BaseRateLimiter:[9,1,1,""],SimpleRateLimiter:[9,1,1,""]},"naz.ratelimiter.BaseRateLimiter":{limit:[9,2,1,""]},"naz.ratelimiter.SimpleRateLimiter":{__init__:[9,2,1,""],limit:[9,2,1,""]},"naz.sequence":{BaseSequenceGenerator:[10,1,1,""],SimpleSequenceGenerator:[10,1,1,""]},"naz.sequence.BaseSequenceGenerator":{next_sequence:[10,2,1,""]},"naz.sequence.SimpleSequenceGenerator":{__init__:[10,2,1,""],next_sequence:[10,2,1,""]},"naz.state":{CommandStatus:[11,1,1,""],DataCoding:[11,1,1,""],SmppCommand:[11,1,1,""],SmppCommandStatus:[11,1,1,""],SmppDataCoding:[11,1,1,""],SmppOptionalTag:[11,1,1,""],SmppSessionState:[11,1,1,""]},"naz.state.CommandStatus":{code:[11,6,1,""],description:[11,6,1,""],value:[11,6,1,""]},"naz.state.DataCoding":{code:[11,6,1,""],description:[11,6,1,""],value:[11,6,1,""]},"naz.throttle":{BaseThrottleHandler:[13,1,1,""],SimpleThrottleHandler:[13,1,1,""]},"naz.throttle.BaseThrottleHandler":{allow_request:[13,2,1,""],not_throttled:[13,2,1,""],throttle_delay:[13,2,1,""],throttled:[13,2,1,""]},"naz.throttle.SimpleThrottleHandler":{__init__:[13,2,1,""],allow_request:[13,2,1,""],not_throttled:[13,2,1,""],throttle_delay:[13,2,1,""],throttled:[13,2,1,""]},naz:{broker:[0,0,0,"-"],client:[1,0,0,"-"],codec:[2,0,0,"-"],correlater:[3,0,0,"-"],hooks:[4,0,0,"-"],log:[7,0,0,"-"],protocol:[8,0,0,"-"],ratelimiter:[9,0,0,"-"],sequence:[10,0,0,"-"],state:[11,0,0,"-"],throttle:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","data","Python data"],"5":["py","function","Python function"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:data","5":"py:function","6":"py:attribute"},terms:{"0r5nd6bsd3g4atwux":12,"20min":6,"2billion":3,"7wjf935mqgsjplq7e":12,"\u03c3cmt":12,"\u30c4":6,"abstract":[0,2,3,4,8,9,10,13],"byte":[1,2,4],"class":[0,1,2,3,4,6,7,8,9,10,11,12,13],"default":[6,7],"final":6,"float":[1,3,7,9,13],"function":[0,1,8],"import":[1,6,7,8,9,12,13],"int":[0,1,3,7,8,10],"long":[6,12,13],"return":[0,1,2,3,4,6,7,8,9,10,12,13],"short":[6,8],"static":8,"super":6,"true":[7,12],"try":6,"while":[1,12],"zo\u00e3":2,"zo\u00eb":2,AND:13,AWS:12,And:[6,12],But:12,For:[6,12],Has:1,One:3,REs:6,SMS:8,SQS:12,That:[1,6],The:[0,1,2,3,6,8,10,12,13],Use:[],With:12,__init__:[0,1,2,3,4,6,7,8,9,10,12,13],_get_redi:12,_handler:7,_parse_response_pdu:1,_process_msg:6,_redi:12,abc:[0,2,3,4,8,9,10,13],abil:6,abl:[0,8,12],about:6,abov:[6,13],accept:12,acct:1,accur:[4,10],acknowledg:8,activ:[1,6],add:8,addhandl:[6,7],addit:1,addr_npi:1,addr_ton:1,address:[1,12],address_rang:1,after:[1,3,4,6,13],again:13,agnost:12,aha:7,aioredi:12,algorithm:[6,9],alia:11,all:[6,7,12],allow:[6,9,10],allow_request:13,alpin:12,also:[1,2,3,6,12,13],altern:7,among:3,ani:[1,3,4,6,8,12,13],annot:6,anoth:[3,6,12],anymor:13,anyth:6,api:6,app:[5,12],append:7,appli:7,applic:[1,3,4,6,8,12],arg:[6,7],argument:[2,7,12],around:[3,10],arrang:1,articl:7,artist:6,ascii:[],associ:8,async:[0,1,3,4,9,12,13],asynchron:1,asyncio:[1,6,12],attach:7,authent:1,auto:3,avail:12,await:[1,6,8,9,12],awesom:12,awesomestor:12,b526gdnxfbf8sqlzz:12,backward:6,band:6,base:[0,1,2,3,4,7,8,9,10,11,13],basebrok:[0,1,6,12],basecodec:[1,2],basecorrelat:[1,3],basehook:[1,4,6],baseratelimit:[1,6,9],basesequencegener:[1,10],basethrottlehandl:[1,6,13],basi:3,been:[1,2,7,12],befor:[1,4,6,7,12,13],benchmark:5,best:3,between:[1,3,6],bf_getreadbuf:[],bind:[1,6],bind_receiv:[],bind_transceiv:1,bind_transceiver_resp:1,bit:[2,7,8],block:1,bodi:1,body_data:1,bool:[1,7,13],both:12,breachhandl:7,bring:6,broker:[1,5,8,12],brpop:12,bucket:[6,9],buffer:[1,7],bug:5,busi:12,calcul:13,call:[0,1,2,3,4,6,7,12,13],can:[0,2,6,7,8,9,11,12],capac:7,celeryproject:8,center:6,certain:7,chang:[6,12],charact:2,check:[1,6,7],child:1,choic:[6,12],cleanli:1,cli:[5,12],client:[6,8,9,12,13],client_id:[1,6,12],close:[6,7],cmt:8,code:[1,8,11,12],codec:[1,5],codec_class:[],com:7,come:3,command:[3,4,8,11,12],command_handl:[1,12],command_statu:12,command_status_valu:1,commandlin:6,commandstatu:[4,11],commit:6,commun:12,compos:6,condit:[7,13],config:6,confirm:12,conn:6,connect:[1,6,12],connection_lost:12,consult:[6,12],consum:6,contain:[6,12],content:6,continu:[1,6],control:[1,6,9],correl:[3,4,8,10],correlat:5,correlatinid:6,correlation_handl:1,could:[7,8],counter:6,creat:[6,12],create_redis_pool:12,cthank:12,current:[6,8,12],cursor:6,custom:[6,9,12],damn:7,data:[1,4,6,11],databas:6,datacod:11,deal:8,debug:[6,7],decid:[6,7,13],decis:13,declar:[1,6],decod:[1,2,12],def:[6,12],defin:[],delet:3,deliv:6,deliver_sm:[3,6],deliver_sm_resp:[1,8],deliveri:[3,6,8],deliversmresp:8,demo:[0,6,12],demo_naz:12,deni:[6,13],deny_request_at:[6,13],depend:6,dequed_item:12,dequeu:[0,1,6,12],dequeue_messag:[1,6,12],deriv:6,descript:[6,11],deseri:8,design:[6,8],dest_addr_npi:8,dest_addr_ton:8,destin:8,destination_addr:[1,6,8,12],determin:13,develop:[6,12],diagnost:7,dict:[1,7],dictionari:[3,7],did:7,differ:[1,3,4,8],directori:[6,12],doc:[6,8],docker:[6,12],document:12,doe:[1,6,7,9,13],domain:1,done:[3,12],dot:[6,12],drain_dur:1,dry:12,durat:[1,13],each:6,effici:[],effort:3,either:[7,8],elliot:7,els:12,emit:7,emoji:6,empti:12,enabl:[8,13],encod:[1,2,11],end:12,enqueu:[0,1,6,12],enquire_link:[1,6],enquire_link_interv:1,enquire_link_resp:[1,8],enquirelinkresp:8,entiti:6,environ:6,error:[1,2,6,7],esm:[1,6],esm_class:8,esme_rmsgq:13,esme_rthrottl:6,etc:[2,7,8,12],even:[6,7],event:[6,7,12],ever:8,everi:7,everytim:13,everywher:5,evolv:8,exampl:[1,2,6,7,9,12],example_config:6,examplebrok:6,exc_info:7,exce:13,exceed:7,except:[1,6,7],exclus:[],execut:[6,12],exist:8,exit:12,expect:12,expir:3,extern:6,fals:[1,7,12,13],featur:[3,5],field:[8,11],file:[6,7,12],flag:8,flow:1,flush:7,flushlevel:7,flushonclos:7,forc:12,format:[6,8,12],formatt:[6,7],found:6,from:[1,2,3,4,6,7,8,12,13],from_json:8,from_smsc:[4,6],full:[1,4,13],futur:8,gatewai:[1,6],gather:[1,6],gener:[1,6,10],get:[1,3,6,8,12,13],get_event_loop:[1,6,12],getenv:[1,8],getlogg:7,give:[6,12],given:[2,3,7],goe:13,going:[3,12],good:[6,7],googl:7,got:[7,13],greater:[6,13],gsm0338:2,gsm:2,guarante:3,had:[3,4,12],hand:1,handl:[5,12,13],handler:[1,6,7,13],happen:6,happili:12,has:[0,6],hasn:7,have:[6,7,8,12,13],heartbeat:7,heartbeatinterv:7,hello:[1,6,8],help:[4,10,12],here:6,higher:7,hip:6,hold:6,hook:[1,5,8,12],hook_metadata1:3,hook_metadata2:3,hook_metadata:[1,3,4,6,8],hop:6,host:[1,6,12],houston:7,how:[6,12,13],howev:[3,12],html:8,http:[6,7,8],ident:8,identifi:[1,3,8],implement:[0,1,2,3,4,6,7,8,9,10,12,13],implemet:1,implemnet:12,impos:13,inc:6,includ:[7,12],incompat:6,increas:10,increment:6,indic:[1,8],info:[6,7],inform:[6,7],inherit:[0,2,3,4,9,10,13],init:6,initi:[4,10],inject:6,input:2,insid:12,inspir:7,instal:[5,12],instanc:[0,1,6,12],instantait:12,instanti:[1,12],integ:[7,10],integr:5,interact:1,interfac:[0,2,3,4,6,8,9,10,12,13],interface_vers:1,intern:8,introduct:5,issu:6,item:[0,1,3,6,8,12],its:[1,12],itself:13,jayz:7,join:6,json:[0,7,8],json_messag:8,json_to_messag:[0,8,12],just:[1,4,6,13],kafka:12,keep:6,kei:[3,6],kenyan:6,keyword:7,kind:[],klqk248jsk8:12,komuw:12,kvlog:6,kvlogger:6,kwarg:[6,7],last:13,later:[1,6,8],latest:8,learn:12,least:7,leav:[],length:[],let:[6,9,12],level:[6,7,8],leverag:6,librari:5,like:[1,3,6,7,8],limit:[1,5,9,12,13],line:12,list:8,listen:[1,12],load:[6,13],localhost:12,log:[1,4,5,12],log_id1:3,log_id2:3,log_id:[1,3,4,6,8,12],log_metadata:[6,7],logger:[1,4,6,7,9,13],logger_nam:7,logic:12,look:[3,6,12],loop:[1,6,12],lost:1,lot:12,lpush:12,mai:[3,4,6,8,9,13],main:12,make:[1,6,12,13],mandat:3,manner:6,map:[],max_ttl:3,maximum:[0,7,9,10],maxsiz:[0,1,6,8,12],mean:2,mechan:[1,6],memori:[0,3,7],memoryhandl:7,messag:[0,1,2,3,4,6,7,8,9,12,13],message_id:8,met:7,metadata:[1,7],method:[0,1,2,3,4,6,8,9,10,13],metric:6,minimum:13,minsiz:12,minut:7,missi:7,mkdir:12,mode:8,modul:0,monitor:5,monoton:10,more:[6,12,13],mostli:7,msg:[1,6,7,8,12],msisdn:8,much:12,must:[0,2,3,4,8,9,10,13],mutual:[],my_app:6,my_brok:[6,12],my_client:12,my_config:6,my_naz_cli:[6,12],my_request:6,my_respons:6,myfil:6,myhook:6,myid12345:6,mylimit:6,mylogg:7,myprometheushook:6,myredisbrok:12,mysmsdb:6,mysteri:7,name:[1,6,7],naz:[0,1,2,3,4,7,8,9,10,11,13],naz_benchmarks_queu:12,naz_message_protocol_vers:8,nazclienterror:1,nazizi:6,ncodec:2,neccesari:0,need:[6,12],network:[1,8],new_msg:6,next:12,next_sequ:10,none:[0,1,2,3,4,7,8,9,10,12,13],not_throttl:13,note:[0,3],notif:[3,6],now:12,npi:1,number:[0,1,3,6,7,8,11,13],object:[1,2,11],observ:5,occur:6,ofcours:6,off:12,okai:12,omit:3,onc:12,one:[2,3,4,8,12],onli:[0,6,7,8,12],option:[3,11,12],order:[0,12],org:8,origin:8,other:[3,6,12],ought:10,our:12,out:[1,6,12],outgo:6,output:[],over:[1,6,13],own:[6,12],pack:[],paramet:[0,1,2,3,4,6,7,8,9,11,13],pars:1,parti:6,particular:[3,12,13],pass:[1,6,7,8,12],password:[1,6,8,12],path:[6,12],pdu:[1,4,6,8],per:[6,7],percent:13,percentag:[6,13],period:[6,8],pid:12,pip:[6,12],place:[6,12],plan:[1,8],port:[1,12],possibl:12,postgr:8,predefin:8,previous:[3,4],print:6,prioriti:8,priority_flag:8,problem:7,process:7,prod:12,product:6,prometheu:6,prometheus_cli:6,properti:[],proto_msg:1,protocol:[0,1,5,6,12],protocol_id:8,provid:[],publish:8,purchas:12,purpos:[0,6],put:[0,3,7],put_nowait:6,python3:6,python:[1,2,3,6,7,12],python_path:12,queu:[1,6,8],queue:[0,1,6,8,12,13],queue_nam:12,rabbitmq:[6,8,12],rais:1,rang:[1,6,10],rate:[1,5,9,12,13],rate_limit:[1,6,9],ratelimit:[5,6],re_establish_conn_bind:1,reach:10,read:[1,6],readi:12,real:12,reason:[3,6,13],rebind:1,receipt:8,receipted_message_id:3,receiv:[1,4],receive_data:[1,6,12],recipi:8,recognis:2,reconnect:1,record:[6,7],redi:[6,8,12],registered_deliveri:8,regul:13,relat:[1,3,12],releas:6,reliabl:3,remov:8,render:[6,7],render_as_json:7,replac:[8,12],replace_if_present_flag:8,repli:[6,13],repo:6,represenst:11,represent:8,requ:[],request:[1,4,6,8,9,10,13],requir:[6,8],respect:1,respond:13,respons:[1,4,6,10,12,13],ring:7,round:6,rout:[1,6],run:[1,6,12],run_until_complet:[1,6,12],sai:6,said:1,same:2,sample_s:[6,13],sampling_period:[6,13],san:6,satisfi:[0,2,3,4,6,8,9,10,12,13],save:[0,8],schedul:8,schedule_delivery_tim:8,scheme:2,sdk:6,second:[1,3,6,7,9,13],section:2,see:[2,4,10,12],self:[4,6,10,12,13],send:[1,4,6,8,9,12,13],send_data:[1,12],send_messag:[1,6,8,12],send_messsag:9,send_rat:[6,9],send_request:12,sender:8,sens:6,sent:[1,2,4,12],sentri:6,sentry_sdk:6,sequenc:[1,3,5],sequence_gener:1,sequence_numb:[1,3,8,10],sequence_number1:3,serial:[0,8],serv:1,server:[1,6,9,12],servic:[6,8],service_typ:8,session:[1,11],set:[2,6,7,12],setformatt:[6,7],setlevel:[6,7],setmessagestatehook:6,setup:6,sever:7,ship:[6,8,12],shoe:12,shop:[],short_messag:[1,6,8,12],should:[0,2,3,4,6,7,8,9,10,12,13],shouldflush:7,show:[6,12],shown:[0,2,3,4,9,10,13],shutdown:1,signal:1,signatur:[0,2,3,4,9,10,13],signifi:8,similar:8,simpl:[3,6],simplebrok:[0,1,6,8],simplecodec:2,simplecorrelat:3,simplehook:[4,6],simplelogg:[6,7],simpleratelimit:[6,9],simplesequencegener:10,simplethrottlehandl:[6,13],simul:[6,12],singl:1,situat:[],size:0,sleep:12,slot:[],sm_default_msg_id:8,sme:8,smpp:[1,2,3,6,8,10,11,12,13],smpp_command:[1,3,4,6,8,12],smpp_server:12,smppclient1:[1,6,8,12],smppcommand:[6,11],smppcommandstatu:11,smppdatacod:11,smppoptionaltag:11,smppsessionst:11,smsc:[1,2,3,4,6,8,9,12,13],smsc_host:[1,6,8,12],smsc_message_id1:3,smsc_message_id:3,smsc_port:[1,6,8,12],smstabl:6,socket:1,socket_timeout:1,softwar:12,some:[1,8],sometim:6,sourc:[0,1,2,3,4,7,8,9,10,11,13],source_addr:[1,6,8,12],source_addr_npi:8,source_addr_ton:8,spec:2,specif:[1,2,8,10],specifi:[3,6,9],sql:6,sqlite3:6,stage:12,standard:2,standardconnectionhandl:12,start:[1,6,12,13],state:[1,4,5,6,12],statehook:6,statement:7,statu:[1,4,6,11,13],status:11,stdlib:7,stdout:7,step:5,still:[],stop:6,storag:3,store:[0,1,3,7,8,12],stored_at:3,str:[1,2,3,4,6,7,8],stream:7,streamhandl:[6,7],streamread:[],streamwrit:[],strict:2,string:[0,1,2,3,4,8],struct:[],structur:7,style:6,submit:[8,12],submit_messag:[],submit_sm:[1,3,4,6,8,12],submit_sm_resp:[3,4,12],submitsm:[1,6,8,12],success:12,suppli:[3,4,6],support:[1,6],suppos:6,surpass:6,system:1,system_id:[1,6,8,12],system_typ:1,tabl:6,tag:[3,11],take:[6,12],taken:7,talk:[6,12],target:7,targetlevel:7,task:[1,6],tell:7,termin:[1,6],test:[0,1,6],than:[6,13],thank:12,thei:12,them:1,thi:[0,1,2,3,4,6,7,8,9,10,12,13],thing:12,third:6,those:6,throtll:[6,13],throttl:[1,5,12],throttle_delai:13,throttle_handl:[1,6],throttle_wait:13,throttler:6,through:12,thu:[6,13],time:[1,3,13],timeout:12,timestamp:12,tmp:[6,12],to_json:[0,8,12],to_smsc:[4,6],todo:1,token:[6,9],total:[6,13],track:[3,4,12],tracker:5,tracking_cod:12,tranceiver_bind:[1,6],transceiv:1,transfer:6,trigger:7,tupl:[3,11],tutori:5,tweet:7,two:6,type:[0,1,2,3,4,7,8,9,10,13],typic:12,ucs2:2,unbind:[1,6],unbind_resp:1,under:[6,13],union:[1,3,7],uniqu:[1,3,7,8],updat:6,upto:6,url:7,usag:[1,2,5,7,8,9,12],use:[0,3,6,7,8,12],used:[0,1,2,6,7,12],user:[0,1,2,3,4,8,9,10,13],uses:[1,2,3,6],using:[1,3,5,6,9],usual:[2,6],util:[0,8],valid:8,validity_period:8,valu:[3,6,7,11],variou:[1,11,12],version:[1,2,6,8,12],via:[1,6,13],wai:[6,12,13],wait:[1,12,13],want:[3,4,6,12],watch:6,web_request:7,wether:13,what:[1,6,8,12],whatev:[6,13],when:[1,4,6,7,10,12,13],whenev:6,where:[6,12],wherea:12,whether:[1,7,12],which:[1,6,7,9,10,11,12,13],who:12,wikipedia:6,work:[6,13],world:[1,6,8],would:[1,6,8],wrap:[3,10],write:[1,6],www:7,you:[0,1,6,7,8,9,12],your:[6,8,12],your_sentry_project_id:6,your_sentry_public_kei:6,zero:[]},titles:["broker","Client","codec","correlater","hooks","naz - naz is an async SMPP client.","Introduction to naz","log","protocol","ratelimiter","sequence","state","Step by step tutorial of using naz","throttle"],titleterms:{api:5,app:6,async:[5,6],benchmark:6,broker:[0,6],bug:6,cli:6,client:[1,5],codec:2,content:5,correlat:3,demo:[],everywher:6,exampl:[],featur:6,handl:6,hook:[4,6],instal:6,integr:6,introduct:6,librari:6,limit:6,log:[6,7],monitor:6,naz:[5,6,12],observ:6,protocol:8,rate:6,ratelimit:9,refer:5,sequenc:10,smpp:5,state:11,step:12,throttl:[6,13],tracker:6,tutori:12,usag:6,using:12}})