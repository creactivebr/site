var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static(__dirname));

http.createServer(app).listen(9778);

console.log("Http server running on port 9778");