var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/html;charset=utf8"});

    var html = "www.html.cn?a=spring";
    console.log(url.parse(html));

    response.end();
}).listen(1000);
