var WireFastSMS = Class.create();
WireFastSMS.prototype = {
	initialize: function() {
		this.apikey = gs.getProperty('wirefast.apikey');
		this.endpoint = "https://rest.wirefast.com/messaging/message";
	},
	
	send: function(numbers,body){
		try{
			var r = new sn_ws.RESTMessageV2();
			r.setHttpMethod('post');
			r.setEndpoint(this.endpoint);
			r.setRequestHeader('Content-Type', 'application/json');
			r.setRequestHeader('Date', 'YYYY-MM-DDTHH:MM:SSZ');
			r.setRequestHeader('API-KEY', this.apikey);
			//build body
			var reqBody = {};
			var destination = [];		
			for(var i=0; i<numbers.length; i++){
				var address = {};
				var sms = {};
				sms['sms'] = numbers[i];
				address['address'] = sms;
				destination.push(address);
			}		
			reqBody['destinations'] = destination;
			reqBody['subject'] = body;
			////
			r.setRequestBody(JSON.stringify(reqBody));		
			//var response = r.execute();
			var responseBody = response.getBody();
			//var parser = new JSONParser();
			//var parsed = parser.parse(responseBody);
			gs.info('WireFastSMS request body: ' + JSON.stringify(reqBody));
			//gs.info('WireFastSMS response code: ' + response.getStatusCode());
			//gs.info('WireFastSMS response body: ' + response.getBody());
			}
		catch(e){
			gs.addErrorMessage("WireFastSMS Error: " + e);
		}
		
	},

	type: 'WireFastSMS'
};