/**
 * Created by k1 on 6/22/15.
 */
var express = require('express');
var app = express();


app.use(express.static(__dirname + "/www"));


// CORS (Cross-Origin Resource Sharing ) headers to support Cross-Site Http requests
app.all('*', function (request, response, next) {
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","X-Requested-With");
    next();
});

// API Routes
// api.get('/blah',routerHandler);

app.set('port',process.env.port || 5000);

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Webonix running at http://%s:%s', host, port);
});