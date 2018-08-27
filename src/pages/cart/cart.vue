<template>
    <div id="cart">
              <div class="container-cart ">   
                    <div class="cart-empty" v-if='!getItems'>
                        购物车空,赶紧去购物去吧.
                    </div>
                    <div class="null"></div>
                    <div class="shop" v-for='(getItem,index) in getItems' :key='index' v-if='getItems.length>=1'>
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
                                    <img :src="imgUrl+getItem.img" alt="" class="item_icon">
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
                          <x-number  v-model="getItem.count" :min="0" @on-change="change"></x-number>
                                      </div>
                                </div>
                            </div>
                      </div>
                    </div>   
                    <div class="cart-footer clearfix" v-if='getItems.length>=1'>
                        <div class="bg-gray" >清空</div>
                        <div><div>收藏</div>999款</div>
                        <div><div>共选</div><span class="c-blue">{{countTotal}}</span>款</div>
                        <div><div>合计</div> <span class="c-red">￥{{priceTotal}}</span></div>
                        <div class="bg-red">结算</div>
                        <div class="bg-green checkall">全选</div>
                    </div>   
              </div> 
         

    </div>
</template>

<script>
import { Grid, GridItem, XHeader, XNumber, Group } from "vux";
// import moment from 'moment';
//import wallet_04 from '@/assets/img/wallet_04.png'

export default {
  name: "wallet",
  data() {
    return {
      gridList: [],
      todaydata: {},
      resdatas: [],
      buyValue: 1,
      getItems:[],
      priceTotal:0,  
      countTotal:0,  
      dataDetail:[],
    };
  },
  components: {
    Grid,
    GridItem,
    XHeader,
    XNumber,
    Group
  },
  methods: {
    change(val) {
    }
  },
  created() {
    this.$axios.get("static/data/index/xs-hotSale1.json").then(res => {
      // console.log(res.data)
      this.resdatas = res.data;
    });
  },
  mounted() {
    console.log(this.getItems);
        this.$nextTick(function(){
           var addCar=localStorage.getItem("addcar")? JSON.parse(localStorage.getItem("addcar")): "";
           var resObj={};
                      for (var i = 0; i < addCar.length-1; i++) {
                        var item=addCar[i];
                        if(!resObj[item.id]){
                              // this.priceTotal+= parseInt(this.getItems[i].price);
                              // this.countTotal+=1;
                              resObj[item.id]=item.count;
                        }else{
                          var count=resObj[item.id];
                              resObj[item.id]=count+item.count;
                        }
                      };
           console.log(resObj);
           for(var key in resObj){
          //  var url='http://localhost:8080/#/home/homeDetail?id='+key;
          //  console.log(url)
          var _this=this;
          var goodsdetail='static/data/details/'+key+'/getProductDetailInfo.json';
              this.$axios.get(goodsdetail)
                .then(res=>{
                  if(!!res.data){
                      this.$set(res.data,"count",resObj[key])
                      this.getItems.push(res.data);
                      console.log(this.getItems)
                      this.countTotal++
          
                  }
            });
           }

        })
  
  }
};
</script>

<style scoped lang="less">
.cart-empty{
    height: 100%;
    width: 100%;
}
#home-view {
  position: relative;
}
.shop {
  padding: 5px 8px;
  background: #fff;
  margin-bottom: 15px;
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
  color: rgb(252, 55, 140);
}
.c-blue {
  color: #2f9cff;
}
.bg-red {
  background: rgb(252, 55, 140);
}
.bg-gray {
  background: gray;
}
.bg-green {
  background: #2f9cff;
}
.cart-footer {
  width: 100%;
  height: 50px;
  border-top: 1px solid #333;
  position:fixed;
  background: #fff    ;   
  bottom:50px;
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
.img-box {
  height: 125px;
  width: 125px;
  float: left;
  vertical-align: middle;
}
.shop_item_right {
  overflow: hidden;
  height: 100%;
  font-size: 13px;
  padding: 14px 23px 14px 0;
  position: relative;
  height: 97px;
}
.tag_group {
  position: absolute;
  bottom: 8px;
  width: 100%;
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
.container-cart{
    padding-bottom: 50px;
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
.null{height: 50px;}

</style>

