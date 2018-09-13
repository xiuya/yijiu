<template>
    <ViewBox>
        <!-- <keep-alive> -->
          <!-- <router-view  id="home-view"></router-view> -->
        <!-- </keep-alive> -->
          
                 <swiper v-model="indexsec" height="100%" :show-dots="false">
                    <swiper-item :key="1">
                        <div id="my-con1">
                                    <box gap="15px 15px">
                                        <circleTitle title="登录信息" class="info" greytitle=true>
                                            <div class="info-list">账户名:<span>一九</span></div>
                                            <div class="info-list">卡号:<span class="theme-c">  B2B</span></div>
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
                                            <circleTitle title="企业简介" class="info" greytitle=true>
                                                <div class="info-list">企业名称:<span>一九</span></div>
                                                <div class="info-list">性&nbsp;&nbsp;&nbsp;&nbsp;质:<span>实业公司</span></div>
                                                <div class="info-list">所在行业:<span>电商</span></div>
                                                <div class="info-list">业务模式:<span class="theme-c">  B2B</span></div>
                                                <div class="info-list">具体业务:<span>网络购物</span></div>
                                            </circleTitle>
                                    </box>
                        </div>
                    </swiper-item>
                    <swiper-item :key="2">
                            <div id="my-con2">
                                    <box gap="15px 15px">
                                        <circleTitle title="企业详情" class="info" greytitle=true>
                                                            <group label-width="4.5em" label-margin-right="2em" label-align="right">
                                                                <x-address title="所在城市:" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
                                                                <x-input title="具体地址:" placeholder="" ></x-input>
                                                                <x-input title="员工人数:" placeholder="" keyboard="number"></x-input>
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
                                                <box gap="15px 15px">
                                            <XButton type="primary" :disabled="btnloading"  @click.native="confirm">{{btnWord}}</XButton>
                                    </box>
                            </div>
                    </swiper-item>
                    <swiper-item :key="3">
                            	<div id="my-con1">
                                        <box gap="15px 15px">
                                                        <XButton type="primary" :disabled="btnloading"  @click.native="confirm">{{btnWord}}</XButton>
                                        </box>
                                        <box gap="15px 15px">
                                            <circleTitle title="企业简介" class="info" greytitle=true>
                                                <group label-width="4.5em" label-margin-right="2em" label-align="right">
                                                    <x-input title="企业名称:" placeholder="" ></x-input>
                                                    <x-input title="企业性质:" placeholder="" ></x-input>
                                                    <x-input title="所在行业:" placeholder="" ></x-input>
                                                    <x-input title="业务模式:" placeholder="" ></x-input>
                                                    <x-input title="企业名称:" placeholder="" ></x-input>
                                                    <x-input title="具体业务:" placeholder="" ></x-input>
                                                </group>
                                                
                                            </circleTitle>
                                        </box>
                                    
                                </div>
                    </swiper-item>
                    <swiper-item :key="4">
                                	<div id="my-con1">
                                        <box gap="15px 15px">
                                                            <XButton type="primary" :disabled="btnloading"  @click.native="confirm">{{btnWord}}</XButton>
                                        </box>
                                        <box gap="15px 15px">
                                                <circleTitle title="添加银行卡" class="info" greytitle=true>
                                                <group label-width="4.5em" label-margin-right="2em" label-align="right">
                                                        <x-input title="持卡人:" placeholder="请输入真实姓名" ></x-input>
                                                        <x-input title="卡号:" placeholder="请输入带银联标识的卡号" ></x-input>
                                                        <x-input title="手机号:" placeholder="请输入持卡人预留的电话" ></x-input>
                                                        <x-input title="验证码:" placeholder="" ></x-input>
                                                </group>	      
                                                </circleTitle>
                                            </box>
                                            <box gap="15px 15px">
                                                <circleTitle title="修改密码" class="info" greytitle=true>
                                                    <group label-width="4.5em" label-margin-right="2em" label-align="right">
                                                            <x-input title="账户名:" placeholder="" ></x-input>
                                                            <x-input title="旧密码:" placeholder="" ></x-input>
                                                            <x-input title="新密码:" placeholder="" ></x-input>
                                                            <x-input title="确认密码:" placeholder="" ></x-input>
                                                    </group>   
                                                </circleTitle>
                                            </box>
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
                                    </div>
                    </swiper-item>
                    <swiper-item :key="5">
                            	<div id="my-con5"   ref="myCon5">
                                    <box gap="15px 15px" >
                                        <circleTitle title="统计汇总" class="info" greytitle=true>
                                            <div class="info-list first-info">支付总金额:<span>50000000万元</span></div>
                                            <div class="info-list">总订单数:<span>1000笔</span></div>
                                            <div class="info-list">采购商品品种:<span>大象牌跑步机</span></div>
                                            <div class="info-list">采购商品款式:<span class="theme-c"> 乐享快乐</span></div>
                                            <!-- <div class="info-list">退款总金额:<span>1002020元</span></div> -->
                                            <div class="info-list">退款总金额:<span>1002020元</span></div>
                                            <div class="info-list">账户注册日期:<span>2018-08-02</span></div>
                                            <div class="info-list">登录次数:<span>120次</span></div>
                                        </circleTitle>
                                    </box>
                                    <box gap="15px 15px">
                                        <circleTitle title="统计汇总卖家" class="info" greytitle=true>
                                            <div class="info-list first-info">收款总金额:<span>50000000万元</span></div>
                                            <div class="info-list">总订单数:<span>1000笔</span></div>
                                            <div class="info-list">已售商品品种:<span>大象牌跑步机</span></div>
                                            <div class="info-list">已售商品款式:<span class="theme-c"> 乐享快乐</span></div>
                                            <div class="info-list">下单客户数:<span class="theme-c"> 200家</span></div>
                                            <div class="info-list">上架商品品种:<span>16</span></div>
                                            <div class="info-list">上架商品款式:<span>2018-08-02</span></div>
                                            <div class="info-list">下架商品品种:<span>120次</span></div>
                                            <div class="info-list">下架商品款式:<span>120次</span></div>
                                            <div class="info-list">账户注册日期:<span>120次</span></div>
                                            <div class="info-list">登录次数:<span>120次</span></div>
                                            <div class="info-list">被投诉:<span>120次</span></div>
                                        </circleTitle>
                                    </box>
                                </div>
                    </swiper-item>
                </swiper>
        <!-- <tabbar :navlist="navlist" ></tabbar> -->
                <tab   v-model="indexsec" >
                    <tab-item class="vux-center"  v-for="(item, index) in tabberGoods"  :selected="tabName === item.status" @click="tabName=item.status" :key="index">
                      <!-- <badge :text="item.length" v-show='item.length-1>=0'></badge> -->
                      {{item.status}}</tab-item>
                </tab>
    </ViewBox>
