
var http = require('http');
http.createServer(function(req,res){
    res.write("Hello world! welcome ");
    res.end();
}).listen(8080);