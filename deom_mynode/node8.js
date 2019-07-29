var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/html;charset=utf8"});
   
    var data = '<html><body><h1>我是杨姣</h1></body></html>';
    //fs.writeFileSync("node8.html",data);
    fs.writeFile("12.html", data, function(err) {
        if(err) {
          console.log("失败")；
        } else {
           console.log("成功")；
        }
    })

    response.end();
}).listen(1000);