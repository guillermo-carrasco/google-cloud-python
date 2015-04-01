Search.setIndex({envversion:46,filenames:["datastore-api","datastore-batches","datastore-dataset","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","index","pubsub-api","pubsub-subscription","pubsub-surface","pubsub-topic","storage-acl","storage-api","storage-blobs","storage-buckets"],objects:{"gcloud.connection":{API_BASE_URL:[7,8,1,""],Connection:[7,5,1,""],JSONConnection:[7,5,1,""],get_scoped_connection:[7,2,1,""]},"gcloud.connection.Connection":{USER_AGENT:[7,1,1,""],credentials:[7,1,1,""],http:[7,1,1,""]},"gcloud.connection.JSONConnection":{API_BASE_URL:[7,1,1,""],API_URL_TEMPLATE:[7,1,1,""],API_VERSION:[7,1,1,""],api_request:[7,4,1,""],build_api_url:[7,7,1,""]},"gcloud.credentials":{generate_signed_url:[7,2,1,""],get_credentials:[7,2,1,""],get_for_service_account_json:[7,2,1,""],get_for_service_account_p12:[7,2,1,""]},"gcloud.datastore":{"__init__":[0,0,0,"-"],api:[0,0,0,"-"],batch:[1,0,0,"-"],connection:[0,0,0,"-"],dataset:[2,0,0,"-"],entity:[3,0,0,"-"],helpers:[0,0,0,"-"],key:[4,0,0,"-"],query:[5,0,0,"-"],transaction:[6,0,0,"-"]},"gcloud.datastore.__init__":{set_defaults:[0,2,1,""]},"gcloud.datastore.api":{"delete":[0,2,1,""],allocate_ids:[0,2,1,""],get:[0,2,1,""],put:[0,2,1,""]},"gcloud.datastore.batch":{Batch:[1,5,1,""]},"gcloud.datastore.batch.Batch":{"delete":[1,4,1,""],add_auto_id_entity:[1,4,1,""],begin:[1,4,1,""],commit:[1,4,1,""],connection:[1,1,1,""],current:[1,6,1,""],dataset_id:[1,1,1,""],mutation:[1,1,1,""],put:[1,4,1,""],rollback:[1,4,1,""]},"gcloud.datastore.connection":{Connection:[0,5,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[0,1,1,""],API_VERSION:[0,1,1,""],allocate_ids:[0,4,1,""],begin_transaction:[0,4,1,""],build_api_url:[0,4,1,""],commit:[0,4,1,""],lookup:[0,4,1,""],rollback:[0,4,1,""],run_query:[0,4,1,""]},"gcloud.datastore.dataset":{Dataset:[2,5,1,""]},"gcloud.datastore.dataset.Dataset":{"delete":[2,4,1,""],batch:[2,4,1,""],get:[2,4,1,""],key:[2,4,1,""],put:[2,4,1,""],query:[2,4,1,""],transaction:[2,4,1,""]},"gcloud.datastore.entity":{Entity:[3,5,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[3,1,1,""],kind:[3,1,1,""]},"gcloud.datastore.helpers":{entity_from_protobuf:[0,2,1,""],key_from_protobuf:[0,2,1,""]},"gcloud.datastore.key":{Key:[4,5,1,""]},"gcloud.datastore.key.Key":{"__init__":[4,4,1,""],completed_key:[4,4,1,""],dataset_id:[4,1,1,""],flat_path:[4,1,1,""],id:[4,1,1,""],id_or_name:[4,1,1,""],is_partial:[4,1,1,""],kind:[4,1,1,""],name:[4,1,1,""],namespace:[4,1,1,""],parent:[4,1,1,""],path:[4,1,1,""],to_protobuf:[4,4,1,""]},"gcloud.datastore.query":{Iterator:[5,5,1,""],Query:[5,5,1,""]},"gcloud.datastore.query.Iterator":{next_page:[5,4,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[5,1,1,""],add_filter:[5,4,1,""],ancestor:[5,1,1,""],dataset_id:[5,1,1,""],fetch:[5,4,1,""],filters:[5,1,1,""],group_by:[5,1,1,""],keys_only:[5,4,1,""],kind:[5,1,1,""],namespace:[5,1,1,""],order:[5,1,1,""],projection:[5,1,1,""]},"gcloud.datastore.transaction":{Transaction:[6,5,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[6,4,1,""],commit:[6,4,1,""],current:[6,6,1,""],id:[6,1,1,""],rollback:[6,4,1,""]},"gcloud.exceptions":{BadRequest:[7,3,1,""],ClientError:[7,3,1,""],Conflict:[7,3,1,""],Forbidden:[7,3,1,""],GCloudError:[7,3,1,""],InternalServerError:[7,3,1,""],LengthRequired:[7,3,1,""],MethodNotAllowed:[7,3,1,""],MovedPermanently:[7,3,1,""],NotFound:[7,3,1,""],NotImplemented:[7,3,1,""],NotModified:[7,3,1,""],PreconditionFailed:[7,3,1,""],Redirection:[7,3,1,""],RequestRangeNotSatisfiable:[7,3,1,""],ResumeIncomplete:[7,3,1,""],ServerError:[7,3,1,""],ServiceUnavailable:[7,3,1,""],TemporaryRedirect:[7,3,1,""],TooManyRequests:[7,3,1,""],Unauthorized:[7,3,1,""],eklass:[7,1,1,""],make_exception:[7,2,1,""]},"gcloud.exceptions.BadRequest":{code:[7,1,1,""]},"gcloud.exceptions.Conflict":{code:[7,1,1,""]},"gcloud.exceptions.Forbidden":{code:[7,1,1,""]},"gcloud.exceptions.GCloudError":{code:[7,1,1,""],errors:[7,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[7,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[7,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[7,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[7,1,1,""]},"gcloud.exceptions.NotFound":{code:[7,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[7,1,1,""]},"gcloud.exceptions.NotModified":{code:[7,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[7,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[7,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[7,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[7,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[7,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[7,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[7,1,1,""]},"gcloud.pubsub":{"__init__":[9,0,0,"-"],api:[9,0,0,"-"],connection:[9,0,0,"-"],subscription:[10,0,0,"-"],topic:[12,0,0,"-"]},"gcloud.pubsub.__init__":{get_connection:[9,2,1,""],set_default_connection:[9,2,1,""],set_defaults:[9,2,1,""]},"gcloud.pubsub.api":{list_subscriptions:[9,2,1,""],list_topics:[9,2,1,""]},"gcloud.pubsub.connection":{Connection:[9,5,1,""]},"gcloud.pubsub.connection.Connection":{API_BASE_URL:[9,1,1,""],API_URL_TEMPLATE:[9,1,1,""],API_VERSION:[9,1,1,""]},"gcloud.pubsub.subscription":{Subscription:[10,5,1,""]},"gcloud.pubsub.subscription.Subscription":{"delete":[10,4,1,""],acknowledge:[10,4,1,""],create:[10,4,1,""],exists:[10,4,1,""],modify_ack_deadline:[10,4,1,""],modify_push_configuration:[10,4,1,""],path:[10,1,1,""],pull:[10,4,1,""],reload:[10,4,1,""]},"gcloud.pubsub.topic":{Topic:[12,5,1,""]},"gcloud.pubsub.topic.Topic":{"delete":[12,4,1,""],batch:[12,4,1,""],create:[12,4,1,""],exists:[12,4,1,""],path:[12,1,1,""],publish:[12,4,1,""]},"gcloud.storage":{"__init__":[14,0,0,"-"],acl:[13,0,0,"-"],blob:[15,0,0,"-"],bucket:[16,0,0,"-"],connection:[14,0,0,"-"],iterator:[14,0,0,"-"]},"gcloud.storage.__init__":{get_connection:[14,2,1,""],set_default_bucket:[14,2,1,""],set_default_connection:[14,2,1,""],set_defaults:[14,2,1,""]},"gcloud.storage.acl":{ACL:[13,5,1,""],BucketACL:[13,5,1,""],DefaultObjectACL:[13,5,1,""],ObjectACL:[13,5,1,""]},"gcloud.storage.acl.ACL":{add_entity:[13,4,1,""],all:[13,4,1,""],all_authenticated:[13,4,1,""],clear:[13,4,1,""],domain:[13,4,1,""],entity:[13,4,1,""],entity_from_dict:[13,4,1,""],get_entities:[13,4,1,""],get_entity:[13,4,1,""],group:[13,4,1,""],has_entity:[13,4,1,""],loaded:[13,1,1,""],reload:[13,4,1,""],reset:[13,4,1,""],save:[13,4,1,""],user:[13,4,1,""]},"gcloud.storage.acl.BucketACL":{clear:[13,4,1,""],reload:[13,4,1,""],save:[13,4,1,""]},"gcloud.storage.acl.ObjectACL":{clear:[13,4,1,""],reload:[13,4,1,""],save:[13,4,1,""]},"gcloud.storage.blob":{Blob:[15,5,1,""]},"gcloud.storage.blob.Blob":{"delete":[15,4,1,""],CHUNK_SIZE:[15,1,1,""],acl:[15,1,1,""],cache_control:[15,1,1,""],component_count:[15,1,1,""],connection:[15,1,1,""],content_disposition:[15,1,1,""],content_encoding:[15,1,1,""],content_language:[15,1,1,""],content_type:[15,1,1,""],crc32c:[15,1,1,""],download_as_string:[15,4,1,""],download_to_file:[15,4,1,""],download_to_filename:[15,4,1,""],etag:[15,1,1,""],exists:[15,4,1,""],generate_signed_url:[15,4,1,""],generation:[15,1,1,""],id:[15,1,1,""],make_public:[15,4,1,""],md5_hash:[15,1,1,""],media_link:[15,1,1,""],metadata:[15,1,1,""],metageneration:[15,1,1,""],owner:[15,1,1,""],path:[15,1,1,""],path_helper:[15,6,1,""],public_url:[15,1,1,""],rename:[15,4,1,""],self_link:[15,1,1,""],size:[15,1,1,""],storage_class:[15,1,1,""],time_deleted:[15,1,1,""],updated:[15,1,1,""],upload_from_file:[15,4,1,""],upload_from_filename:[15,4,1,""],upload_from_string:[15,4,1,""]},"gcloud.storage.bucket":{Bucket:[16,5,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[16,4,1,""],acl:[16,1,1,""],configure_website:[16,4,1,""],connection:[16,1,1,""],copy_blob:[16,4,1,""],cors:[16,1,1,""],create:[16,4,1,""],default_object_acl:[16,1,1,""],delete_blob:[16,4,1,""],delete_blobs:[16,4,1,""],disable_logging:[16,4,1,""],disable_website:[16,4,1,""],enable_logging:[16,4,1,""],etag:[16,1,1,""],exists:[16,4,1,""],get_all_blobs:[16,4,1,""],get_blob:[16,4,1,""],get_logging:[16,4,1,""],id:[16,1,1,""],iterator:[16,4,1,""],lifecycle_rules:[16,1,1,""],location:[16,1,1,""],make_public:[16,4,1,""],metageneration:[16,1,1,""],owner:[16,1,1,""],path:[16,1,1,""],path_helper:[16,6,1,""],project_number:[16,1,1,""],self_link:[16,1,1,""],storage_class:[16,1,1,""],time_created:[16,1,1,""],upload_file:[16,4,1,""],upload_file_object:[16,4,1,""],versioning_enabled:[16,1,1,""]},"gcloud.storage.connection":{Connection:[14,5,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[14,1,1,""],API_URL_TEMPLATE:[14,1,1,""],API_VERSION:[14,1,1,""]},"gcloud.storage.iterator":{Iterator:[14,5,1,""]},"gcloud.storage.iterator.Iterator":{PAGE_TOKEN:[14,1,1,""],RESERVED_PARAMS:[14,1,1,""],get_items_from_response:[14,4,1,""],get_next_page_response:[14,4,1,""],get_query_params:[14,4,1,""],has_next_page:[14,4,1,""],reset:[14,4,1,""]},gcloud:{"__init__":[7,0,0,"-"],connection:[7,0,0,"-"],credentials:[7,0,0,"-"],exceptions:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","function","Python function"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","class","Python class"],"6":["py","staticmethod","Python static method"],"7":["py","classmethod","Python class method"],"8":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:function","3":"py:exception","4":"py:method","5":"py:class","6":"py:staticmethod","7":"py:classmethod","8":"py:data"},terms:{"3xx":7,"4xx":7,"5xx":7,"__exit__":11,"__init__":[0,4,7,9,14],"__key__":5,"_aclent":13,"_batch":12,"_blobiter":16,"_datastore_v1_pb2":[0,1,4],"_dra_bucket":15,"_helper":[15,16],"_properti":14,"_propertymixin":[15,16],"_serviceaccountcredenti":7,"abstract":[1,5,6,7],"boolean":[0,4,5,7,10,13,14,15,16],"break":14,"byte":[1,3,5,12,15],"case":[1,3,14],"class":[0,1,2,3,4,5,6,7,9,10,12,13,14,15,16],"default":[0,1,5,6,7,9,11,12,13,14,15,16],"final":4,"float":5,"import":[0,1,5,6,8,9,11,13,14,16],"int":[7,9,10,15],"long":[7,15,16],"new":[0,4,7,10,11,13,14,15,16],"public":[15,16],"return":[0,1,3,4,5,6,7,9,10,12,13,14,15,16],"short":13,"static":[1,6,15,16],"true":[0,4,7,10,11,13,14,15,16],"while":14,abl:[7,8,13],about:[7,15,16],absenc:15,accept:[7,14],access:[7,9,13,14,15,16],accesslog:16,accident:16,account:[7,13],ack:[10,11],ack_deadlin:[10,11],ack_id:10,ackid:10,acknowledg:10,act:3,actual:[0,3,13,14],add:[1,7,13,16],add_auto_id_ent:1,add_ent:13,add_filt:[0,5],addit:[7,14],address:13,advanc:[0,7],after:[3,13],again:3,against:[5,7],agent:7,akin:[0,3,14],alia:7,all:[0,3,4,13,14,15,16],all_authent:13,alloc:0,allocate_id:0,allocateid:0,allow:[0,3,7,8,15],allus:13,along:0,alread:1,alreadi:[1,6,11,13,16],also:[1,6,7,13,16],altern:13,amount:15,ancestor:5,ani:[0,1,3,7,13,15],anoth:[9,11,13],anyth:[13,16],api_access_endpoint:7,api_bas:0,api_base_url:[0,7,9,14],api_request:7,api_url_templ:[0,7,9,14],api_vers:[0,7,9,14],app:[7,13,14],app_credenti:[0,14],appar:16,appassertioncredenti:7,appendix:15,appengin:7,appli:[0,5],applic:[10,13,15],approv:16,apt:8,arbitrari:15,argument:[0,4,7,9,13,14],around:[7,15],ask:14,assembl:7,assert:6,assign:[1,3,5,6,12,16],associ:[4,7,16],attach:7,attempt:16,attr1:11,attr2:11,attr:[11,12],attribut:[0,7,11,12,16],auth:7,authent:[0,7,13,14],author:7,authorized_us:7,automat:[1,3,6],avail:[6,10,15,16],back:[0,1,3,6,9,10,12,14,16],backend:[0,3,16],bad:7,badrequest:7,bamboo:[0,14],base:[0,1,2,3,4,5,6,7,9,10,12,13,14,15,16],base_url:0,basi:13,basic:[0,4,7],bcp47:15,bearer:7,becaus:6,been:[1,4,5,11,13,15],befor:15,beforehand:8,begin:[0,1,6,14,15],begin_transact:0,begintransact:0,begintransactionrespons:0,begun:6,belong:[0,10,12,13,15],between:[0,14],blank:[13,16],blob:[7,8,13,14],blob_nam:[15,16],blob_valu:[1,3],block:[1,6,10,11],bodi:7,both:0,bound:9,breviti:13,bucket1:[9,13,14],bucket1_nam:13,bucket2:[9,13,14],bucket2_nam:13,bucket:[7,8,9,13,14,15],bucket_nam:[13,16],bucket_path:15,bucketacl:13,build:[0,1,6,7,9,13,14],build_api_url:[0,7],built:[1,3],builtin:3,bulk:[1,6],bunch:[0,13],bundl:0,cach:15,cache_control:15,call:[0,1,6,7,9,10,12,13,14,16],callabl:16,callback:16,can:[0,1,3,4,6,7,8,9,12,13,14,15,16],cannot:[0,7],capabl:[0,7],certain:15,chain:13,chang:[3,13],check:[7,11,13,16],checksum:15,child:4,chunk:15,chunk_siz:15,classmethod:7,clear:13,click:[0,14],client:[0,7],client_email:7,client_id:7,client_secret:7,clienterror:7,clientsecret:7,clone:8,close:7,code:[0,1,6,7,14],collect:1,com:[7,8,9,10,11,12,13,14,15,16],come:0,command:7,commit:[0,1,6],compani:13,compat:13,complet:[0,1,6,16],completed_kei:4,compon:[7,15],component_count:15,comput:[7,14],concept:[0,9,14,15,16],concret:7,condit:0,configur:[10,11,16],configure_websit:16,conflict:[7,16],connection_typ:7,consist:[0,4,13],consol:[0,7,14],constant:7,construct:[0,1,7,13,14],constructor:4,consum:14,contain:[0,7,10,13,14,16],content:[7,8,14,15],content_disposit:15,content_encod:15,content_languag:15,content_md5:7,content_typ:[7,15],context:[0,1,6,11,12],control:[5,13,15],conveni:[0,2,5],convert:[3,11,14],copi:[0,4,15,16],copy_blob:16,cor:16,correct:7,correspond:[1,4,7,13,15],costli:15,could:[3,15],cousin:7,cowardli:16,cowork:13,coworker1:13,coworker2:13,crc32c:15,creat:[0,1,3,4,5,6,7,9,10,11,12,13,14,15,16],create_bucket:14,credenti:0,crypto:8,current:[0,1,3,4,5,6,7,13,14,15,16],cursor:[0,5],custom:[7,13],data:[0,3,4,5,7,8,11,13,14,15,16],databas:[0,3,8],dataset:[0,1],dataset_id:[0,1,2,4,5,6],datastore_pb:0,datastoreservic:0,datetim:[5,7,15],deadlin:[10,11],deal:0,decod:3,def:14,default_object_acl:16,defaultobjectacl:[13,16],defer:[0,2],defin:[7,9,10,12,14,15],delet:[0,1,2,3,6,10,11,12,14,15,16],delete_blob:[15,16],delimit:16,delimt:16,deliveri:16,demand:[15,16],demonstr:14,depend:15,deriv:[0,6,11],descend:5,describ:[7,16],destination_bucket:16,detail:[0,7,14,15,16],detect:7,determin:[14,15,16],dev:8,develop:[0,7,14,16],dict:[3,4,7,9,10,13,14,15,16],dictionari:[3,7,13,14,16],differ:7,directli:[0,7,14],directori:16,disabl:16,disable_log:16,disable_websit:16,discoveri:7,disk:14,disposit:15,do_some_work:[1,6],doc:[0,7,14,15,16],document:[7,15],doe:[0,1,4,16],doesn:[13,16],doesnt:16,domain:[13,16],don:[1,6,15,16],done:[1,7,13],download:[0,7,14,15],download_as_str:[14,15],download_to_fil:15,download_to_filenam:15,duplic:[3,15],dur:1,durabl:[15,16],durable_reduced_avail:[15,16],dure:[1,11],each:[3,7,10,13,16],earli:14,effect:[6,7,15],either:[0,1,4,6,7,9,13,14,15],eklass:7,element:[4,6],els:[6,16],elsewher:7,empti:[0,7,9,16],emul:16,enabl:[0,16],enable_log:16,encod:[3,15],end:[3,10],end_cursor:5,endpoint:[7,9,10,11],engin:[7,14],enter:6,entir:3,entiti:[0,1,2],entity1:[1,6],entity2:[1,6],entity_dict:13,entity_from_dict:13,entity_from_protobuf:0,entity_typ:13,entitykind:[0,3,4],entri:[1,13],enviro:14,environ:[0,7,9,11,12,14],environmenterror:[0,16],equal:0,equival:[5,16],error:[1,6,7],establish:[9,14],etag:[15,16],etc:[7,13],even:[4,10,13],eventu:0,everi:1,everyth:8,exampl:[0,1,5,6,11,13,14,16],except:[1,6],exclude_from_index:3,execut:[5,6],exist:[0,1,3,4,6,10,11,12,13,15,16],exit:[1,6],expect:[7,13],expect_json:7,expir:[7,15],explicit:11,explicitli:[0,1,6,7,9,11,14,15],express:5,extra:[3,4],extra_param:14,extrem:16,facilit:[0,14],factori:[0,2,7,13,14],fail:7,fall:[0,9,12,14,16],fals:[0,10,13,15,16],far:1,favor:0,fetch:[0,5,11],fetch_pag:0,few:7,fewer:14,field:[3,5,13],file:[0,7,8,14,15,16],file_obj:[15,16],filenam:[15,16],fill:0,filter:[5,16],find:[14,16],fine:5,first:[7,9,11,15,16],flag:[7,13],flat_path:4,follow:[1,6,7,13],foo:4,forbidden:7,forc:16,form:5,format:[7,15,16],found:[7,16],fresh:13,friendli:0,from:[0,1,3,4,5,6,7,8,9,10],frozenset:14,fstat:15,full:[4,13],fulli:8,futur:[0,14,16],gae:11,gce:[7,11],gcloud_bucket_nam:14,gcloud_tests_dataset_id:[0,14],gcloud_tests_project_id:[0,14],gclouderror:7,gener:[0,6,7,14,15],generate_signed_url:[7,15],get:[0,2,3,5,7],get_all_blob:[14,16],get_all_bucket:14,get_blob:[14,16],get_bucket:[8,9,13,14,16],get_connect:[7,9,13,14,16],get_credenti:7,get_ent:13,get_for_service_account_json:7,get_for_service_account_p12:7,get_items_from_respons:14,get_log:16,get_next_page_respons:14,get_query_param:14,get_scoped_connect:7,getter:[1,4,6,7,14,15,16],git:8,github:[0,8,14],give:15,given:[0,5,7,9,14,15,16],googl:[0,7,8,9,10,12,13,14,15,16],google_application_credenti:[0,7,14],googleapi:[7,9,14],googlecloudplatform:8,googlecredenti:7,grant:13,grant_:13,grant_own:13,grant_read:13,grant_writ:13,granular:13,group:[1,5,13],group_bi:5,guess:15,guess_typ:15,handl:[7,15,16],happen:[11,13],has_ent:13,has_next_pag:14,hash:[7,15],have:[0,4,6,7,8,11,13,14,15],header:[7,15],here:14,hierarchi:16,hood:[0,7,13],hook:11,host:16,howev:[0,1,3,6,7],html:[7,15,16],http:[0,7,9,10,11,12,14,15,16],httplib2:7,id_or_nam:4,ident:13,identifi:[0,4,13],idiomat:7,ietf:[15,16],imagin:13,immut:4,implement:[7,13,16],implicit:[4,5,7,14,15],implicitli:[0,7,9,14],includ:[0,5,9,14],incompat:0,incomplet:7,incomplete_kei:0,increas:13,index:[3,16],indic:[0,4,7,9],individu:[0,9,14,16],infer:[0,9,11,12,16],info:[15,16],inform:7,infrastructur:8,initi:[0,4,6],insert:[7,16],insert_auto_id:[1,6],insid:[1,6,16],instanc:[0,1,3,4,7],instanti:[7,14],instead:[7,13],integ:[0,4,5,15,16],intend:7,intern:[0,7],internalservererror:7,invalid:5,invok:2,is_parti:[4,6],is_valid:14,isn:16,isol:[0,6],item:14,iter:[5,13],itself:1,jame:5,jpg:16,json:[0,7,9,14],json_api:[7,15,16],json_credentials_path:7,jsonconnect:[7,9,14],just:[0,3,14,15,16],keep:1,kei:[0,1,2,3],key3:1,key_from_protobuf:0,key_pb:0,keys_onli:5,keyword:[0,4],kind:[0,3,4,5],kitten:16,klass:7,know:3,known:[7,13],kwarg:[2,4],lambda:16,languag:15,larg:15,last:4,latest:7,left:13,length:[4,7],lengthrequir:7,level:[0,5,7],libssl:8,lifecycl:[15,16],lifecycle_rul:16,like:[0,3,13,15,16],limit:[5,9,11],line:7,list:[0,1,4,5,7,9,10,11,13,14,16],list_subscript:[9,11],list_top:[9,11],live:[0,14,15],load:13,local:[10,13,14,16],locat:16,log:[15,16],logbucket:16,logobjectprefix:16,look:[0,14],lookup:[0,13],low:5,machin:[0,14],mai:[0,4,7],mail:[7,13],main:[0,9,14,16],main_page_suffix:16,make:[0,1,7,13,14,15,16],make_except:7,make_publ:[15,16],manag:[1,6,8],mani:7,manipul:13,manual:6,map:[0,1,5,7,9,10,15,16],marker:9,match:[0,1,5],max_messag:[10,11],max_result:16,maximum:[9,10,16],md5:[7,15],md5_hash:15,mean:[3,6,7,15],media:15,media_link:15,messag:[7,9,10],message_id1:11,message_id2:11,message_id:11,message_payload:11,metadata:[13,15],metagener:[15,16],method:[0,1,2,6,7,9,13,14,15,16],methodnotallow:7,might:3,mime:7,mimetyp:15,miss:[0,2],modifi:7,modify_ack_deadlin:10,modify_push_configur:[10,11],modifypushconfig:10,modul:[0,14],more:[0,5,9,10,14,16],more_result:[0,5],mount:14,move:7,movedperman:7,multipl:15,must:[7,10,15,16],mutabl:[3,13],mutat:[0,1,6],mutation_pb:0,mutationresult:0,mutuat:[1,6],my_item:14,my_other_acl:13,myitemclass:14,myiter:14,mykind:0,name:[0,3,4,5,7,8,9,10,11,12,14,15,16],namespac:[0,4,5],necessari:6,need:[0,1,7,14,16],new_nam:[15,16],newli:[15,16],next:[9,14],next_pag:5,nextpagetoken:[9,14],non:[0,7,8,9,11,13],none:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16],nonetyp:[4,7,15,16],not_found_pag:16,note:13,notfound:[7,15,16],notimpl:7,notimplementederror:13,notmodifi:7,now:13,num_id:0,num_retri:15,number:[0,9,10,11,15,16],oauth2:[0,7],oauth2client:[0,7],oauth2credenti:[0,7],object:[0,1,2,3,4,5,7,10,12,13,14],object_prefix:16,objectacl:13,obtain:0,occur:0,octet:15,odd:4,off:14,offici:3,offset:5,old:15,on_error:16,onc:[0,1,6,14,16],onli:[0,3,4,5,7,11,14,15,16],opaqu:9,open:[15,16],openssl:8,oper:[1,5,6,15,16],operatiuon:1,option:[0,2,3,5,7,9,14,15,16],order:[0,1,5,7,13,14,16],org:[7,13,15,16],other:[3,7,13,14,15],other_arg:14,otherwis:16,our:[1,2,15,16],over:[0,1,5,7],overrid:14,overridden:[1,13,14],overriden:14,overwrit:15,own:13,owner:[13,15,16],p12:7,packag:0,page:[5,9,14,16],page_s:9,page_token:[9,14],pagetoken:14,pair:[12,13],param:0,paramet:[0,1,2,3,4,5,6,7,9,10,12,13,14,15,16],parent:[3,4],parent_kei:4,pars:[7,14],part:[0,1,5,13],partial:[0,1,3,4],particular:[0,7,9,13,14],particularli:15,pass:[0,2,4,5,7,9,12,15,16],path:[0,4,7,9,10,12,14,15,16],path_arg:[2,4],path_help:[15,16],payload:12,pend:11,per:[13,15],period:15,perman:7,permiss:13,persist:3,person:[0,5,8],piec:7,pip:[0,8,14],pkcs12:7,plain:15,plan:7,platform:7,plu:9,point:[7,13],pointer:[0,3,7,14],polici:[15,16],possibl:[3,14],post:[7,12],preced:7,precompil:8,precondit:7,preconditionfail:7,prefix:16,prepend:5,present:11,prevent:16,primit:7,print:[13,14,16],privat:[0,7,14],private_kei:7,private_key_id:7,private_key_path:7,probabl:16,process:14,product:7,project:[0,5,9,10],project_id:[11,14],project_numb:16,propag:[15,16],proper:[7,9,14],properti:[0,1,3,5,15,16],property_nam:5,protobuf:[0,1,4,5],protocol:7,provid:[0,6,7,9,13,14,15,16],proxi:2,public_url:15,publicli:15,publish:[9,10],pull:[9,10],push:[9,10,11],push_endpoint:[10,11],put:[0,1,2,3,6,8,10,12,16],pycrypto:8,pyopenssl:8,python2:[1,3],python3:[1,3],python:[0,3,7,8,14,16],queri:[0,2],query_param:7,query_pb:0,quickli:[0,14,16],race:0,rais:[0,1,4,5,6,7,13,15,16],rang:7,rather:0,read:[0,13,14,15,16],readi:7,realli:16,receiv:[10,12],recurs:16,redirect:7,reduc:[15,16],refer:[6,7,9,10,12,13],referenc:7,refresh:7,refresh_token:7,refus:16,registr:[0,14],regress:[0,14],regular:3,rel:[15,16],relat:[0,3,7,8,13,16],reli:[3,14],reload:[10,13],remain:4,rememb:1,remot:[14,16],remov:[1,13],renam:15,replac:1,repositori:8,repres:[0,1,3,4,5,6,7,9,13,14,16],represent:4,request:[0,1,7,10,11,12,14,15,16],requestrangenotsatisfi:7,requir:[2,3,4,5,7,15],reserved_param:14,reset:[13,14],resourc:[7,14,15],respons:[7,14],rest:[9,10,12,14],restrict:5,result:[0,5,9,14],resum:7,resumeincomplet:7,retri:15,retriev:[0,3,9,10,15,16],return_immedi:[10,11],revok:13,revoke_:13,revoke_own:13,revoke_read:13,revoke_writ:13,rewind:15,rfc2616:[7,15,16],rfc4960:15,rfc6266:15,rfc7231:15,rfc7234:15,rfc:[15,16],role:[13,15,16],roll:[1,6],rollback:[0,1,6],root:[0,16],row:[0,3],rpc:0,rule:[13,16],run_queri:0,runqueri:0,runtim:16,sai:16,salli:5,same:[0,1,4,6,9,13,14,15,16],sampl:[0,14],satisfi:7,save:[0,1,3,6,13],schemaless:8,scope:[0,7,11],script:[0,14],search:[0,14],sec10:7,secret:7,section:[15,16],see:[0,7,9,10,12,14,15,16],seek:[7,15],self:14,self_link:[15,16],send:[0,1,7,12,13,16],sent:1,separ:16,sequenc:[3,5,10,16],serializ:0,serv:5,server:[0,1,7,12],servererror:7,servic:[3,7],service_account:7,serviceunavail:7,set:[0,1,3,4,5,6,7,9,10,11,13,14,15,16],set_default:[0,8,9,14],set_default_bucket:14,set_default_connect:[0,9,14],set_default_dataset_id:0,set_default_namespac:0,setup:8,sever:[9,14],share:7,shell:[0,14],shift:[0,14],shortcut:[0,9,14,16],should:[0,7,14,15,16],shouldn:[0,7],side:6,sign:[7,13,15],signedjwtassertioncredenti:7,simpl:7,simpli:7,simplifi:14,singl:[0,1,3,5,7,11],size:15,skipped_result:0,slow:15,snapshot:0,snippet:[1,6],some:[0,7,14],someexcept:6,somehow:16,someth:16,sort:5,sourc:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16],special:13,specif:[7,13,15],specifi:5,specifyingloc:16,stack:6,standard:[7,15,16],start:0,start_cursor:5,state:[1,5],statement:[1,6],statu:[7,16],step:3,still:13,stop:0,storag:7,storage_class:[15,16],store:[1,3,5,7,8,13,15,16],str:[1,3,5,9,12],stream:15,string:[0,2,3,4,5,6,7,9,10,12,13,14,15,16],string_valu:1,strong:0,stuff:16,subclass:[3,7,13,14],submit:16,subscrib:12,subscript:9,subscription_nam:11,subsequ:10,sudo:8,superflu:7,suppli:5,support:[7,14],suppress:16,sure:1,sync:10,system:16,take:[3,5,16],talk:7,target:12,techniqu:16,templat:[0,7,9,14],temporari:7,temporarili:15,temporaryredirect:7,test:[0,7,8,10,12,14],text:[1,3,7,15,16],text_valu:3,than:[0,16],thei:[7,13],them:[0,1],thi:[0,1,3,5,6,7,8,9,11,13,14,15,16],thing:[6,14],those:[1,6,12,14,15],through:[5,14],time:[6,15],time_cr:16,time_delet:15,timedelta:[7,15],timestamp:[15,16],to_protobuf:[0,4],togeth:13,token:[7,9],too:7,tool:[7,15,16],toomanyrequest:7,topic:[9,10],topic_nam:[9,11],topmost:[1,6],track:1,transact:[0,1,2],transaction_id:0,transat:0,transport:7,tripl:0,troubl:8,tupl:[0,3,4,5,7,9,13],two:[1,6],txt:[7,8,14,16],type:[0,1,3,4,5,6,7,9,10,12,13,14,15,16],typic:[0,7,14,16],ubuntu:8,unauthor:7,unavail:7,under:[0,7,13],underli:15,understand:[0,7],unicod:[1,3],uniqu:[0,13,15],unless:[4,15],unmarshal:0,until:[6,7,10,15],updat:[1,7,10,15,16],upload:[15,16],upload_contents_from_str:8,upload_fil:[14,16],upload_file_object:16,upload_from_fil:15,upload_from_filenam:15,upload_from_str:[14,15],upon:[1,6],upsert:6,uri:[7,15,16],url:[0,7,9,10,12,14,15,16],use_json:7,user:[0,7,13,15],user_ag:7,usual:0,utf:[3,15],v1beta2:[0,9,10,12],val:0,valid:15,valu:[0,1,3,5,7,9,12,13,14,15],value1:11,value2:11,valueerror:[0,1,4,5,6,16],variabl:[0,7,14],verb:[7,15],veri:15,version:[0,7,9,14,15,16],versioning_en:16,via:[0,9,10,12,14],virtual:13,wai:14,walk:14,want:[1,6,8,13,14,15,16],websit:16,well:[6,7,16],what:14,when:[0,1,3,6,7,13,15,16],whenev:15,where:[0,5,9,14],whether:[13,14,15,16],which:[0,1,3,5,7,9,10,12,13,14,15,16],who:13,whole:16,whose:[3,4],within:[6,15],without:[1,3,6,7,11,13],won:[6,7,13],work:[1,13,14,16],world:0,would:[3,7],wouldn:0,wrapper:[2,7,9,15],write:[13,14,15],wrote:0,www:[7,14,16],xact:6,yield:14,you:[0,1,3,6,7,8,9,13,14,15,16],your:[0,8,14,16]},titles:["Datastore","Batches","Dataset","Entities","Keys","Queries","Transactions","GCloud Package","Getting started","Pub/Sub","Subscriptions","<code class=\"docutils literal\"><span class=\"pre\">gcloud.pubsub</span></code> API","Topics","ACL","Storage","Blobs / Objects","Buckets"],titleterms:{"function":0,"try":[0,14],acl:13,api:[0,9,11],author:11,batch:1,blob:15,bucket:16,cloud:[0,8,14],connect:[0,7,9,11,14],credenti:7,dataset:2,datastor:[0,8],demo:[0,14],entiti:3,except:7,from:11,gcloud:[0,7,9,11,14],get:8,helper:0,instal:[0,14],interact:[0,9],iter:14,kei:4,librari:[0,14],manag:11,messag:11,object:15,packag:7,project:11,pub:9,publish:11,pubsub:[9,11],pull:11,queri:5,run:[0,14],second:[0,14],start:8,storag:[8,14],sub:9,subscript:[10,11],topic:[11,12],transact:6,yourself:[0,14]}})