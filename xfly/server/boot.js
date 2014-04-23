module.exports = require("./start");

require('child_process').exec("start " + module.exports.rootUrl, function (error, stdout, stderr) {
	require('util').puts(stdout);
});