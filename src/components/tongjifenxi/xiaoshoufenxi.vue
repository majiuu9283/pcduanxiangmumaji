<template>
  <div>
    <div class="xiaoshoufenxi border">
      <!--左边折叠栏-->
      <!--折叠栏-->
      <div class="yihang zuo">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="xiamian"></el-tree>
      </div>
      <!--右边销售分析栏-->
      <div class="yihang you">
        <div class="fenxi">
          <img src="../../img/44.png" class="img100" />
          销售漏斗分析
        </div>
        <div class="fenxi2">
          <img src="../../img/44.png" class="img100" />
          XX统计&nbsp;Sales performance
        </div>
        <div class="yihang yibiao">
          <div id="myChart1" :style="{width: '400px', height: '300px'}"></div>
        </div>
        <div class="yihang yibiao">
          <div id="myChart2" :style="{width: '400px', height: '300px'}"></div>
        </div>
        <div>
          <biaobiao></biaobiao>
        </div>
        <img src="../../img/54.png" class="img54">
      </div>
    </div>
  </div>
</template>

<script>
import biaobiao from '../tongjifenxi/biaobiao.vue'
export default {
  data() {
    return {
      data: [
        {
          label: "区域代理",
          children: [
            {
              label: "四川省",
            },
            {
              label: "湖南省",
            },
            {
              label: "湖北省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
          ],
        },
        {
          label: "普通客户",
          children: [
            {
              label: "四川省",
            },
            {
              label: "湖南省",
            },
            {
              label: "湖北省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
          ],
        },
        {
          label: "普通客户",
          children: [
            {
              label: "四川省",
            },
            {
              label: "湖南省",
            },
            {
              label: "湖北省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
          ],
        },
        {
          label: "普通客户",
          children: [
            {
              label: "四川省",
            },
            {
              label: "湖南省",
            },
            {
              label: "湖北省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
          ],
        },
        {
          label: "普通客户",
          children: [
            {
              label: "四川省",
            },
            {
              label: "湖南省",
            },
            {
              label: "湖北省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
            {
              label: "广东省",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {
    this.draw();
    this.draw1();
  },
  components:{
      biaobiao
  },

  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    draw() {
      // 初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      var option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };

      //防止越界，重绘canvas
      window.onresize = myChart1.resize;
      myChart1.setOption(option); //设置option
    },
    draw1() {
      // 初始化echarts实例
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      var option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };

      //防止越界，重绘canvas
      window.onresize = myChart2.resize;
      myChart2.setOption(option); //设置option
    },
  },
};
</script>

<style scoped>

.yihang {
  display: inline-block;
 
}
.zuo {
  width: 15%;
  float: left;

}

.xiaoshoufenxi {
  width: 1240px;
  height: 3600px;


}

.you {
  width: 80%;
  height: 3600px;
 

}
.fenxi {
  width: 100%;
  text-align: left;
  height: 40px;
  border-bottom: 3px #109fff solid;
}
.fenxi2 {
  width: 100%;
  text-align: left;
  height: 40px;

}
.img100 {
  position: relative;
  top: 6px;

}
.yibiao {
  width: 48%;
  height: 300px;

  margin: 10px 0px 0px 10px;
}
.img54{
    width: 90%;
    margin: 0 auto;
}
</style>