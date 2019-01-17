var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indexnewRouter=require('./routes/indexnew');
var fleshcontentRouter=require('./routes/fleshcontent');
var fleshcontent1Router=require('./routes/fleshcontent1');
var videoRouter=require('./routes/video');
var videocontentRouter=require('./routes/videocontent');
var loginRouter=require('./routes/login');
var regeditRouter=require('./routes/regedit');
var interestRouter=require('./routes/interest');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:"text",
  cookie:{maxAge:6000}
}));
app.use(flash());
app.use(function (req,resp,next) {
  resp.locals.err = req.flash("err");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/indexnew',indexnewRouter);
app.use('/fleshcontent',fleshcontentRouter);
app.use('/fleshcontent1',fleshcontent1Router);
app.use('/video',videoRouter);
app.use('/videocontent',videocontentRouter);
app.use('/login',loginRouter);
app.use('/regedit',regeditRouter);
app.use('/interest',interestRouter);

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
  res.render('error');
});

module.exports = app;
