<template>
    <div id="editPwd">
        <bHeader title="修改密码" class="fixed-top"></bHeader>
        <div class="fixed-con-lg">
            <group>
                <x-input title="请输入原始密码" name="mobile" placeholder="请输入密码" type="password"></x-input>
                <x-input title="输入新密码" name="pwd" placeholder="请输入密码" type="password" v-model="password"></x-input>
                <x-input title="确认新密码" name="r_pwd" placeholder="请输入密码" type="password" :equal-with="password"></x-input>
            </group>
            <box gap="20px 20px">
                <XButton type="primary"  @click.native="confirmEdit">确认修改</XButton>
            </box>
        </div>
    </div>
</template>

<script>
import {  XInput, Group, XButton ,Box} from 'vux'
import bHeader from './../../components/header/header-b';
export default {
    name: "editPwd",
    data() {
        return {
            password:''
        }

    },
    components: {
        XInput, Group, XButton, Box, bHeader
    },
    created() {

    },
    mounted() {
    },
    methods: {
        confirmEdit(){

        }
    },
    distoryed(){
        
    }
}
</script>

<style scoped>
    #editPwd{width: 100%;height: 100%;background-color: #f0f0f0;}
    .logo{width: 100%;padding: 30px;text-align: center;}
    .logo img{display: inline-block;width: 50%;height: auto;}
    #editPwd .weui-btn{font-size: 14px;}
</style>
<style lang="css">
    #editPwd .weui-cells{margin-top: 0 !important;}
    #editPwd .vux-no-group-title{margin-top: 0 !important;}
    #editPwd .weui-label{font-size:14px;}
    #editPwd input{margin-bottom:0 !important;border:none !important;padding:0 !important;font-size:14px !important;}
</style>

