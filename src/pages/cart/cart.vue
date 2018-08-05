<template>
    <div id="cart">

     	<div class="container ">   
            <div class="shop">
                <!-- 店铺名 -->
                <div class="shop_name clearfix">
                    <span class="shop_name_text fl">
                        {{getItem.storeName}}
                    </span>
                    <span class="fr">
                        {{getItem.time}}
                    </span>
                </div>
                <!-- 宝贝组 -->
                <div class="shop_item_group">
                    <!-- 单个宝贝 -->
                    <div class="shop_item clearfix">
                        <div class="img-box" >
                            <img :src="getItem.img" alt="" class="item_icon">
                        </div>
                        <div class="shop_item_right" >
                        	<div class="shop-content clearfix">
                        		<div class="fl">
                        			<span class="title">{{getItem.name}}</span>
		                            <span class="description">
		                                		{{getItem.title}}
		                            </span>
                        		</div>
                        		<div class="fr">
                               			 <div class="edit_icon "></div>
                        		</div>
                        	
                        	</div>
                            	<div class="tag_group">
	                                <span class="price">{{getItem.price}}</span>
									<x-number  v-model="buyValue" :min="0" @on-change="change"></x-number>
	                            </div>
                        </div>
                    </div>
               </div>
            </div>   
            
            <div class="cart-footer clearfix">
                <div class="bg-gray" >清空</div>
                <div><div>收藏</div>999款</div>
                <div><div>共选</div><span class="c-blue">99</span>款</div>
                <div><div>合计</div> <span class="c-red">￥10000</span></div>
                <div class="bg-red">结算</div>
                <div class="bg-green checkall">全选</div>
            </div>
        </div>    
    </div>
</template>

<script>

import { Grid, GridItem,XHeader ,XNumber, Group} from 'vux';
// import moment from 'moment';
//import wallet_04 from '@/assets/img/wallet_04.png'

export default {
    name: "wallet",
    data() {
        return {
            gridList:[
               
            ],
            todaydata:{},
            resdatas:[],
            buyValue:1,
            getItem:localStorage.getItem('addcar')?JSON.parse(localStorage.getItem('addcar')):"",
        }

    },
    components: {
        Grid, GridItem ,XHeader, XNumber,Group
    },
    methods:{
	   change (val) {
	    //   console.log('change', val)
	    }
    },
    created() {
		this.$axios.get('static/data/index/xs-hotSale1.json')
            .then(res=>{
      			// console.log(res.data)
      			this.resdatas=res.data
      		});
    },
    mounted() {
            console.log(this.getItem)
    }
}
</script>

<style scoped lang="less">
		.shop{
          padding:5px 8px;
          background:#fff;
          margin-bottom: 15px;
        }
 		.shop_name{
            border-bottom: 1px solid #CCC;
            height: 30px;
            line-height:30px;
        }
        .shop_item_group{
        	// width: 100%;padding-left: 90px;
        }
        .shop_item_left {width: 90px;height: 90px;float: left;}
        .shop_item_center {height: 90px;}
    	.c-red{color:red;}
        .c-blue{color:blue;}
        .bg-red{background: red;}
        .bg-gray{background: gray;}
        .bg-green{background:green;}
        .cart-footer{width: 100%;height: 50px;border-top:1px solid #333;}
        .cart-footer>div{float:left;width: 20%;height: 100%;text-align: center;}
        .cart-footer>div[class]{color: #fff;text-align: center;}
        .cart-footer .bg-gray,.cart-footer .bg-green{line-height: 50px;width: 10%;}
        .cart-footer .bg-red{line-height: 50px;}
        .bg-green{background: green;}
        .count-num{border: 1px solid #ccc;}
        .container{position: absolute;bottom: 50px;width: 100%;}
        .img-box{height: 125px;width:125px;float: left;vertical-align: middle;}
        .shop_item_right{overflow: hidden;height: 100%;font-size: 13px;padding: 14px 23px 14px 0;position: relative;height: 97px;        }
        .tag_group{position: absolute;bottom: 8px;width: 100%;}
        .shop_item_right .description{   height: 23px;margin-top: 10px;
    color: #010101;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;}

</style>
<style>  
    .tag_group .weui-cell{width: 150px;float: right;padding: 0 !important;}
    .img-box img{width: 100%;height: 100%;}
</style>
