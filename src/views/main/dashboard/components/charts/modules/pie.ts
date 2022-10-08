/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-09-29 14:17:31
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 18:10:44
 * @FilePath: \web\novel-partner-client\src\views\main\dashboard\components\charts\modules\pie.ts
 * @Description: echarts图表
 */
const option = {
  title: {
      text: '浏览器占比变化',
      subtext: '纯属虚构',
      top: 10,
      left: 10
  },
  tooltip: {
      trigger: 'item'
  },
  legend: {
      type: 'scroll',
      bottom: 10,
      data: (function (){
          var list = [];
          for (var i = 1; i <=28; i++) {
              list.push(i + 2000 + '');
          }
          return list;
      })()
  },
  visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true
  },
  radar: {
      indicator: [
          { name: 'IE8-', max: 1000 },
          { name: 'IE9+', max: 1000 },
          { name: 'Safari', max: 1000 },
          { name: 'Firefox', max: 1000 },
          { name: 'Chrome', max: 1000 },
      ]
  },
  series: (function (){
      var series = [];
      for (var i = 1; i <= 28; i++) {
          series.push({
              name: '浏览器（数据纯属虚构）',
              type: 'radar',
              symbol: 'none',
              lineStyle: {
                  width: 1
              },
              emphasis: {
                  areaStyle: {
                      color: 'rgba(0,250,0,0.3)'
                  }
              },
              data: [{
                  value: [
                      (40 - i) * 10,
                      (38 - i) * 4 + 60,
                      i * 5 + 10,
                      i * 9,
                      i * i /2
                  ],
                  name: i + 2000 + ''
              }]
          });
      }
      return series;
  })()
};

export default option