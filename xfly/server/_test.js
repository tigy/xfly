var ws = require("ws");

var server = new ws.Server({port:7003});
server.on('connection', function(socket){

	for(var i in socket){
		console.log(i);
	}


	socket.send('aaa');
	socket.close();

});