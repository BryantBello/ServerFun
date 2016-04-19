//Require/import the HTTP module
var http = require('http');

//Define a port we want to listen to
var PORT=8080;

//Function which handles requests and send response
function handleRequest(request, response){
	response.end('It Works!!!' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){

	//Callback triggered when server is successfully listening!
	console.log("server listening on: http://localhost:%s", PORT);

});