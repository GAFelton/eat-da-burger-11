const orm = require("../config/orm");

var burger = {

    // READ METHOD
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // CREATE METHOD
    addBurger: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    // UPDATE METHOD
    update: function(valsToSet, condition, cb) {
        orm.updateOne("burgers", valsToSet, condition, function(res) {
            cb(res);
        });
    }

};

// export for the controller.
module.exports = burger;