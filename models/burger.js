const orm = require("../config/orm.js")

const burger = {

    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (col1, col2, val1, val2, cb) => {
        orm.insertOne("burgers", col1, col2, val1, val2, (res) => {
            cb(res);
        });
    },

    updateOne: (colToSearch, valOfCol, condition, cb) => {
        orm.updateOne('burgers', colToSearch, valOfCol, condition, (res) => {
          cb(res);
        });
    }
};

module.exports = burger;