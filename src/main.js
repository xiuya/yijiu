// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import 'babel-polyfill'
import http from './http/http'
import moment from 'moment'
import { ConfirmPlugin } from 'vux'
import { BrowserInfo } from "@/utils/utils.js"
import {UploaderPost,Loading,}  from  "@/assets/js/upload.js"
import axios from 'axios'
// import '@'
// const FastClick = require('fastclick')

import '@/assets/css/main.less';
import '@/assets/font/iconfont.css';


/* 移除移动端点击延迟 */
// FastClick.attach(document.body)

//router.beforeEach((to, from, next) => {
//  if (to.meta.auth) { // 判断该路由是否需要登录权限
//      if (localStorage.getItem('Token')) {
//          next();
//      } else {
//          next({
//              path: '/login',
//              query: { redirect: to.fullPath }
//          })
//      }
//  } else {
//      next()
//  }
//});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

Vue.use(ConfirmPlugin); //弹窗组件

store.$http = http;
Vue.prototype.$upload =UploaderPost;
Vue.prototype.$moment = moment;
Vue.prototype.$http = http;
Vue.prototype.$axios = axios;
Vue.prototype.imgUrl = 'http://cn01.alicdn.sasa.com/';
Vue.prototype.BrowserInfo = BrowserInfo;
Vue.prototype.system = BrowserInfo().isIphone ? 'Iphone' : 'Android';
Vue.prototype.baseURL = "http://www.kbbabc.com/";