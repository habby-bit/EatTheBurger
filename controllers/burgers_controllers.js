var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgersObj = {
            burgers: data
        };
        res.render("index", burgersObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured], 
        function(result) {

        res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log('req.body.devoured:', req.body.devoured)


    burger.updateOne('burgers', 'devoured', req.body.devoured, condition, (result) => {
        console.log('success')
        res.end()
    })
});

module.exports = router;

