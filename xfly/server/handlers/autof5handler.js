

var FS = require('fs');

exports.processRequest = function (context) {

	FS.readFile(context.request.physicalPath, context.applicationInstance.fileEncoding, function(error, content) {
		if(error) {
			context.reportError(400, error);
			return;
		}
		
		var mime = context.applicationInstance.mimeTypes[context.request.filePathExtension];

		if (mime) {
		    context.response.contentType = mime;
		} else if (mime !== undefined) {
		    context.reportError(403);
		    return;
		}

		context.response.write(content);

		if(this.autoF5 !== false) {
			autoF5(context, content);
		}

		context.response.end();
	});


}

function autoF5(context, content){
return;
	var serverPort = 7003;

	// 为客户端追加 auto f5 的监听脚本。
	context.response.write("<script>\
		/*auto f5*/\
		var autoF5;\
		if(this.WebSocket) {\
			autoF5 = new WebSocket('ws://127.0.0.1:" + serverPort +"');\
			autoF5.onmessage = function(e) {this.close();location.reload();};\
		}\
		autoF5 = document.getElementsByTagName('script');\
		autoF5 = autoF5[autoF5.length-1];\
		autoF5.parentNode.removeChild(autoF5);\
		</script>");

	var server = require('net').createServer(function(socket){
		
	    // 我们获得一个连接 - 该连接自动关联一个socket对象
	    console.log('connect: ' +  socket.remoteAddress + ':' + socket.remotePort);

	    socket.setEncoding('binary');

	    //数据错误事件
	    socket.on('error',function(exception){
	        socket.end();
	    });
	    
	    //客户端关闭事件
	    socket.on('close',function(data){
	        socket.end();
	    });

	}).listen(serverPort);

	var watcher = FS.watch(context.request.applicationPathTransalted, { persistent: true }, function(){
		console.log("aaaa");
		socket.send("1");
	});
}