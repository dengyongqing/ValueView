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

/*绘制web利率折线图*/
var valueviewWebLineRate = require('chart/web/line-rate');
/*绘制web季度柱状图*/
var valueviewWebBarQuarter = require('chart/web/bar-quarter');
/*绘制web季度折线图*/
var valueviewWebLineQuarter = require('chart/web/line-quarter');
/*绘制web折线图*/
var valueviewWebLine = require('chart/web/line');
/*绘制web分时图*/
var valueviewWebTime = require('chart/web/time');
/*绘制web的K线图*/
var valueviewWebK = require('chart/web/k');
/*绘制web柱状图*/
var valueviewWebBar = require('chart/web/bar/bar');
/*绘制web分组柱状图*/
var valueviewWebGroupBar = require('chart/web/bar/group-bar');
/*绘制web的饼状图*/
var ChartPie = require('chart/web/pie');
/*绘制web横向的柱状图*/
var valueviewWebHorizontalBar = require('chart/web/bar-horizontal');
/*绘制web横向的柱状图*/
var valueviewWebHorizontalGroupBar = require('chart/web/bar-horizontal-group');
/*绘制web柱状折线图*/
var valueviewBarLine = require('chart/web/bar-line');

/*加载样式文件*/
require('css/style.css');

// 手机分时图
window.valueviewMobileTime = valueviewMobileTime;
// 手机K线图
window.valueviewMobileK = valueviewMobileK;
// 手机折线图
window.valueviewMobiLine = valueviewMobiLine;
// 手机柱状图
window.ChartMobiBar = ChartMobiBar;
// 手机分组柱状图
window.ChartMobiGroupBar = ChartMobiGroupBar;

// web季度柱状图
window.valueviewWebBarQuarter = valueviewWebBarQuarter;
// web季度折线图
window.valueviewWebLineQuarter = valueviewWebLineQuarter;
// web利率折线图
window.valueviewWebLineRate = valueviewWebLineRate;
// web折线图
window.valueviewWebLine = valueviewWebLine;
// web行情分时图
window.valueviewWebTime = valueviewWebTime;
// web行情K线图
window.valueviewWebK = valueviewWebK;
// web柱状图
window.valueviewWebBar = valueviewWebBar;
// web分组柱状图
window.valueviewWebGroupBar = valueviewWebGroupBar;
//web饼图
window.valueviewPie = ChartPie;
// web横向单柱状图
window.valueviewWebHorizontalBar = valueviewWebHorizontalBar;
// web横向组柱状图
window.valueviewWebHorizontalGroupBar = valueviewWebHorizontalGroupBar;
// web柱状折线图
window.valueviewBarLine = valueviewBarLine;
