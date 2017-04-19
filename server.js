var express = require('express'),
    bodyParser = require('body-parser'),
    PORT = 4200;

app = express();
path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));
app.use(express.static(__dirname + '/node_modules'));

// Just a bit of middleware to print every route request to the console...
app.use( function(req, res, next){
  console.log(req.method, req.url);
  next();
});

// ROUTES //////////////////////
require('./server/config/routes.js')(app);
///////////////////////////////

// MONGODB //////////////////////
require('./server/config/mongoose.js');
///////////////////////////////

app.listen(PORT, function(){
  
});