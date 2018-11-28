const   express = require("express"),
        router = express.Router(),
        burger = require("../models/burger.js");

module.exports = function(app) {
// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

app.post("/api/burgers", function(req, res) {
    burger.create(
        ["burgers", ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]],
        function(result) {
            res.json({ id: result.insertId });
        } 
    );
});

app.put("/api/burgers/:id", function(req, res) {
    burger.update(
        ['burgers', 'devoured', req.body.devoured, req.params.id],
        function(result) {
            if (result.changedRows == 0) { return res.status(404).end(); }
            else { res.status(200).end(); }
        }
    );
});

app.delete("/api/burgers/:id", function(req, res) {

    burger.delete(['burgers', req.params.id], 
        function(result) {
            if (result.affectedRows == 0) { return res.status(404).end(); }
            else { res.status(200).end(); }
        }
    );
});

// Export routes for server.js to use.

}