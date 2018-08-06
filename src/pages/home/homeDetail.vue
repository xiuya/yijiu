<template>
    <div id="homeDetail">
    <!--详情主页面-->
    <div class="details" >
        <divider>图文详情</divider>
             <card >
                 <div slot="content" class="card-demo-flex card-demo-content01">
                    <ul class="tuwen">
                    <li v-for="(item,index) in dataDetail.pics" :key='index'><img :src="imgUrl+item.img"/></li>      
                    </ul> 
                 </div> 
             </card>    
        <divider>产品参数</divider>
             <card >
                 <div slot="content" class="card-demo-flex card-demo-content01">
                    <ul class="chanping">
                    <li v-for="(item,index) in dataDetail.attribute" :key='index'>
                        <span class="name left" >{{item.name}}:</span>
                        <span class="value left">{{item.value}}</span>
                    </li>      
                    </ul> 
                 </div> 
             </card>  
        <divider>卖家信息</divider>
             <card >
                 <div slot="content" class="card-demo-flex card-demo-content01">
                    <div v-html="dataDetail.desc"></div>
                 </div> 
             </card>             
     

        <!--添加收藏,添加购物车-->
        <!-- <div class="addbox clearfix">
            <div class="left clear leftcontent">
                <div class="left lcon"  @click.native='collectIt' :class='isCollect?"actived":"active"'>
                    <div class="icons iconfont icon-shoucang"></div>
                    <div class="wenzi">收藏</div>
                </div>
            </div>
            <div class="left rightcontent"  @click='addCar'>
                <span class="addtocar">加入购物车</span>
            </div>
        </div> -->
        <div class="detailBottom clearfix">
            <div class="left buyinfo">
                卖家信息
            </div>
            <div class="left ggcs">
                规格参数
            </div>
            <div class="left pic">
                图文详情
            </div>
            <div class="left star">
                收藏
            </div>
            <div class="left goumai">
                购买
            </div>
        </div>
    </div>
</div>
<!-- <div class="tip-message" v-class='{active:message.show}'>
{{message.text}}
</div> -->
</template>

<script>

import { Swiper, SwiperItem,Grid, GridItem,XHeader ,XNumber, Group,Divider, Card,AlertModule, Alert} from 'vux';
//import wallet_04 from '@/assets/img/wallet_04.png'
export default {
    name: "homeDetail",
    data() {
        return {
           dataDetail:{},
           isCollect:false,
        }

    },
    components: {
        Grid, GridItem ,XHeader, XNumber,Group,Swiper, SwiperItem,Divider, Card,AlertModule, Alert
    },
    methods:{
        collectIt(){

        },
      
         showModule () {
            AlertModule.show({
                title: '添加购物车成功',
                content:'ok',
                onShow () {
                // console.log('Module: I\'m showing')
                },
                onHide () {
                // console.log('Module: I\'m hiding now')
                }
            })
        },
          addCar(){
                    var date = new Date();
                    var dataForAddCar={};
                    dataForAddCar.id=this.dataDetail.id;
                    dataForAddCar.name=this.dataDetail.name;
                    dataForAddCar.img='http://cn01.alicdn.sasa.com/'+this.dataDetail.img;
                    dataForAddCar.storeName=this.dataDetail.storeName;
                    dataForAddCar.price=this.dataDetail.price;
                    dataForAddCar.title=this.dataDetail.productTitle;
                    dataForAddCar.time=date;
                    console.log(dataForAddCar)
                localStorage.setItem('addcar',JSON.stringify(dataForAddCar))
                this.showModule();
                setTimeout(() => {
                    AlertModule.hide()
                }, 3000)
        },

    },
    created() {
        var goodsdetail='static/data/details/'+this.$route.query.id+'/getProductDetailInfo.json';
        this.$axios.get(goodsdetail)
            .then(res=>{
                  this.dataDetail=res.data
                  console.log(this.dataDetail)
      	});
    },
    mounted() {
        
    }
}
</script>

<style scoped lang="less">
.tuwen{width: 100%;}
.tuwen>li{width: 100%;}
.tuwen>li>{width: 100%;}
.chanping{font-size: 12px;color:rgb(102,102,102);padding: 18px 28px 0  15px;}
.left{float: left;}
.chanping .name{width: 22%;}
.chanping .value{width: 75%;}
.addbox{    
    // position: fixed;
    // z-index: 9;
    // bottom: 50px;
    // left: 0;
    margin-bottom: 50px;
    width: 100%;
    height: 50px;
    color: white;}
.addbox .leftcontent{    background: #191919;
    width: 40%;
    height: 100%;line-height:50px;
    text-align: center;
    position: relative;
    padding-top: 0.05rem;}
   .addbox .rightcontent {    background: #eb3e7d;
    text-align: center;
    width: 60%;
    line-height:50px;
    height: 100%;}
.detailBottom{
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    color: white;
    background: rgb(102,102,102);
}  
.detailBottom>div{width: 20%;line-height: 50px;text-align: center;}  
</style>		
<style>
strong{font-size: 14px;color:rgb(102,102,102);}
</style>

