var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task('test', ['webpack'], function (){
    gulp.run('ftp');
});

gulp.task("webpack", function(callback) {
    console.info('webpack开始');
  var myConfig = Object.create(webpackConfig);
  webpack(
    myConfig
  , function(err, stats) {
    console.info('webpack结束');
    callback();
  });
});