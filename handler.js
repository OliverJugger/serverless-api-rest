'use strict';

module.exports.endpoint = (event, context, callback) => {
  var o2x = require('object-to-xml');
  const response = {
    statusCode: 200,
    body: o2x({    	
  	 '?xml version=\"1.0\" encoding=\"iso-8859-1\"?' : null,
  	 response : {
    	'@' : {
	      type : 'message',
	      id : 12344556
	    },
	     '#' : { message: "Hello " + JSON.parse(event.body)["name"],}
  	}
    }),
  };

  callback(null, response);
};
