const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// const { MongoManager } = require('./src/mongo');
const api = require('./src/api');
const addMoreFile = require('./addMoreFile');
const app = express();
// const mongoManager = new MongoManager(config);
// import './src/utils/'
// var logger = require('morgan');

// view engine setup
// console.log(process.env.DB_HOST, 'DB_HOSdsaT');
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
// app.use(logger());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// mongoManager.connect();

app.use('/api/v1', api({}));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// addMoreFile.loopWrite();

module.exports = app;
