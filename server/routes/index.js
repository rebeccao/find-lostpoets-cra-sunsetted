const express = require("express");
const router = express.Router();

// Require controller modules.
const poet_controller = require("../controllers/poetController");

/// POET ROUTES ///

// GET poets home page.
router.get("/", poet_controller.index);

// GET api
router.get("/api", function (req, res) {
  res.json({ message: "Hello from Express!" });
});
/*
// GET api
router.get("/api", function (req, res) {
  res.json({ message: "Hello from Express!" });
});*/

// GET request for one Poet.
//router.get("/poet/:id", poet_controller.poet_detail);

module.exports = router;


/*
const express = require('express');
const router = express.Router();

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/library");
});

module.exports = router;*/