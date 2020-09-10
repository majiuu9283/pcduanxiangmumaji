<template>
  <div>
    <!--批量导入抽屉-->
    <el-button @click="drawer = true" class="img48" type="primary" style="margin-left: 16px;">
      <img src="../../img/48.png" />
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <div>
        <div class="daoru border">
          <img src="../../img/46.png" class="yihang" />
          <div class="yihang daoru2">批量导入</div>
        </div>
        <div class="huise"></div>
      </div>
    </el-drawer>
    <!--条件满足-->
    <el-dropdown>
      <span class="el-dropdown-link">
        <img src="../../img/47.png" class="img47" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>一下条件满足，客户将收回到公共客户池</el-dropdown-item>
        <el-dropdown-item>
          <img src="../../img/50.png" />领用到商机后，一天内需写一条跟进记录
        </el-dropdown-item>
        <el-dropdown-item>
          <img src="../../img/50.png" />客户进入跟单-确认需求后，一天内需写一条跟进记
        </el-dropdown-item>
        <el-dropdown-item disabled>
          <img src="../../img/50.png" />
          客户进入跟单-方案报价后，三天内需写一条跟进记
        </el-dropdown-item>
        <el-dropdown-item divided>
          <img src="../../img/50.png" />客户进入跟单-确认需求后，一天内需写一条跟进记
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
/* .border {
  border: 1px red solid;
} */
.yihang {
  display: inline-block;
}
.news {
  font-size: 20px;
  font-weight: bold;
  position: relative;
  top: -10px;
}
.num1 {
  height: 50px;
  width: 100%;
  text-align: left;
}
.huise {
  background-color: #f9f9f9;
  height: 10px;
  width: 100%;
}
.kehumoban {
  height: 40px;
  width: 100%;
  text-align: left;

  line-height: 40px;
}
.xialakuangkehu {
  height: 30px;
  margin-left: 10px;
  color: #a1a1a1;
}
.huise2 {
  background-color: #f9f9f9;
}
.kehuxingxi {
  height: 40px;
  width: 100%;
  text-align: left;
  margin-left: 10px;
}
.img44 {
  position: relative;
  top: 8px;
}
.biaodan1 {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: left;
  margin-left: 10px;
  margin-top: 20px;
}
.biaodan1 input {
  height: 30px;
  width: 200px;
}
.biaodan1 select {
  height: 30px;
  width: 207px;
}
.fuxuan {
  height: 100px;
  margin-left: 10px;
  text-align: left;
  margin-top: 20px;
}
#sel {
  margin: 0px 0px 0px 22px;
  color: #999999;
}
.address {
  margin: 0px 0px 0px 22px;
  width: 207px !important;
}
.jianije {
  margin: 0px 0px 0px 42px;
  width: 207px !important;
  height: 100%;
  vertical-align: top;
}
.bianse3 {
  color: #999999 !important;
}
.chachong {
  display: inline-block;
  background-color: white;
  border: 1px #999999 solid;
  margin-left: 10px;
  color: #999999;

  border-radius: 2px;
}
.chachong:hover {
  cursor: pointer;
}
.daoru {
  height: 40px;
  line-height: 40px;
  text-align: left;
  margin-left: 10px;
  font-size: 22px;
  font-weight: bold;
}
.daoru2 {
  position: relative;
  top: -5px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.img47 {
  margin: 0px 0px 0px 20px;
  position: relative;
  top: 2px;
  left: -19px;
}
</style>