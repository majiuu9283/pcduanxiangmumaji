<template>
  <div>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      class="yihang quanxuan"
    >全选</el-checkbox>
    <div style="margin: 15px 0;" class="yihang"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="yihang">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ["企业名", "法人/股东", "经营范围", "品牌/产品"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style scoped>
.yihang {
  display: inline-block;
  margin-left: -40px;
}
.quanxuan {
  position: relative;
  left: -60px;
}
</style>