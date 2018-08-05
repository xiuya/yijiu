<template>
    <tabbar id="zhfooter">
        <tabbar-item v-for="item in navlist" :key="item.path" :selected="item.path===pathname" :link="{path:item.path,replace:true}">
            <span slot="label">{{item.text}}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
    name : 'zhfooter',
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




</style>

