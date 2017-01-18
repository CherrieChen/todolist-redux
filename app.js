var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //处理收藏夹图标的
var logger = require('morgan');       //写日志
var cookieParser = require('cookie-parser');  //解析cookie req.cookies属性存放着客户端提交过来的cookie // req.cookie(key,value) 向客户端写入cookie
var bodyParser = require('body-parser');  //处理请求体的 req.body 属性存放着请求体对象
var compression = require('compression');
var app = express();
require('node-jsx').install();

//路由


// 设置模板的存放路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//把favicon图标放置在public目录之后取消注释
// app.use(favicon(path.join(__dirname, './public/images/favicon.ico')));
// app.use(logger('dev'));



app.use(bodyParser.json());  //处理content-type=json的请求体
app.use(bodyParser.urlencoded({ extended: true }));  //处理content-type=urlencoded的请求体 extended为true表示使用querystring来将请求体的字符串转成对象
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));  //静态文件服务中间件 指定一个绝对目录 的路径作为静态文件的根目录
// app.use(compression());


//指定路由




//捕获500错误并转发到错误处理中间件
app.use(function(err,req, res, next) {
  res.send(err);
});

//捕获404错误并转发到错误处理中间件
app.use(function(req, res, next) {
  var err = new Error('抱歉，您访问的资源不存在');
  res.send(err);
});

//开发时的错误处理
if (app.get('env') === 'development') {
  app.set('showStackError',true);
  app.locals.pretty = true ; //格式化页面内容
}


//捕获未处理的异常
process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
  // res.render('error', {
  //   message: err.message,
  //   error: err
  // });
});

module.exports = app;
