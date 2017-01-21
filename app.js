const http = require('http');

var connect = require('connect');

var connectRoute = require('connect-route');
 
var app = connect();

const port = 3000;

app.use(connectRoute(function (router) {
    router.get('/', function (req, res, next) {
        res.end('index');
    });
 
    router.get('/hello', function (req, res, next) {
        res.end('home');
    });
 
}));
 
app.listen(port);