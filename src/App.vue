<template>
  <div id="app">
      <router-view></router-view>
      <actionsheet v-model="showAction" :menus="menus" @on-click-menu="clickMenu" show-cancel></actionsheet>
  </div>
</template>

<script>
import { Actionsheet } from 'vux';
import {getData} from '@/utils/utils.js';

export default {
  name: 'app',
  data(){
      return {   
        showAction:false,
        imgUrl:'',
        menus:{
          save: '保存至相册',
        }
      }
  }, 
  components: {
    Actionsheet
  },
  mounted(){
      mui.init({
          gestureConfig: {
              longtap: true   //长按
          }
      });
      mui.plusReady(() => {
          document.addEventListener("longtap", (event) => {
              /* 获取目标节点的tagName */
              var name = event.target.tagName;
              name = name.toLowerCase();
              /*  如果是图片并且可以保存下来，则弹出选择框决定是否保存；*/
              if(name === "img" && getData(event.target,'save')) {
                  var imgUrl = event.target.src;
                  console.log('图片地址：' + imgUrl);
                  this.imgUrl = imgUrl;
                  this.showAction = true;
              }
          });
      });
  },
  methods:{
    clickMenu(key){
        console.log('imgsrc:'+this.imgUrl);
        const _this = this;
        if(key=='save'){
            mui.plusReady(()=>{
                var imgDtask = plus.downloader.createDownload(_this.imgUrl,{method:"GET"},(d,status)=>{
                    //下载完成的回调函数
                    if (status == 200 ) { 
                        plus.gallery.save(d.filename,function(){//保存到相册
                            plus.io.resolveLocalFileSystemURL(d.filename,function(entry){
                                entry.remove();//删除临时文件
                            });
                            return mui.toast('图片已保存至相册');
                        });                     
                    }else{
                        mui.toast("保存失败!" + status); 
                    }  
                });
                imgDtask.start();//开始下载任务
            })
        }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/theme.less';
html,body{width: 100%;height: 100%;overflow-x: hidden;}
#app {width: 100%;height: 100%;}
</style>
