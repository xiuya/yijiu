<template>
    <div id="cart">
                <div class="cart-empty" v-if='getItems.length==0'>
                  <img :src="caricon" alt="">
                    <div>购物车空,赶紧去购物去吧.</div>
              </div>
              <div class="container-cart " v-else>  
                   
                    <div class="shop" v-for='(getItem,index) in getItems' :key='index' v-if='getItems.length>=1'>
                        <!-- 店铺名 -->
                        <div class="shop_name clearfix">
                            <span class="shop_name_text fl">
                                {{getItem.shopName}}
                            </span>
                            <span class="fr">
                                {{moment(getItem.createTime).format('YYYY-MM-DD HH:mm:ss')}}
                                <!-- 2015-10-12 -->
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
                                      <span class="title">{{getItem.goodsName}}</span>
                                       <span class="description">
                                              <!-- {{getItem.title}}
                                             这是商品描述内容  -->
                                      </span>
                                      <span class="price">￥{{getItem.price}}/{{getItem.minNum}}</span>
                                    </div>
                                    <div class="fr">
                                             <x-button type="default" @click.native="delgoods(getItem.styleId)">删除</x-button>
                                    </div>
                                  
                                  </div>
                                      <div class="tag_group">
                                          <x-number  v-model="getItem.number" :min="1" @on-change="change"></x-number>
                                      </div>
                                </div>
                            </div>
                      </div>
                    </div>   

                    <x-header :left-options="{showBack: false}">购物车 </x-header>
                    <div class="cart-footer clearfix" v-if='getItems.length>=0'>
                        <div class="bg-gray" @click="qingkong">清空</div>
                        <!-- <div><div>收藏</div>999款</div> -->
                      <div></div>
                        <div><div>共选</div><span class="c-blue">{{countTotal}}</span>款</div>
                        <div><div>合计</div> <span class="c-red">￥{{priceTotal}}</span></div>
                        <div class="bg-red" @click="payCar">结算</div>
                        <div class="bg-green checkall" @click="checkAll">全选</div>
                    </div>   
              </div> 
         

    </div>
</template>

<script>
import { Grid, GridItem, XHeader, XNumber, Group, XButton } from "vux";
// import moment from 'moment';
//import wallet_04 from '@/assets/img/wallet_04.png'
import caricon from "@/assets/img/car.png";

export default {
  name: "wallet",
  data() {
    return {
      // gridList: [],
      // todaydata: {},
      // buyValue: 1,
      getItems: [],
      priceTotal: 0,
      countTotal: 0,
      // dataDetail: [],
      caricon: caricon,
      arrItems:[],
    };
  },
  components: {
    Grid,
    GridItem,
    XHeader,
    XNumber,
    Group,
    XButton
  },
  methods: {
    change(val) {},
    checkAll() {
      document.querySelector(".vux-number-input").style.background = "#00ff66";
    },
    clearLocalstorage() {
      localStorage.setItem("addcar", "");
      // location.reload();
    },
    getCart(){
        this.$axios.get('/user/order/shop_cart').then(
          res=>{
            if(res.code=='OK'){
                  this.getItems=res.data.details;
                  this.countTotal=res.data.number;
                  this.priceTotal=res.data.subPrice;
            }
          })
    },
    payCar(){
      // console.log(this.getItems)
      var arrItems=[];
      var getItems=this.getItems
      for(let i in getItems){
        console.log(i)
        arrItems.push({styleId:getItems[i].styleId,number:getItems[i].number});
      };
      arrItems=JSON.stringify(arrItems);
      // console.log(arrItems)
      // [{"styleId":"bhoL","number":"2"},{"styleId":"bXBT","number":"3"},{"styleId":"b047","number":"4"},{"styleId":"hTbi","number":"5"}]
     this.$router.push({path:'/order/orderDetailnoId',query:{shopCard:arrItems}});
    
      
    },
    delgoods(styleId){
             this.$axios.post('/user/order/shop_cart_del',{styleId:styleId}).then(
            res=>{
              if(res.code=='OK'){
                 this.$vux.toast.show({'text':'删除成功'})
                 this.getCart();
              }
            });
    },
    qingkong(){
       this.$axios.post('/user/order/shop_cart_clear').then(
            res=>{
              if(res.code=='OK'){
                 this.getCart();
                 this.$vux.toast.show({'text':'购物车全部清空'})
              }
        });
      
    },
  },
  created() {
  
  },
  mounted() {
    this.getCart();
    console.log(this.getItems);
    // this.$nextTick(function() {
    //   var addCar = localStorage.getItem("addcar")
    //     ? JSON.parse(localStorage.getItem("addcar"))
    //     : "";
    //   var resObj = {};
    //   for (var i = 0; i < addCar.length - 1; i++) {
    //     var item = addCar[i];
    //     if (!resObj[item.id]) {
    //       // this.priceTotal+= parseInt(this.getItems[i].price);
    //       // this.countTotal+=1;
    //       resObj[item.id] = item.count;
    //     } else {
    //       var count = resObj[item.id];
    //       resObj[item.id] = count + item.count;
    //     }
    //   }
    //   console.log(resObj);
    //   for (var key in resObj) {
    //     //  var url='http://localhost:8080/#/home/homeDetail?id='+key;
    //     //  console.log(url)
    //     var _this = this;
    //     var goodsdetail =
    //       "static/data/details/" + key + "/getProductDetailInfo.json";
    //     this.$axios.get(goodsdetail).then(res => {
    //       if (!!res.data) {
    //         this.$set(res.data, "count", resObj[key]);
    //         this.getItems.push(res.data);
    //         console.log(this.getItems);
    //         this.countTotal++;
    //       }
    //     });
    //   }
    // });
  }
};
</script>

