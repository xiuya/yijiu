<template>
		<div id="my-con1">
			<div class="fixed-con-lg">
	            <box gap="15px 15px">
	                <circleTitle title="企业简介" class="info" greytitle=true>
	                 	<group label-width="4.5em" label-margin-right="2em" label-align="right">
						      <x-input title="企业名称:" placeholder="请输入企业名称" ></x-input>
						      <x-input title="企业性质:" placeholder="请输入企业性质" ></x-input>
						      <x-input title="所在行业:" placeholder="请输入所在行业" ></x-input>
						      <x-input title="业务模式:" placeholder="请输入业务模式" ></x-input>
						      <x-input title="企业名称:" placeholder="请输入企业名称" ></x-input>
						      <x-input title="具体业务:" placeholder="请输入具体业务" ></x-input>
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
