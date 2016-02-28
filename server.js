var express = require('express');
var util = require('./util')();
var app = express();

app.get('/:dateString', function(req, res) {
   var date = util.convertToTimeStampObject(req.params.dateString);
   
   res.writeHead(200, {
       'Content-Type': 'application/json'
   })
   
   res.write(JSON.stringify(date));
   res.end();
});
app.get('/', function(req, res) {
   res.end('home page does nothing'); 
});

console.log("process.env.PORT: " + process.env.PORT);
var port = process.env.PROT || 8080;
app.listen(port, function() {
    console.log("start server at address " + app.address + " at port " + port);
});