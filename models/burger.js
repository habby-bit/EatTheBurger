var orm = require("../config/orm.js")

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cb) {
        orm.insertOne("burgers", colToSearch, valOfCol, function(res) {
            cb(res);
        });
    },

    updateOne: function(tableToSearch, colToSearch, valOfCol, cb) {
        orm.updateOne("burgers", tableToSearch, colToSearch, valOfCol, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;