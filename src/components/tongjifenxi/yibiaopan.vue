<template>
  <div class="tubiao">
    <div class="yibiaopan">
      <img src="../../img/55.png" class="yihang img55" />
      <div class="yihang">仪表盘</div>
      <input class="input1" value="新建仪表盘" type="button" />
    </div>
    <div id="myChart2" :style="{width: '400px', height: '300px'}" class="yihang2"></div>
    <div id="myChart3" :style="{width: '400px', height: '300px'}" class="yihang2"></div>
    <br />
    <!--图标容器1-->
    <div id="myChart" :style="{width: '400px', height: '300px'}" class="yihang2"></div>
    <!--图标容器2-->
    <div id="myChart1" :style="{width: '400px', height: '300px'}" class="yihang2"></div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //钩子函数
  mounted() {
    this.draw();
    this.draw1();
    this.draw2();
    this.draw3();
  },
  methods: {
    draw() {
      // 初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var option = {
        //此处占用篇幅过大，先省略等下会进行解释
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };

      //防止越界，重绘canvas
      window.onresize = myChart.resize;
      myChart.setOption(option); //设置option
    },
    draw1() {
      // 初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      var option = {
        //此处占用篇幅过大，先省略等下会进行解释
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 58212, "Matcha Latte"],
            [57.1, 78254, "Milk Tea"],
            [74.4, 41032, "Cheese Cocoa"],
            [50.1, 12755, "Cheese Brownie"],
            [89.7, 20145, "Matcha Cocoa"],
            [68.1, 79146, "Tea"],
            [19.6, 91852, "Orange Juice"],
            [10.6, 101852, "Lemon Juice"],
            [32.7, 20112, "Walnut Brownie"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "amount" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Score", "Low Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#D7DA8B", "#E15457"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      };

      //防止越界，重绘canvas
      window.onresize = myChart1.resize;
      myChart1.setOption(option); //设置option
    },
    draw2() {
      // 初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表

      var option = {
        silent: true,
        series: {
          radius: ["15%", "80%"],
          type: "sunburst",
          sort: null,
          highlightPolicy: "ancestor",
          data: [
            {
              value: 8,
              children: [
                {
                  value: 4,
                  children: [
                    {
                      value: 2,
                    },
                    {
                      value: 1,
                    },
                    {
                      value: 1,
                    },
                    {
                      value: 0.5,
                    },
                  ],
                },
                {
                  value: 2,
                },
              ],
            },
            {
              value: 4,
              children: [
                {
                  children: [
                    {
                      value: 2,
                    },
                  ],
                },
              ],
            },
            {
              value: 4,
              children: [
                {
                  children: [
                    {
                      value: 2,
                    },
                  ],
                },
              ],
            },
            {
              value: 3,
              children: [
                {
                  children: [
                    {
                      value: 1,
                    },
                  ],
                },
              ],
            },
          ],
          label: {
            color: "#fff",
            textBorderColor: "#666",
            textBorderWidth: 2,
            borderColor: "#999",
            borderWidth: 1,
            formatter: function (param) {
              var depth = param.treePathInfo.length;
              if (depth === 2) {
                return "radial";
              } else if (depth === 3) {
                return "tangential";
              } else if (depth === 4) {
                return "0";
              }
            },
          },
          levels: [
            {},
            {
              itemStyle: {
                color: "red",
              },
              label: {
                rotate: "radial",
              },
            },
            {
              itemStyle: {
                color: "orange",
              },
              label: {
                rotate: "tangential",
              },
            },
            {
              itemStyle: {
                color: "yellow",
              },
              label: {
                rotate: 0,
              },
            },
          ],
        },
      };

      //防止越界，重绘canvas
      window.onresize = myChart2.resize;
      myChart2.setOption(option); //设置option
    },
    draw3() {
      // 初始化echarts实例
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      var option = {
        parallelAxis: [
          { dim: 0, name: "Price" },
          { dim: 1, name: "Net Weight" },
          { dim: 2, name: "Amount" },
          {
            dim: 3,
            name: "Score",
            type: "category",
            data: ["Excellent", "Good", "OK", "Bad"],
          },
        ],
        series: {
          type: "parallel",
          lineStyle: {
            width: 4,
          },
          data: [
            [12.99, 100, 82, "Good"],
            [9.99, 80, 77, "OK"],
            [20, 120, 60, "Excellent"],
          ],
        },
      };

      //防止越界，重绘canvas
      window.onresize = myChart3.resize;
      myChart3.setOption(option); //设置option
    },
  },
};
</script>

<style scoped>
.tubiao {


}
.yihang {
  display: inline-block;

}
.img55 {
  position: relative;
  top: 10px;

}
.yihang2 {
  display: inline-block;

}
.yihang2:nth-of-type(2) {
  margin: 0px 0px 0px 200px;

}
#myChart1 {
  margin: 0px 0px 0px 170px;

}
.yibiaopan {
  height: 50px;
  width: 100%;

  border-bottom: 3px #109fff solid;
  text-align: left;
}
#myChart2 {
  position: relative;
  left: -180px;

}
.input1 {
  float: right;
  position: relative;
  overflow: hidden;
  left: -19px;
  top: 10px;
  height: 30px;
  background-color: white;
  border: 1px solid #f2f2f2;
  width: 100px;
  color: gray;

}
.input1:hover {
  cursor: pointer;

}
</style>