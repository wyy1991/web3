var url = require("url");
var request = require("request");
var express = require("express");
var app = express();

app.get('/tweets/:username', function(req, res){
	var username = req.params.username;
	options = {
		protocol: "https:",
		host:"twitter.com",
		pathname:"/search",
		query:{q:username}
	}
	var twitterUrl	= url.format(options);
	request(twitterUrl).pipe(res);  // 把拿到的值丢进result

	// request(twitterUrl)  是拿到的东西 

});


app.listen(8019)