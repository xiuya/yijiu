<template>
    <tabbar id="footer">
    	<span class="logo"></span>
        <tabbar-item v-if='!state' v-for="item in items" :key="item.index" :selected="item.index===pathname" :link="{path:item.index,replace:true}">
            <span slot="label">{{item.title}}</span>
        </tabbar-item>
        <tabbar-item v-if='state' v-for="item in itemsSecond" :key="item.index" :selected="item.index===pathname" :link="{path:item.index,replace:true}">
            <span slot="label">{{item.title}}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import logo from '@/assets/img/logo.png'
import { Tabbar, TabbarItem } from 'vux'
import {mapState} from "vuex"
export default {
    name : 'footer',
    data() {
        return {
            pathname : this.$route.path,
            items:[{
                            "icon": "fa fa-home",
                            "index": "/home",
                            "title": "首页"
                        }, {
                            "icon": " fa fa-plus-square-o",
                            "index": "/order",
                            "title": "订单"
                        },{
                            "icon": "fa fa-shopping-basket",
                            "index": "/cart",
                            "title": "购物车"
                        },
                        {
                            "icon": "fa fa-file-text-o",
                            "index": "/my",
                            "title": "账户"
                        },
            ],
           itemsSecond:[{
                            "icon": "fa fa-home",
                            "index": "/homeSeller",
                            "title": "店铺商品"
                        }, {
                            "icon": " fa fa-plus-square-o",
                            "index": "/orderSeller",
                            "title": "我的订单"
                        },{
                            "icon": "fa fa-shopping-basket",
                            "index": "/goods",
                            "title": "商品管理"
                        },
                        {
                            "icon": "fa fa-file-text-o",
                            "index": "/mySeller",
                            "title": "账户"
                        },
            ],
            state:localStorage.getItem('seller'),

            
        }
    },
    props:['navlist'],
    components: {
         Tabbar, TabbarItem
    },
    computed:{
    	changePeople(){
    		return this.$store.state.user.seller;
    	}
    },
    created() {
    },
    mounted() {
        console.log(this.changePeople,"122",this.$store.state.user.saller)
        if(this.$store.state.user.saller){
        	this.state=true;
        }else{
            this.state=false;
        }
    },
    distoryed() {

    },
    methods: {
    },
    watch:{
    	// 'changePeople'(value){
    	// 	console.log(value,'12')
    	// }
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
/*#footer{position: fixed;bottom: 0;background: url(/static/img/logo.a86301c.png) no-repeat;background-size: 40px 40px;background-position: 15px;}*/
.logo{width:80px;}
</style>

