var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var routes = require("./controllers/burgers_controller");

// Set up Express server.
var app = express();

// Port is set by environment or 8080.
var PORT = process.env.PORT || 8080;

// Public files are routed as static.
app.use(express.static(path.join(__dirname, "public")));

// Express parameters for passing data via AJAX requests & JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars to create HTML content.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing from burgers_controller.
app.use(routes);

// Initialize Express Server.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  