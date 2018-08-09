<template>
		<div id="my-con1">
			<div class="fixed-con-lg">
	            <box gap="15px 15px">
	                <circleTitle title="个人信息" class="info" greytitle=true>
	                 <group label-width="4.5em" label-margin-right="2em" label-align="right">
						      <x-input title="姓名:" placeholder="" ></x-input>
						      <x-input title="性别:" placeholder="" ></x-input>
						      <x-input title="职位:" placeholder="" ></x-input>
						      <x-input title="电话:" placeholder="" ></x-input>
					</group>	      
	                </circleTitle>
	            </box>
	            <box gap="15px 15px">
	                <circleTitle title="登录信息" class="info" greytitle=true>
	                 <group label-width="4.5em" label-margin-right="2em" label-align="right">
						      <x-input title="账户名:" placeholder="" ></x-input>
						      <x-input title="密码:" placeholder="" ></x-input>
						      <x-input title="确认密码:" placeholder="" ></x-input>
						      <x-input title="显示网名:" placeholder="" ></x-input>
		            </group>   
		               
	                </circleTitle>
	            </box>
	   			<box gap="15px 15px">
		                        <XButton type="primary" :disabled="btnloading"  @click.native="confirm">{{btnWord}}</XButton>
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
