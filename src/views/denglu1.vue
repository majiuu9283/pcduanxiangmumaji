<template>
  <div class="body1" id="app">
    <div class="bg">
    </div> 
    <div class="bg1">
      <div class="tuwen1 yihang">
          <!-- <img src="../img/2.png"> -->
      </div>
      <div class="form yihang">
          <el-tabs v-model="activeName" @tab-click="handleClick">
              <!--账号密码登陆表单-->
              <el-tab-pane label="账号密码登陆" name="first">
                  <!--输入账号-->
                <el-input placeholder="请输入您的账号" v-model="input1">
                  <template slot="prepend" class="img1">
                      <i class="el-icon-document-copy"></i>
                  </template>
                </el-input>
                <!--请输入您的登陆密码的输入框-->
                <el-input placeholder="请输入您的登陆密码" v-model="input2">
                  <template slot="prepend" class="img1">
                      <i class="el-icon-unlock"></i>
                  </template>
                </el-input>
                <!--忘记密码栏-->
                <denglu_qiehuan></denglu_qiehuan>
                <!--登陆按钮-->
                <el-row>             
                  <el-button type="primary" class="zhuyao" @click="tab()">{{title2[3]}}</el-button>             
                </el-row>
                    <div class="form_wai">{{title2[0]}}(<font class="bianse">{{title2[1]}}</font>)<img src="../img/4.png" class="img4"></div>
              </el-tab-pane>
              <!--其他登陆方式-->
              <el-tab-pane label="企业微信登录" name="second">
                  <img src="../img/5.png" class="img5"><br>
                  <div class="saomao">{{title2[2]}}<br>“CRM”</div>
                  <div class="form_wai">{{title2[0]}}(<font class="bianse">{{title2[1]}}</font>)<img src="../img/4.png" class="img4"></div>
              </el-tab-pane>
            </el-tabs>
      </div> 
    </div>
  </div>
 
  
</template>

<script>
import "../public.css"
import denglu_qiehuan from '@/components/denglu/denglu_qiehuan.vue'
export default {
    el:"#app",
    components:{
      denglu_qiehuan
    },
    data() {
      return {
        activeName: 'second',
        input1: '',
        input2: '',
        title:[],
        title1:[],
        title2:[]
      };
    },
    created() {
      this.$axios({
          url: "https://www.fastmock.site/mock/c306b1c014f14fb7f6c01ef642766d69/_shop_02/api/:id",
          method: "get"
          }).then(res => {
              console.log(res.data)
              this.title=res.data.data.name  
              this.title1=res.data.data.pwd  
              this.title2=res.data.data.denglu              
          })
    }, 
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      tab:function(){
        let index=0;
        for(var i=0;i<=this.title.length;i++){
          if(this.input1==this.title[i]){    
            index= i;                        
          }        
        }
        for(var j=0;j<=this.title1.length;j++){
            if(index==j){
              if(this.title1[j]==this.input2){
                  this.$alert('账号密码正确，可以登录！', '登录提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                      this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                      });
                    }
                  });
              }            
            } 
        }
      }
    }
   
}
</script>

<style scoped>
  .body1{
    width: 100%;
    height: 41rem;
    background-image: url("../img/1.png");
    background-size: 100% 100%;
  }
  .tuwen1{
    width: 297px;
    height: 291px;
    background-image: url("../img/6.png");
    background-size: 100% 100%;
    position: relative !important;
    top: 208px !important;
    left: 11px !important;

  }
  .img5{
    border-width: 0px;
    margin: 25px 0px 0px 0px;
    width: 166px;
    height: 166px;

  }
  .saomao{
    font-size: 12px;

  }
  .img4{
     position: relative;
     top: 11px;
     left: 10px;
  }
  .form_wai{
    font-size: 12px;
  }
  .zhuyao{
    width: 86%;
    margin: 10px auto;
  }
  .img3{
    width: 30px;
    height: 30px;
  }
  .img1{
    background-image: url("../img/3.png");
    background-size: 100% 100%;
  }
  .el-tabs--bottom .el-tabs__item.is-bottom:last-child, .el-tabs--bottom .el-tabs__item.is-top:last-child, .el-tabs--top .el-tabs__item.is-bottom:last-child, .el-tabs--top .el-tabs__item.is-top:last-child {
    padding-right: 0;
    text-indent: 25px;
  }
  .bianse{
    color:#0088FE;
  }
 
  .yihang{
    display: inline-block;
    position: relative;
    top: 80px;
    left: 75px;
  }
  .form{
    width: 345px;
    height: 375px;
    margin: 0px auto;
    position: relative;
    top: 166px;
    left: 5px;
    background-color: white;
    vertical-align: top;
  }
  .bg{
    background: black;
    opacity: 0.8;
    width: 100%;
    height: 41rem;
    position: absolute;
  }
  .bg1{
    opacity: 1;
     height: 41rem;
  }
</style>