<template>
    <div id="editPwd">
        <div class="fixed-con-lg">
            <group>
                 <x-input v-model="phone" title="手机号码" name="phone" placeholder="请输入手机号码" keyboard="number" :max="11"></x-input>
                <x-input v-model="smsCode" title="验证码" class="weui-vcode" placeholder="请输入验证码" :max="6">
                    <x-button slot="right"  :disabled="disabled001"  @click.native="sendCode" type="primary" mini  :text="codeWord"></x-button>
                </x-input>
                <x-input title="企业全称" name="mobile" placeholder="请输入企业全称"></x-input>
                <x-input title="企业地址" name="pwd" placeholder="请输入企业地址"  ></x-input>
                <x-input title="企业类型" name="r_pwd" placeholder="请输入企业类型" ></x-input>
                <x-input title="联系人" name="r_pwd" placeholder="请输入联系人名字"></x-input>
                <x-input title="设置密码" name="r_pwd" placeholder="" type="password" :equal-with="password"></x-input>
                <x-input title="确认密码" name="r_pwd" placeholder="" type="password" :equal-with="password"></x-input>
                    <div class="info-list" id="img-wrap">
	                    	<div class="ft-upload bg-fff table-view-four mui-table-view  mui-text-left">
																<div class="c-333 ft-title list-li"><i class="iconfont icon-shuxian"></i>上传营业执照:</div>
																<div id="addImg_box" class="bg-fff mt-15"></div>
												</div>
	                </div>
            </group>
            <box gap="20px 20px">
                <XButton type="primary"  @click.native="confirmEdit">提交申请</XButton>
            </box>
        </div>
        <bHeader title="注册申请" class="fixed-top"></bHeader>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {  XInput, Group, XButton ,Box} from 'vux'
import bHeader from './../../components/header/header-b';
export default {
    name: "editPwd",
    data() {
        return {
            password:'',
            codeWord:'发 送'
        }

    },
    components: {
        XInput, Group, XButton, Box, bHeader
    },
    created() {
    },
    mounted() {
	this.postimg();

    },
     computed: mapState([
        'user'
    ]),
    methods: {
           ...mapActions([
                'set_forget_pwd', 'sendcode'
            ]),
            confirmEdit(){
            if(!this.phone) return  this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '手机号未填'
                    });
            if(!/^1[34578]\d{9}$/.test(this.phone)) return  this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '手机号格式不对'
                    });
            if(!this.login_pwd || !this.check_pwd) return  this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '密码未填'
                    });
            if(this.login_pwd !== this.check_pwd) return  this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '两次密码不一致'
                    });
            if(!this.smsCode) return  this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '验证码未填'
                    });
            this.set_forget_pwd(this.$data)
        },
         sendCode(){
            if(!this.phone) return  this.$vux.toast.show({
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
        confirmEdit(){

        },
        postimg(){
	    	const that=this;
			let upload =this.$upload("addImg_box",{
				      path:this.imgUrl+"/api/Upload/upload",//请求的地址
	            data:{//往后台传递的参数
	                type:"members"},
	            type:"post",//请求方式
	            addBtnName:"<span class='iconfont icon-icon-jiahao add-file'><span>",//添加文件按钮名字
	            uploadBtnName:"上传图片",//上传文件按钮名字
	            delIcon:"×",//删除已选择文件的图标或按钮名字
	            autoUpload:true,//是否自动上传
	            fileNum:9,//上传文件数量
	            fileSize:10,//上传文件的大小，以MB为单位
	            showImgList:true,//是否显示缩略图
				      uploadSuccess:function(results){//上传成功的回调
                if(results.code==200){
                  that.allloaded=true;
                  mui.hideLoading();//隐藏后的回调函数
                   this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: '上传成功'
                    });
                  // self.imgs = results.result;
                  results.data.url.forEach(function(item){
                    that.imgsurl.push(item);
                  });
                }else{
                   this.$vux.toast.show({
                        // title:'手机号未填',
                        type: 'warn',
                        text: results.msg
                    });
                }
              },
	            uploadError:function(xhr,status){
                console.log(status)//上传出错的回调
	            },
	            delImgFn:function(_this,parentNode,delFile,fileSrc,fileList,filterFile,index){//删除文件前的回调
	                //下方是删除图片的操作，如需弹窗确定，可在本处执行并复制下列代码至确定事件内
					        upload.delImg(parentNode,delFile,fileSrc,fileList,filterFile,index);
					        that.imgsurl.splice(index,1)
					        console.log(that.imgsurl)
	            }
			});
            that.job_img=upload.fileSrc;
        },    
    },
    distoryed(){
        
    }
}
</script>

<style scoped>
    #editPwd{width: 100%;height: 100%;background-color: #f0f0f0;}
    .logo{width: 100%;padding-top: 30px;text-align: center;}
    .logo img{display: inline-block;width: 50%;height: auto;}
    #editPwd .weui-btn{font-size: 14px;}
</style>
<style lang="css">
    #editPwd .weui-cells{margin-top: 0 !important;}
    #editPwd .vux-no-group-title{margin-top: 0 !important;}
    #editPwd .weui-label{font-size:14px;}
    #editPwd input{margin-bottom:0 !important;border:none !important;padding:0 !important;font-size:14px !important;}
    .info-list{font-size: 14px;text-align: left;padding-left: 14px;line-height: 30px;}
 #img-wrap input{border: none;margin-bottom:0;}
  #img-wrap #addImg_box{display: flex;margin-top: 15px;}
	#img-wrap .upload-addimg-btn:first-child,.upload-btn-box{position: relative;cursor: pointer;display: inline-block;width: 76px;height: 76px;}
	#img-wrap .upload-btn-box{width: 0;}
	#img-wrap .upload-img-box{margin-left: -3px;}
	#img-wrap .upload-img-box:after{clear: both;width: 0;height: 0;display: block;overflow:hidden;}
	#img-wrap .upload-addimg-btn:first-child input{width: 76px;height: 76px;position: absolute;left:0;top:0;z-index: 9;opacity: 0;}
	#img-wrap .add-file{font-size: 76px;display: inline-block;width: 76px;height: 76px;line-height: 76px;color:#ccc;}
	#img-wrap .upload-img-item{float: left;width: 76px;height: 76px;margin-left:5px;margin-top:2px;margin-bottom:3px;position: relative; border:1px solid #ddd;margin-top:-2px;}
	#img-wrap .upload-img-item:first-child{margin-left: 87px;}
	#img-wrap .upload-img-item img{width: 100%;height: 100%;}
	#img-wrap .delimg-btn{position: absolute;top:-2px;right: 0;font-size: 30px;color:#ccc;}
	#img-wrap .mint-cell-wrapper{padding: 0 15px;}
  #img-wrap #addImg_boxs{display: flex; display: -webkit-flex;margin-top: 15px;}
  #img-wrap{margin-bottom: 10px;border-top: 1px solid #2222}
    #editPwd input{margin-bottom:0 !important;border:none !important;padding:0 !important;font-size:14px !important;}
    #editPwd  .weui-btn{height: 40px;line-height: 40px;}
    #editPwd .vux-x-input .weui-btn{height: 26px;line-height:21px !important;}
   
</style>

