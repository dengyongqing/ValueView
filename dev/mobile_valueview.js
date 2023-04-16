/*绘制手机分时图*/
var valueviewMobileTime = require('chart/mobile/chart_time');
/*绘制手机K线图*/
var valueviewMobileK = require('chart/mobile/chart_k');
/*绘制手机折线图*/
var valueviewMobiLine = require('chart/mobile/chart_line');
/*绘制手机柱状图*/
var ChartMobiBar = require('chart/mobile/bar/bar');
/*绘制手机分组柱状图*/
var ChartMobiGroupBar = require('chart/mobile/bar/group-bar');
/*绘制web折线图*/
var valueviewWebLine = require('chart/web/line');

/*加载样式文件*/
require('css/style.css');

// 手机分时图
window.valueviewMobileTime = valueviewMobileTime;
// 手机K线图
window.valueviewMobileK = valueviewMobileK;
// 手机折线图
// window.valueviewMobiLine = valueviewMobiLine;
window.valueviewMobiLine = valueviewWebLine;
// 手机柱状图
window.ChartMobiBar = ChartMobiBar;
// 手机分组柱状图
window.ChartMobiGroupBar = ChartMobiGroupBar;
