<template>
  <div>
    <div class="yihang">
      客户信息：
      <input type="text" placeholder="请输入要修改的客户信息" v-model="bt2" />
    </div>
    <div class="yihang">
      联系人:
      <input type="text" placeholder="请输入要修改的联系人" v-model="bt3" />
    </div>
    <button @click="dianji()">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bt2: this.$route.params.ss.professionalDesc, //写表格中的客户信息的值
      bt3: this.$route.params.ss.professionalName, //赋予表格中联系人的值
    };
  },
  created() {
    console.log(this.$route.params);
  },
  methods: {
    //写提交的方法
    dianji: function () {
      let ses = this.$qs.stringify({
        id: this.$route.params.ss.id,   //获取id并转换为文本
        professionalDesc: this.bt2,     //获取professionalDesc并转换为文本
        professionalName: this.bt3,     //获取professionalName并转换为文本
      });
      this.$axios
        .post("http://139.9.169.87:8081/examsystem/updateProfessional", ses, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          
          this.$router.push({
            path: "/biaoge#/faxian",
          });
        });
    },
   
  },
};
</script>

<style scpoed>
</style>