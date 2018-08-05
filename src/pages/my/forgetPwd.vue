<template>
    <div id="forgetPwd">
        <bHeader title="设置密码" class="fixed-top"></bHeader>
        <div class="fixed-con-lg">
            <group>
                <x-input title="手机号码" v-model="phone" name="mobile" placeholder="请输入手机号码" keyboard="number" :max="11"></x-input>
                <x-input title="验证码" class="weui-vcode" v-model="smsCode" placeholder="请输入验证码">
                    <x-button slot="right"  :disabled="disabled001"  @click.native="sendCode" type="primary" mini  :text="codeWord"></x-button>
                </x-input>
                <x-input title="密码"  placeholder="请输入密码" type="password" v-model="login_pwd"></x-input>
                <x-input title="确认密码"  placeholder="请输入密码" type="password" v-model="check_pwd" :equal-with="login_pwd"></x-input>
            </group>
            <box gap="20px 20px">
                <XButton type="primary"  @click.native="confirmEdit">确认重置</XButton>
            </box>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {  XInput, Group, XButton ,Box} from 'vux'
import bHeader from './../../components/header/header-b';
export default {
    name: "forgetPwd",
    data() {
        return {
            phone:'',
            login_pwd:'',
            check_pwd:'',
            smsCode:'',
            wait:60,
            disabled001:false,
            codeWord:'发 送'
        }

    },
    components: {
        XInput, Group, XButton, Box, bHeader
    },
    created() {
        console.log(this.user)
    },
    computed: mapState([
        'user'
    ]),
    mounted() {
    },
    methods: {
        ...mapActions([
            'set_forget_pwd', 'sendcode'
        ]),
        confirmEdit(){
            if(!this.phone) return mui.toast('手机号未填');
            if(!/^1[34578]\d{9}$/.test(this.phone)) return mui.toast('手机号格式不对');
            if(!this.login_pwd || !this.check_pwd) return mui.toast('密码未填');
            if(this.login_pwd !== this.check_pwd) return mui.toast('两次密码不一致');
            if(!this.smsCode) return mui.toast('验证码未填');
            this.set_forget_pwd(this.$data)
        },
        sendCode(){
            if(!this.phone) return mui.toast('手机号未填');
            if(!/^1[34578]\d{9}$/.test(this.phone)) return mui.toast('手机号格式不对');
            this.sendcode({phone: this.phone});
            const that = this;
            function time() {
                if (that.wait == 0 || that.user.sendCodeErr) {  //结束或错误重新开始
                    that.disabled001=false;            
                    that.codeWord="发送验证码";  
                    that.wait = 60;  
                } else {  
                    that.disabled001=true;   
                    that.codeWord="重新发送(" + that.wait + ")";  
                    that.wait--;
                    setTimeout(function() {  
                        time()  
                    },1000)  
                }  
            }
            time()
        }
    },
    distoryed(){
        
    },
    watch: {
        'user.msg'(){
            mui.toast(this.user.msg.replace(/\d+/,''))
        }
    }
}
</script>

<style scoped>
    #forgetPwd{width: 100%;height: 100%;background-color: #f0f0f0;}
    .logo{width: 100%;padding: 30px;text-align: center;}
    .logo img{display: inline-block;width: 50%;height: auto;}
    #forgetPwd .weui-btn{font-size: 14px;}
</style>
<style lang="css">
    #forgetPwd .weui-cells{margin-top: 0 !important;}
    #forgetPwd .vux-no-group-title{margin-top: 0 !important;}
    #forgetPwd .weui-label{font-size:14px;}
    #forgetPwd input{margin-bottom:0 !important;border:none !important;padding:0 !important;font-size:14px !important;}
</style>

