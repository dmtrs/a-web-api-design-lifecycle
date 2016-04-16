//Lets require/import the HTTP module
var server = require('./lib/server');
//Lets define a port we want to listen to
const PORT=3000; 

//We need a function which handles requests and send response
function handleRequest(request, response, body) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify({ data: [ { id: "1" } ] }));
};
//Lets start our server
server(handleRequest).listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
