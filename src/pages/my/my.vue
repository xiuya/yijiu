<template>
    <ViewBox>
        <keep-alive>
          <router-view  id="home-view"></router-view>
        </keep-alive>

        <tabbar :navlist="navlist"></tabbar>
    </ViewBox>
</template>

<script>
import { ViewBox } from 'vux'
import tabbar from "@/components/footer/zhtabbar";

export default {
    name : 'my',
    data() {
        return {
            navlist:[
               {
                    path: '/my/mycon1',
                    title: '预览',
                    text: '预览',
                },
                {
                    path: '/my/mycon2',
                    title: '编辑企业详情',
                    text: '编辑企业详情',
                },
                {
                    path: '/my/mycon3',
                    title: '编辑企业简介',
                    text: '编辑企业简介',
                },
                {
                    path: '/my/mycon4',
                    title: '编辑个人资料',
                    text: '编辑个人资料',
                },
                {
                    path: '/my/mycon5',
                    title: '统计',
                    text: '统计',
                }
            ],
            pathname: this.$route.path
        }
    },
    components: {
        ViewBox, tabbar
    },
    created() {

    },
    mounted() {
    },
    distoryed() {

    },
    methods: {

    },
    watch: {
        '$route'(to,from){
            this.pathname = to.path
        }
    }
}
</script>

<style lang="less">
    // #home-view{width: 100%;height: 100%;padding: 0 0 4px;box-sizing: border-box;overflow:auto;background-color: #f1f2f3;}
    #home-view::-webkit-scrollbar{width:0px;}
    #zhfooter{position: fixed;bottom: 50px;}
    // .fixed-con-lg{position: fixed;bottom: 100px;top:0;overflow-y: scroll;width: 100%;}
	#home-view .weui-tabbar__item span{line-height:25px;padding: 0 8px;}
	#home-view .weui-tabbar__item:nth-child(1) span{line-height:50px;}
	#zhfooter .weui-tabbar__item:nth-child(5) span{line-height:50px;}
	.vux-label{width: 5.5em;}
	.weui-label{width: 5.5em !important;}
	.inline-calendar{background-color: #fff !important;}
    .weui-cell__bd .weui-textarea{padding: 5px;border: 1px solid #bebebe;width: 97%;}
/*#fbf9fe底色 浅白色*/
 #img-wrap input{border: none;margin-bottom:0;}
  #img-wrap #addImg_box{display: flex;margin-top: 15px;}
	#img-wrap .upload-addimg-btn:first-child,.upload-btn-box{position: relative;cursor: pointer;display: inline-block;width: 76px;height: 76px;}
	#img-wrap .upload-btn-box{width: 0;}
	#img-wrap .upload-img-box{margin-left: -3px;}
	#img-wrap .upload-img-box:after{clear: both;width: 0;height: 0;display: block;overflow:hidden;}
	#img-wrap .upload-addimg-btn:first-child input{width: 76px;height: 76px;position: absolute;left:0;top:0;z-index: 9;opacity: 0;}
	#img-wrap .add-file{font-size: 76px;display: inline-block;width: 76px;height: 76px;line-height: 76px;color:#ccc;}
	#img-wrap .upload-img-item{float: left;width: 76px;height: 76px;margin-left:5px;margin-top:2px;margin-bottom:3px;position: relative; border:1px solid #ddd;margin-top:-2px;}
	#img-wrap .upload-img-item:first-child{margin-left: 87px;}
	#img-wrap .upload-img-item img{width: 100%;height: 100%;}
	#img-wrap .delimg-btn{position: absolute;top:-2px;right: 0;font-size: 30px;color:#ccc;}
	#img-wrap .mint-cell-wrapper{padding: 0 15px;}
  #img-wrap #addImg_boxs{display: flex; display: -webkit-flex;margin-top: 15px;}
 #home-view{display: flex; display: -webkit-flex;flex-direction: column-reverse;background-color: #f1f2f3;padding: 4px;}

</style>
