<template>
    <div id="login">
        <x-header title="登录"></x-header>
        <div class="logo">
            <img :src='require("./../../assets/img/logo.png")'>
        </div>
         <group >	
         				<div id="selectPeople">选择身份
         				
         				<check-icon :value.sync="buyer">{{loginUser.buyer}}</check-icon>
         				<check-icon :value.sync="seller">{{loginUser.seller}}</check-icon>
         				</div>
                    	
         </group>	
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
        <router-link class="forgetPwd fr" v-if="loginType==='pwd'" to="/my/setUp/setPwd">忘记密码</router-link>
        <router-link class="forgetPwd fr" v-if="loginType==='smsCode'" to="/my/setUp/editPwd">注册申请</router-link>
    </div>
</template>

<script>
import { Toast,Tab, TabItem  ,ToastPlugin,Swiper, SwiperItem , XInput, Group, XButton ,Box, XHeader,CheckIcon} from 'vux'
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
            codeWord:'发 送',
            showPositionValue:false,//是否显示
            position:'center',//提示信息
            toastText:'',//提示文本
            buyer:true,
            seller:false,
            loginUser:{buyer:'我是买家',seller:'我是卖家'}
        }
    },
    computed: mapState([
        'user'
    ]),
    components: {
        Toast,Tab, TabItem, Swiper, SwiperItem,  XInput, Group, XButton, Box,XHeader,ToastPlugin,CheckIcon
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
            'login', 'sendcode','person'
        ]),
        Toast(valueText){
            this.showPositionValue=true;
            this.toastText=valueText;
        },
        confirmLogin(){
            this.person({seller:this.seller})

            // if(!this.phone) return this.Toast('手机号未填');
            // if(!/^1[34578]\d{9}$/.test(this.phone)) return Toast('手机号格式不对');
            // if(this.loginType==='pwd' && !this.pwd) return Toast('登录密码未填');
            // if(this.loginType==='smsCode' && !this.smsCode) return Toast('验证码未填');
            // let payload;
            // switch (this.loginType) {
            //     case 'pwd':
            //         payload={phone:this.phone,pwd:this.pwd,person:this.seller}
            //         break;
            //     default:
            //         payload={phone:this.phone,smsCode:this.smsCode}
            //         break;
            // }
            // this.login(payload)
        },
        sendCode(){
            if(!this.phone) return   this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '手机号未填'
                    });
            if(!/^1[34578]\d{9}$/.test(this.phone)) return  this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '手机号格式不对'
                    });
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
        },
        
    },
    distoryed(){

    },
    watch: {
        'index'(){
            this.loginType = this.index==0?'smsCode':'pwd'
        },
        'user.redirectTo'(){
            this.$router.push('/')
            // Toast(this.user.msg.replace(/\d+/,''));
            // const from = this.$route.query.redirect;
            // if(from) this.$router.replace({ path: from});
            // else this.$router.replace({ path: this.user.redirectTo});
        },
        'user.msg'(){
            Toast(this.user.msg.replace(/\d+/,''))
        },
        'smsCode'(){
            if(this.loginType==='smsCode' && this.smsCode.length==4){
                setTimeout(() => {
                    this.confirmLogin()
                }, 500);
            }
        },
        'buyer'(val){
        	if(val){
        		this.seller=false;
        	}else{
        		this.seller=true;
        	}
        },
        'seller'(val){
        	if(val){
        		this.buyer=false;
        	}else{
        		this.buyer=true;
        	}
        },

    }
}
</script>

<style scoped>
    #login{width: 100%;height: 100%;background-color: #f0f0f0;}
    .logo{width: 100%;padding-top: 30px;text-align: center;}
    .logo img{display: inline-block;width: 50%;height: auto;}
    .forgetPwd{font-size: 14px;margin-right: 20px;color: #666;}
</style>
<style lang="css">
    #login .weui-cells{margin-top: 0 !important;}
    #login .vux-no-group-title{margin-top: 0 !important;}
    #login .weui-label{font-size:14px;}
    #login input{border:none !important;}
    #selectPeople{padding: 15px;}
</style>

