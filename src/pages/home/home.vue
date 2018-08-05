<template>
    <div>
        <div id="home">
        	<div class="topswiper">
        		<!--<swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>-->	
        		<swiper auto loop   >
			      <swiper-item class="black" v-for="(key,value) in swiperdata"><img :src="key"/></swiper-item>
        		</swiper>
        	</div>
			<div class="secswiper">
        		<swiper auto loop  >
			      <swiper-item class="black" v-for="(key,value) in swiperdatas"><img :src="key"/></swiper-item>
			    </swiper>
        	</div>
        	<!-- 下方详情 -->
            <div class="container"  v-for='(times,index) in timesSale' :key='index' v-if='index<2' >
    			<img :src="times.bgimg" @click="goDetails(times.id)" />
				<p >{{times.dataname}}</p>
				<div class="jg">
					<div class='price1'>
						<span class="discount" >{{times.discount}}折 </span>
						<span class="nowprice"> ￥{{times.price}}</span>
					</div>
					<div>
						<del>￥{{times.oldprice}}</del>
					</div>		
				</div>
				<span class="add-car icon iconfont icon-gouwuche" @click='addCar(times)'></span>
            </div>    
           
            <div class="venue" >
            	<flexbox>
     				 	<flexbox-item  v-for="(item,index) in venue_img"  v-if="index<2"  :key="index">
     				 		<img :src="imgUrl+item.img" alt="" /></flexbox-item>
    			</flexbox>
    			<flexbox>
     				 	<flexbox-item  v-for="(item,index) in venue_img"  v-if="index==2||index==3"  :key="index">
     				 		<img :src="imgUrl+item.img" alt="" /></flexbox-item>
    			</flexbox>
    			<!--<flexbox>
     				 	<flexbox-item><div class="flex-demo">1</div></flexbox-item>
      					<flexbox-item><div class="flex-demo">2</div></flexbox-item>
    			</flexbox>-->
            </div>
            <div class="venue_box">
            <ul class="hot-list clear">
			    <li v-for='(hot,index) in hotSale' :key="index">
                    <img :src="imgUrl+hot.img" />
				    <div class="producttagname" v-if='hot.killendtime'></div>
				    <div class="placename"  v-if='hot.placename'>{{hot.placename}}</div>
				    <div class="home-hotinfo">
					    <p><span >{{hot.storeName}}</span><span>{{hot.name}}</span></p>
					    <div class="jg">
						    <span >￥{{hot?parseFloat(hot.price).toFixed(0):0}}</span>
						    <del >{{hot.oldPrice}}</del>
						    <span >{{hot.discount}}</span>
						    <span >{{hot.commentcount}}件起售</span>
					    </div>
					    <p><span >卖点：</span><span>{{hot.name}}</span></p>
				    </div>
                </li>
            </ul>        
            </div>
            <!-- <div class="venue"></div> -->
            
            
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem} from 'vux'
//import data from '@/data/index/xs-hotSale1.json'
import banner2 from '@/data/banner/2/0.jpg'
import banner3 from '@/data/banner/3/0.jpg'
import banner4 from '@/data/banner/4/0.jpg'
import banner5 from '@/data/banner/5/0.jpg'
import banner6 from '@/data/banner/6/0.jpg'
import banner7 from '@/data/banner/7/0.jpg'
import banner8 from '@/data/banner/8/0.jpg'
//console.log(data)
export default {
    name : 'collectMoney',
data() {
		return {
			demo06_list: [],
			swiperdata:{},
			swiperdatas:{},
			venue_img: [],
            hotSale:[],
			timesSale:[]
		}
	},
	components: {
		Swiper,
		SwiperItem,
		Flexbox,
		FlexboxItem
	},
	created() {
		this.$axios.get('static/data/index/xs-hotSale1.json')
            .then(res=>{
      			this.venue_img=res.data
      		});
      	this.$axios.get('static/data/index/limitSale.json').then(res=>{
      		// console.log(res.data)
		for (var i = 0; i < res.data.length; i++) {
			var d = {};
			d.bgimg = 'http://cn01.alicdn.sasa.com/' + res.data[i].bgimg;
			d.dataname = res.data[i].dataname;
			d.discount = res.data[i].discount;
			d.price = res.data[i].price;
			d.oldprice = res.data[i].oldprice;
			d.productid = res.data[i].productid;
			d.id = res.data[i].productid;
			d.img = 'http://cn01.alicdn.sasa.com/' + res.data[i].iconimg;
			d.name = res.data[i].dataname;
			d.storeName = '';
			this.timesSale.push(d);
		}
	    });	
        this.$axios.get('static/data/index/pf-hotSale1.json')
            .then(res=>{
      			this.hotSale=res.data
      	});
        
		this.swiperdata={
			"a21fbb07-1b03-4e90-80e3-613a67138a23":banner2,
			"038d3183-c96f-4a7c-9f19-9ad398e40451":	banner3,
			"82534bf9-1802-4ade-9db8-71e7819c52a2":	banner4,
		};
      	this.swiperdatas=
      	{
		"07d3a288-4283-43c5-9a69-2f249579778f":	banner5,
		"a51d5068-83a2-4bfd-b5c7-59f61beb1730":banner6,
		"804e902c-fe52-479b-a65c-7e196d8687a9":banner7,
		"548de378-65c2-4eef-9aed-b7786443200c":banner8,};
    },
    mounted() {
       this.$nextTick(()=>{
       })
    },
    distoryed() {

    },
    methods: {
       	 demo06_onIndexChange (index) {
	      this.demo06_index = index
        },
        goDetails(id){
            console.log(id)
             this.$router.push({
                path: '/home/homeDetail',
                query: {
                    id: id
                }
                })
        }
    },
    filters: {
    }
}
</script>

