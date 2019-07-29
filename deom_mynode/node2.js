var http=require("http");
var node1 = require("./node1.js");
http.createServer(function (request, response) {
    response.writeHead(200, {"content-type": "text/html;charset=utf8"});
    node1.spring(response);
    node1.yang(response);
    response.end();
}).listen(1000);

