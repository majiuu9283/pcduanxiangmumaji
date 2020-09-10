<template>
  <div class="forget">
    <br />
    <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <input type="radio" class="raido" />
          {{title[0]}} (
          <font class="bianse" color="rgb(0, 136, 254);">{{title[1]}}</font> )
          <font class="bianse" color="rgb(0, 136, 254);">{{title[2]}}</font>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">{{title[3]}}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: [],
    };
  },
  created() {
    this.$axios({
      url:
        "https://www.fastmock.site/mock/c306b1c014f14fb7f6c01ef642766d69/_shop_02/api/:id",
      method: "get",
    }).then((res) => {
      console.log(res.data);
      this.title = res.data.data.denglu_qiehuan;
    });
  },
};
</script>

<style scoped>
/* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
.bianse {
  color: rgb(0, 136, 254);
}
.el-row {
  margin: 0px 0px 0px 0px;
}
.raido {
  position: relative;
  top: 2px;
}
.forget {
  font-size: 12px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 35px;
}
.row-bg {
  padding: 10px 0;
}
</style>