<style scoped lang="less">
    #home{width: 100%;height: 100%;}
    .hot-list li{width: 48%;margin-right: 2%;margin-top: 2%;position: relative;float: left;background: #fff;}
    .hot-list li img{    width: 70%;
        height:150px;
        margin: 0 auto;}
   .hot-list li .placename {    box-sizing: content-box;
    width: 35px;
    height: 22px;
    position: absolute;
    top: 6px;
    right:6px;
    font-size: 12px;
    text-align: center;
    line-height: 22px;
    border: 1px solid #9b9b9b;
    border-radius:3px;
    color: #000;}
    .hot-list li .home-hotinfo p{    font-size:12px;
    height: 47px;
    color: #010101;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;}
     .hot-list li .home-hotinfo p:nth-of-type(2){    font-size:12px;
    height: 23px;
    color: #010101;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;}
    // .hot-list li .home-hotinfo .jg{margin-top: 6px;}
    .hot-list li .home-hotinfo .jg span:nth-of-type(1){
            font-size: 14px;
    color: #ec3f7e;
    margin-right:3px;
    }
    .hot-list li .home-hotinfo .jg del{
            font-size:12px;
    color: #aab0b0;
    margin-right:3px;
    }
     .hot-list li .home-hotinfo .jg span:nth-of-type(2){
            font-size:12px;
    color: #be955f;
    }
     .hot-list li .home-hotinfo .jg span:nth-of-type(3){
            font-size:12px;
    color: #ec3f7e;
    }
</style>
<style lang="css">
    .kuaijie .weui-grid__icon{width: 40px !important;}
    .topswiper .vux-swiper{height: 360px !important;margin-bottom: 10px;}
    .topswiper .vux-swiper img{height: 100%;width:100%;} 
    .secswiper .vux-swiper{height: 180px;}
    .secswiper .vux-swiper img{height: 100%;width:100%;} 
    #home .container,#home .containers{position: relative;height: 120px;width: 100%;margin-top: 10px;background-color: #fff;}
     #home .container img{max-height: 100%;width:100%;}
     #home .container p{width: 47%;position: absolute;left: 50%;top: 10px;color: #141412;font-size: 14px;
    line-height: 20px;}
     #home .container  .jg{width: 50%;position: absolute;left: 50%;;color: #141412;bottom:10px}
     /*#home .container .price1{margin-bottom: 16px;}*/
    #home .container .jg .discount {
    display: inline-block;
    width: 40px;
    height: 20px;
    background: #ef3f7f;
    font-size: 13px;
    text-align: center; line-height:20px;color: #fff;}
    .add-car{    position: absolute;z-index: 10;
    right: 15px;
    bottom: 15px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    background: white;
    border-radius: 50%;
    text-align: center;
    color: #ed3a7c;
    font-size:14px;}
     #home .container .jg .nowprice{font-size: 13px;color:#EF3F7F;}
    .container .vux-flexbox{height: 100%;max-width:100%;}
    .venue .vux-flexbox,.venue_box .vux-flexbox{margin-top: 10px;}
    .venue img{width: 100%;height: 100%;}
    .venue .vux-flexbox .vux-flexbox-item{height: 110px;background-color: #fff; }
    .venue_box .vux-flexbox .vux-flexbox-item{height: 200px;background-color: #fff; }
</style>

