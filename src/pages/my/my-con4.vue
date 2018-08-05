<template>
		<div id="my-con1">
			<div class="fixed-con-lg">
	            <box gap="15px 15px">
	                <circleTitle title="个人信息" class="info" greytitle=true>
	                 <group label-width="4.5em" label-margin-right="2em" label-align="right">
						      <x-input title="姓名:" placeholder="请输入姓名" ></x-input>
						      <x-input title="性别:" placeholder="请输入性别" ></x-input>
						      <x-input title="职位:" placeholder="请输入职位" ></x-input>
						      <x-input title="电话:" placeholder="请输入电话" ></x-input>
					</group>	      
	                </circleTitle>
	            </box>
	            <box gap="15px 15px">
	                <circleTitle title="登录信息" class="info" greytitle=true>
	                 <group label-width="4.5em" label-margin-right="2em" label-align="right">
						      <x-input title="账户名:" placeholder="请输入账户名" ></x-input>
						      <x-input title="密码:" placeholder="请输入密码" ></x-input>
						      <x-input title="确认密码:" placeholder="请输入确认密码" ></x-input>
						      <x-input title="显示网名:" placeholder="请输入显示网名" ></x-input>
		            </group>   
		               	<box gap="15px 15px">
		                        <XButton type="primary" :disabled="btnloading"  @click.native="confirm">{{btnWord}}</XButton>
		                </box>
	                </circleTitle>
	            </box>
	   
	        </div>
		</div>
</template>

<script>
import { Box,XButton,XTextarea,XInput,Group } from 'vux'
import circleTitle from './../../components/circleTitle/circleTitle'
export default {
    name: "withdrawal",
    data() {
        return {
            tixian:'',
            getinfo:'',
            btnloading:false,
            btnWord:'保存',
            
        }

    },
    components: {
       circleTitle, Box,XButton,XTextarea,XInput,Group 
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
