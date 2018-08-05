<template>
    <tabbar id="footer">
        <tabbar-item v-for="item in navlist" :key="item.path" :selected="item.path===pathname" :link="{path:item.path,replace:true}">
            <!--<i slot="icon" class="iconfont" :class="item.iconClass"></i>-->
            <span slot="label">{{item.text}}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
    name : 'footer',
    data() {
        return {
            pathname : this.$route.path
        }
    },
    props:['navlist'],
    components: {
         Tabbar, TabbarItem
    },
    computed:{
    },
    created() {
    },
    mounted() {
        
    },
    distoryed() {

    },
    methods: {
    }
}
</script>

<style scoped lang="less">
i.weui-tabbar__icon, .weui-tabbar__icon > i{color: #666;}
.weui-tabbar{background-color: #fff;}
.weui-tabbar__item{padding: 0;}
</style>

<style>
/*.weui-tabbar__item .weui-tabbar__label{line-height: 2.4;}*/
 .weui-tabbar__item span {
	    line-height: 50px;
	    display: block;
	    /*padding: 0 8px;*/
	}
</style>

