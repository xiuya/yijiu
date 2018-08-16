<template>
		<div id="my-con2">
			 				<box gap="15px 15px">
		                        <XButton type="primary" :disabled="btnloading"  @click.native="confirm">{{btnWord}}</XButton>
		            </box>
	            <box gap="15px 15px">
	                <circleTitle title="企业详情" class="info" greytitle=true>
	                    	<!--所在城市:<span>深圳</span>-->
	                 <group label-width="4.5em" label-margin-right="2em" label-align="right">


						      <!--<x-input title="所在城市:" placeholder="请输入所在城市" ></x-input>-->
						      <x-address title="所在城市:" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>


						      <x-input title="具体地址:" placeholder="" ></x-input>

	                    	<!--员工人数:<span>1200</span>-->

						      <x-input title="员工人数:" placeholder="" keyboard="number"></x-input>


						      <!--<x-input title="成立时间:" placeholder="请输入成立时间" ></x-input>-->
      							<calendar @on-change="onChange" v-model="demo3" title="成立时间:" disable-future></calendar>


						      <x-input title="年销售额:" placeholder="" keyboard="number"></x-input>


						      <x-input title="企业主:" placeholder=""></x-input>


						      <x-input title="座机/电话:" name="mobile" placeholder="" keyboard="number" is-type="china-mobile"></x-input>
						    </group>
	                    <div class="info-list">文字介绍:<span><x-textarea v-model="describ"></x-textarea></span></div>
	                    <div class="info-list" id="img-wrap">
	                    	<div class="ft-upload bg-fff table-view-four mui-table-view  mui-text-left">
								<div class="c-333 ft-title list-li"><i class="iconfont icon-shuxian"></i>添加介绍图片:</div>
								<div id="addImg_box" class="bg-fff mt-15"></div>
							</div>
	                    </div>
	                     
	                </circleTitle>

	            </box>
							
		</div>
</template>

<script>
import { Box,XButton,XTextarea,XInput,Group,Calendar, ChinaAddressData, XAddress, } from 'vux'
import circleTitle from './../../components/circleTitle/circleTitle'
export default {
    name: "withdrawal",
    data() {
        return {
            tixian:'',
            getinfo:'',
            btnloading:false,
            btnWord:'保存',
            describ:'',
            mobileValue:'',
             demo3: 'TODAY',
             addressData: ChinaAddressData,
            addressValue: ['广东省', '深圳市', '南山区'],
            
        }

    },
    components: {
       circleTitle, Box, XButton, XTextarea,XInput, Group,Calendar, ChinaAddressData, XAddress,
    },
    methods:{
	    onChange (val) {
	      console.log('on change', val)
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
                  mui.toast('上传成功');
                  // self.imgs = results.result;
                  results.data.url.forEach(function(item){
                    that.imgsurl.push(item);
                  });
                }else{
                  mui.toast(results.msg)
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
      let uploads=this.$upload("addImg_boxs",{
				path:this.imgUrl+"/api/Upload/upload",//请求的地址
	            data:{//往后台传递的参数
	                type:"members"},
	            type:"post",//请求方式
	            addBtnName:"<span class='iconfont icon-tianjia3 add-file'><span>",//添加文件按钮名字
	            uploadBtnName:"上传图片",//上传文件按钮名字
	            delIcon:"×",//删除已选择文件的图标或按钮名字
	            autoUpload:true,//是否自动上传
	            fileNum:9,//上传文件数量
	            fileSize:10,//上传文件的大小，以MB为单位
	            // isRepeat:false,//是否可以重复选择文件(false->不重复选择)
	            // fileType:['jpg','png','gif','jpeg'],//上传文件的类型
	            showImgList:true,//是否显示缩略图
				      uploadSuccess:function(results){//上传成功的回调
                if(results.code==200){
                  that.allloaded=true;
                  mui.hideLoading();//隐藏后的回调函数
                  mui.toast('上传成功');
                  // self.imgs = results.result;
                  results.data.url.forEach(function(item){
                    that.imgsurl.push(item);
                  });
                }else{
                  mui.toast(results.msg)
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
      that.company_img=uploads.fileSrc;

//				  this.$axios.post('/api/Product/get_product_type')
//				      .then(res=>{
//				          if(res.code==200){
//				              this.options=res.data;
//				              this.leixin=this.options[0].link_value;
//				          }else{
//				            Toast(res.msg)
//				          }
//				          
//				      })
	    }
    },
    created() {
    },
    mounted() {
			this.postimg();
    }
}    
</script>

<style  scoped>
#my-con2{width: 100%;height: 100%;background: #d1e9ff;}
.info-list{font-size: 12px;text-align: left;color: #333;padding-left: 20px;line-height: 30px;}
</style>
<style>
 
</style>
