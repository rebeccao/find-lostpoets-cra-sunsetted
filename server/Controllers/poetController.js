const Poet = require("../models/poet");
const asyncHandler = require("express-async-handler");

// GET /
exports.index = asyncHandler(async (req, res, next) => {
  const poet = await Poet.find( { "poet_id" : 24932 } );      // const poet = await Poet.findOne();
  res.json({ message: `Poet = ${poet}`});                     // console.log(`******poet = ${poet}`);

  const numPoets = await Poet.countDocuments({}).exec();
  //res.json({ message: `Poet count = ${numPoets}`});         // res.send(`poet count = ${ numPoets }`);
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