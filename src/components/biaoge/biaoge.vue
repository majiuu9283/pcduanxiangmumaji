<template>
  <div class="sd">
    <!--左边部分-->
    <div class="yihang border">
      <!--客户主线-->
      <div class="yihang_div1 border">
        <img src="../../img/40.png" class="yihang2 img40" />
        <select class="kehu yihang2">
          <option>客户主线</option>
          <option>主线</option>
          <option>行业</option>
        </select>
      </div>
      <!--折叠栏-->
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <!--右边部分-->
    <div class="yihang border">
      <div class="yihang_div2">
        <!--我负责的下拉框那一栏的内容-->
        <ul class="yihang_div2_li1">
          <li>
            <!--我负责的下拉框-->
            <div class="yihang3">
              <div class="yihang4">
                <img src="../../img/41.png" class="img41" />
              </div>
              <div class="yihang4">
                <select class="yihang4_select">
                  <option>我负责的</option>
                </select>
              </div>
            </div>
            <!--全部客户-->
            <div class="yihang3">
              <div class="yihang100 biankuang">
                <span>全部客户</span>
                <span>268</span>
              </div>
              <div class="yihang100 biankuang">
                <span>今日新增</span>
                <span>25</span>
              </div>
              <div class="yihang100 biankuang">
                <span>今日归还</span>
                <span>16</span>
              </div>
              <div class="yihang100 biankuang">
                <span>今天生日</span>
                <span>5</span>
              </div>
            </div>
          </li>
          <!--搜索框-->
          <li class="sousuo">
            <input type="text" placeholder="客户名称、地区、联系人、负责人" class="input1" />
          </li>
        </ul>
        <ul class="yihang_div2_li2">
          <li>
            <div class="yihang100">已选6条</div>
            <div class="yihang100 fenpeo">领取</div>
            <div class="yihang100 fenpeo">分配</div>
            <div class="yihang100 fenpeo">发短信</div>
          </li>
          <li>
            <gongongchi></gongongchi>
          </li>
        </ul>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="地址">
            <el-input v-model="formLabelAlign.name" class="input3"></el-input>
          </el-form-item>
          <el-form-item label="客户信息">
            <el-input v-model="formLabelAlign.region" class="input3"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="formLabelAlign.type" class="input3"></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-button type="primary" @click="add">点击增加</el-button>
        </el-row>
        <div class="biaogezujian">
          <danxuanbiaoge></danxuanbiaoge>
        </div>
      </div>
    </div>
    <div class="shangyi">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
import danxuanbiaoge from "../biaoge/danxuanbiaoge.vue";
import gongongchi from "../biaoge/gongongchi.vue";

export default {
  data() {
    return {
      labelPosition: "left",
      //输入框中绑定的v-model属性
      formLabelAlign: {
        name: "", //地址
        region: "", //客户信息
        type: "", //联系人
      },
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
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  components: {
    danxuanbiaoge,
    gongongchi,
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },

    //增加
    //写增加的方法
    add() {
      this.$axios
        .post(
          "http://139.9.169.87:8081/examsystem/addProfessional",
          this.$qs.stringify({
            professionalName: this.formLabelAlign.region,
            professionalDesc: this.formLabelAlign.type,
          })
        )
        .then((res) => {
          //这是从本地请求的数据接口，
        });
    },
  },
};
</script>

<style scoped>
/* .border {
  border: 1px red solid;
} */

.sd {
  width: 100%;
  height: 125em;
}
.yihang {
  display: inline-block;
  vertical-align: top;
}
.yihang:nth-of-type(1) {
  width: 17%;
  height: 1250px;
}
.yihang:nth-of-type(2) {
  width: 81%;
  height: 1250px;
  position: relative;
  left: 20px;
}
.yihang_div1 {
  height: 50px;
  width: 100%;
  border-bottom: 2px solid #109fff;
  text-align: left;
}
.kehu {
  width: 100px;
  height: 30px;
  line-height: 50px;
  position: relative;
  top: -5px;
}
.kehu option {
  width: 100px;
  height: 30px;
  line-height: 50px;
}
.yihang_div2 {
  height: 50px;
  width: 100%;
  border-bottom: 2px solid #109fff;
}
.yihang2 {
  display: inline-block;
}
.img40 {
  position: relative;
  top: 5px;
  left: -10px;
}
.yihang_div2_li1 li {
  height: 50px;
  width: 50%;
  display: inline-block;
  vertical-align: top;
}
.yihang_div2_li1 li:nth-of-type(1) {
  text-align: left;
  vertical-align: top;
}
.yihang_div2_li1 li:nth-of-type(2) {
  text-align: right;
  vertical-align: top;
}
.yihang3 {
  display: inline-block;
  vertical-align: top;
  height: 50px;
}
.yihang3:nth-of-type(1) {
  width: 40%;
}
.yihang3:nth-of-type(2) {
  width: 60%;
}
.el-dropdown-link {
  cursor: pointer;
  color: grey;
  border: 1px #8492a6 solid;
  border-radius: 25px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.yihang4 {
  display: inline-block;
}

.img41 {
  position: relative;
  top: 7px;
}
.yihang4_select {
  width: 150px;
  height: 30px;
  margin: 0px 0px 0px 7px;
}
.yihang3 span {
  display: block;
  margin: 8px 0px 0px 7px;
}
.yihang100 {
  display: inline-block;
}

.biankuang {
  width: 20%;
  margin: 0px 0px 0px 5px;
  font-size: 12px;
  border: 1px #eaeaea solid;
  text-align: center;
}
.biankuang:hover {
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px #eaeaea;
}
.input1 {
  width: 210px;
  border-radius: 5px;
  height: 30px;
  border: 1px #eaeaea solid;
}
.sousuo {
  line-height: 50px;
}
.yihang_div2_li2 li {
  width: 50%;
  height: 20px;
  margin: 10px 0px 0px 0px;
  display: inline-block;
  font-size: 12px;
}
.yihang_div2_li2 li:nth-of-type(1) {
  text-align: left;
  position: relative;
  top: -16px;
}
.yihang_div2_li2 li:nth-of-type(2) {
  text-align: right;
  position: relative;
  top: -8px;
}
.fenpeo {
  width: 40px;
  height: 25px;
  border-radius: 20px;
  border: 1px #eaeaea solid;
  margin: 0px 0px 0px 10px;
  text-align: center;
  line-height: 25px;
  position: relative;
  top: -1px;
}
.fenpeo:hover {
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px #eaeaea;
}
.biaogezujian {
  margin: 20px 0px 0px 0px;
}
.shangyi {
  margin: -340px 0px 0px 230px;
}
</style>