var express = require('express');
var app = express();
var http = require('http');
var enforce = require('express-sslify');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Because we are behind a load balancer in Heroku, we use {trustProtoHeader: true}
app.use(enforce.HTTPS({ trustProtoHeader: true }))

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});