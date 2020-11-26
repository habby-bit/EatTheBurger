var connection = require("../config/connection.js");

var orm = {

    selectAll: function(colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?";
        connection.query(queryString, [colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(colToSearch, valOfCol, cb) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(tableToSearch, colToSearch, valOfCol, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ?"
        connection.query(queryString, [tableToSearch, colToSearch, valOfCol],
            function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
