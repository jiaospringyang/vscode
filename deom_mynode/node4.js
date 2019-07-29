var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "image/jpeg;"});
    var data = fs.readFileSync("th.jpg", "binary");
    response.write(data, "binary");
    response.end();
}).listen(1000);
