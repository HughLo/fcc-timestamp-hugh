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
app.listen(8080, function() {
    console.log("start server at port 8080 of address " + app.address);
});