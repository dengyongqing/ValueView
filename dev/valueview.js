/*绘制手机分时图*/
var valueviewMobileTime = require('chart/mobile/chart_time');
/*绘制手机K线图*/
var valueviewMobileK = require('chart/mobile/chart_k');


/*绘制web分时图*/
var valueviewWebTime = require('chart/web/time');
/*绘制web的K线图*/
var valueviewWebK = require('chart/web/k');


/*加载样式文件*/
require('css/style.css');

// 手机分时图
window.valueviewMobileTime = valueviewMobileTime;
// 手机K线图
window.valueviewMobileK = valueviewMobileK;


// web行情分时图
window.valueviewWebTime = valueviewWebTime;
// web行情K线图
window.valueviewWebK = valueviewWebK;

