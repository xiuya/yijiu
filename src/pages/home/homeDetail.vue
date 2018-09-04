<template>
    <div id="homeDetail">
    <!--详情主页面-->
    <div class="details">
        <div class="xiangqing-wrap" ref="detailWrap">
                <divider>图文详情</divider>
                <card >
                    <div slot="content" class="card-demo-flex card-demo-content01">
                        <ul class="tuwen">
                        <li v-for="(item,index) in dataDetail.pics" :key='index'><img :src="imgUrl+item.img"/></li>      
                        </ul> 
                    </div> 
                </card>
                <divider > <div ref='guigInfo'>规格参数</div>   </divider>
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
                <divider > <div ref="buyInfo">卖家信息</div></divider>
                <card >
                    <div slot="content" class="card-demo-flex card-demo-content01">
                        <div v-html="dataDetail.desc"></div>
                    </div> 
                </card>    
        </div>
        <div class="distancebetween"  @click='touchmove' ref='distance'></div>

        <div class="xiangqing-kuansi" ref='ks' >
                <div class="kuanshititle">
                        <div class="top">商品名称1322阿萨</div>
                        <div class="topdetail">请选择款式</div>
                </div>
                
                <div class="kuanshicontent clearfix" @click="handleks(1)">
                    <div class="left">
                            <div class="ksname">款式名称12346</div>
                            <div class="ksdetail">库存100件 <span>¥1500/100件</span></div>
                    </div>
                    <div class="right">
                            <div class="xinghao">型号：102155</div> 
                            <div class="ksnum"><x-number  v-model="ksnum" :min="0" @on-change="change" width='30px'></x-number></div>
                    </div>
                </div>
                
                <div class="kuanshicontent clearfix">
                    <div class="left">
                            <div class="ksname">款式名称12346</div>
                            <div class="ksdetail">库存100件 <span>¥1500/100件</span></div>
                    </div>
                    <div class="right">
                            <div class="xinghao">型号：102155</div> 
                            <div class="ksnum"><x-number  v-model="ksnum" :min="0" @on-change="change" width='30px'></x-number></div>
                    </div>
                </div>

                <div class="kuanshicontent clearfix">
                    <div class="left">
                            <div class="ksname">款式名称12346</div>
                            <div class="ksdetail">库存100件 <span>¥1500/100件</span></div>
                    </div>
                    <div class="right">
                            <div class="xinghao">型号：102155</div> 
                            <div class="ksnum"><x-number  v-model="ksnum" :min="0" @on-change="change" width='30px'></x-number></div>
                    </div>
                </div>
        </div>
        
     
           
     

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
        <div class="backicon" @click='goback'></div>
        <div class="detailBottom clearfix">
            <div class="left buyinfo" @click="gobuyInfo">
                卖家信息
            </div>
            <div class="left ggcs" @click="guigInfo">
                规格参数
            </div>
            <div class="left pic" @click='goxq'>
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
import {
  Swiper,
  SwiperItem,
  Grid,
  GridItem,
  XHeader,
  XNumber,
  Group,
  Divider,
  Card,
  AlertModule,
  Alert
} from "vux";
//import wallet_04 from '@/assets/img/wallet_04.png'
export default {
  name: "homeDetail",
  data() {
    return {
      dataDetail: {},
      isCollect: false,
      buydist: 0,
      guigdist: 0,
      ksnum: 0
    };
  },
  components: {
    Grid,
    GridItem,
    XHeader,
    XNumber,
    Group,
    Swiper,
    SwiperItem,
    Divider,
    Card,
    AlertModule,
    Alert
  },
  methods: {
    change(val) {
    },
    gobuyInfo() {
      document.body.scrollTop = this.buydist;
    },
    guigInfo() {
      document.body.scrollTop = this.guigdist;
    },
    goxq() {
      document.body.scrollTop = 0;
    },
    collectIt() {},

    showModule() {
      AlertModule.show({
        title: "添加购物车成功",
        content: "ok",
        onShow() {
          // console.log('Module: I\'m showing')
        },
        onHide() {
          // console.log('Module: I\'m hiding now')
        }
      });
    },
    addCar() {
      var date = new Date();
      var dataForAddCar = {};
      dataForAddCar.id = this.dataDetail.id;
      dataForAddCar.name = this.dataDetail.name;
      dataForAddCar.img = "http://cn01.alicdn.sasa.com/" + this.dataDetail.img;
      dataForAddCar.storeName = this.dataDetail.storeName;
      dataForAddCar.price = this.dataDetail.price;
      dataForAddCar.title = this.dataDetail.productTitle;
      dataForAddCar.time = date;
      console.log(dataForAddCar);
      localStorage.setItem("addcar", JSON.stringify(dataForAddCar));
      this.showModule();
      setTimeout(() => {
        AlertModule.hide();
      }, 3000);
    },
    goback() {
      window.history.go(-1);
    },
    touchmove(ev){
        var e = ev||window.event;
        var delta=(e.clientY-window.innerHeight/2)*0.5;
            console.log(delta,e.clientY)
        this.$refs.distance.style.top=e.clientY+delta+'px';
        this.$refs.detailWrap.style.height=e.clientY+delta+'px';
        this.$refs.ks.style.top=e.clientY+delta+'px';
    },
    handleks(tab, e){
        console.log(tab)
        this.handleScroll(this.$refs.guigInfo);
    },
    handleScroll(element) {
      var content = document.querySelector(".xiangqing-wrap");
      this.scrollHeight = element.offsetTop;
      var _this = this;
      setTimeout(() => {
        content.scrollTo({ behavior: "smooth", top: _this.scrollHeight - 104 });
      }, 0);
    },
  },
  created() {
    var goodsdetail =
      "static/data/details/" +
      this.$route.query.id +
      "/getProductDetailInfo.json";
    this.$axios.get(goodsdetail).then(res => {
      this.dataDetail = res.data;
      console.log(this.dataDetail);
      this.buydist = this.$refs.buyInfo.offsetTop;
      this.guigdist = this.$refs.guigInfo.offsetTop;
      console.log(this.buydist, this.guigdist);
    });
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<style scoped lang="less">
.tuwen {
  width: 100%;
}
.tuwen > li {
  width: 100%;
}
.tuwen > li > {
  width: 100%;
}
.chanping {
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding: 18px 28px 0 15px;
}
.left {
  float: left;
}
.chanping .name {
  width: 22%;
}
.chanping .value {
  width: 75%;
}
.addbox {
  // position: fixed;
  // z-index: 9;
  // bottom: 50px;
  // left: 0;
  margin-bottom: 50px;
  width: 100%;
  height: 50px;
  color: white;
}
.addbox .leftcontent {
  background: #191919;
  width: 40%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  position: relative;
  padding-top: 0.05rem;
}
.addbox .rightcontent {
  background: #eb3e7d;
  text-align: center;
  width: 60%;
  line-height: 50px;
  height: 100%;
}
.detailBottom {
  position: fixed;
  z-index: 9;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  color: white;
  background: rgb(102, 102, 102);
}
.detailBottom > div {
  width: 20%;
  line-height: 50px;
  text-align: center;
}
.backicon {
  position: fixed;
  bottom: 60px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgb(102, 102, 102);
}
.backicon::after {
  content: "";
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  transform: rotate(-45deg);
  position: absolute;
  left: 9px;
  z-index: 1000;
  top: 7px;
  width: 12px;
  height: 12px;
}
.xiangqing-wrap {
  height: 60%;
  overflow: scroll;
  width: 100%;
  position: absolute;;
  top: 0;
  z-index: 1;
}
.distancebetween {
  height: 15px;
  background: #ff0000;
  top: 60%;
  position: absolute;
  width: 100%;
  z-index: 3;
}
.xiangqing-kuansi {
  top: 60%;
  position: absolute;
  width: 100%;
  overflow: scroll;
  bottom: 50px;
  background: #0d4833;
  z-index: 2;

}
.kuanshititle {
  height: 68px;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  margin-top: 15px;
}
.topdetail {
  color: #fffe33;
  font-size: 16px;
  line-height: 24px;
}
.kuanshicontent {
  height: 60px;
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  font-size: 14px;
  overflow: hidden;
}
.kuanshicontent .left {
  float: left;
  width: 240px;
  height: 100%;
  background: #e4e4e4;
  padding: 8px;
}
.kuanshicontent .ksname,
.kuanshicontent .xinghao {
  color: #041cf2;
  margin-bottom: 8px;
}
.kuanshicontent .right {
  float: right;
  padding: 8px;
  height: 60px;
  padding-bottom: 0;
  background: #ffffff;
}
.ksdetail span{float:right;color: #f00;padding-right: 10px;}
</style>		
<style>
strong {
  font-size: 14px;
  color: rgb(102, 102, 102);
}
.kuanshicontent .weui-cell {
  padding: 0;
  width: 120px;
  margin-left: -13px;
  margin-top: -8px;
}
</style>

