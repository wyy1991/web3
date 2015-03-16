var express = require("express");
var app = express();

app.get('/miBand',function(req, res){
	res.sendFile(__dirname + "/index.html");
});  //app.get()是一个router,    一个是进来的url是什么， 一个是要做什么


//处理multiple page
app.get('/service',function(req, res){
	res.sendFile(__dirname + "/service.html");
}); 


app.get('/css/:filename', function(req, res){
	res.sendFile(__dirname + "/css/" + req.params.filename); // request是不能直接拿
});

app.get('/js/:filename', function(req, res){
	res.sendFile(__dirname + "/js/" + req.params.filename); // request是不能直接拿
});


app.listen(8019)

