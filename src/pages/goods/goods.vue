<template>
    <div>
        <div id="order">

                <tab :line-width=2 active-color='#fc378c' v-model="index">
                    <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in tabberGoods" @click="tabName= item" :key="index">{{item}}</tab-item>
                </tab>
                  <swiper v-model="index" :height="height" :show-dots="false">
                    <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <div>预览</div>
                            </section>
                        </div>
                    </swiper-item>
                    <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <div>汇总统计</div>
                            </section>
                        </div>
                    </swiper-item>
                   <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <div>编辑商品</div>
                            </section>
                        </div>
                    </swiper-item>
                    <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <div class="goods_list xiajiawrap">
                                    <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                        <div class="count_title clearfix status5">
                                                <div class="title_left fl">家用电器</div>
                                            <div class="title_right fr">商品名称1225</div>
                                        </div>
                                        <div class="count_up clearfix ">
                                            <div class="left">
                                                <span >下架：</span>
                                                <span >2018-7-24</span>
                                            </div>
                                            <div class="right-content">
                                            <div class="right">
                                                <span>型号：</span>
                                                <span >abcde-677742455</span>
                                            </div>
                                            </div>  
                                        </div>
                                        <div class="count_down  clearfix" >
                                            <div class="left">
                                                <img :src="listImg" alt="">
                                            </div>
                                            <div class="right-content">
                                                <div class="center">
                                                    <div><span>款式：</span><span>4款</span></div>
                                                    <div><span>单价：</span><span>￥999</span></div>
                                                    <div><span>起订量：</span><span>100套</span></div>
                                                    <div><span>库存：</span><span>1000套</span></div>
                                                </div>
                                                <div class="right right-singer">
                                                    <a href="#" class="pay_money del"  >删除</a>
                                                    <div class="saleOut">已售999套</div>
                                                    <a href="#" class="pay_money xiajia">上架</a>
                                                </div>
                                            </div>      
                                        </div>
                                    </router-link>
                                </div>
                            </section>
                        </div>
                    </swiper-item>
                    <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main saleOn">
                                <!-- <div>在售商品</div> -->
                                <div class="goods_list ">
                                    <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                        <div class="count_title clearfix status5">
                                                <div class="title_left fl">家用电器</div>
                                            <div class="title_right fr">商品名称1225</div>
                                        </div>
                                        <div class="count_up clearfix ">
                                            <div class="left">
                                                <span >上架：</span>
                                                <span >2018-7-24</span>
                                            </div>
                                            <div class="right-content">
                                            <div class="right">
                                                <span>型号：</span>
                                                <span >abcde-677742455</span>
                                            </div>
                                            </div>  
                                        </div>
                                        <div class="count_down  clearfix" >
                                            <div class="left">
                                                <img :src="listImg" alt="">
                                            </div>
                                            <div class="right-content">
                                                <div class="center">
                                                    <div><span>款式：</span><span>4款</span></div>
                                                    <div><span>单价：</span><span>￥999</span></div>
                                                    <div><span>起订量：</span><span>100套</span></div>
                                                    <div><span>库存：</span><span>1000套</span></div>
                                                </div>
                                                <div class="right right-singer">
                                                    <a href="#" class="pay_money ">删除</a>
                                                    <div class="saleOut">已售999套</div>
                                                    <a href="#" class="pay_money xiajia">下架</a>
                                                </div>
                                            </div>      
                                        </div>
                                    </router-link>
                                </div>
                                 <div class="goods_list ">
                                    <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                        <div class="count_title clearfix status5">
                                                <div class="title_left fl">家用电器</div>
                                            <div class="title_right fr">商品名称1225</div>
                                        </div>
                                        <div class="count_up clearfix ">
                                            <div class="left">
                                                <span >上架：</span>
                                                <span >2018-7-24</span>
                                            </div>
                                            <div class="right-content">
                                            <div class="right">
                                                <span>型号：</span>
                                                <span >abcde-677742455</span>
                                            </div>
                                            </div>  
                                        </div>
                                        <div class="count_down  clearfix" >
                                            <div class="left">
                                                <img :src="listImg" alt="">
                                            </div>
                                            <div class="right-content">
                                                <div class="center">
                                                    <div><span>款式：</span><span>4款</span></div>
                                                    <div><span>单价：</span><span>￥999</span></div>
                                                    <div><span>起订量：</span><span>100套</span></div>
                                                    <div><span>库存：</span><span>1000套</span></div>
                                                </div>
                                                <div class="right right-singer">
                                                    <a href="#" class="pay_money ">删除</a>
                                                    <div class="saleOut">已售999套</div>
                                                    <a href="#" class="pay_money xiajia">下架</a>
                                                </div>
                                            </div>      
                                        </div>
                                    </router-link>
                                </div>
                                <div class="goodsfooter">
                                    下架商品：999种
                                    <span>按分类</span>
                                </div>
                            </section>
                        </div>
                    </swiper-item>
                       
                </swiper>


            </div>
                    <!-- <div class="goods-footer" >
                        <div class="bg-gray" >预览</div>
                        <div>汇总统计</div>
                        <div>编辑商品</div>
                        <div>下架商品</div>
                        <div class="bg-red">在售商品</div>
                    </div>   -->
    </div>
</template>

