var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");
http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/html;charset=utf8"});
    console.log(querystring.parse("a=sdf&b=c&c=d"));
    var query = { a: 'sdf', b: 'c', c: 'd' };
    console.log(querystring.stringify(query));
    console.log(querystring.escape("a=sdf&b=c&c=d"));
    console.log(querystring.unescape(querystring.escape("a=sdf&b=c&c=d")));
    response.end();
}).listen(1000);
// localhost:1000  //ctrl + alt + r