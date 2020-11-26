"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartConfig = void 0;

/**
* Change all chart colors
*/
var ChartConfig = {
  color: {
    'primary': '#5D92F4',
    'warning': '#FFB70F',
    'danger': '#e4002b',
    'success': '#00D014',
    'info': '#00D0BD',
    'white': '#fff',
    'lightGrey': '#E8ECEE'
  },
  lineChartAxesColor: '#E9ECEF',
  legendFontColor: '#AAAEB3',
  // only works on react chart js 2
  chartGridColor: '#EAEAEA',
  axesColor: '#657786',
  shadowColor: 'rgba(0,0,0,0.3)'
};
exports.ChartConfig = ChartConfig;