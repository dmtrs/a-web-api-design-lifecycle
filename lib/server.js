var http = require('http');
var log  = require('./log');
module.exports = function(handler) {
  return http.createServer(function(req, res) {
    log(req);
    var body = [];
    req.on('data', function(chunk) {
      body.push(chunk);
    }).on('end', function() {
      body  = Buffer.concat(body).toString();
      handler(req, res, body);
    });
  });
};
