<template>
  <div>
    <tr v-cloak v-for="(item, index) of slist" :key="item">
      <td>{{index+1}}</td>
      <td>{{item.username}}</td>
      <td>{{item.email}}</td>
      <td>{{item.sex}}</td>
      <td>{{item.province}}</td>
      <td>{{item.hobby.join(' | ')}}</td>
      <td>
        <a href="javascript:;" @click="showOverlay(index)">修改</a> |
        <a href="javascript:;" @click="del(index)">删除</a>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          username: "aaaaa",
          email: "123@qq.com",
          sex: "男",
          province: "北京市",
          hobby: ["篮球", "读书", "编程"],
        },
        {
          username: "bbbbb",
          email: "bbbbbbb@163.com",
          sex: "女",
          province: "河北省",
          hobby: ["弹琴", "读书", "插画"],
        },
        // ...
      ],
    };
  },
  setSlist(arr) {
    this.slist = JSON.parse(JSON.stringify(arr));
  },
  created() {
    this.list.push({
      username: "ffff",
      email: "fffffff@163.com",
      sex: "女",
      province: "河南省",
      hobby: ["弹琴", "插画"],
    });
  },
};
</script>

<style scoped>
</style>