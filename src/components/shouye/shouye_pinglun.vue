<template>
  <div id="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="圈子" name="second" class="cangzhang">
        <div class="maoyu border">
          <div class="yihang border">
            <img src="../../img/26.png" />
          </div>
          <div class="yihang border">
            <div class="pinglun border">
              <div>销售1部-厂长</div>
              <div class="xiayi">
                冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                <span class="pcduan">3分钟前 来自pc端</span>
              </div>
              <div class="xiayi">开单喽~</div>
            </div>
            <div class="pinglun border imghideen">
              <img src="../../img/27.png" />
              <img src="../../img/28.png" />
              <img src="../../img/29.png" />
              <img src="../../img/30.png" />
              <img src="../../img/31.png" />
              <img src="../../img/32.png" />
            </div>
            <br />
            <div class="pinglun border">
              <div class="pinglun2">评论</div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
            </div>
            <div class="pinglun border"></div>
          </div>
        </div>
        <br />
        <br />
        <div class="maoyu border">
          <div class="yihang border">
            <img src="../../img/26.png" />
          </div>
          <div class="yihang border">
            <div class="pinglun border">
              <div>销售1部-厂长</div>
              <div class="xiayi">
                冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                <span class="pcduan">3分钟前 来自pc端</span>
              </div>
              <div class="xiayi">开单喽~</div>
            </div>
            <div class="pinglun border imghideen">
              <img src="../../img/27.png" />
              <img src="../../img/28.png" />
              <img src="../../img/29.png" />
              <img src="../../img/30.png" />
              <img src="../../img/31.png" />
              <img src="../../img/32.png" />
            </div>
            <br />
            <div class="pinglun border">
              <div class="pinglun2">评论</div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
            </div>
            <div class="pinglun border"></div>
          </div>
        </div>
        <br />
        <br />
        <div class="maoyu border">
          <div class="yihang border">
            <img src="../../img/26.png" />
          </div>
          <div class="yihang border">
            <div class="pinglun border">
              <div>销售1部-厂长</div>
              <div class="xiayi">
                冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                <span class="pcduan">3分钟前 来自pc端</span>
              </div>
              <div class="xiayi">开单喽~</div>
            </div>
            <div class="pinglun border imghideen">
              <img src="../../img/27.png" />
              <img src="../../img/28.png" />
              <img src="../../img/29.png" />
              <img src="../../img/30.png" />
              <img src="../../img/31.png" />
              <img src="../../img/32.png" />
            </div>
            <br />
            <div class="pinglun border">
              <div class="pinglun2">评论</div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
            </div>
            <div class="pinglun border"></div>
          </div>
        </div>
        <br />
        <br />
        <div class="maoyu border">
          <div class="yihang border">
            <img src="../../img/26.png" />
          </div>
          <div class="yihang border">
            <div class="pinglun border">
              <div>销售1部-厂长</div>
              <div class="xiayi">
                冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                <span class="pcduan">3分钟前 来自pc端</span>
              </div>
              <div class="xiayi">开单喽~</div>
            </div>
            <div class="pinglun border imghideen">
              <img src="../../img/27.png" />
              <img src="../../img/28.png" />
              <img src="../../img/29.png" />
              <img src="../../img/30.png" />
              <img src="../../img/31.png" />
              <img src="../../img/32.png" />
            </div>
            <br />
            <div class="pinglun border">
              <div class="pinglun2">评论</div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
            </div>
            <div class="pinglun border"></div>
          </div>
        </div>
        <br />
        <br />
        <div class="maoyu border">
          <div class="yihang border">
            <img src="../../img/26.png" />
          </div>
          <div class="yihang border">
            <div class="pinglun border">
              <div>销售1部-厂长</div>
              <div class="xiayi">
                冒雨见客户，成都的天气真的是...不过获得客户的认可，还是很开心的！感谢信任！
                <span class="pcduan">3分钟前 来自pc端</span>
              </div>
              <div class="xiayi">开单喽~</div>
            </div>
            <div class="pinglun border imghideen">
              <img src="../../img/27.png" />
              <img src="../../img/28.png" />
              <img src="../../img/29.png" />
              <img src="../../img/30.png" />
              <img src="../../img/31.png" />
              <img src="../../img/32.png" />
            </div>
            <br />
            <div class="pinglun border">
              <div class="pinglun2">评论</div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
              <div class="yihang2">
                <div class="border">
                  <img src="../../img/33.png" />
                </div>
                <div class="border">
                  <span class="three">销售2部-小娟</span>
                  <span class="three">3分钟前</span>
                  <span class="three">厂长棒棒的！给你点赞！</span>
                </div>
                <div class="border">回复</div>
              </div>
            </div>
            <div class="pinglun border"></div>
          </div>
        </div>
        <br />
        <br />
      </el-tab-pane>
      <el-tab-pane label="话题" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="我的动态" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  components: {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
/* .border {
  border: 1px red solid;
} */
.pinglun2 {
  width: 100%;
  text-align: left;
}

.three {
  display: block;
  height: 15px;
  text-align: left;

  position: relative;
  top: -15px;
}
.yihang2 div {
  display: inline-block;
  vertical-align: top;
  line-height: 50px;
}
.yihang2 div:nth-of-type(1) {
  width: 10%;
  height: 50px;
  text-align: left;
}
.imghideen{
  width: 100%;
  overflow: hidden;
}
.yihang2 div:nth-of-type(2) {
  width: 80%;

  height: 50px;
  font-size: 11px;
}
.yihang2 div:nth-of-type(3) {
  width: 9%;
  height: 50px;

  font-size: 11px;
  line-height: 20px;
}
.pcduan {
  display: inline-block;

  text-indent: 60px;
}
.xiayi {
  margin: 5px 0px 0px 0px;
}
.pinglun:nth-of-type(1) {
  height: 20%;
  width: 100%;

  text-align: left;
  font-size: 12px;
}
.pinglun:nth-of-type(2) {
  height: 30%;

  width: 100%;
  text-align: left;
}
.pinglun:nth-of-type(2) img {
  margin: 20px 0px 0px 0px;
}
.pinglun:nth-of-type(3) {
  height: 25%;

  width: 100%;
  background-color: #eeffff;
}
.pinglun:nth-of-type(4) {
  height: 25%;
  width: 100%;

  background-color: #eeffff;
}
.maoyu {
  height: 300px;
  width: 100%;
}
.yihang {
  display: inline-block;
  vertical-align: top;
}
.yihang:nth-of-type(1) {
  width: 10%;

  height: 300px;
}
.yihang:nth-of-type(2) {
  width: 89%;

  height: 300px;
}
</style>