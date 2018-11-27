const   express = require("express"),
        PORT = process.env.PORT || 8080,
        app = express(),
        // Set Handlebars.
        exphbs = require("express-handlebars"),
        // Import routes and give the server access to them.
        routes = require("./controllers/burgers_controller.js");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
