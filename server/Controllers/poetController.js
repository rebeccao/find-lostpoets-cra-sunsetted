const Poet = require("../models/poet");
const asyncHandler = require("express-async-handler");

// GET /
exports.index = asyncHandler(async (req, res, next) => {
  res.json({ message: "NOT IMPLEMENTED: Site Home Page" });
});

// GET api
exports.api = asyncHandler(async (req, res, next) => {
  res.json({ message: "Hello from Hell!!" });
});
/*
// Display list of all books.
exports.poet_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Poet list");
});

// Display detail page for a specific book.
exports.poet_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Poet detail: ${req.params.id}`);
});
*/