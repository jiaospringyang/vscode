// 同步
// var http=require("http");
// var fs = require("fs");
// http.createServer(function(request, response) {
//     response.writeHead(200, {"content-type": "text/html;charset=utf8"});
//     var data = fs.readFileSync("node4.html", "utf-8");
//     response.write(data);
//     response.end();
// }).listen(1000);

//异步
var http=require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/html;charset=utf8"});
    fs.readFile("node4.html", function(err, data) {
        if(err) {
            response.write("error");
        } else {
            response.write(data);
        }
        response.end();
    });

}).listen(1000);