<template>
    <div id="login">
        <x-header title="登录"></x-header>
        <div class="logo">
            <img :src='require("./../../assets/img/logo.png")'>
        </div>
        <tab v-model="index">
            <tab-item :selected="loginType==='smsCode'" @on-item-click="onItemClick('smsCode')">验证码登录</tab-item>
            <tab-item :selected="loginType==='pwd'" @on-item-click="onItemClick('pwd')">密码登录</tab-item>
        </tab>
        <swiper v-model="index" height="120px" :show-dots="false">
            <swiper-item>
                <group>
                    <x-input v-model="phone" title="手机号码" name="phone" placeholder="请输入手机号码" keyboard="number" :max="11"></x-input>
                    <x-input v-model="smsCode" title="验证码" class="weui-vcode" placeholder="请输入验证码" :max="4">
                        <x-button slot="right"  :disabled="disabled001"  @click.native="sendCode" type="primary" mini  :text="codeWord"></x-button>
                    </x-input>
                </group>
            </swiper-item>
            <swiper-item>
                <group>
                    <x-input v-model="phone" title="手机号码" name="phone" placeholder="请输入手机号码" keyboard="number" :max="11"></x-input>
                    <x-input v-model="pwd" title="密码" name="pwd" placeholder="请输入密码" type="password"></x-input>
                </group>
            </swiper-item>
        </swiper>
        <box gap="10px 20px">
            <XButton type="primary"  @click.native="confirmLogin">登 录</XButton>
        </box>
        <!-- <router-link class="forgetPwd fr" v-if="loginType==='pwd'" to="/login/forgetPwd">忘记密码</router-link> -->
    </div>
</template>

<script>
import { Tab, TabItem ,Swiper, SwiperItem , XInput, Group, XButton ,Box, XHeader} from 'vux'
import { mapActions, mapState } from 'vuex'

export default {
    name: "login",
    data() {
        return {
            loginType:'smsCode',  //pwd
            index:0,
            phone:'',
            pwd:'',
            smsCode:'',
            wait:60,
            disabled001:false,
            codeWord:'发 送'
        }
    },
    computed: mapState([
        'user'
    ]),
    components: {
        Tab, TabItem, Swiper, SwiperItem,  XInput, Group, XButton, Box,XHeader
    },
    created() {
       //console.log(this.$store.getters.getUser)
    },
    mounted() {
       /*  mui.plusReady(()=>{
            if (plus.os.name === 'Android') {
                mui.back = () => {
                    plus.runtime.quit();
                }
            }
        }); */
    },
    methods: {
        onItemClick(type){
            this.loginType= type
        },
        ...mapActions([
            'login', 'sendcode'
        ]),
        confirmLogin(){
            if(!this.phone) return mui.toast('手机号未填');
            if(!/^1[34578]\d{9}$/.test(this.phone)) return mui.toast('手机号格式不对');
            if(this.loginType==='pwd' && !this.pwd) return mui.toast('登录密码未填');
            if(this.loginType==='smsCode' && !this.smsCode) return mui.toast('验证码未填');
            let payload;
            switch (this.loginType) {
                case 'pwd':
                    payload={phone:this.phone,pwd:this.pwd}
                    break;
                default:
                    payload={phone:this.phone,smsCode:this.smsCode}
                    break;
            }
            this.login(payload)
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
        'index'(){
            this.loginType = this.index==0?'smsCode':'pwd'
        },
        'user.redirectTo'(){
            mui.toast(this.user.msg.replace(/\d+/,''));
            const from = this.$route.query.redirect;
            if(from) this.$router.replace({ path: from});
            else this.$router.replace({ path: this.user.redirectTo});
        },
        'user.msg'(){
            mui.toast(this.user.msg.replace(/\d+/,''))
        },
        'smsCode'(){
            if(this.loginType==='smsCode' && this.smsCode.length==4){
                setTimeout(() => {
                    this.confirmLogin()
                }, 500);
            }
        }

    }
}
</script>

<style scoped>
    #login{width: 100%;height: 100%;background-color: #f0f0f0;}
    .logo{width: 100%;padding: 30px;text-align: center;}
    .logo img{display: inline-block;width: 50%;height: auto;}
    .forgetPwd{font-size: 14px;margin-right: 20px;color: #666;}
</style>
<style lang="css">
    #login .weui-cells{margin-top: 0 !important;}
    #login .vux-no-group-title{margin-top: 0 !important;}
    #login .weui-label{font-size:14px;}
    #login input{border:none !important;}
</style>

