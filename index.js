const request = require('request');
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.MessagingResponse();
  request.post(
    webHook,
    { json: { content: event.Body } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            twiml.message("Message Delivered!");
	      } else {
            twiml.message("Error Occured!");
        }
        callback(null, twiml)
    }
);
	
};
