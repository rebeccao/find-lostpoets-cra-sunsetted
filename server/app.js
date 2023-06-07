const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://localhost:27017/poetsDB";        //const mongoDB = "mongodb://127.0.0.1:27017/poetsDB";

// DEBUG 
// Log the mongo connection readyState and on event emitters
console.log(`app.js connection readyState ${mongoose.connection.readyState}`); //logs 0
mongoose.connection.on('connecting', () => { 
  console.log('connecting')
  console.log(`app.js connection readyState ${mongoose.connection.readyState}`); //logs 2
});
mongoose.connection.on('connected', () => {
  console.log('connected');
  console.log(`app.js connection readyState ${mongoose.connection.readyState}`); //logs 1
});
mongoose.connection.on('disconnecting', () => {
  console.log('disconnecting');
  console.log(`app.js connection readyState ${mongoose.connection.readyState}`); // logs 3
});
mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
  console.log(`app.js connection readyState ${mongoose.connection.readyState}`); //logs 0
});

main().catch((err) => console.log(err));
async function main() {
  const conn = await mongoose.connect(mongoDB);
  console.log(`app.js ******* MongoDB now connected to ${conn.connection.host}`);
}

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // DEBUG Replace json with render once it is set up 
  //res.render('error');
  res.json({
    status: err.statusCode,
    message: err.message,
    error: err
  });
});

module.exports = app;
