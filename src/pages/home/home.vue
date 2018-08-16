<template>
    <div>
        <div id="home" >
        	<div class="topswiper" >
        		<!--<swiper loop auto :list="swiper06_list" :index="swiper06_index" @on-index-change="swiper06_onIndexChange"></swiper>-->	
        		<swiper   loop  auto :interval="4000" :duration='1000' ref='topSwiper' v-model="swiper0_index"  @on-index-change="swiper0_onIndexChange">
			      <swiper-item class="black" v-for="(value,index) in swiperdata" :key="index" ><img :src="value"  @click="goDetails(index)"/></swiper-item>
        		</swiper>
        	</div>
			<div class="secswiper" >
        		<swiper auto loop :interval="4000" :duration='1000' v-model="swiper01_index"  @on-index-change="swiper01_onIndexChange" >
			      <swiper-item  class="black" v-for="(key,value) in swiperdata1" :key="value" ><img :src="key"  @click="goDetails(value) "/></swiper-item>
			    </swiper>
        	</div>
            <div class="thirdswiper container">
        		<swiper auto loop :interval="4000" :duration='1000' v-model="swiper02_index" @on-index-change="swiper02_onIndexChange" >
			      <swiper-item class="black" v-for="(key,value) in swiperdatas" :key="value"><img :src="key" @click="goDetails(value)"/></swiper-item>
			    </swiper>
        	</div>
            <div class="fourswiper container">
        		<swiper  auto loop :interval="4000" :duration='1000' v-model="swiper03_index"  @on-index-change="swiper02_onIndexChange">
			      <swiper-item class="black" v-for="(key,value) in swiperdatas" :key="value"><img :src="key" @click="goDetails(value)"/></swiper-item>
			    </swiper>
        	</div>
        	<!-- 单个商品-->
            <!-- <div class="container"  v-for='(times,index) in timesSale' :key='index' v-if='index<2' >
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
            </div>     -->
            <div class="venue" >
            	<flexbox>
     				 	<flexbox-item  v-for="(item,index) in timesSale"  v-if="index<2"  :key="index">
     				 		<img :src="item.bgimg" alt="" @click="goDetails(item.id)"/>
                        </flexbox-item>
    			</flexbox>
    			<flexbox>
     				 	<flexbox-item  v-for="(item,index) in venue_img"  v-if="index==2||index==3"  :key="index">
     				 		<img :src="imgUrl+item.img" alt="" @click="goDetails(item.id)"/>
                        </flexbox-item>
    			</flexbox>
            </div>
            <div class="venue_box" ref="hotGoods">
            <ul class="hot-list clearfix" >
			    <li v-for='(hot,index) in hotSale' :key="index" @click="goDetails(hot.id)">
                    <img :src="imgUrl+hot.img"  :onerror="defaultImg"/>
				    <div class="producttagname" v-if='hot.killendtime'></div>
				    <div class="placename"  v-if='hot.placename'>{{hot.placename}}</div>
				    <div class="home-hotinfo">
					    <p><span >{{hot.storeName}}</span><span>{{hot.name}}</span></p>
					    <div class="jg">
						    <span >￥{{hot?parseFloat(hot.price).toFixed(0):0}}</span>
						    <!-- <del >{{hot.oldPrice}}</del> -->
						    <!-- <span >{{hot.discount}}</span> -->
						    <span class="fr" style="padding-right:5px;">{{hot.commentcount}}件起售</span>
					    </div>
					    <p><span >卖点：</span><span>{{hot.name}}</span></p>
				    </div>
                    <span class="add-car icon iconfont icon-gouwuche" @click.stop='addCar(hot)'></span>
                </li>
            </ul>        
            </div>
            <!-- <div class="venue"></div> -->
                    
               <div class="homefooter_wrap">
                <div class="homefooter">
                    <!-- <tab  active-color='#2f9cff' v-model="footerindex" >
                        <tab-item class="vux-center"   v-for="(item, index) in homefooterList" @click=" footer2=item" :selected="footer2===item" :key="index">{{item}}</tab-item>
                    </tab> -->
                        <tab :line-width=0 active-color='#fc378c' v-model="index">
                            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
                        </tab>
                </div>
               </div>
               <div class="homefootet_search">
                   <div> <router-link :to="{path:'/home/homeSearch',query:{name:'商品'}}" class="right-icon">搜商品</router-link></div>
                   <div><router-link :to="{path:'/home/homeSearch',query:{name:'店铺'}}"  class="right-icon">搜卖家</router-link></div>
               </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem, Tab, TabItem,} from 'vux'
