const http = require('http');

let connect = require('connect');

let connectRoute = require('connect-route');
 
let app = connect();

const port = 3000;

app.use(connectRoute(function (router) {
    router.get('/', function (req, res, next) {
      res.setHeader('Content-Type', 'text/plain');
        res.end('index');
    });
 
    router.get('/hello', function (req, res, next) {
        res.end('home');
    });
 
}));
 
app.listen(port);

console.log("Server is listening port: "+port);
console.log(`Server is listening port: ${port}`);