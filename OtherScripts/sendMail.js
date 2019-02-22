var recepients = ['vladislav.iliev@doitwise.com', '00359882863184@sms.wirefast.net'];
var text = 'diwtest0'; 
 
gs.eventQueue('wirefast.test', null, recepients.toString(), text);

//------------------------------------------
var gr = new GlideRecord('incident');
gr.get('7edeb001dbf32300b7259b81ca96196e');
 
var recepients = ['vladislav.iliev@doitwise.com', '00359882863184@sms.wirefast.net'];
var text = 'diwtest0dev';
 

gs.eventQueue('smstest', gr, recepients.toString(), text);