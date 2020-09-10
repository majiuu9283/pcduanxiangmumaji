<template>
  <div>
    <div class="youbian_daohang">
      <ul class="youbian_daohang_ul1">
        <li>
          <img src="../../img/15.png" class="img15" />
        </li>
        <!--输入框框架-->
        <li>
          <input type="text" placeholder="请告诉我您想要搜索的内容" class="input1" />
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../../img/16.png" class="img16" />
            </span>
            <el-dropdown-menu slot="dropdown" class="yidong">
              <el-dropdown-item>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" class="img17" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
                <div class="yihang11">
                  <div class="img1">
                    <img src="../../img/17.png" class="img17" />
                  </div>
                  <div class="fenpai">任务分派</div>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <!--铃铛图标-->
        <li>
          <img src="../../img/18.png" />
        </li>
        <li>
          <img src="../../img/19.png" class="img19" />
        </li>
        <li>
          <div class="demo-type">
            <div class="denglutubiao">
              <img src="../../img/57.png">
              <span class="nodenglu yihang12 denglu">未登陆</span>
              <el-dropdown>
                <span class="el-dropdown-link yihang12">
                  <i class="el-icon-arrow-down el-icon--right jiantou"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人设置</el-dropdown-item>
                  <el-dropdown-item>系统设置</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
    };
  },
};
</script>

<style scoped>
.youbian_daohang {
  height: 100%;
  width: 70%;
  float: right;
  text-align: right;
}
.yihang12 {
  margin-right: 0.5em;
}
.youbian_daohang_ul1 li {
  width: 5%;
  display: inline-block;
  vertical-align: top;
  height: 3em;
  line-height: 3em;
  text-align: center;
  margin-top: 1em;
}
.youbian_daohang_ul1 li:nth-of-type(2) {
  width: 34%;
  height: 3em;
  line-height: 3em;
  text-align: center;
}
.youbian_daohang_ul1 li:nth-of-type(6) {
  width: 19%;
  height: 3em;
  line-height: 3em;
}
.input1 {
  width: 70%;
  height: 50%;
  border-radius: 0.2em;
  border: none;
}
.img19 {
  height: 50%;
  width: 20%;
}
.denglu {
  position: relative;
  top: -0.4em;
}
.jiantou {
  position: relative;
  top: -0.4em;
}
</style>