var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " +  tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = "INSERT INTO " + tableInput + " SET " + colToSearch + " WHERE " + valOfCol
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = "UPDATE" + tableInput + " SET " + colToSearch + " WHERE " + valOfCol
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
