


exports.init = function (application){
	application.virtualPaths["/xfly"] = require('path').resolve(__dirname, '../../');
};
