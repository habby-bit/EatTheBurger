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

    insertOne: function(tableInput, col1, col2, val1, val2, cb) {
        console.log('val2:', val2)
        console.log('val1:', val1)
        console.log('col2:', col2)
        console.log('col1:', col1)
        const theQueryString = `INSERT INTO ${tableInput} (${col1}, ${col2}) VALUES ("${val1}", ${val2})`;
        console.log('theQueryString:', theQueryString)
        connection.query(theQueryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function (tableInput, colToSearch, valOfCol, condition, cb) {
        const theQueryString = `UPDATE ${tableInput} SET ${colToSearch} = ${valOfCol} WHERE ${condition}`;
        connection.query(theQueryString, function (err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        });
    }
};

module.exports = orm;
