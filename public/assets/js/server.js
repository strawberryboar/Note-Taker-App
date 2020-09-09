//route this to index.js??
const http = require("http");

const PORT = 3000;

function handleRequest(request, response) {

  response.end("It Works!! Path Hit: " + request.url);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//change this destination
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});