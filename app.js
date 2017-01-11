var config = require('./config')();

var connect = require('connect'),
    http = require('http');
const MongoClient = require('mongodb').MongoClient

var app = connect()
    .use(function(req, res, next) {
        console.log("That's my first middleware");
        next();
    })
    .use(function(req, res, next) {
        console.log("That's my second middleware");
        next();
    })
    .use(function(req, res, next) {
        console.log("end");
        res.end("hello world");
    });
/// connect mong truoc khi connect app 
//'mongodb://' + config.mongo.host + ':' + config.mongo.port
//'mongodb://127.0.0.1:27017/fastdelivery'
MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port+'/fastdelivery', function(err, db) {
    if(err) {
        console.log('Sorry, there is no mongo db server running.');
    } else {
        var attachDB = function(req, res, next) {
            req.db = db;
            next();
        };
        // khong co next se khong the chay toi server 
        // mot minh chan se khong lam nen com chao roi 
        http.createServer(app).listen(config.port, function(){
            console.log('Express server listening on port ' + config.port);
        });
    }
});