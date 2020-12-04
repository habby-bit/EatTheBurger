const connection = require("../config/connection.js");

const orm = {

    // Select all the burgers
    selectAll: (tableInput, cb) => {
        const theQueryString = `SELECT * FROM ${tableInput}`;
        connection.query(theQueryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    // Add a new burger
    insertOne: (tableInput, col1, col2, val1, val2, cb) => {
        const theQueryString = `INSERT INTO ${tableInput} (${col1}, ${col2}) VALUES ("${val1}", ${val2})`;

        connection.query(theQueryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    // Update the state of the burger to devoured
    updateOne: (tableInput, colToSearch, valOfCol, condition, cb) => {
        const theQueryString = `UPDATE ${tableInput} SET ${colToSearch} = ${valOfCol} WHERE ${condition}`;
        
        connection.query(theQueryString, (err, result) => {
          if (err) throw err;
          cb(result);
        });
    }
};

module.exports = orm;
