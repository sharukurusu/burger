// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      cb(res);
    });
  },
  update: function(vals, cb) {
    orm.updateOne(vals, function(res) {
      cb(res);
    });
  },
  delete: function(vals, cb) {
    orm.deleteOne(vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