<script>
import { Swiper, SwiperItem,  XHeader, XButton, Box ,Flexbox, FlexboxItem, Tab, TabItem} from 'vux'
import creditCard from "./../../components/creditCard/creditCard";
import listImg from "@/assets/img/order/dingdan.jpg"
export default {
  name: "order",
  data() {
    return {
      status: "",
      listImg:listImg,
      index:0,
      tabberGoods:["预览","汇总统计","编辑商品","下架商品","在售商品"],
      tabberGoodsItem:[[{name:'热卖面膜'},{name:'幻彩化妆品',},{name:'个人用品',},{name:'母子用品'}],[{name:'热卖面膜'},{name:'母子用品'},{name:'母子用品'},{name:'幻彩化妆品',},{name:'个人用品',},{name:'母子用品'}],[{name:'母子用品'},{name:'母子用品'},{name:'热卖面膜'},{name:'幻彩化妆品',},{name:'个人用品',},{name:'母子用品'}]],
    tabName:"在售商品",
    height:0,


    };
    showMenus: false;
  },
  computed: {},
  components: {
    XHeader,
    XButton,
    Box,
    creditCard,
    	Swiper,
		SwiperItem,
		Flexbox,
        FlexboxItem,
         Tab,
          TabItem
  },
  created() {

  },
  mounted() {
            this.height=document.querySelector('#home-view').height;
      console.log(this.height)
  },
  distoryed() {},
  methods: {},
  watch: {
    "card.creditCard"() {
      this.creditCard = this.card.creditCard;
      this.creditCard.map(v => (v["path"] = "/order/repay"));
    },
    "card.msg"() {}
  }
};
</script>

<style scoped lang="less">
.maijia{color: #fff;}
#order {
  width: 100%;
  height: 100%;
}
.count_down .wuliu {
  background-color: #2f9cff;
}
.goods_list {
  margin-bottom: 10px;
  // height: 178px;
}
.count_down {
 background: #ffffff;
  font-size: 12px;
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 15px;
  display: flex;
  display: -webkit-flex;
}
.count_down:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.count_down>.left {
  float: left;
  width: 100px;
  margin-right: 10px;
}
.count_down .left img {
  width: 100px;
  height: 100px;
  display: block;
  // border: 1px solid rgb(252, 55, 140);
}

.count_down>.right-content {
  padding-left: 5px;
  float: right;
   background-color: #7a7a84;
 color: #fff ;
  width:66%;
}
.count_down>.right-content .center {
  float: left;
  width: 50%;
  line-height: 25px;
}
.count_down>.right-content .right {
  float:right;
  width:40%;
  line-height: 25px;
  margin-top: 10px;
}
.count_down .right .title {
  font-size: 0.7em;
  color: #58616d;
  display: block;
}
.count_footer{
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    padding: 0 8px;
    // background: #4e4e9d;
    
}
.count_up {
  background: #fff;
  font-size: 14px;
  line-height:36px;
  padding:0 8px;
}
.count_up .left {
  float: left;
}
.count_up .right {
  float: right;
}
.goods_list .count_title {
  text-align: center;
  color: #fff;
  font-size: 15px;
  line-height:34px;
  padding: 0 8px;
  background-size: 100% 100%;
  //   background: #000;
  // background: url(../../assets/img/);
}
.goods_list .count_title.status1{
  background-image: url(../../assets/img/order/status1.jpg);
}
.goods_list .count_title.status2{
  background-image: url(../../assets/img/order/status2.jpg);
}
.goods_list .count_title.status3,.count_footer,.saleOn .goodsfooter{
  background-image: url(../../assets/img/order/status3.jpg);
}
.goods_list .count_title.status4,.goods_list a.pay_money {
  background-image: url(../../assets/img/order/status4.jpg);
}
.goods_list .count_title.status5,a.pay_money.xiajia {
  background-image: url(../../assets/img/order/status5.jpg);
}
.count_status {
  line-height: 30px;
  text-align: center;
  width: 70px;
}
a.pay_money {
  text-align: center;
  display: block;
  border-radius: 4px;
  color: #fff;
  background: rgb(252, 55, 140);
  height: 30px;
  width: 70px;
  line-height: 30px;
}
a.pay_cancel {
  text-align: center;
  display: block;
  border-radius: 4px;
  color: #fff;
  background: #333;
  height: 30px;
  width: 70px;
  line-height: 30px;
  margin-top: 10px;
}
// .container{position: absolute;bottom: 0;width: 100%;}
.goods_list > a {
  color: #333;
}
#order{
   display: flex;
    flex-direction: column-reverse;
    overflow: auto;
}
.container{background:#282828;}
.count_down > .right-content .right-singer.right{margin-top: 0;padding-left: 8px;}
.right-singer{background: #ffffff;height: 100%;}
.sktime{background:#7a7a84; line-height: 20px;margin-top: 10px;}
.sktime>span{display: block;height: 20px;padding:0 5px;}
/* //商品管理 */
.goodsmanager{}
.goods-footer{width: 100%;position: absolute;bottom: 0;left: 0;height: 60px;background: #333; line-height: 60px;   }
.goods-footer>div{width: 20%;float: left;}
.saleOut{color: #4e4d48;}
.goods_list.xiajiawrap a.del{background: #cc0000;background-image:none;}
.saleOn .goodsfooter{position: absolute;bottom: 0;height: 40px;line-height: 40px;font-size: 18px;width: 100%;color: #91f880;text-align: center;    ;}
.saleOn .goodsfooter>span{float: right;margin-right: 14px;color: #ffffff;font-size: 14px;line-height: 40px;}
.search-main{padding-bottom: 40px;}
</style>



