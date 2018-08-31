<template>
    <div>
        <div id="order">
            <tab :line-width=2 active-color='#fc378c' v-model="index">
                    <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in tabberGoods" @click="tabName= item" :key="index">{{item}}</tab-item>
                </tab>
              	<div class="container ">
                  <div class="maijia">买家</div>
                    <div class="goods_list ">
                        <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                <div class="count_title clearfix status1">
                                        <div class="title_left fl">待付款</div>
                                        <div class="title_right fr">商品名称1225</div>
                                </div>
                                <div class="count_up clearfix ">
                                    <div class="left">
                                        <span >下单：</span>
                                        <span >2018-7-24</span>
                                    </div>
                                    <div class="right">
                                        <span>订单号：</span>
                                        <span >abcde-677742455</span>
                                    </div>
                                </div>
                                <div class="count_down  clearfix"  >
                                        <div class="left">
                                            <img :src="listImg" alt="">
                                        </div>
                                        <div class='right-content'>
                                                <div class="center">
                                                    <div><span>总款式：</span><span>4款</span></div>
                                                    <div><span>总金额：</span><span>￥999</span></div>
                                                    <div><span>总数量：</span><span>100套</span></div>
                                                    <div><span>卖家：</span><span>卖家名称111</span></div>
                                                </div>
                                                <div class="right">
                                                    <a href="#" class="pay_money ">付款</a>
                                                    <a href="#" class="pay_cancel">取消订单</a>
                                                </div>
                                        </div>
                                </div>
                      </router-link>
                    </div> 

                      <div class="goods_list ">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                            <div class="count_title clearfix status2">
                                  <div class="title_left fl">待发货</div>
                                <div class="title_right fr">商品名称1225</div>
                            </div>
                            <div class="count_up clearfix ">
                              <div class="left">
                                  <span >下单：</span>
                                  <span >2018-8-24 12：12</span>
                              </div>
                              <div class="right">
                                  <span>订单号：</span>
                                  <span >abcde-677742455</span>
                              </div>
                            </div>
                            <div class="count_down  clearfix"  >
                                <div class="left">
                                    <img :src="listImg" alt="">
                                </div>
                                <div class='right-content'>
                                  <div class="center">
                                    <div><span>总款式：</span><span>4款</span></div>
                                    <div><span>总金额：</span><span>￥999</span></div>
                                    <div><span>总数量：</span><span>100套</span></div>
                                    <div><span>卖家：</span><span>卖家名称111</span></div>
                                  </div>
                                  <div class="right">
                                    <!-- <a href="#" class="pay_money wuliu">查看物流</a> -->
                                    <a href="#" class="pay_cancel" @click.prevent="cancelorder">取消订单</a>
                                  </div>
                                </div>
                            </div>
                         </router-link>
                    </div>


                <div class="goods_list ">
                      <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                            <div class="count_title clearfix status3">
                                  <div class="title_left fl">待收货</div>
                                <div class="title_right fr">商品名称1225</div>
                            </div>
                            <div class="count_up clearfix ">
                              <div class="left">
                                  <span >下单：</span>
                                  <span >2018-7-24</span>
                              </div>
                              <div class="right">
                                  <span>订单号：</span>
                                  <span >abcde-677742455</span>
                              </div>
                            </div>
                            <div class="count_down  clearfix" >
                                <div class="left">
                                    <img :src="listImg" alt="">
                                </div>
                                <div class='right-content'>
                                    <div class="center">
                                      <div><span>总款式：</span><span>4款</span></div>
                                      <div><span>总金额：</span><span>￥999</span></div>
                                      <div><span>总数量：</span><span>100套</span></div>
                                      <div><span>卖家：</span><span>卖家名称111</span></div>
                                    </div>
                                    <div class="right">
                                      <a href="#" class="pay_money ">确认收货</a>
                                      <a href="#" class="pay_cancel">取消订单</a>
                                    </div>
                                </div>    
                            </div>
                            <div class="count_footer clearfix">
                              <div class="fl">顺风快递</div>
                              <div class="fr">单号：4512154123</div>
                            </div>
                      </router-link>
                  </div>
                    <div class="goods_list ">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                            <div class="count_title clearfix status4 ">
                                  <div class="title_left fl">待评价</div>
                                <div class="title_right fr">商品名称1225</div>
                            </div>
                            <div class="count_up clearfix ">
                              <div class="left">
                                  <span >下单：</span>
                                  <span >2018-8-24 12：12</span>
                              </div>
                              <div class="right-content">
                                <div class="right">
                                  <span>订单号：</span>
                                  <span >abcde-677742455</span>
                                </div>
                              </div>
                              
                            </div>
                            <div class="count_down  clearfix" >
                                <div class="left">
                                    <img :src="listImg" alt="">
                                </div>
                                <div class="right-content">
                                    <div class="center">
                                      <div><span>总款式：</span><span>4款</span></div>
                                      <div><span>总金额：</span><span>￥999</span></div>
                                      <div><span>总数量：</span><span>100套</span></div>
                                      <div><span>卖家：</span><span>卖家名称111</span></div>
                                    </div>
                                    <div class="right">
                                      <a href="#" class="pay_money wuliu">写评语</a>
                                      <a href="#" class="pay_cancel">申请售后</a>
                                    </div>
                                </div>    
                            </div>
                         </router-link>
                    </div>
                    <div class="goods_list ">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                              <div class="count_title clearfix status5">
                                    <div class="title_left fl">已取消</div>
                                  <div class="title_right fr">商品名称1225</div>
                              </div>
                              <div class="count_up clearfix ">
                                <div class="left">
                                    <span >下单：</span>
                                    <span >2018-7-24</span>
                                </div>
                                <div class="right-content">
                                  <div class="right">
                                      <span>订单号：</span>
                                      <span >abcde-677742455</span>
                                  </div>
                                </div>  
                              </div>
                              <div class="count_down  clearfix" >
                                  <div class="left">
                                      <img :src="listImg" alt="">
                                  </div>
                                <div class="right-content">
                                      <div class="center">
                                        <div><span>总款式：</span><span>4款</span></div>
                                        <div><span>总金额：</span><span>￥999</span></div>
                                        <div><span>总数量：</span><span>100套</span></div>
                                        <div><span>卖家：</span><span>卖家名称111</span></div>
                                      </div>
                                      <div class="right right-singer">
                                        <a href="#" class="pay_money ">仅退款</a>
                                          <div class="sktime">
                                            <span >取消订单</span>
                                            <span>2018-12-22</span>
                                            <span>12:25</span>
                                          </div>
                                      </div>
                                </div>      
                              </div>
                         </router-link>
                    </div>
            	</div>

              	<div class="container ">
                    <div class="maijia">卖家</div>  
                    <div class="goods_list ">
                        <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                <div class="count_title clearfix status1">
                                        <div class="title_left fl">待付款</div>
                                        <div class="title_right fr">商品名称1225</div>
                                </div>
                                <div class="count_up clearfix ">
                                    <div class="left">
                                        <span >下单：</span>
                                        <span >2018-7-24</span>
                                    </div>
                                    <div class="right">
                                        <span>订单号：</span>
                                        <span >abcde-677742455</span>
                                    </div>
                                </div>
                                <div class="count_down  clearfix"  >
                                        <div class="left">
                                            <img :src="listImg" alt="">
                                        </div>
                                        <div class='right-content'>
                                                <div class="center">
                                                    <div><span>总款式：</span><span>4款</span></div>
                                                    <div><span>总金额：</span><span>￥999</span></div>
                                                    <div><span>总数量：</span><span>100套</span></div>
                                                    <div><span>买家：</span><span>买家名称111</span></div>
                                                </div>
                                                <!-- <div class="right">
                                                    <a href="#" class="pay_money ">付款</a>
                                                    <a href="#" class="pay_cancel">取消订单</a>
                                                </div> -->
                                        </div>
                                </div>
                      </router-link>
                    </div> 

                      <div class="goods_list ">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                            <div class="count_title clearfix status2">
                                  <div class="title_left fl">待发货</div>
                                <div class="title_right fr">商品名称1225</div>
                            </div>
                            <div class="count_up clearfix ">
                              <div class="left">
                                  <span >下单：</span>
                                  <span >2018-8-24 12：12</span>
                              </div>
                              <div class="right">
                                  <span>订单号：</span>
                                  <span >abcde-677742455</span>
                              </div>
                            </div>
                            <div class="count_down  clearfix"  >
                                <div class="left">
                                    <img :src="listImg" alt="">
                                </div>
                                <div class='right-content'>
                                  <div class="center">
                                    <div><span>总款式：</span><span>4款</span></div>
                                    <div><span>总金额：</span><span>￥999</span></div>
                                    <div><span>总数量：</span><span>100套</span></div>
                                    <div><span>买家：</span><span>买家名称111</span></div>
                                  </div>
                                  <div class="right">
                                    <a href="#" class="pay_money wuliu">填写物流</a>
                                    <!-- <a href="#" class="pay_cancel">取消订单</a> -->
                                  </div>
                                </div>
                            </div>
                         </router-link>
                    </div>


                <div class="goods_list ">
                      <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                            <div class="count_title clearfix status3">
                                  <div class="title_left fl">待收货</div>
                                <div class="title_right fr">商品名称1225</div>
                            </div>
                            <div class="count_up clearfix ">
                              <div class="left">
                                  <span >下单：</span>
                                  <span >2018-7-24</span>
                              </div>
                              <div class="right">
                                  <span>订单号：</span>
                                  <span >abcde-677742455</span>
                              </div>
                            </div>
                            <div class="count_down  clearfix" >
                                <div class="left">
                                    <img :src="listImg" alt="">
                                </div>
                                <div class='right-content'>

                                    <div class="center">
                                      <div><span>总款式：</span><span>4款</span></div>
                                      <div><span>总金额：</span><span>￥999</span></div>
                                      <div><span>总数量：</span><span>100套</span></div>
                                      <div><span>卖家：</span><span>卖家名称111</span></div>
                                    </div>
                                    <div class="right">
                                      <!-- <a href="#" class="pay_money ">付款</a> -->
                                      <!-- <a href="#" class="pay_cancel">取消订单</a> -->
                                    </div>
                                </div>    
                            </div>
                            <div class="count_footer clearfix">
                              <div class="fl">顺风快递</div>
                              <div class="fr">单号：4512154123</div>
                            </div>
                      </router-link>
                  </div>
                    <div class="goods_list ">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                            <div class="count_title clearfix status4 ">
                                  <div class="title_left fl">已收款</div>
                                <div class="title_right fr">商品名称1225</div>
                            </div>
                            <div class="count_up clearfix ">
                              <div class="left">
                                  <span >下单：</span>
                                  <span >2018-8-24 12：12</span>
                              </div>
                              <div class="right-content">
                                <div class="right">
                                  <span>订单号：</span>
                                  <span >abcde-677742455</span>
                                </div>
                              </div>
                            </div>
                            <div class="count_down  clearfix" >
                                <div class="left">
                                    <img :src="listImg" alt="">
                                </div>
                                <div class="right-content">
                                    <div class="center">
                                      <div><span>总款式：</span><span>4款</span></div>
                                      <div><span>总金额：</span><span>￥999</span></div>
                                      <div><span>总数量：</span><span>100套</span></div>
                                      <div><span>卖家：</span><span>卖家名称111</span></div>
                                    </div>
                                    <div class="right right-singer">
                                      <a href="#" class="pay_money wuliu">看评语</a>
                                      <!-- <a href="#" class="pay_cancel">申请售后</a> -->
                                      <div class="sktime">
                                        <span>收款时间</span>
                                        <span>2018-12-22</span>
                                        <span>12:25</span>
                                      </div>
                                    </div>
                                </div>    
                            </div>
                         </router-link>
                    </div>
                     <div class="goods_list ">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                              <div class="count_title clearfix status5">
                                    <div class="title_left fl">已取消</div>
                                  <div class="title_right fr">商品名称1225</div>
                              </div>
                              <div class="count_up clearfix ">
                                <div class="left">
                                    <span >下单：</span>
                                    <span >2018-7-24</span>
                                </div>
                                <div class="right-content">
                                  <div class="right">
                                      <span>订单号：</span>
                                      <span >abcde-677742455</span>
                                  </div>
                                </div>  
                              </div>
                              <div class="count_down  clearfix" >
                                  <div class="left">
                                      <img :src="listImg" alt="">
                                  </div>
                                <div class="right-content">
                                      <div class="center">
                                        <div><span>总款式：</span><span>4款</span></div>
                                        <div><span>总金额：</span><span>￥999</span></div>
                                        <div><span>总数量：</span><span>100套</span></div>
                                        <div><span>卖家：</span><span>卖家名称111</span></div>
                                      </div>
                                      <div class="right right-singer">
                                        <a href="#" class="pay_money ">仅退款</a>
                                          <div class="sktime">
                                            <span>收款时间</span>
                                            <span>2018-12-22</span>
                                            <span>12:25</span>
                                          </div>
                                      </div>
                                </div>      
                              </div>
                         </router-link>
                    </div>
            	</div>

              <div class="order-footer">
                    <tab :line-width=2 active-color='#fc378c' v-model="index">
                      <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in tabberGoods" @click="tabName= item" :key="index">{{item}}</tab-item>
                    </tab>
              </div>  
              

            </div>
    </div>
