<template>
		<div id="my-con1">
	            <box gap="15px 15px">
	                <circleTitle title="统计汇总" class="info" greytitle=true>
	                    <div class="info-list first-info">支付总金额:<span>50000000万元</span></div>
	                    <div class="info-list">总订单数:<span>1000笔</span></div>
	                    <div class="info-list">采购商品品种:<span>大象牌跑步机</span></div>
	                    <div class="info-list">采购商品款式:<span class="theme-c"> 乐享快乐</span></div>
	                    <!-- <div class="info-list">退款总金额:<span>1002020元</span></div> -->
	                    <div class="info-list">退款总金额:<span>1002020元</span></div>
	                    <div class="info-list">账户注册日期:<span>2018-08-02</span></div>
	                    <div class="info-list">登录次数:<span>120次</span></div>
	                </circleTitle>
	            </box>
                <box gap="15px 15px">
	                <circleTitle title="统计汇总卖家" class="info" greytitle=true>
	                    <div class="info-list first-info">收款总金额:<span>50000000万元</span></div>
	                    <div class="info-list">总订单数:<span>1000笔</span></div>
	                    <div class="info-list">已售商品品种:<span>大象牌跑步机</span></div>
	                    <div class="info-list">已售商品款式:<span class="theme-c"> 乐享快乐</span></div>
	                    <div class="info-list">下单客户数:<span class="theme-c"> 200家</span></div>
	                    <!-- <div class="info-list">退款总金额:<span>1002020元</span></div> -->
	                    <div class="info-list">上架商品品种:<span>16</span></div>
	                    <div class="info-list">上架商品款式:<span>2018-08-02</span></div>
	                    <div class="info-list">下架商品品种:<span>120次</span></div>
	                    <div class="info-list">下架商品款式:<span>120次</span></div>
	                    <div class="info-list">账户注册日期:<span>120次</span></div>
	                    <div class="info-list">登录次数:<span>120次</span></div>
	                    <div class="info-list">被投诉:<span>120次</span></div>

	                </circleTitle>
	            </box>
		</div>
</template>

<script>
import { Box , XButton } from 'vux'
import circleTitle from './../../components/circleTitle/circleTitle'
export default {
    name: "withdrawal",
    data() {
        return {
            tixian:'',
            getinfo:'',
            btnloading:false,
        }

    },
    components: {
       circleTitle, Box, XButton
    },
    created() {
    },
    mounted() {

    }
}    
</script>

<style  scoped>
.first-info{margin-top: 30px;}
#my-con1{width: 100%;height: 100%;background: #d1e9ff;}
 .info-list{font-size: 14px;text-align: left;color: #333;padding-left: 20px;line-height: 45px;}
</style>
