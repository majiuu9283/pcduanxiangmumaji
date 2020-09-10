<template>
  <div>
      <ul class="ul1_li">
          <li><img src="../../img/12.png" class="ul1_img"></li><br>
          <li><img src="../../img/12.png" class="ul1_img"></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
    .ul1_li{
       background-color: rgba(242, 242, 242);
       height:100px;  
    }
    .ul1_li li{
       background-color: rgba(242, 242, 242);
       height:40px;    
       width: 100%;
    }
    .ul1_li li:hover{
       cursor: pointer;
       border-left: 4px blue solid;     
    }
    .ul1_img{
        margin: 1.3em 0px 0px 0px;
    }
</style>