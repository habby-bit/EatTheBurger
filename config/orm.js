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

    updateOne: function(tableInput, colToSearch, valOfCol, condition, cb) {
        console.log('valOfCol:', valOfCol)
        console.log('colToSearch:', colToSearch)
        console.log('tableInput:', tableInput)
        const theQueryString = `UPDATE ${tableInput} SET ${colToSearch} = ${valOfCol} WHERE ${condition}`
        console.log('queryString:', theQueryString)
        connection.query(theQueryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;
