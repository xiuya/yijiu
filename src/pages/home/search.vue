<template>
    <div id="search" >
        	<div class="search" >
                <form class="search-bar clear ng-pristine ng-valid">
                    <i class="iconfont icon-sousuo search-btn" @click="addHistory()"></i>
                    <input type="search" placeholder="保湿" class="left "  v-model="key">
                    <span class="left" @click="cancel">取消</span>
                </form>

                <tab :line-width=2  active-color='#fc378c' v-model="index">
                    <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in tabberGoods" @click="tabName= item" :key="index">{{item}}</tab-item>
                </tab>
                  <swiper v-model="index" height="200px" :show-dots="false">
                    <swiper-item v-for="(item, index) in tabberGoodsItem" :key="index">
                     <div class="tab-swiper vux-center">
                        <section class="search-main">
                            <h4>搜索发现</h4>
                            <ul class="clearfix">
                                    <li v-for="(key,value) in item"  :key="value" class="left ">
                                        <a href="#classinfo" >{{key.name}}</a>
                                    </li>
                            </ul>
                        </section>
                    </div>
                    </swiper-item>
                </swiper>
            </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem, Tab, TabItem} from 'vux'

//console.log(data)
export default {
    name : 'search',
data() {
		return {
            defaultImg: 'this.src="' + require('@/assets/img/default.png') + '"',
            key:'',
            showSearch:false,
            tabberGoods:["商品", '店铺'],
            tabberGoodsItem:[[{name:'热卖面膜'},{name:'幻彩化妆品',},{name:'个人用品',},{name:'母子用品'}],[{name:'热卖面膜'},{name:'母子用品'},{name:'母子用品'},{name:'幻彩化妆品',},{name:'个人用品',},{name:'母子用品'}],[{name:'母子用品'},{name:'母子用品'},{name:'热卖面膜'},{name:'幻彩化妆品',},{name:'个人用品',},{name:'母子用品'}]],
            index: 0,
            tabName:"全部",
		}
	},
	components: {
		Swiper,
		SwiperItem,
		Flexbox,
        FlexboxItem,
         Tab,
          TabItem
	},
	created() {
		// this.$axios.get('static/data/index/xs-hotSale1.json')
        //     .then(res=>{
      	// 		this.venue_img=res.data
      	// 	});
      	// this.$axios.get('static/data/index/limitSale.json').then(res=>{
      	// 	// console.log(res.data)
		// for (var i = 0; i < res.data.length; i++) {
		// 	var d = {};
		// 	d.bgimg = 'http://cn01.alicdn.sasa.com/' + res.data[i].bgimg;
		// 	d.dataname = res.data[i].dataname;
		// 	d.discount = res.data[i].discount;
		// 	d.price = res.data[i].price;
		// 	d.oldprice = res.data[i].oldprice;
		// 	d.productid = res.data[i].productid;
		// 	d.id = res.data[i].productid;
		// 	d.img = 'http://cn01.alicdn.sasa.com/' + res.data[i].iconimg;
		// 	d.name = res.data[i].dataname;
		// 	d.storeName = '';
		// 	this.timesSale.push(d);
		// }
	    // });	

    },
    mounted() {
        this.tabName=this.$route.query.name;
        console.log(this.index)
    },
    distoryed() {

    },
    methods: {
        addHistory(){

        },
        cancel(){
            window.history.go(-1)
        }

     
    },
    filters: {
    },
    watch:{
    }
}
</script>

<style scoped lang="less">
.search .search-bar {
    width: 100%;
    height: 58px;
    background: #fff;
    border-bottom: #ddd solid 1px;
    line-height: 58px;
    position: relative;
}
.search .search-bar .search-btn {
    position: absolute;
    left: 3%;
    font-size:22px;
    top: 50%;
    transform: translateY(-50%);
    color:#8b8dbc;
}
.search .search-bar input {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    height: 50%;
    width: 75%;
    font-size: 14px;
    border:none;
    outline: none;
}
.search .search-bar input:focus {
    border:none;
}

.search .search-bar span {
    position: absolute;
    right: 7%;
    font-size: 14px;
    color: #010101;
}
.search .search-main ul {
    background: #fff;
    padding-top: 6px;
    padding-left: 4.5%;
    padding-bottom: 16px;
}
.search .search-main h4 {
    padding-left: 4.5%;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    color: #9d9d9d;
}
.search {
    background: #f7f7f7;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 10000;
    top: 0;
    // left: 100%;
    overflow: hidden;
    transition: 0.3s left;
}
.search .search-main ul li a {
    display: inline-block;
    padding: 6px 9px;
    color: #dbb58b;
    font-size: 12px;
}
.search .search-main ul li {
    border: 1px solid #dbb58b;
    border-radius: 4px;
    margin-right:11px;
    margin-top: 11px;
    float: left;
}
</style>
<style>


</style>

