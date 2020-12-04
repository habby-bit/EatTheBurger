const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

// Route to get all burgers
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgersObj = {
            burgers: data
        };
        res.render("index", burgersObj);
    });
});

// Route to add a burger
router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", "devoured", req.body.burger_name, req.body.devoured,
        result => {
        res.json({ id: result.insertId });
  });
});

// Route to devour a burger
router.put('/api/burgers/:id', (req, res) => {
    const condition = 'id = ' + req.params.id;

    burger.updateOne('devoured', req.body.devoured, condition, 
      result => {
      res.end();
    });
  });

module.exports = router;