</template>

<script>

import { XHeader, XButton, Box, Tab, TabItem } from "vux";
import creditCard from "./../../components/creditCard/creditCard";
import listImg from "@/assets/img/order/dingdan.jpg"
export default {
  name: "order",
  data() {
    return {
      status: "",
      listImg:listImg,
      index:0,
      tabberGoods:["已取消","待评价","待收货","待发货","待付款","全部","搜索"],
      tabName:"全部",

    };
    showMenus: false;
  },
  computed: {},
  components: {
    XHeader,
    XButton,
    Box,
    creditCard, 
    Tab,
     TabItem
  },
  created() {},
  mounted() {},
  distoryed() {},
  methods: {

    cancelorder(){
       this.$vux.confirm.show({title:'取消订单原因',content:'<textarea></textarea>'});
            
    }
  },
  watch: {
    "card.creditCard"() {
      this.creditCard = this.card.creditCard;
      this.creditCard.map(v => (v["path"] = "/order/repay"));
    },
    "card.msg"() {}
  }
};
</script>

<style scoped lang="less">
.maijia{color: #fff;}
#order {
  width: 100%;
  height: 100%;
}
.count_down .wuliu {
  background-color: #2f9cff;
}
.goods_list {

  margin-bottom: 10px;
  // height: 178px;
}
.count_down {
 background: #ffffff;
  font-size: 12px;
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 15px;
  display: flex;
  display: -webkit-flex;
}
.count_down:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.count_down>.left {
  float: left;
  width: 100px;
  margin-right: 10px;
}
.count_down .left img {
  width: 100px;
  height: 100px;
  display: block;
  // border: 1px solid rgb(252, 55, 140);
}