<style scoped lang="less">
.cart-empty {
  // height: 100%;
  width: 100%;
}
#home-view {
  position: relative;
}
.shop {
  padding: 5px 8px;
  background: #fff;
  margin-bottom:10px;
}
.shop_name {
  border-bottom: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
}
.shop_item_left {
  width: 90px;
  height: 90px;
  float: left;
}
.shop_item_center {
  height: 90px;
}
.c-red {
  color: #ff6666;
}
.c-blue {
  color: #2f9cff;
}
.bg-red {
  background: #ff6666;
}
.bg-gray {
  background: gray;
}
.bg-green {
  background: #00ff66;
}
.cart-footer {
  width: 100%;
  height: 50px;
  border-top: 1px solid #333;
  position: fixed;
  background: #fff;
  bottom: 50px;
}
.cart-footer > div {
  float: left;
  width: 20%;
  height: 100%;
  text-align: center;
}
.cart-footer > div[class] {
  color: #fff;
  text-align: center;
}
.cart-footer .bg-gray,
.cart-footer .bg-green {
  line-height: 50px;
  width: 10%;
}
.cart-footer .bg-red {
  line-height: 50px;
}
.count-num {
  border: 1px solid #ccc;
}
.container {
  position: absolute;
  bottom: 50px;
  width: 100%;
  top: 0;
}

.shop_item_right {
  overflow: hidden;
  height: 100%;
  font-size: 13px;
  position: relative;
  height: 90px;
  width: 267px;
}
.tag_group {
  position: absolute;
  bottom: 0px;
  right: 0;
}
.shop_item_right .description {
  height: 23px;
  margin-top: 10px;
  color: #010101;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.container-cart {
  // padding-bottom: 50px;padding-top: 10px;
  margin-bottom: 50px;
}
.shop-content{
  display: flex;
}
.shop-content .fl{width: 180px;}
.shop-content .title {
  font-size: 12px;
  line-height: 20px;
  height: 40px;
  color: #010101;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.shop-content .fr button {
  margin-top: 10px;
  margin-right: 10px;
}
.shop_item {
  display: flex;
  height: 90px;
  overflow: hidden;
}
.img-box {
  height: 90px;
  width: 90px;
  vertical-align: middle;
}
.price {
  color: red;
}
</style>
<style>
/* .tag_group .weui-cell {
  width: 150px;
  float: right;
  padding: 0 !important;
} */
.img-box img {
  width: 100%;
  height: 100%;
}

.container-cart {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.null {
  height: 50px;
}
.cart-empty {
  text-align: center;
  font-size: 30px;
  line-height: 60px;
}
.cart-empty img {
  width: 100%;
}
.cart-empty i {
  display: block;
  font-size: 50px;
}
.container-cart  .vux-header{width: 100%;top: 0;position:fixed;}
</style>

