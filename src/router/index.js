import Vue from "vue";
import VueRouter from "vue-router";
import denglu from "../views/denglu.vue";
import denglu_qiehuan from "../components/denglu/denglu_qiehuan.vue";
import denglu1 from "../views/denglu1.vue";
import shouye from "../views/shouye.vue";
import cheNav from "../components/shouye/cheNav.vue";
import chenanxia from "../components/shouye/chenanxia.vue";
import sousuo from "../components/shouye/sousuo.vue";
import shouye_riqi from "../components/shouye/shouye_riqi.vue";
import shouye_pinglun from "../components/shouye/shouye_pinglun.vue";
import faxian from "../components/faxian/faxian.vue";
import youbian from "../components/shouye/youbian.vue";
import xiugai from "../views/xiugai.vue";

import qiehuan2 from "../components/shouye/qiehuan02.vue";
import qiehuan3 from "../components/shouye/qiehuan03.vue";
import yaowensb from "../components/shouye/yaowensb.vue";

import ditu from "../components/faxian/ditu.vue";
import chanping from "../components/shouye/chanping.vue";
import biaoge from "../components/biaoge/biaoge.vue";
import danxuanbiaoge from "../components/biaoge/danxuanbiaoge.vue";

import piliangdaoru from "../components/biaoge/piliangdaoru.vue";
import xiansuobiaoge from "../components/biaoge/xiansuobiaoge.vue";
import gongongchi from "../components/biaoge/gongongchi.vue";
import shangchuan from "../components/biaoge/shangchuan.vue";
import shangjibiaoge from "../components/biaoge/shangjibiaoge.vue";
Vue.use(VueRouter);
import kehuguanli from "../components/biaoge/kehuguanli.vue";
import biaogeshuju from "../components/shouye/biaogeshuju.vue"
import hetong from "../components/biaoge/hetong.vue";
import yijiao from "../components/biaoge/yijiao.vue";
import lianxiren from "../components/biaoge/lianxiren.vue";
import xiaoshourenwu from "../components/shouye/xiaoshourenwu.vue";
import kehufenxi from "../components/tongjifenxi/kehufenxi.vue";
import xiaoshoufenxi from "../components/tongjifenxi/xiaoshoufenxi.vue";
import biaobiao from "../components/tongjifenxi/biaobiao.vue";
import shujubaobiao from "../components/tongjifenxi/shujubaobiao.vue";
import yibiaopan from "../components/tongjifenxi/yibiaopan.vue";


const routes = [
  {
    path: "/youbian",
    name: " youbian",
    component: youbian,
  },
  {
    path: "/xiugai",
    name: "xiugai",
    component: xiugai,
  },
  
  {
    path: "/biaogeshuju",
    name: " biaogeshuju",
    component: biaogeshuju,
  },
  

  {
    path: "/ biaobiao",
    name: " biaobiao",
    component: biaobiao,
  },

  {
    path: "/ yijiao",
    name: " yijiao",
    component: yijiao,
  },

  {
    path: "/ shangchuan",
    name: " shangchuan",
    component: shangchuan,
  },

  {
    path: "/ piliangdaoru",
    name: " piliangdaoru",
    component: piliangdaoru,
  },

  {
    path: "/ gongongchi",
    name: " gongongchi",
    component: gongongchi,
  },

  {
    path: "/ danxuanbiaoge",
    name: " danxuanbiaoge",
    component: danxuanbiaoge,
  },


  {
    path: "/qiehuan2",
    name: "qiehuan2",
    component: qiehuan2,
  },
  {
    path: "/qiehuan3",
    name: "qiehuan3",
    component: qiehuan3,
  },
  {
    path: "/shouye_pinglun",
    name: "shouye_pinglun",
    component: shouye_pinglun,
  },

  {
    path: "/shouye_riqi",
    name: "shouye_riqi",
    component: shouye_riqi,
  },

  {
    path: "/sousuo",
    name: "sousuo",
    component: sousuo,
  },

  {
    path: "/chenanxia",
    name: "chenanxia",
    component: chenanxia,
  },
  {
    path: "/cheNav",
    name: "cheNav",
    component: cheNav,
  },

  {
    path: "/",
    name: "shouye",
    component: shouye,
    children: [
      {
        path: "/",
        redirect: "/yaowensb",
      },
      
      {
        path: "kehufenxi",
        name: "kehufenxi",
        component: kehufenxi,
      },
      {
        path: "chanping",
        name: "chanping",
        component: chanping,
      },
      {
        path: "yibiaopan",
        name: "yibiaopan",
        component: yibiaopan,
      },
      {
        path: "/xiaoshoufenxi",
        name: "xiaoshoufenxi",
        component: xiaoshoufenxi,
      },

      {
        path: "yaowensb",
        name: "yaowensb",
        component: yaowensb,
      },
      {
        path: "shangjibiaoge",
        name: "shangjibiaoge",
        component: shangjibiaoge,
      },
      {
        path: "hetong",
        name: "hetong",
        component: hetong,
      },
      {
        path: "shujubaobiao",
        name: " shujubaobiao",
        component: shujubaobiao,
      },
      {
        path: "ditu",
        name: "ditu",
        component: ditu,
      },
      {
        path: "/denglu",
        name: "denglu",
        component: denglu,
      },
      {
        path: "kehuguanli",
        name: "kehuguanli",
        component: kehuguanli,
      },
      {
        path: "xiansuobiaoge",
        name: "xiansuobiaoge",
        component: xiansuobiaoge,
      },
      {
        path: "faxian",
        name: "faxian",
        component: faxian,
      },
      {
        path: "lianxiren",
        name: "lianxiren",
        component: lianxiren,
      },
      {
        path: "xiaoshourenwu",
        name: "xiaoshourenwu",
        component: xiaoshourenwu,
      },

      {
        path: "biaoge",
        name: "biaoge",
        component: biaoge,
      },
    ],
  },
  {
    path: "/denglu1",
    name: "denglu1",
    component: denglu1,
  },
  {
    path: "/denglu_qiehuan",
    name: "denglu_qiehuan",
    component: denglu_qiehuan,
  },

 
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});



export default router;
