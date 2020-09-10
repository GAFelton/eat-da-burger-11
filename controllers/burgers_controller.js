const express = require("express");

var router = express.Router();

const burger = require("../models/burger");

const convertStringBoolean = (str) => str == "true";

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var objForHandlebars = {
            burgers: data
        };
        console.log(objForHandlebars);
        res.render("index", objForHandlebars);
    });
});

router.post("/api/burgers", function (req, res) {
    const devoured = convertStringBoolean(req.body.devoured);
    burger.addBurger(
        ["burger_name, devoured"],
        [req.body.name, devoured],
        function (result) {
            res.json({ id: result.id });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    const devoured = convertStringBoolean(req.body.devoured);

    console.log("id of burger to be devoured: ", condition);

    burger.update({ devoured }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;