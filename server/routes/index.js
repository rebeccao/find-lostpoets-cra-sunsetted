const express = require("express");
const router = express.Router();

// Require controller modules.
const poet_controller = require("../controllers/poetController");

/// POET ROUTES ///

// GET poets home page.
router.get("/", poet_controller.index);

// GET api
router.get("/api", poet_controller.api);

// GET request for one Poet.
//router.get("/poet/:id", poet_controller.poet_detail);

module.exports = router;