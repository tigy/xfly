
exports.processRequest = function(context, path){
	path = context.request.mapPath(path);
	require('child_process').exec("explorer /select," + path.replace(/\//g, "\\"));
	context.response.end("<script>history.back();</script>");
};