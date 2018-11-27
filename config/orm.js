
//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

const connection = require('./connection.js'),

    orm = {
    // Expects table name
    selectAll: function(table, cb){
        var queryString = 'SELECT * FROM ??'
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    },
    // Expects array of ['burgers'(the table name), ['burger_name', 'devoured'], ['new burger name', true or false] ]
    insertOne: function(vals, cb){
        var queryString = 'INSERT INTO ?? (??) VALUES (?)'
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result)
        });
    },
    // Expects array of ['burgers'(the table name), 'devoured', true or false, id]
    updateOne: function(vals, cb){
        var queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?;'
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    },
    // Expects array of ['burgers', id]
    deleteOne: function(vals, cb){
        var queryString = 'DELETE FROM ?? WHERE id = ?;'
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        });
    }
}

module.exports = orm