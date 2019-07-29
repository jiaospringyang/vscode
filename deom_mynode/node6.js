var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/html;charset=utf8"});
     // response.write(path.dirname("D:/springyang/study/mynode/node6.js"));
     // response.write(path.dirname("D:/springyang/study/mynode"));
    // response.write(path.sep);
     // response.write(path.delimiter);
    // response.write(path.normalize("D:///springyang////study///mynode//node6.js"));
    response.write(path.resolve("node6","mynode"));
    //response.write(path.relative("D:/springyang/study/mynode","D:/springyang/study/mynode/node6.js"));
    response.write("===========");
    //response.write();
    response.end();
}).listen(1000);