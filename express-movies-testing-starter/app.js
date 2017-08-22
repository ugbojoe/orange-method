const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const movies = require('./routes/movies');
const directors = require('./routes/directors');
const actors = require('./routes/actors');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'client/public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', index);
app.use('/api/users', users);
app.use('/api/movies', movies);
app.use('/api/directors', directors);
app.use('/api/actors', actors);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  const genError = { message: 'Oops: Something bad happened' };
  res.locals.error = process.env.NODE_ENV === 'development'
                   ? err
                   : genError;

  // render the error page
  res.status(err.status || 500);
  res.json({ message: res.locals.error.message });
});

module.exports = app;
