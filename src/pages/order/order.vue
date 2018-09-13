<template>
    <div>
        <div id="order">
                <tab   v-model="tabindex" v-if='tabberGoods[4].length-1>=0'>
                    <tab-item class="vux-center" :selected="tabName === item.status" v-for="(item, index) in tabberGoods" @click="tabName=item.status" :key="index">
                      <badge :text="item.length" v-show='item.length-1>=0'></badge>
                      {{item.status}}</tab-item>
                </tab>
              	<div class="container ">
                    <!-- <div class="goods_list ">
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
                    </div>-->

                    <div class="goods_list " v-for="(item,index) in sub_list" :key="index">
                         <router-link  :to="{ path: '/order/orderDetail', query: { orderId: item.orderId }}"  >
                              <div class="count_title clearfix " :class="{status5: item.status=='已取消',status4:item.status=='待评价',status3:item.status=='待收货',
                              status2:item.status=='待发货',status1:item.status=='待付款' }">
                                    <div class="title_left fl">{{item.status}}</div>
                                  <div class="title_right fr">{{item.shopName}}</div>
                              </div>
                              <div class="count_up clearfix ">
                                <div class="left">
                                    <span >下单：</span>
                                    <span class="headtime">{{moment(item.createTime).format('YYYY-MM-DD HH:mm:ss')}}</span>
                                </div>
                                <div class="right-content">
                                  <div class="right">
                                      <span>订单号：</span>
                                      <span >{{item.orderNo}}</span>
                                  </div>
                                </div>  
                              </div>
                              <div class="count_down  clearfix" >
                                  <div class="left">
                                      <img :src="listImg" alt="">
                                  </div>
                                <div class="right-content">
                                      <div class="center">
                                        <div><span>总款式：</span><span>{{item.style}}</span></div>
                                        <div><span>总金额：</span><span>￥{{item.totalPrice}}</span></div>
                                        <div><span>总数量：</span><span>{{item.number}}</span></div>
                                        <div><span>卖家：</span><span>{{item.shopName}}</span></div>
                                      </div>

                                      <div class="right right-singer " v-if="item.status=='已取消'">
                                          <a href="#" class="pay_money ">仅退款</a>
                                          <div class="sktime">
                                            <span >取消订单</span>
                                            <span>2018-12-22</span>
                                            <span>12:25</span>
                                          </div>
                                      </div>

                                      <div class="right" v-if="item.status=='待评价'">
                                                  <a href="#" class="pay_money wuliu">写评语</a>
                                                  <a href="#" class="pay_cancel">申请售后</a>
                                      </div>

                                      <div class="right" v-if="item.status=='待收货'">
                                          <a href="#" class="pay_money ">确认收货</a>
                                          <a href="#" class="pay_cancel">取消订单</a>
                                      </div> 
                                      <div class="right" v-if="item.status=='待发货'">
                                          <span>订单号：</span>
                                          <span >abcde-677742455</span>
                                      </div>
                                      <div class="right"  v-if="item.status=='待付款'">
                                            <a href="#" class="pay_money ">付款</a>
                                            <a href="#" class="pay_cancel">取消订单</a>
                                      </div>
                                </div>      
                              </div>
                         </router-link>
                    </div>
            	</div>
            </div>
    </div>
</template>

<script>

