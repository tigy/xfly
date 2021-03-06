
var FS = require('fs');



exports.processRequest = function(context){
	FS.readdir(context.request.physicalPath, function(error, files) {
		var app = context.applicationInstance;
		if(error) {
			app.onRequestError(context, 400, error);
			return;
		}
		
		var response = context.response;
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write("<!DOCTYPE html>\n<html><head><meta charset='UTF-8'><title>" + context.request.filePath + "</title></head><body>");
		response.write("<h1>" + context.request.filePath + "</h1>");
		response.write("<ul style='list-style:none;font-family:courier new;'>");
		response.write("<li><a href='../'>../</a></li>");
		var path = context.request.physicalApplicationPath;
		files.forEach(function(item) {
			var urlpath = context.request.filePath + item,
				itemStats = FS.statSync(path + urlpath.substr(context.request.applicationPath.length));
			if (itemStats.isDirectory()) {
				urlpath += "/";
				item += "/";
			}
			response.write("<li><a href='" + urlpath + "'>" + item + "</a></li>");
		});
		response.end("</ul></body></html>");
	});
};