import banner2 from '../../../static/data/banner/2/0.jpg'
import banner3 from '../../../static/data/banner/3/0.jpg'
import banner4 from '../../../static/data/banner/4/0.jpg'
import banner5 from '../../../static/data/banner/5/0.jpg'
import banner6 from '../../../static/data/banner/6/0.jpg'
import banner7 from '../../../static/data/banner/7/0.jpg'
import banner8 from '../../../static/data/banner/8/0.jpg'
// import { setTimeout } from 'timers';
//console.log(data)
export default {
    name : 'collectMoney',
data() {
		return {
            footerindex:0,
            list2:[],
            index: 0,
            demo2: '家居百货',
            dataUrl:'',
            oneswiper:true,
            hotScrollTop:0,
			swiper06_list: [],
			swiperdata:{},
			swiperdatas:{},
			swiperdata1:{},
			venue_img: [],
            hotSale:[],
            timesSale:[],
            defaultImg: 'this.src="' + require('@/assets/img/default.png') + '"',
            flag1:8000,
            swiper0_index:0,
            swiper01_index:-1,
            swiper02_index:-1,
            swiper03_index:0,
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
    props:{
            auto1:{
                type:Boolean,
                require:true
            }
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
                    "548de378-65c2-4eef-9aed-b7786443200c":banner8,
         };
           this.swiperdata1= {
                            "07d3a288-4283-43c5-9a69-2f249579778f":	banner5,
                            "a51d5068-83a2-4bfd-b5c7-59f61beb1730":banner6,
                            "038d3183-c96f-4a7c-9f19-9ad398e40451":	banner3,
                            // "82534bf9-1802-4ade-9db8-71e7819c52a2":	banner4,
                            // "804e902c-fe52-479b-a65c-7e196d8687a9":banner7,
                            // "548de378-65c2-4eef-9aed-b7786443200c":banner8,
        };
        this.list2=['家居百货','家用电器','食品酒水','服装配饰','美妆个护','母婴用品','数码办公','汽车用品','精选箱包','户外用品'];
 
  
    },
    mounted() {
            this.hotScrollTop=this.$refs.hotGoods.offsetTop;
            // this.$refs.topSwiper.setAttribute("auto");
    },
    distoryed() {

    },
    methods: {
        swiper0_onIndexChange (index) {//第壹个轮播
                var _this=this;
                setTimeout(function(){
                     _this.swiper0_index = index+1
                },1000)
            },
         swiper01_onIndexChange (index) {//第二个轮播
                var _this=this;
                setTimeout(function(){
                _this.swiper01_index = index+1
                },1000)
            },
       	 swiper02_onIndexChange (index) {//第三个轮播
                var _this=this;
                setTimeout(function(){
                    _this.swiper02_index = index+1
                },2000)
        },
       
        swiper03_onIndexChange (index) {//第四个轮播
                var _this=this;
                setTimeout(function(){
                _this.swiper03_index = index+1
                },3000)
        },
         
        demo03_onIndexChange(index){
                  var _this=this;
                setTimeout(function(){
                _this.demo03_index = index+1
                },4000)
        },            
        goDetails(id){
                // console.log(id)
             this.$router.push({
                path: '/home/homeDetail',
                query: {
                    id: id
                }
                })
        },
        tapActive(index){
            this.cindex=index;
        },
        addCar(hot){
                    var date = new Date();
                    var dataForAddCar={};
                    dataForAddCar.id=hot.id;
                    dataForAddCar.name=hot.name;
                    dataForAddCar.img='http://cn01.alicdn.sasa.com/'+hot.img;
                    dataForAddCar.storeName=hot.storeName;
                    dataForAddCar.price=hot.price;
                    dataForAddCar.title=hot.productTitle;
                    dataForAddCar.time=date;
                    dataForAddCar.count=1;
                    var jsonString=localStorage.getItem('addcar')||'[]';
                    console.log(jsonString)
                    
                    var arrCar=JSON.parse(jsonString);
                    arrCar.push(dataForAddCar);

                localStorage.setItem('addcar',JSON.stringify(arrCar));
                // this.showModule();
                // setTimeout(() => {
                //     AlertModule.hide()
                // }, 3000)
                alert("加入购物车成功")
        },
    },
    filters: {
    },
     computed: {
                 
   },
    watch:{
        index:function(val,oldval){
            // console.log(document.body.scrollTop,this.hotScrollTop, document.querySelector('#home-view').scrollTop)
            if(val!=oldval){
                 document.querySelector('#home-view').scrollTop=this.hotScrollTop;
                // this.$refs.hotGoods.scrollToTop=0;
                      switch(val){
                        case 0:this.dataUrl='static/data/index/pf-hotSale1.json';break;
                        case 1:this.dataUrl='static/data/class/gerenhuli/rq.json' ;break;
                        case 2:this.dataUrl='static/data/class/gerenhuli/xs.json';break;
                        case 3:this.dataUrl='static/data/class/gerenhuli/pf.json';break;
                        case 4:this.dataUrl='static/data/class/gerenhuli/jq.json';break;
                        case 5:this.dataUrl='static/data/class/gerenhuli/zx.json';break;
                        case 6:this.dataUrl='static/data/class/mianmo/xs.json';break;
                        case 7:this.dataUrl='static/data/class/mianmo/pf.json';break;
                        case 8:this.dataUrl='static/data/class/mianmo/jq.json';break;
                        case 9:this.dataUrl='static/data/class/mianmo/zx.json';break;
                    }
                    this.$axios.get(this.dataUrl)
                            .then(res=>{
                                this.hotSale=res.data
                    });
            };
        } ,
        swiper01_index:function(val,oldval){
            // console.log(val,oldval)
        } ,
        
    }
}
</script>

<style scoped lang="less">
    #home{width: 100%;height: 100%;background:#e3e4e4;}
    .hot-list{margin-bottom:50px;padding-bottom: 50px;}
    .hot-list li:nth-of-type(2n+1){width: 49%;margin-right: 1%;margin-top: 2%;position: relative;float: left;background: #fff;}
    .hot-list li:nth-of-type(2n){width: 49%;margin-left: 1%;margin-top: 2%;position: relative;float: left;background: #fff;}
    .hot-list li img{width: 70%;height:150px; margin: 0 auto;}
   .hot-list li .placename {box-sizing: content-box;width: 35px;height: 22px;position: absolute;top: 6px;
    right:6px;font-size: 12px;text-align: center;line-height: 22px;border: 1px solid #9b9b9b;border-radius:3px;color: #000;}
    .hot-list li .home-hotinfo p{    font-size:12px;height: 47px;color: #010101;line-height: 23px;
    overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
     .hot-list li .home-hotinfo p:nth-of-type(2){font-size:12px;height: 23px;color: #010101; overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp:1; -webkit-box-orient: vertical;}
    .hot-list li .home-hotinfo .jg span:nth-of-type(1){font-size: 14px;color: #ec3f7e; margin-right:3px;}
    .hot-list li .home-hotinfo .jg del{font-size:12px;color: #aab0b0; margin-right:3px;}
     .hot-list li .home-hotinfo .jg span:nth-of-type(2){ font-size:12px; color: #be955f; }
     .hot-list li .home-hotinfo .jg span:nth-of-type(3){font-size:12px;color: #ec3f7e;}
     .homefooter_wrap {position:fixed;left: 0;bottom:50px; color: #848C98; z-index:50;width:85%;}
     .homefootet_search{position:fixed;right: 0;bottom:50px; color: #848C98; z-index:50;width:15%; background: #d1d2d7;border-top-left-radius: 10px;
     text-align: center; ;line-height: 30px;}
     .homefootet_search a{color: #2f9cff;}
</style>
    <style>
    .kuaijie .weui-grid__icon{width: 40px !important;}
    #home .topswiper .vux-swiper img,.secswiper .vux-swiper img,.thirdswiper .vux-swiper img,.fourswiper .vux-swiper img{height: 100%;width:100%;} 
    #home .secswiper{height: 180px;}
    #home .topswiper .vux-swiper{height: 360px  !important;margin-bottom: 10px;}
    #home .secswiper .vux-swiper{height: 180px !important;}
    #home .container .vux-swiper{height: 120px !important;}
    #home .thirdswiper .vux-swiper,.fourswiper .vux-swiper{height: 120px;}
    #home .vux-slider{height: 100%;}
    #home .container{position: relative;height: 120px;width: 100%;margin-top: 10px;background-color: #fff;}
    .containers img{height: 100%;}
     #home .container img{max-height: 100%;width:100%;}
     #home .container p{width: 47%;position: absolute;left: 50%;top: 10px;color: #141412;font-size: 14px;line-height: 20px;}
     #home .container  .jg{width: 50%;position: absolute;left: 50%;;color: #141412;bottom:10px}
    #home .container .jg .discount {display: inline-block;width: 40px;height: 20px;background: #ef3f7f;font-size: 13px;text-align: center; line-height:20px;color: #fff;}
    .add-car{ position: absolute;z-index: 10;right: 15px; top:118px;width: 28px;height: 28px;line-height: 32px; background: #ccbebe; border-radius: 50%;text-align: center; color: #ed3a7c;font-size:19px;}
     #home .container .jg .nowprice{font-size: 13px;color:#EF3F7F;}
    .container .vux-flexbox{height: 100%;max-width:100%;}
    .venue .vux-flexbox,.venue_box .vux-flexbox{margin-top: 10px;}
    .venue img{width: 100%;height: 100%;}
    .venue .vux-flexbox .vux-flexbox-item{height: 110px;background-color: #fff; }
    .venue_box .vux-flexbox .vux-flexbox-item{height: 200px;background-color: #fff; }
    /* .homefooter{overflow: scroll;} */
    .homefooter .vux-tab{width: 700px;}
    /* .homefooter .vux-tab div{width: 70px !important;} */
    /* .homefooter  ::-webkit-scrollbar{height: 0px !important; opacity:0;} */
    /* .hot-list{background:url(../../assets/img/bg3.png);} */
    #home .vux-tab .vux-tab-item{-webkit-box-flex: 1 !important;-ms-flex: 1 !important;flex: 1 !important;}
    #home .vux-tab-container{    overflow-x: scroll;overflow-y: hidden;}
    /* .scrollable::-webkit-scrollbar{height: 1px ;background: #EF3F7F;} */
       .scrollable::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
        .scrollable::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .scrollable::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);
        }
    /* .home-hotinfo{background:url(../../assets/img/bg.png);} */
</style>

