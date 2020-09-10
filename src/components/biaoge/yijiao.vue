<template>
  <div>
    <el-button class="yijiao" type="text" @click="table = true">移交</el-button>

    <el-drawer title="我嵌套了表格!" :visible.sync="table" direction="rtl" size="50%">
      <div class="huise">
        <div class="gengdan">你共选择了3条销售跟单</div>
        <!--广西-->
        <div class="guangxi">
          <div class="yihang wanfeng">
            <img src="../../img/52.png" class="img52" />
            客户：广西梧州市万枫城市文化酒店
          </div>
          <div class="yihang chubu">销售阶段：初步洽谈</div>
        </div>
        <!--广西-->
        <div class="guangxi">
          <div class="yihang wanfeng">
            <img src="../../img/52.png" class="img52" />
            客户：广西梧州市万枫城市文化酒店
          </div>
          <div class="yihang chubu">销售阶段：初步洽谈</div>
        </div>
        <!--广西-->
        <div class="guangxi">
          <div class="yihang wanfeng">
            <img src="../../img/52.png" class="img52" />
            客户：广西梧州市万枫城市文化酒店
          </div>
          <div class="yihang chubu">销售阶段：初步洽谈</div>
        </div>
      </div>
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [
        {
          date: "",
          name: "",
          address: "",
        },
        {
          date: "",
          name: "",
          address: "",
        },
        {
          date: "",
          name: "",
          address: "",
        },
        {
          date: "",
          name: "",
          address: "",
        },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "80px",
      timer: null,
    };
  },
};
</script>

<style scoped>
.yihang {
  display: inline-block;
}
.huise {
  background-color: #fafafa;
  height: 180px;
  width: 100%;
  text-align: left;
}
.gengdan {
  margin-left: 20px;
}
.guangxi {
  height: 50px;
  line-height: 50px;
  width: 100%;
}
.chubu {
  float: right;
  position: relative;
  left: -20px;
}
.wanfeng {
  margin-left: 10px;
}
.img52 {
  position: relative;
  top: 8px;
}
</style>