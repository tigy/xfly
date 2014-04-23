
var HttpServer = require("./webserver/httpserver");
var globalConfigs = require("../data/server");

var server = module.exports = new HttpServer(globalConfigs);

server.on('start', function(){
	console.log("[info]Server running at " + this.rootUrl);
});

server.on('stop', function(){
	console.log("[info]Server stopped at " + this.rootUrl);
});

server.on('error', function(){
	if (e.code == 'EADDRINUSE') {
		console.error('[Error]Cannot create server on port ' + this.port + (this.address && this.address !== '0.0.0.0' ? ' of ' + this.address : ''));
	} else {
		console.error(e);
	}
});	

server.start();

