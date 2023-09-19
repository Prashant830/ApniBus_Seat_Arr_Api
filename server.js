var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
require("dotenv").config();



//get all buses
app.get('/getBuses', function(req, res){
    fs.readFile(__dirname + "/" + "bus.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})


//find all buses
app.get('/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "bus.json", 'utf8', function (err, data) {
       var buses = JSON.parse( data );
       var user = buses["DemoBus" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })


 // update bus on the basis of payment
//  app.put('/payment/:sn', function(req, res){
//  })
// Create a server to listen at port 8080

const port = process.env.PORT || 3001;


var server = app.listen(port, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})