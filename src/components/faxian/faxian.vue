<template>
  <div class="app17">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="搜企业、法人、产品、经营范围"
      @select="handleSelect"
      class="neirong"
    ></el-autocomplete>
    <el-button type="primary">搜索</el-button>
    <faxian2></faxian2>
    <!--收起的折叠栏-->
    <el-dropdown :hide-on-click="false" class="neirong shouqi">
      <span class="el-dropdown-link">
        收起
        <i class="el-icon-arrow-down el-icon-search"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="shouqi2">
        <el-dropdown-item>
          <div>
            <div class="yihang0">基础条件</div>
            <div class="yihang0 chongchi">重置</div>
            <div class="yihang0 chongchi">确定</div>
          </div>
        </el-dropdown-item>
        <el-dropdown-item>
          <div>
            <div class="yihang0">企业类型</div>
            <div class="yihang0 buxian">不限</div>
            <div class="yihang0">有限责任公司</div>
            <div class="yihang0">股份有限公司</div>
            <div class="yihang0">国企</div>
            <div class="yihang0">独资公司</div>
            <div class="yihang0">外商投资公司</div>
            <div class="yihang0">个体工商户</div>
          </div>
        </el-dropdown-item>
        <el-dropdown-item>
          <div>
            <div class="yihang0">主营行业</div>
            <div class="yihang0 buxian">不限</div>
            <div class="yihang0">金融业</div>
            <div class="yihang0">房地产</div>
            <div class="yihang0">建筑业</div>
            <div class="yihang0">制造业</div>
            <div class="yihang0">批发和零售业</div>
            <div class="yihang0">软件和信息技术服务业</div>
          </div>
        </el-dropdown-item>
        <el-dropdown-item disabled>
          <div>
            <div class="yihang0">注册资本</div>
            <div class="yihang0 buxian">不限</div>
            <div class="yihang0">100万以内</div>
            <div class="yihang0">100-500万</div>
            <div class="yihang0">500-1000万</div>
            <div class="yihang0">1000-3000万</div>
            <div class="yihang0">3000-5000万</div>
            <div class="yihang0">5000万以上</div>
          </div>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <div>
            <div class="yihang0">注册区域：</div>
            <div class="yihang0 buxian">不限</div>
            <div class="yihang0">北京市</div>
            <div class="yihang0">上海市</div>
            <div class="yihang0">天津市</div>
            <div class="yihang0">重庆市</div>
            <div class="yihang0">广东省</div>
            <div class="yihang0">江苏省</div>
          </div>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <div>
            <div class="yihang0">注册区域：</div>
            <div class="yihang0 buxian">不限</div>
            <div class="yihang0">北京市</div>
            <div class="yihang0">上海市</div>
            <div class="yihang0">天津市</div>
            <div class="yihang0">重庆市</div>
            <div class="yihang0">广东省</div>
            <div class="yihang0">江苏省</div>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import "../../public2.css";
import faxian2 from "../faxian/faxian2.vue";
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
    };
  },
  components: {
    faxian2,
  },
  methods: {
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层",
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺",
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819",
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306",
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元",
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺",
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6",
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号",
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号",
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室",
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部",
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室",
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号",
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼",
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
.neirong {
  display: inline-block;
}
.yihang0 {
  display: inline-block;
  margin: 0px 0px 0px 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.app17 {
  margin: 240px 0px 0px 220px;
}
.chongchi {
  float: right;
}
.shouqi {
  position: relative;
  left: 250px;
  top: -20px;
}
/* .el-input{
    width: 500px !important;
    border: 3px #00abff solid !important;
    height: 35px !important;
    margin: 30px 0px 0px 0px;
}

.el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    position: relative !important;
    top: 2px !important;
} */
</style>