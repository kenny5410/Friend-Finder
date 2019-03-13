var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app, path);
require("./app/routing/htmlRoutes")(app, path);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});