.count_down>.right-content {
  padding-left: 5px;
  float: right;
   background-color: #7a7a84;
 color: #fff ;
  width:66%;
}
.count_down>.right-content .center {
  float: left;
  width: 50%;
  line-height: 25px;
}
.count_down>.right-content .right {
  float:right;
  width:40%;
  line-height: 25px;
  margin-top: 10px;
}
.count_down .right .title {
  font-size: 0.7em;
  color: #58616d;
  display: block;
}
.count_footer{
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    padding: 0 8px;
    // background: #4e4e9d;
    
}
.count_up {
  background: #fff;
  font-size: 14px;
  line-height:36px;
  padding:0 8px;
}
.count_up .left {
  float: left;
}
.count_up .right {
  float: right;
}
.goods_list .count_title {
  text-align: center;
  color: #fff;
  font-size: 15px;
  line-height:34px;
  padding: 0 8px;
  background-size: 100% 100%;
  //   background: #000;
  // background: url(../../assets/img/);
}
.goods_list .count_title.status1{
  background-image: url(../../assets/img/order/status1.jpg);
}
.goods_list .count_title.status2{
  background-image: url(../../assets/img/order/status2.jpg);
}
.goods_list .count_title.status3,.count_footer{
  background-image: url(../../assets/img/order/status3.jpg);
}
.goods_list .count_title.status4{
  background-image: url(../../assets/img/order/status4.jpg);
}
.goods_list .count_title.status5{
  background-image: url(../../assets/img/order/status5.jpg);
}
.count_status {
  line-height: 30px;
  text-align: center;
  width: 70px;
}
a.pay_money {
  text-align: center;
  display: block;
  border-radius: 4px;
  color: #fff;
  background: rgb(252, 55, 140);
  height: 30px;
  width: 70px;
  line-height: 30px;
}
a.pay_cancel {
  text-align: center;
  display: block;
  border-radius: 4px;
  color: #fff;
  background: #333;
  height: 30px;
  width: 70px;
  line-height: 30px;
  margin-top: 10px;
}
// .container{position: absolute;bottom: 0;width: 100%;}
.goods_list > a {
  color: #333;
}
#order{
   display: flex;
    flex-direction: column-reverse;
    overflow: auto;
}
.container{background:#282828;}
.count_down > .right-content .right-singer.right{margin-top: 0;padding-left: 8px;}
.right-singer{background: #ffffff;height: 100%;}
.sktime{background:#7a7a84; line-height: 20px;margin-top: 10px;}
.sktime>span{display: block;height: 20px;padding:0 5px;}
.order-footer{position: absolute;bottom: 0;left: 0;right: 0;width: 100%;}

</style>
<style>
#home-view{padding: 0;}
</style>




