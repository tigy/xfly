var IO=require("utilskit/io");
//IO.deleteFile("D:/aa.txt");

var HttpUtility = require('./webserver/httputility');
var sss = "a=b&t=5";
var url = "http://www.baidu.com/a.php?a=b&t=6";
var val = HttpUtility.parseQueryString(sss);
console.log(val["t"]);



//console.log(s1);
//var s=new HttpValueCollection();
//s.fillFromString(url);