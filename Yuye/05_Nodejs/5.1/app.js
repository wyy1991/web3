var http = require('http');
var bye = require("./bye_module");

// require 了这个http的module

// create 一个server, server里面有listen()这个function， 
// listen 是一个call
// createServer里面给一个callback, 会return request 和 result
// 让result的header里面写 header return 的状态， 200是成功

// 如果里面是200 success , 404是error
// 如果404可以高度

http.createServer(function(req, res){
	res.writeHead(200);
	res.write("Congs, you got it. Request start.");
	setTimeout(function(){
		res.write("haha, request start.");
		res.end(); // 在end之前result可以一直write 
	}, 5000); // 5秒之后timeout, 结束之后执行callback
	
}).listen(8888, function(){
	console.log("listen to 8888");
	bye.listenit();
});  






