<template>
    <div id="shop" >
       <x-header :left-options="{showBack: false}" >{{datalist.name}}</x-header>
       <Swiper :Swiperlist="swiperlist" :way='wayone'></Swiper>
                        <div class="tab-swiper vux-center">
                                 <h4 >企业简介</h4>
                                <div></div>
                            <section class="shop-main" v-for="(item,index) in datalist.shop" :key="index">
                                <h4>{{item.name}}</h4>
                                <div class="venue_box " ref="hotGoods">
                                    <ul class="hot-list clearfix" >
                                        <li v-for='(hot,indexsub) in item.style' :key="indexsub"  @click="goDetail(hot.id)">
                                                        <img :src="hot.thumbnail"  :onerror="defaultImg"/>
                                                <div class="home-hotinfo">
                                                <p><span>{{hot.name}}</span></p>
                                                <div class="jg">
                                                    <span >￥{{hot?parseFloat(hot.price).toFixed(0):0}}</span>
                                                    <span class="fr" style="padding-right:5px;">{{hot.deliveryNum }}件起售</span>
                                                </div>
                                                <!-- <p><span >卖点：</span><span>{{hot.sellerPoint}}</span></p> -->
                                                </div>
                                                <!-- <span class="add-car icon iconfont icon-gouwuche" @click.stop='addCar(hot)'></span> -->
                                        </li>
                                    </ul>        
                                </div>
                                <!-- <h4>分类2</h4>
                                <div class="venue_box " ref="hotGoods">
                                    <ul class="hot-list clearfix" >
                                        <li v-for='(hot,index) in datalist' :key="index" @click="goDetails(hot.id)">
                                                        <img :src="hot.thumbnail"  :onerror="defaultImg"/>
                                                <div class="home-hotinfo">
                                                <p><span>{{hot.name}}</span></p>
                                                <div class="jg">
                                                    <span >￥{{hot?parseFloat(hot.price).toFixed(0):0}}</span>
                                                    <span class="fr" style="padding-right:5px;">{{hot.miniOrder}}件起售</span>
                                                </div>
                                                <p><span >卖点：</span><span>{{hot.sellerPoint}}</span></p>
                                                </div>
                                                <span class="add-car icon iconfont icon-gouwuche" @click.stop='addCar(hot)'></span>
                                        </li>
                                    </ul>        
                                </div> -->
                            </section>
                        </div>
    </div>
</template>

<script>
import Swiper from "@/components/swiper/swiper";
import {
  SwiperItem,
  Flexbox,
  FlexboxItem,
  Tab,
  TabItem,
   XHeader
} from "vux";

