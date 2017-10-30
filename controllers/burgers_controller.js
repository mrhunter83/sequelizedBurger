var express = require("express");
var methodOverride = require("method-override");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
  db.burger.findAll({})
  .then(function(data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name, 
    devoured: req.body.devoured}
    ).then(function(data) {
      res.send();
    });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  db.burger.update({devoured: req.body.devoured}, {where: {id: req.params.id}})
  .then(function(result) {
    res.send();
  });
});

// Export routes for server.js to use.
module.exports = router;
