// HomeWork 5 NodeJS - find cheap iphone case price
var url = require("url");
var request = require("request");
var express = require("express");
var app = express();

app.get('/result/:keywords', function(req, res){
	console.log("HELLO!")
	var keywords = req.params.keywords;
	options = {
		protocol: "https:",
		host:"www.amazon.com",
		pathname:"/s/ref=nb_sb_noss",
		query:{"field-keywords": keywords,"url":"search-alias%3Daps"}
	}
	var amazonUrl	= url.format(options);
	console.log(amazonUrl);
	request(amazonUrl).pipe(res);  

	//----试试print出来request 的result
	var result = request(amazonUrl); //这个只打出了 head
	console.log(result);             // request 是有callback的

	//-------调试 看哪个是我们callback 需要的-------------
	// 发现第三个是我们要的
	request(amazonUrl, function(a,b,c,d,e){
		console.log(a + "\n");
		console.log(b+ "\n");
		console.log(c + "\n");
		console.log(d + "\n");
		console.log(e + "\n");

	});

	//---request是npm的module所以可以去npm官网去查------------

	request(amazonUrl, function(a,b,body){
		console.log(body);
	}
	//去w3 school 看 js substring


});

app.listen(8019)





