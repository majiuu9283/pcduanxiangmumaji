<template>
  <div>
    <!--客户公共池抽屉-->
    <div class="yihang">
      <el-button @click="drawer = true" class="img49" type="primary" style="margin-left: 16px;">
        <img src="../../img/49.png" />
      </el-button>
      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <!--标题部分-->
        <div class="border num1">
          <img src="../../img/43.png" class="yihang" />
          <div class="yihang news">新建公共池用户</div>
        </div>
        <div class="huise"></div>
        <!--客户信息-->
        <div class="kehumoban border">
          <select class="xialakuangkehu">
            <option>选择客户模板</option>
            <option>
              区域代理
              <input type="radio" />
            </option>
            <option>
              普通客户
              <input type="radio" />
            </option>
            <option>
              A类客户
              <input type="radio" />
            </option>
            <option>
              新建客户模板
              <input type="radio" />
            </option>
          </select>
        </div>
        <div class="huise2 kehuxingxi">
          客户信息
          <img src="../../img/44.png" class="img44" />
        </div>
        <!--表单验证-->
        <div class="biaodan1 border bianse3">
          客户名称
          <img src="../../img/45.png" />
          <input type="text" placeholder="请输入客户名称" />
          <button class="chachong">查重</button>
          <button class="chachong">工商信息</button>
        </div>
        <div class="biaodan1 border bianse3">
          行业
          <img src="../../img/45.png" />
          <select name id="sel">
            <option>选择行业</option>
          </select>
        </div>
        <div class="biaodan1 border bianse3">
          地区
          <img src="../../img/45.png" />
          <select name id="sel" class="bianse3">
            <option class="bianse3">选择地区</option>
          </select>
        </div>
        <div class="biaodan1 border bianse3">
          地址
          <img src="../../img/45.png" />
          <input type="text" placeholder="请输入详细地址" class="address" />
        </div>
        <div class="fuxuan border bianse3">
          简介
          <textarea rows="3" cols="20" class="jianije bianse3">
            记录点什么
          </textarea>
        </div>
        <div class="fuxuan border bianse3">
          <div class="yihang">附件：</div>
          <div class="yihang tupian">
            <shangchuan></shangchuan>
          </div>
        </div>
      </el-drawer>
    </div>

    <div class="piliangdaoru3 yihang">
      <piliangdaoru></piliangdaoru>
    </div>
  </div>
</template>

<script>
import piliangdaoru from "../biaoge/piliangdaoru.vue";
import shangchuan from "../biaoge/shangchuan.vue";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    piliangdaoru,
    shangchuan,
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
.piliangdaoru3 {
  text-align: left;
}
.tupian {
  margin: 0px 0px 0px 32px;
}
</style>