//console.log(data)
export default {
  name: "shop",
  data() {
    return {
      defaultImg: 'this.src="' + require("@/assets/img/default.png") + '"',
     title_main:'店铺名称',
      swiperlist: [
        {
          id: 1,
          img_url:
            "//img.hb.aicdn.com/e6eb4f01f8e4c8993f1b64d59793a08469962359249c0-mZsZDR_sq320",
          time: "1000"
        },
        {
          id: 2,
          img_url:
            "http://gaitaobao2.alicdn.com/tfscom/i2/2970913609/TB2nEVJqFmWBuNjSspdXXbugXXa_!!2970913609.jpg_300x300q90.jpg_.webp",
          time: "3000"
        }
      ],
      datalist:[],
      wayone: true,
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem, XHeader
  },
  created() {
    // this.$axios.get("static/data/index/xs-hotSale1.json").then(res => {
    //   this.venue_img = res.data;
    // });
    this.getdata();
  },
  mounted() {
    this.tabName = this.$route.query.name;
    console.log(this.index);
  },
  distoryed() {},
  methods: {
    goDetail(id){
      alert(id)
      this.$router.push({path:'/home/homeDetail',query:{id:id}});
    },
        getdata(){
              this.$axios.get("/index/my_shop",{shopId:this.$route.query.id}).then(res => {
                this.datalist = res.data;
              });
        }
  },
  filters: {},
  watch: {
    index: function(val, oldval) {
      // console.log(val,oldval)
      if (val != 0) {
        this.title_main = this.tabGoods[val].typeName;
        this.tabIndex=this.tabGoods[val].id;
        this.indexsec = 0;
        //  window.scroll(0, 0);
        // document.querySelector('.venue_box').scrollTop=0;
      }else{
        this.tabIndex='';
      }
    },indexsec(val){
      // console.log(val)
        if(val==1){
            this.shopStore=false;
        }else{
          this.shopStore=true;
        }
    },
  }
};
</script>

<style scoped lang="less">
.shop .shop-bar {
  width: 100%;
  height: 58px;
  background: #fff;
  border-bottom: #ddd solid 1px;
  line-height: 58px;
  position: relative;
}
.shop .shop-bar .shop-btn {
  position: absolute;
  right: 3%;
  font-size: 22px;
  top: 50%;
  transform: translateY(-50%);
  color: #8b8dbc;
}
.shop .shop-bar input {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  height: 50%;
  width: 75%;
  font-size: 14px;
  border: none;
  outline: none;
}
.shop .shop-bar input:focus {
  border: none;
}

.shop .shop-bar span {
  position: absolute;
  // right: 7%;
  font-size: 14px;
  color: #010101;
}
.shop .shop-main ul {
  background: #e3e4e4;
  padding-top: 6px;
  // padding-left: 4.5%;
  padding-bottom: 16px;
}
.shop .shop-main h4 {
  padding-left: 4.5%;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: #9d9d9d;
}

.shop .shop-main ul.tuijian li a {
  display: inline-block;
  padding: 6px 9px;
  color: #dbb58b;
  font-size: 12px;
}
.shop .shop-main ul.tuijian li {
  border: 1px solid #dbb58b;
  border-radius: 4px;
  margin-right: 11px;
  margin-top: 11px;
  float: left;
}
.shop {
  background: #f7f7f7;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: 0;
  // left: 100%;
  overflow: hidden;
  transition: 0.3s left;
  display: flex;
  flex-direction: column-reverse;
}
.vux-slider {
  height: 100%;
}
.hot-list {
  margin-bottom: 50px;
  padding-bottom: 50px;
}
.hot-list li:nth-of-type(2n + 1) {
  width: 49%;
  margin-right: 1%;
  margin-top: 2%;
  position: relative;
  float: left;
  background: #fff;
}
.hot-list li:nth-of-type(2n) {
  width: 49%;
  margin-left: 1%;
  margin-top: 2%;
  position: relative;
  float: left;
  background: #fff;
}
.hot-list li img {
  width: 70%;
  height: 150px;
  margin: 0 auto;
}
.hot-list li .placename {
  box-sizing: content-box;
  width: 35px;
  height: 22px;
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 12px;
  text-align: center;
  line-height: 22px;
  border: 1px solid #9b9b9b;
  border-radius: 3px;
  color: #000;
}
.hot-list li .home-hotinfo p {
  font-size: 12px;
  height: 23px;
  color: #010101;
  line-height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.hot-list li .home-hotinfo p:nth-of-type(2) {
  font-size: 12px;
  height: 23px;
  color: #010101;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.hot-list li .home-hotinfo .jg span:nth-of-type(1) {
  font-size: 14px;
  color: #ec3f7e;
  margin-right: 3px;
}
.hot-list li .home-hotinfo .jg del {
  font-size: 12px;
  color: #aab0b0;
  margin-right: 3px;
}
.hot-list li .home-hotinfo .jg span:nth-of-type(2) {
  font-size: 12px;
  color: #be955f;
}
.hot-list li .home-hotinfo .jg span:nth-of-type(3) {
  font-size: 12px;
  color: #ec3f7e;
}
.add-car {
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 118px;
  width: 28px;
  height: 28px;
  line-height: 32px;
  background: #ccbebe;
  border-radius: 50%;
  text-align: center;
  color: #ed3a7c;
  font-size: 19px;
}
.venue_box_shop .hot-list-shop li {
  width: 100%;
}
.shoplist-top {
  height: 60px;
  line-height: 60px;
  font-size: 19px;
  position: relative;
  padding-left: 75px;
}
.hot-list li .shoplist-top img {
  border-radius: 50%;
  position: absolute;
  left: 7px;
  top: 5px;
  width: 50px;
  height: 50px;
}
.shoplist-top .list_title {
  line-height: 35px;
}
.shoplist-top .list_title_detail {
  line-height: 25px;
  font-size: 15px;
  color: #acb2b3;
}
.shoplist-top .intoshop {
  width: 70px;
  height: 30px;
  line-height: 30px;
  background: #33a7d8;
  border-radius: 50px;
  color: #ffffff;
  position: absolute;
  top: 15px;
  right: 8px;
  text-align: center;
}
.hot-list .hot_list_info {
  height: 120px;
  padding: 0 20px 13px;
  padding-top: 10px;
  font-size: 15px;
  line-height: 18px;
}
.hot-list .hot_list_info {
  display: flex;
}
.hot-list .left_list_info {
  width: 280px;
}
.hot-list .hot_list_info > div span:nth-of-type(2) {
  margin-bottom: 10px;
  color: #acb2b3;
  font-size: 13px;
}
.hot-list .left_list_info > div {
  margin-bottom: 10px;
}
.list_info_address,
.list_info_xz {
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.list_info_main {
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.hot-list .right_list_info img {
  height: 94px;
  width: 113px;
  border-radius: 15px;
}
.shop-main h3 {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #000000a1;
  border: 1px solid #000000a1;
}
</style>
<style>
#shop .vux-swiper {
  height: 100%;
  overflow: auto;
}
#shop .vux-swiper p {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.shop-main {
  padding-bottom: 40px;
}
h4{height: 30px;line-height: 30px;}
.home-hotinfo{padding-left: 8px;}
</style>

