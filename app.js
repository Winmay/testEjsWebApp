var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Express处理这个post请求是通过中间件bodyParser
//没有这个中间件Express就不知道怎么处理这个请求，
//通过bodyParser中间件分析 application/x-www-form-urlencoded
//和application/json请求，并把变量存入req.body，这种我们才能够获取到！
var bodyParser = require('body-parser');

var session = require('express-session');

var indexRouter = require('./routes/index');
var subform = require('./routes/subform');
var usesession = require('./routes/usesession');
var usecookies = require('./routes/usecookies');
var usecrypto = require('./routes/usecrypto');  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Express处理这个post请求是通过中间件bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//这里传入了一个密钥加session id
app.use(cookieParser('Wilson'));
//使用靠就这个中间件
app.use(session({ secret: 'wilson'}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/subform', subform);
app.use('/usesession', usesession);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);

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
  //表示如果是开发环境，处理error时会输出堆栈信息
  res.render('error', {
        message: err.message,
        error: err
    });
});

app.listen(8100,function(){
    console.log("Server Start!");
});

module.exports = app;
