
var HttpServer = require("./server/webserver/httpserver");
var server = new HttpServer();
server.host = "*";
server.port = "8081";
server.start();

server.processRequest = function(context){
	context.response.write("hello world");
	context.response.end();
}