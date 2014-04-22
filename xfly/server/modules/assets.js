


exports.init = function (application){
	application.virtualPaths["/assets"] = require('path').resolve(__dirname, '../../assets/');
};
