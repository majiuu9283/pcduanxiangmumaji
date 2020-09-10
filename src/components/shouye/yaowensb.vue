<template>
  <div class="app">
    <div class="yihang1 zuo">
      <!--右边内容工作部分-->
      <div class="yihang1_div">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple text-left">
              <img src="../../img/60.png" class="img60" />
            </div>
          </el-col>
          <el-col :span="12" class="youbian">
            <div class="grid-content bg-purple-light text-right">
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--左边内容表格部分-->
      <div class="yihang1_di2"></div>
      <!--左边内容抽屉部分-->
      <div class="yihang1_di3">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!--左边评论区内容-->
      <div class="yihang1_di4">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" class="yihang1_di4_div1" name="first">
            <img src="../../img/62.png" width="100%" />
            <img src="../../img/62.png" width="100%" />
            <img src="../../img/62.png" width="100%" />
            <img src="../../img/62.png" width="100%" />
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--右边内容-->
    <div class="yihang1 you">
      <!--右边公告栏部分-->
      <div class="yihang1you_div1">
        <img src="../../img/63.png" class="img63" />
      </div>
      <div class="yihang1you_div2">
        <div class="yihang1you_div2_div1">
          <div class="yihang1you_div2_div1_div1">
            <img src="../../img/64.png" />
            <img src="../../img/64.png" />
          </div>
          <div class="yihang1you_div2_div1_div1">
            <img src="../../img/64.png" />
            <img src="../../img/64.png" />
          </div>
        </div>
      </div>
      <div class="yihang1you_div3">
          <img src="../../img/65.png" class="img65">
            <img src="../../img/66.png" class="img65">
              <img src="../../img/67.png" class="img65">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      activeNames: ["1"],
      activeName: "first",
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scpoed>
.yihang1 {
  display: inline-block;
  vertical-align: top;
}
.yihang1_div {
  height: 1.4%;
  background-color: white;
  line-height: 5em;
}
.app {
  width: 100%;
  height: 100%;
}
.zuo {
  width: 70%;
  height: 100%;
}
.you {
  width: 30%;
  height: 100%;
}
.img60 {
  margin-top: 0.8em;
}
.text-left {
  text-align: left;
  width: 50%;
}
.text-right {
  text-align: right;
  width: 50%;
}
.yihang1_di2 {
  background-color: white;
  width: 100%;
  height: 4%;
  background: url("../../img/61.png");
  background-size: 100% 100%;
}
.yihang1_di3 {
  width: 100%;
  height: 7%;
  background-color: white;
}
.yihang1_di4 {
  height: 20%;
  background-color: white;
  overflow: hidden;
   overflow: scroll;
}
.yihang1you_div1 {
  width: 100%;
  background-color: white;
  height: 1.4%;
}
.yihang1_di4_div1 {
  width: 100%;
  height: 120em !important;
  background-color: white;
  overflow: hidden;
  overflow: auto;
}
.yihang1you_div2_div1_div1 {
  width: 100%;
  height: 50%;
}
.yihang1you_div2_div1_div1 img {
  display: inline-block;
  width: 48%;
  margin: 1% 0px 0px 1%;
  border: 1px #f2f2f2 solid;
}
.yihang1you_div2_div1_div1 img:hover {
  cursor: pointer;
}
.yihang1you_div2 {
  height: 5%;
  background-color: white;
}
.yihang1you_div2_div1 {
  width: 90%;
  height: 90%;
  margin: 0 auto;
}
.img63 {
  width: 96%;
  margin: 1em auto;
}
.yihang1you_div3 {
  height: 30%;
  width: 100%;
  background-color: white;
}
.img65{
  width: 80%;
  margin: 2em auto;
}

</style>