</template>

<script>
import { ViewBox,  Tab,TabItem, } from 'vux'
import tabbar from "@/components/footer/zhtabbar";

export default {
    name : 'my',
    data() {
        return {
            navlist:[
               {
                    path: '/my/mycon1',
                    title: '预览',
                    text: '预览',
                },
                {
                    path: '/my/mycon2',
                    title: '编辑企业详情',
                    text: '编辑企业详情',
                },
                {
                    path: '/my/mycon3',
                    title: '编辑企业简介',
                    text: '编辑企业简介',
                },
                {
                    path: '/my/mycon4',
                    title: '编辑个人资料',
                    text: '编辑个人资料',
                },
                {
                    path: '/my/mycon5',
                    title: '统计',
                    text: '统计',
                }
            ],
            pathname: this.$route.path,
            tabindex:0,
            tabberGoods:[{status:"预览",length:0},{status:"编辑企业详情",length:0},{status:"编辑企业简介",length:0},{status:"编辑个人资料",length:0},{status:"统计",length:0}],
            tabName:"统计",
            indexsec: 0,
            
        }
    },
    components: {
        ViewBox, tabbar,  Tab,
            TabItem,
    },
    created() {
        

    },
    mounted() {
    },
    distoryed() {

    },
    methods: {

    },
    watch: {
        '$route'(to,from){
            this.pathname = to.path
        }
    }
}
</script>

<style lang="less">
    // #home-view{width: 100%;height: 100%;padding: 0 0 4px;box-sizing: border-box;overflow:auto;background-color: #f1f2f3;}
    #home-view::-webkit-scrollbar{width:0px;}
    #zhfooter{position: fixed;bottom: 50px;}
    // .fixed-con-lg{position: fixed;bottom: 100px;top:0;overflow-y: scroll;width: 100%;}
	#home-view .weui-tabbar__item span{line-height:25px;padding: 0 8px;}
	#home-view .weui-tabbar__item:nth-child(1) span{line-height:50px;}
	#zhfooter .weui-tabbar__item:nth-child(5) span{line-height:50px;}
	.vux-label{width: 5.5em;}
	.weui-label{width: 5.5em !important;}
	.inline-calendar{background-color: #fff !important;}
    .weui-cell__bd .weui-textarea{padding: 5px;border: 1px solid #bebebe;width: 97%;}
/*#fbf9fe底色 浅白色*/
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
 #home-view{display: flex; display: -webkit-flex;flex-direction: column-reverse;background-color: #f1f2f3;}

</style>
