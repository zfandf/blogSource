var http = require('http');
var port = 3000;
http.createServer(function(req, res) {
    res.end('hello world');
}).listen(port, "127.0.0.1");
console.log('server running at http://127.0.0.1:' + port);