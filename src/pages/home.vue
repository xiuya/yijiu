<template>
    <ViewBox>
        <!-- <keep-alive> -->
          <router-view  id="home-view"></router-view>
        <!-- </keep-alive> -->
        <tabbar :navlist="navlist"></tabbar>
    </ViewBox>
</template>

<script>
import { ViewBox } from 'vux'
import tabbar from "@/components/footer/tabbar";

export default {
    name : 'home',
    data() {
        return {
            navlist:[
               {
                    path: '/',
                    title: 'logo',
                    text: 'logo',
                },
                {
                    path: '/home',
                    title: '首页',
                    text: '首页',
                },
                {
                    path: '/order',
                    title: '订单',
                    text: '订单',
                },
                {
                    path: '/cart',
                    title: '购物车',
                    text: '购物车',
                },
                {
                    path: '/my/mycon5',
                    title: '账户',
                    text: '账户',
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

<style lang="less" >
   /*  @theme-color: #4aa7fc;
    #header-d .vux-header{position: fixed;top: 0;width: 100%;background-color: @theme-color;} */
    #home-view{width: 100%;height: 100%;padding: 0 0 4px;box-sizing: border-box;overflow:auto;background-color: #f1f2f3;}
    #home-view::-webkit-scrollbar{width:0px;}
    #footer{position: fixed;bottom: 0;}
   
</style>
