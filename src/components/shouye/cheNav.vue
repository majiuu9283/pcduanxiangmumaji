<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo chenav"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
   
    >
      <el-submenu index="1" class="biankuang" >
        <template slot="title">
          <img src="../../img/8.png" />
        </template>
      </el-submenu>
      <el-menu-item index="2" class="biankuang">
        <img src="../../img/7.png" />
        <span slot="title">
          <span class="crm">CRM</span>
          <br />
          <br />
          <a @click="tiao1()">客户公共池</a>
          <br />
          <br />
          <a @click="tiao()">发现</a>
          <br />
          <br />
          <a @click="tiao2()">线索</a>
          <br />
          <br />
          <a @click="tiao3()">商机</a>
          <br />
          <br />
          <a @click="tiao4()">客户管理</a>
          <br />
          <br />
          <a @click="tiao5()">合同</a>
          <br />
          <br />
          <a @click="tiao6()">联系人</a>
          <br />
          <br />
          <a @click="tiao11()">销售任务</a>
          <br />
          <br />
          <a href="#">日程</a>
          <br />
          <br />
          <a @click="tiao13()">外勤管理</a>
          <br />
          <br />
          <a @click="tiao12()">产品</a>
        </span>
      </el-menu-item>
      <el-menu-item index="3" disabled class="biankuang">
        <img src="../../img/9.png" />
        <span slot="title">
          统计分析
          <br />
          <br />
          <a @click="tiao7()">仪表盘</a>
          <br />
          <br />
          <a @click="tiao8()">数据报表</a>
          <br />
          <br />
          <a @click="tiao9()">销售分析</a>
          <br />
          <br />
          <a @click="tiao10()">客户分析</a>
        </span>
      </el-menu-item>
      <el-menu-item index="4" class="biankuang">
        <img src="../../img/11.png" />
        <span slot="title">知识库</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tiao() {
      this.$router.replace("/faxian"); //
    },
    tiao1() {
      this.$router.replace("/biaoge"); //
    },
    tiao2() {
      this.$router.replace("/xiansuobiaoge"); //
    },
    tiao3() {
      this.$router.replace("/shangjibiaoge"); //
    },
    tiao4() {
      this.$router.replace("/kehuguanli"); //
    },
    tiao5() {
      this.$router.replace("/hetong"); //
    },
    tiao6() {
      this.$router.replace("/lianxiren"); //
    },
    tiao7() {
      this.$router.replace("/yibiaopan"); //
    },
    tiao8() {
      this.$router.replace("/shujubaobiao"); //
    },
    tiao9() {
      this.$router.replace("/xiaoshoufenxi"); //
    },
    tiao10() {
      this.$router.replace("/kehufenxi"); //
    },
    tiao11() {
      this.$router.replace("/xiaoshourenwu"); //
    },
    tiao12() {
      this.$router.replace("/chanping"); //
    },
    tiao13() {
      this.$router.replace("/ditu"); //
    },
    tiao14() {
      this.$router.replace("/denglu"); //
    },
  },
};
</script>

<style scoepd>


</style>