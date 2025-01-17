var dom = document.getElementById("box3_left");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '极坐标系下的堆叠柱状图';

option = {
	textStyle:{//图例文字的样式
                color:'#dbdbdb',
                fontSize:10
           },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: '需要维修',
        stack: 'normal'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: '状态不佳',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: '正常运行',
        stack: 'a'
    }],
    legend: {
        show: true,
        textStyle:{//图例文字的样式
                color:'#dbdbdb',
                fontSize:10
           },
        data: ['需要维修', '状态不佳', '正常运行']
    }
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}