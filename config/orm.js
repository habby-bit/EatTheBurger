var connection = require("../config/connection.js");

var orm = {

    selectAll: function(colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?";
        connection.query(queryString, [colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(colToSearch, valOfCol) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(tableToSearch, colToSearch, valOfCol) {
        var queryString = "UPDATE ?? SET ?? WHERE ?"
        connection.query(queryString, [tableToSearch, colToSearch, valOfCol],
            function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;