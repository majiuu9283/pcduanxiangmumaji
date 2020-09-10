<template>
  <div class="app">
    <!--左边路由导航部分-->
    <div class="yihang1 yihang_div1 border">
      <div class="chenav1">
        <cheNav class="chenav2"></cheNav>
      </div>
    </div>
    <!--右边内容部分部分-->
    <div class="yihang1 yihang_div2 border">

      <div class="yihang_div2_div1">
         <!--右边内容今日工作部分-->
        <div class="yihang_div2_div1_div1">
          <div class="yihang1">
            <img src="../../src/img/58.png" class="img58" />
          </div>
          <div class="yihang1">
            <img src="../../src/img/59.png" class="img59" />
          </div>
          <div class="yihang1 jiantouxia">
            <el-dropdown>
              <span class="el-dropdown-link tubiao">
                <i class="el-icon-arrow-down el-icon--right "></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        
      </div>
      <div class="yihang_div2_div2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import cheNav from "../components/shouye/cheNav.vue";
import chenanxia from "../components/shouye/chenanxia.vue";
import sousuo from "../components/shouye/sousuo.vue";

import "../public.css";
export default {
  data() {
    return {
      content1: "",
    };
  },
  computed: {},

  components: {
    cheNav,
    chenanxia,
    sousuo,
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 320em;
}
.yihang1 {
  display: inline-block;
}
/* .border{
    border: 1px red solid;
  } */
.yihang_div1 {
  width: 4.5%;
  height: 100%;
  vertical-align: top;
  position: fixed;
  top: 0em;
  left: 0em;
}
.yihang_div2 {
  width: 92%;
  height: 100%;
  vertical-align: top;
  margin: 5em 0px 0px 9rem;
}
.yihang_div2_div1 {
  width: 100%;
  height: 8%; 
  position: fixed;
  top: 0px;
  left: 0px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.yihang_div2_div2 {
  width: 100%;
  height: 92%;
  margin-top: 2em;
  margin-left: -2em;  
}
.chenav1 {
  margin-top: 5em;
  width: 100%;
  height: 100%;

}
.chenav2 {
  width: 100%;
}
.img58 {
  height: 3em;
  margin-top:0.4em ;
}
.img59 {
  height: 3em;
  margin-top:0.4em ;
}
.yihang_div2_div1_div1{
  width: 100%;
  text-align: right;
  margin-left: -3em;
}
.yihang_div2_div1_div2{
  height: 2%;
  background-color: white;
  width: 100%;
}

</style>