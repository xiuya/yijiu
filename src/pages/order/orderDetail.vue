<template>
    <div>
        <div id="orderDetail">
            <header>订单详情</header>
            <box  class="list-box">
                <div class="order-title">
                    <div class="fl">状态:待收货</div>
                    <div class="fr">卖家:壹玖实业投资有限公司</div>
                </div>
                <flexbox>
                    <flexbox-item><div class="flex-demo">下单:2018-11-22</div></flexbox-item>
                    <flexbox-item><div class="flex-demo ta-l">订单号:abcsadsdwda112123</div></flexbox-item>
                </flexbox>
                
                <flexbox>
                    <flexbox-item><div class="flex-demo">订单总款式:12款</div></flexbox-item>
                    <flexbox-item><div class="flex-demo ta-l">订单总商品:3种</div></flexbox-item>
                </flexbox>
                <flexbox>
                    <flexbox-item><div class="flex-demo">订单总数量:1000套</div></flexbox-item>
                    <flexbox-item><div class="flex-demo ta-l">订单金额:￥999</div></flexbox-item>
                </flexbox>
            </box >
            <box class="list-box list-sec">
            <divider>这个个宝贝</divider>
            <x-table :cell-bordered="false" style="background-color:#fff;">
                        <thead>
                        <tr>
                            <th></th>
                            <th>款式名称</th>
                            <th>采购数量</th>
                            <th>合计金额</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>一个奥斯卡的妈妈</td>
                            <td>100套</td>
                            <td>:￥1000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>两个奥斯卡的妈妈</td>
                            <td>1000套</td>
                            <td>:￥10000</td>
                        </tr>
                        </tbody>
            </x-table>
              <flexbox>
                <flexbox-item><div class="flex-demo ta-l">数量:100000套</div></flexbox-item>
                <flexbox-item><div class="flex-demo ta-r">金额:￥999</div></flexbox-item>
                </flexbox>
            </box>

            <x-table :cell-bordered="false" style="background-color:#eee;">
                        <tbody>
                        <tr>
                            <td>发货省市区</td>
                            <td>深圳</td>
                        </tr>
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
                        <tr>
                            <td>收货省市区</td>
                            <td>广东深圳</td>
                        </tr>
                        <tr>
                            <td>具体地址</td>
                            <td>南山区t大厦</td>
                        </tr>
                        <tr>
                            <td>收货人</td>
                            <td>万开</td>
                        </tr>
                        <tr>
                            <td>收货人电话</td>
                            <td>13865659898</td>
                        </tr>
                        <tr>
                            <td>买家备注</td>
                            <td>红色</td>
                        </tr>
                       
                        </tbody>
            </x-table>
            <group >
                    <divider>写评语</divider>  
                     <x-textarea  :placeholder="写评语" :max="200"  :height="200" :rows="8" :cols="30"></x-textarea>
                    <div><x-button mini :gradients="['#1D62F0', '#19D5FD']">保存</x-button></div>

            </group>
             <group >
                    <divider>联系买家</divider>  
                     <x-textarea  :max="200" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
                      <div> <x-button mini :gradients="['#1D62F0', '#19D5FD']">发送</x-button></div>
            </group>
             <group>
                    <divider>联系客服</divider>  
                     <x-textarea  :max="200" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
                    <div class="clearfix"><x-button mini :gradients="['#FF2719', '#FF61AD']">发送建议</x-button><x-button mini :gradients="['#1D62F0', '#19D5FD']">发送求助</x-button><x-button mini >发送投诉</x-button></div>
            </group>
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
export default {
  name: "orderDetail",
  data() {
    return {
      status: ""
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
  created() {},
  mounted() {},
  distoryed() {},
  methods: {
    goback() {
      window.history.go(-1);
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
</style>