import { XHeader, XButton, Box, Tab, TabItem,Badge, } from "vux";
import listImg from "@/assets/img/order/dingdan.jpg"
export default {
  name: "order",
  data() {
    return {
      status: "",
      listImg:listImg,
      tabindex:0,
      tabberGoods:[{status:"已取消",length:0},{status:"待评价",length:0},{status:"待收货",length:0},{status:"待发货",length:0},{status:"待付款",length:0},{status:"全部",length:0},{status:"搜索",length:0}],
      tabName:"全部",
      goods_list:
      [
      //   {status:'已取消',name:'商品2',delTime:'2018-5-25',orderNum:'2011515121512',style:'4',moneyTotal:'￥999',countTotal:'100',saleName:'卖家名称'},
      // {status:'待评价',name:'商品3',delTime:'2018-5-25',orderNum:'20115151saasdsa',style:'4',moneyTotal:'￥999',countTotal:'100',saleName:'卖家名称'},
      // {status:'待收货',name:'商品4',delTime:'2018-5-25',orderNum:'20115151saasdsa',style:'4',moneyTotal:'￥999',countTotal:'100',saleName:'卖家名称'},
      // {status:'待发货',name:'商品5',delTime:'2018-5-25',orderNum:'20115151saasdsa',style:'4',moneyTotal:'￥999',countTotal:'100',saleName:'卖家名称'},
      // {status:'待付款',name:'商品6',delTime:'2018-5-25',orderNum:'20115151saasdsa',style:'4',moneyTotal:'￥999',countTotal:'100',saleName:'卖家名称'},
      ],
      sub_list:[],

    };
    showMenus: false;
  },
  computed: {},
  components: {
    XHeader,
    XButton,
    Box,
    Tab,
    TabItem,
    Badge,
  },
  created() {
    this.orderList();
  },
  mounted() {},
  distoryed() {},
  methods: {
    cancelorder(){
       this.$vux.confirm.show({title:'取消订单原因',content:'<textarea></textarea>'});
    },
    orderList(){
       this.$axios.get('/user/order/orders',{currPage:1}).then(res=>{
         if(res.code=='OK'){
            this.goods_list=res.data;
            this.sub_list=res.data;
            let arr1=this.goods_list.filter((item)=>item.status=='已取消');
            let arr2=this.goods_list.filter((item)=>item.status=='待评价');
            let arr3=this.goods_list.filter((item)=>item.status=='待收货');
            let arr4=this.goods_list.filter((item)=>item.status=='待发货');
            let arr5=this.goods_list.filter((item)=>item.status=='待付款');
            let arr=this.goods_list.filter((item)=>item);
            // arr=[...arr];
            // console.log(arr1.length)
            this.tabberGoods[0].length=arr1.length;
            this.tabberGoods[1].length=arr2.length;
            this.tabberGoods[2].length=arr3.length;
            this.tabberGoods[3].length=arr4.length;
            this.tabberGoods[4].length=arr5.length;
            this.tabberGoods[5].length=arr.length;
         }
       })
    }
  },
  watch: {
    "card.creditCard"() {
      this.creditCard = this.card.creditCard;
      // this.creditCard.map(v => (v["path"] = "/order/repay"));
    },
    "card.msg"() {},
    'tabindex':function(val){
        console.log(val)
        if(val==4){
          this.sub_list=this.goods_list.filter((item)=>{ return item.status=='待付款'?true:false})
        }else  if(val==3){
          this.sub_list=this.goods_list.filter((item)=>{ return item.status=='待发货'?true:false})
        }else  if(val==2){
          this.sub_list=this.goods_list.filter((item)=>{ return item.status=='待收货'?true:false})
        }else  if(val==1){
          this.sub_list=this.goods_list.filter((item)=>{ return item.status=='待评价'?true:false})
        }else  if(val==0){
          this.sub_list=this.goods_list.filter((item)=>{ return item.status=='已取消'?true:false})
        }else if(val==5){
          this.sub_list=this.goods_list;
        }else if(val==6){
          this.$vux.confirm.show({title:'输入商品名称查询',content:'<textarea id="textareaOrder" v-focus></textarea>'});
          // document.querySelector('#textareaOrder').focus();
          this.sub_list=this.goods_list;
        }else{
          this.sub_list=this.goods_list;
        }
    }
  }
};
</script>

<style scoped lang="less">
.container {margin-bottom: 40px;}
.vux-tab-wrap {
    padding-top: 33px;
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
}
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
// .order-footer{position: absolute;bottom: 0;left: 0;right: 0;width: 100%;}

</style>
<style>
#home-view{padding: 0;}
#order .vux-tab-item{position: relative;}
#order .vux-badge{position: absolute;right: 0;top: 0;}
#textareaOrder{width: 220px;height: 60px;font-size: 16px;line-height: 30px;resize: none;}
.headtime  {    font-size: 13px;line-height: 34px;}
</style>




