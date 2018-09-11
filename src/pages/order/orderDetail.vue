<template>
    <div>
        <div id="orderDetail">
            <header>订单详情</header>
            <box  class="list-box">
                <div class="order-title">
                    <div class="fl">状态:{{orderDetail.order[0].status}}</div>
                    <div class="fr">卖家:{{orderDetail.order[0].shopName}}</div>
                </div>
                <flexbox>
                    <flexbox-item><div class="flex-demo">下单:{{orderDetail.order[0].createTime}}</div></flexbox-item>
                    <flexbox-item><div class="flex-demo ta-l">订单号:{{orderDetail.order[0].orderNo}}</div></flexbox-item>
                </flexbox>
                
                <flexbox>
                    <flexbox-item><div class="flex-demo">订单总款式:{{orderDetail.order[0].stylesNum}}</div></flexbox-item>
                    <flexbox-item><div class="flex-demo ta-l">订单总商品:{{orderDetail.order[0].goodsNum}}</div></flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item><div class="flex-demo">订单总数量:{{orderDetail.order[0].number}}</div></flexbox-item>
                    <flexbox-item><div class="flex-demo ta-l">订单金额:￥{{orderDetail.order[0].totalPrice}}</div></flexbox-item>
                </flexbox>
            </box >
            <box class="list-box list-sec" v-for="(item,index) in orderDetail.order[0].styles" :key='index'>
            <divider>{{item.goodsName}}</divider>
                             <div class="count_down_list  clearfix" v-for='(itemSub,indexSub) in item.details' :key='indexSub'>
                                        <div class="xuhao">{{indexSub+1}}</div>
                                        <div class="left" style="width:90px;">
                                            <img :src="itemSub.img" alt="">
                                        </div>
                                        <div class='right-content' style="width:220px;">
                                                    <div class="kuansiTop">{{itemSub.styleName}}</div>
                                                    <div class="kuansiBottom"><span class="left">数量：{{itemSub.number}}</span><span class="right">￥{{itemSub.price}}</span></div>
                                        </div>
                             </div>
                             <!-- <div class="count_down_list  clearfix"  >
                                        <div class="xuhao">1</div>
                                        <div class="left">
                                            <img :src="listImg" alt="">
                                        </div>
                                        <div class='right-content'>
                                                    <div class="kuansiTop">款式名称阿达阿达撒多撒多所所大所啊</div>
                                                    <div class="kuansiBottom"><span class="left">100箱</span><span class="right">￥999</span></div>
                                        </div>
                             </div> -->
              <flexbox>
                <flexbox-item><div class="flex-demo ta-l">数量:{{item.subNumber}}</div></flexbox-item>
                <flexbox-item><div class="flex-demo ta-r">金额:￥{{item.subPrice}}</div></flexbox-item>
              </flexbox>
            </box>
                         <!-- <divider>物流信息</divider>
            <x-table :cell-bordered="false" style="background-color:#eee;">
                        <tbody>
                        <tr>
                            <td>物流公司</td>
                            <td>速尔</td>
                        </tr>
                        <tr>
                            <td>快递单号</td>
                            <td>1542573253687424</td>
                        </tr>
                        <tr>
                            <td>快递员</td>
                            <td>阿斯达</td>
                        </tr>
                        <tr>
                            <td>电话</td>
                            <td>13865659898</td>
                        </tr>
                        </tbody>
            </x-table> -->
                         <divider>买家信息</divider>
            <x-table :cell-bordered="false" style="background-color:#eee;">
                        <tbody>
                        <tr>
                            <td>收货地址</td>
                            <td>{{ orderDetail.address}}</td>
                        </tr>
                        <tr>
                            <td>收货人</td>
                            <td>{{ orderDetail.receiver}}</td>
                        </tr>
                        <tr>
                            <td>收货人电话</td>
                            <td>{{orderDetail.mobile}}</td>
                        </tr>
                        <!-- <tr>
                            <td>买家备注</td>
                            <td></td>
                        </tr> -->
                        </tbody>
            </x-table>
            <!-- <group >
                    <divider>写评语</divider>  
                     <x-textarea :max="200"  :height="200" :rows="8" :cols="30"></x-textarea>
                    <div><x-button mini :gradients="['#1D62F0', '#19D5FD']">保存</x-button></div>

            </group>
             <group >
                    <divider>联系卖家</divider>  
                     <x-textarea  :max="200" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
                      <div> <x-button mini :gradients="['#1D62F0', '#19D5FD']">发送</x-button></div>
            </group>
             <group>
                    <divider>联系客服</divider>  
                     <x-textarea  :max="200" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
                    <div class="clearfix"><x-button mini :gradients="['#FF2719', '#FF61AD']">发送建议</x-button><x-button mini :gradients="['#1D62F0', '#19D5FD']">发送求助</x-button><x-button mini >发送投诉</x-button></div>
            </group> -->
        <div class="backicon" @click='goback'></div>

        </div>
    </div>
</template>

<script>
import {
  Flexbox,
  FlexboxItem,
  Divider,
  XTable,
  Box,
  XTextarea,
  Group,
  XButton
} from "vux";
import listImg from "@/assets/img/order/dingdan.jpg"
export default {
  name: "orderDetail",
  data() {
    return {
        status: "",
        listImg:listImg,
        orderDetail:{},
    };
    showMenus: false;
  },
  computed: {},
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    XTable,
    Box,
    XTextarea,
    Group,
    XButton
  },
  created(){
      this.getorderDetail();
  },
  mounted() {},
  distoryed() {},
  methods: {
    goback() {
      window.history.go(-1);
    },
    getorderDetail(){
      this.$axios.get('/user/order/detail',{orderId:this.$route.query.orderId}).then(res=>
        {
            if(res.code=='OK'){
               this.orderDetail=res.data
            }
        })      
    }
  },
  watch: {}
};
</script>

<style scoped lang="less">
#orderDetail {
  height: 100%;
  font-size: 13px;
}
header {
  background: #000;
  text-align: center;
  font-size: 16px;
  color: #fff;
  line-height: 32px;
}
.list-box {
  background: #f0f0f0;
  padding: 8px;
  line-height: 32px;
}
.ta-l {
  text-align: left;
}
.ta-r {
  text-align: right;
}
.order-title {
  font-size: 15px;
}
.list-sec {
  margin: 10px 0;
}
</style>
<style>
#orderDetail .weui-cells {
  background: #eeeeee;
}
#orderDetail .weui-cells button {
  float: right;
  margin-right: 5px;
  margin-bottom: 8px;
}
#orderDetail .weui-btn + .weui-btn {
  margin-top: 0;
}
.backicon {
  /* position: fixed; */
  /* bottom: 60px; */
  /* right: 10px; */
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgb(102, 102, 102);
  float: right;
  position: relative;
    margin: 10px;
}
.backicon::after {
  content: "";
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  transform: rotate(-45deg);
  position: absolute;
  left: 9px;
  z-index: 1000;
  top: 7px;
  width: 12px;
  height: 12px;
}
.count_down_list img{
width: 80px;
height: 80px;
margin-right: 10px;
}
.count_down_list{
    width: 100%;
    height: 80px;
    display: flex;
    background: #ffffff;
    border-bottom: 1px dashed #ccc;

}
.count_down_list .kuansiTop{margin-bottom: 17px;}
.xuhao{line-height: 80px;width: 15px;text-align: center;}
.count_down_list .kuansiBottom{display: flex;    justify-content: space-between;}
.count_down_list .kuansiBottom .right{color: #ff0000;}
</style>



