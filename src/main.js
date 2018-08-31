// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index'
import 'babel-polyfill'
import http from './http/http'
import moment from 'moment'
// import { ConfirmPlugin } from 'vux'
import { BrowserInfo } from "@/utils/utils.js"
import {UploaderPost,Loading,}  from  "@/assets/js/upload.js"
import axios from 'axios'
// import '@'
// const FastClick = require('fastclick')

import '@/assets/css/main.less';
import '@/assets/font/iconfont.css';


/* 移除移动端点击延迟 */
// FastClick.attach(document.body)
import { ToastPlugin,ConfirmPlugin,AlertPlugin} from 'vux'

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
 
//公用的弹窗(全局变量)
Vue.prototype.showToast = function( showPositionValue,type,text,width="10em"){
  this.$vux.toast.show({
    showPositionValue: false,
    text: text,
    type: type,
    width: width,
    position: 'middle'
  })
}

//公用alert confirm
const Message = {};
Message.install = () => {
    const msg = {
            alert: config => {
            let def = {
                title:'提示',
                content:'系统异常，请重新登录后再试！',
                buttonText:'确定'
            }
            if(typeof  config  === 'string' || typeof  config  === 'number'){
        Vue.$vux.alert.show(Object.assign(def,{content:config}));
    }else{
        Vue.$vux.alert.show(Object.assign(def,config));
    }
},
    confirm: config => {
        let isConfirm = false;
        let def = {
                title:'提示',
                content:'系统异常，请重新登录后再试！',
                confirmText:'确定',
                cancelText:'取消',
                onConfirm:() =>{
                isConfirm = true;
    }
    }
        if(typeof  config  === 'string' || typeof  config  === 'number'){
            Vue.$vux.confirm.show(Object.assign(def,{content:config}));
        }else{
            Vue.$vux.confirm.show(Object.assign(def,config));
        }
    /*return new Promise((resolve,reject) => {
     if(isConfirm){
     resolve();
     }
     })*/
    },


}
    Object.entries(msg).forEach(([method,fn]) => {
        Vue.prototype[method] = fn;
})
}
Vue.use(Message)
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

// Vue.use(ConfirmPlugin); //弹窗组件

store.$http = http;
Vue.prototype.$upload =UploaderPost;
Vue.prototype.$moment = moment;
Vue.prototype.$http = http;
Vue.prototype.$axios = axios;
Vue.prototype.imgUrl = 'http://cn01.alicdn.sasa.com/';
Vue.prototype.BrowserInfo = BrowserInfo;
Vue.prototype.system = BrowserInfo().isIphone ? 'Iphone' : 'Android';
Vue.prototype.baseURL = "http://www.kbbabc.com/";