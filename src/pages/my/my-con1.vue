<template>
		<div id="my-con1">
			<div class="fixed-con-lg">
	            <box gap="15px 15px">
	                <circleTitle title="企业简介" class="info" greytitle=true>
	                    <div class="info-list">企业名称:<span>一九</span></div>
	                    <div class="info-list">性&nbsp;&nbsp;&nbsp;&nbsp;质:<span>实业公司</span></div>
	                    <div class="info-list">所在行业:<span>电商</span></div>
	                    <div class="info-list">业务模式:<span class="theme-c">  B2B</span></div>
	                    <div class="info-list">具体业务:<span>网络购物</span></div>
	                </circleTitle>
	            </box>
	            <box gap="15px 15px">
	                <circleTitle title="企业详情" class="info" greytitle=true>
	                    <div class="info-list">所在城市:<span>深圳</span></div>
	                    <div class="info-list">具体地址:<span>南山区</span></div>
	                    <div class="info-list">员工人数:<span>1200</span></div>
	                    <div class="info-list">成立时间:<span class="theme-c">2014-07-04</span></div>
	                    <div class="info-list">年销售额:<span>20000万元</span></div>
	                    <div class="info-list">企业主:<span>老板</span></div>
	                    <div class="info-list">座机电话:<span>  0719-8888888</span></div>
	                    <div class="info-list">文字介绍:<span>          企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化
                        企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化
                        企业文化企业文化企业文化企业文化企业文化企业文化企业文化企业文化</span></div>
	                    <div class="info-list">图片介绍:<span>  </span></div>
	                </circleTitle>
	            </box>
	                  <box gap="15px 15px">
	                <circleTitle title="个人信息" class="info" greytitle=true>
	                    <div class="info-list">姓名:<span>一九</span></div>
	                    <div class="info-list">性&nbsp;&nbsp;&nbsp;&nbsp;别:<span>实业公司</span></div>
	                    <div class="info-list">职位:<span>电商</span></div>
	                    <div class="info-list">电话:<span class="theme-c">  B2B</span></div>
	                </circleTitle>
	            </box>
	            <box gap="15px 15px">
	                <circleTitle title="登录信息" class="info" greytitle=true>
	                    <div class="info-list">账户名:<span>一九</span></div>
	                    <div class="info-list">密&nbsp;&nbsp;&nbsp;&nbsp;码:<span>实业公司</span></div>
	                    <div class="info-list">确认密码:<span>电商</span></div>
	                    <div class="info-list">显示网名:<span class="theme-c">  B2B</span></div>
	                </circleTitle>
	            </box>
	        </div>
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
#my-con1{width: 100%;height: 100%;background: #d1e9ff;}
 .info-list{font-size: 12px;text-align: left;color: #333;padding-left: 20px;line-height: 30px;}
</style>
