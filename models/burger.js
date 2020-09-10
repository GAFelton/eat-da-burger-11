const orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    addBurger: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(valsToSet, condition, cb) {
        orm.updateOne("burgers", valsToSet, condition, function(res) {
            cb(res);
        });
    }

};

// export for the controller.
module.exports = burger;