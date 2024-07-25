// // chart utils
// /**
//  * class LineChart extends BaseChart {}
//  * class BarChart extends BaseChart {}
//  * class PieChart extends BaseChart {}
//  * 分开定义无法处理多个yAxis 具有不同的 type
//  */

// // 组合配置
// function combine() {}

// function grid() {}

// function title() {}

// function tooltip() {}

// function legend() {}

// function xAxis() {}

// function yAxis() {}

// // 这里还需要对于具体的chart类型处理下
// function series() {}

// function dataZoom() {}

// function bar() {}
// function line() {}
// function pie() {}

// function extend() {}

// // =>
// combine(
//   grid(),
//   title(),
//   tooltip(),
//   legend(),
//   xAxis(),
//   yAxis(),
//   series(
//     bar(),
//     line(),
//     pie(),
//   ),
//   dataZoom(),
// )
// {
//   color: ['#5CC3FF', '#7F7BF1', '#FCA028', '#54D1BC', '#E86958', '#5C8DFF', '#0FC6C2', '#E83834'],
//   grid: {
//     top: 60,
//     bottom: 40,
//     left: 24,
//     right: 18,
//     containLabel: true
//   },
//   axisPointer: {
//     label: {
//       formatter: ({ axisDimension, axisIndex, value }) => {
//         return axisDimension === 'x' ? value : (+value).toFixed(2)
//       }
//     }
//   },
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: { type: 'cross', crossStyle: { color: '#999' } }
//   },
//   legend: {
//     type: 'scroll',
//     show: true,
//     data: legends,
//     top: 15,
//     left: 120,
//     textStyle: { color: pStore.getTheme() === 'dark' ? '#c5c5c5' : '#333' }
//   },
//   xAxis: [
//     {
//       type: 'category',
//       data: dateList,
//       boundaryGap: false,
//       axisPointer: { type: 'shadow' },
//       axisTick: { show: false },
//       axisLabel: { rotate: 30 }
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value',
//       name: '单位：BPS',
//       nameGap: 25,
//       min: val => (isNaN(+val.min) ? 0 : Math.min(val.min, 0)),
//       max: val => (isNaN(+val.max) ? 100 : val.max),
//       axisLabel: { formatter: value => toFixed(value) },
//       splitLine: {
//         lineStyle: { type: 'dashed' }
//       },
//       nameTextStyle: { align: 'right' }
//     }
//   ],
//   series: series.map((data, i) => ({
//     name: legends[i],
//     type: 'line',
//     connectNulls: true,
//     smooth: true, // 曲线
//     symbol: 'circle', // 设置节点样式为实心圆
//     symbolSize: 6, // 设置节点的大小
//     itemStyle: {
//       opacity: 0 // 设置节点的透明度为0，初始时节点不可见
//     },
//     emphasis: {
//       // 设置鼠标悬浮时节点的样式
//       itemStyle: {
//         opacity: 1 // 设置节点的透明度为1，鼠标悬浮时节点可见
//       }
//     },
//     data,
//     tooltip: {
//       valueFormatter(val) {
//         if (isEmpty(val)) return '暂无数据'
//         return `${toThousands(toFixed(val))} BPS`
//       }
//     }
//   })),
//   dataZoom: appendDataZoom(dateList)
// }
