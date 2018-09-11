import axios from 'axios'
import store from './../store/index'
import router from './../router'
axios.defaults.baseURL = 'http://192.168.0.43:8080';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 3000;


let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
        axios.interceptors.request.use(config => {
//  const AUTH_TOKEN = localStorage.getItem('Token');
//  if (AUTH_TOKEN) {
//      config.headers['userId'] = AUTH_TOKEN
//  }
//  //发起请求时，取消掉当前正在进行的相同请求
        if (promiseArr[config.url]) {
            promiseArr[config.url]('操作取消')
            promiseArr[config.url] = cancel
        } else {
            promiseArr[config.url] = cancel
        }
        return config
        }, error => {
        return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    if (typeof response.data == 'string' || response.data == 'String') {
        return JSON.parse(response.data); //直接返回数据
    }

    if(response.data.code&&response.data.code == "401"){
        localStorage.clear();
    }
    return response.data
}, error => {
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 401 清除token信息并跳转到登录页面
    //             mui.toast('请登录');
    //             store.dispatch('logout');
    //             router.replace({
    //                 path: '/login',
    //                 query: { redirect: router.currentRoute.fullPath }
    //             })
    //     }
    // }

    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response)

})

//设置baseURL

//设置请求超时 10s

const Qs = require("qs");

export default {
    //get请求
    
 get(url, param) {
     return axios({
         method: 'get',
         url,
         params:param,
         cancelToken: new CancelToken(c => {
             cancel = c
         })
     })
 },
 //post请求
 post(url, param) {
     return axios({
         method: 'post',
         url,
         data: Qs.stringify(param),
         cancelToken: new CancelToken(c => {
             cancel = c
         })
     })
 }
}