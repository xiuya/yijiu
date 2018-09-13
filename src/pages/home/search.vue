<template>
    <div id="search" >
        	<div class="search" >
                
                <tab :line-width=2  active-color='' v-model="index" v-if='shopStore'>
                    <tab-item class="vux-center" :selected="tabName === item.typeName" v-for="(item, index) in tabGoods" @click="tabName= item.typeName" :key="index">{{item.typeName}}</tab-item>
                </tab>
                <tab :line-width=2  active-color='' v-model="indexsec">
                    <tab-item class="vux-center" :selected="tabName === item" v-for="(item, indexsec) in tabberGoods" @click="tabName= item" :key="indexsec">{{item}}</tab-item>
                </tab>
                <form class="search-bar clear ">
                    <!-- <span class="left" @click="cancel">取消</span> -->
                    <input type="search" placeholder="保湿" class="left "  v-model="key">
                    <i class="iconfont icon-sousuo search-btn" @click="search(indexsec)"></i>
                        <!-- <search
                                        @result-click="resultClick"
                                        @on-change="getResult"
                                        :results="results"
                                        v-model="value"
                                        position="fixed"
                                        auto-scroll-to-top
                                        top="0px"
                                        @on-focus="onFocus"
                                        @on-cancel="onCancel"
                                        @on-submit="onSubmit"
                                        ref="search"></search> -->
                </form>
                  <swiper v-model="indexsec" height="100%" :show-dots="false">
                    <swiper-item :key="1">
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <x-header :left-options="{showBack: false}" v-if='index!=0'>{{title_main}}</x-header>
                                <!-- <h4 v-if='venue_img.length>=0'>搜索发现</h4> -->
                                <!-- <ul v-if='venue_img.length>=0' class="clearfix tuijian">
                                         <router-link tag="li" :to='{path:"/shop/shopDetail",query:{credit_id:"2"}}' v-for="(key,value) in tabberGoodsinfo"  :key="value" class="left ">
                                          {{key.name}}</router-link>
                                </ul> -->
                                <h4>推荐商品</h4>
                                <div class="venue_box " ref="hotGoods">
                                    <ul class="hot-list clearfix" >
                                        <li v-for='(hot,index) in venue_img' :key="index" @click="goDetails(hot.id)">
                                                        <img :src="hot.thumbnail"  :onerror="defaultImg"/>
                                                <div class="home-hotinfo">
                                                <p><span>{{hot.name}}</span></p>
                                                <div class="jg">
                                                    <span >￥{{hot?parseFloat(hot.price).toFixed(0):0}}</span>
                                                    <span class="fr" style="padding-right:5px;">{{hot.miniOrder}}件起售</span>
                                                </div>
                                                <p><span >卖点：</span><span>{{hot.sellerPoint}}</span></p>
                                                </div>
                                                <span class="add-car icon iconfont icon-gouwuche" @click.stop='addCar(hot)'></span>
                                        </li>
                                    </ul>        
                                </div>
                            </section>
                        </div>
                    </swiper-item>
                         <swiper-item :key="2">
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <!-- <h4>搜索ass发现</h4>
                                <ul class="clearfix tuijian">
                                          <router-link tag="li" :to='{path:"/shop/shopDetail",query:{credit_id:"2"}}' v-for="(key,value) in tabberShopinfo"  :key="value" class="left ">
                                          {{key.name}}</router-link>
                                </ul> -->
                                <h4>推荐店铺</h4>
                                <div class="venue_box venue_box_shop" ref="hotGoods">
                                    <ul class="hot-list clearfix hot-list-shop" >
                                        <li v-for='(hot,index) in shoplist' :key="index" @click="goShop(hot.id)">
                                            <div class="shoplist-top">
                                                <img :src="hot.logo"  :onerror="defaultImg"/>
                                                <div class="list_title">{{hot.name}}</div>   
                                                <div class="list_title_detail">共{{hot.goodsNumber}}件商品   销量{{hot.salesVolume}}</div> 
                                             <router-link class="intoshop"  :to="{path:hot.placename,query:{credit_id:hot.placename}}"  >
                                                进店</router-link>
                                            </div>    
                                            <div class="hot_list_info">
                                                <div class="left_list_info">
                                                            <div class="list_info_main">
                                                                <span >主营产品：</span><span>{{hot.majorProduct}}</span>
                                                            </div>
                                                            <div class="list_info_xz">
                                                                <span >营业性质：</span><span>{{hot.businessNaturet}}</span>
                                                            </div>
                                                            <div class="list_info_address">
                                                                <span >公司所在地址：</span><span>{{hot.companyAddress}}</span>
                                                            </div>
                                                </div> 
                                                <div class="right_list_info">
                                                            <div>
                                                                <img :src="hot.goodsIamge"  :onerror="defaultImg"/>
                                                            </div>
                                                </div>  
                                            </div>
                                        </li>
                                    </ul>        
                                </div>
                            </section>
                        </div>
                    </swiper-item>
                </swiper>
   
                
            </div>
    </div>
</template>

<script>
import {
  Swiper,
  SwiperItem,
  Flexbox,
  FlexboxItem,
  Tab,
  TabItem,
  Search,
  XHeader
} from "vux";

//console.log(data)
export default {
  name: "search",
  data() {
    return {
      defaultImg: 'this.src="' + require("@/assets/img/default.png") + '"',
      key: "",
      // shopName:'',
      showSearch: false,
      tabberGoods: ["商品", "店铺"],
      tabGoods: [{id: "", typeName: "全部"}],
      // tabberGoodsItem: [
      //   [
      //     { name: "热卖面膜" },
      //     { name: "幻彩化妆品" },
      //     { name: "个人用品" },
      //     { name: "母子用品" }
      //   ]
      // ],
      tabName: "全部",
      tabIndex:'',
      index: 0,
      indexsec: 0,
      tabberGoodsinfo: [{ name: "热卖面膜" },{ name: "幻彩化妆品" },{ name: "个人用品" }],
      tabberShopinfo: [{ name: "店铺1" }, { name: "店铺2" }, { name: "店铺3" }],
      venue_img: [],
      shoplist:[],
      title_main: "全部",
      results: [],
      value: "test",
      shopStore:true,
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Search,
     XHeader
  },
  created() {
    // this.$axios.get("static/data/index/xs-hotSale1.json").then(res => {
    //   this.venue_img = res.data;
    // });
    this.getfooterList();
  },
  mounted() {
    // this.tabName = this.$route.query.name;
    // console.log(this.index);
  },
  distoryed(){},
  methods: {
    addHistory() {},
    cancel() {
      window.history.go(-1);
    },//SearchStart
     setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }, 
    getResults (val) {
      let rs = []
      for (let i = 0; i < 20; i++) {
        rs.push({
          title: `${val} result: ${i + 1} `,
          other: i
        })
      }
    return rs
    }, //搜索end
     getfooterList(){
        this.$axios.get('/goodsType/oneType').then(res=>{
          if(res.code=='OK')
          // this.tabGoods=res.data;
          for(var item in res.data){
              this.tabGoods.push(res.data[item]);
          }
          this.tabName=res.data[0].typeName;
        })
    },
    search(type){
      console.log(type)
      if(type==0){
          this.searchgoodsList();
      }else{
          this.searcshopList();
      }

    },
    searchgoodsList(){
        this.$axios.get('/index/goods',{name:this.key,typeId:this.tabIndex,currPage:1,}).then(res=>{
              this.venue_img=res.data.records;
        })
    },
    searcshopList(){
         this.$axios.get('/index/shop',{name:this.key,currPage:1,}).then(res=>{
              this.shoplist=res.data.records;
        })

    },
    goShop(id){
        this.$router.push({path:'/shop/shopDetail',query:{id:id}})
    },
  },
  filters: {},
  watch: {
    index: function(val, oldval) {
      // console.log(val,oldval)
      if (val != 0) {
        this.title_main = this.tabGoods[val].typeName;
        this.tabIndex=this.tabGoods[val].id;
        this.indexsec = 0;
        //  window.scroll(0, 0);
        // document.querySelector('.venue_box').scrollTop=0;
      }else{
        this.tabIndex='';
      }
    },indexsec(val){
      // console.log(val)
        if(val==1){
            this.shopStore=false;
        }else{
          this.shopStore=true;
        }
    },
  }
};
</script>

<style scoped lang="less">
.search .search-bar {
  width: 100%;
  height: 58px;
  background: #fff;
  border-bottom: #ddd solid 1px;
  line-height: 58px;
  position: relative;
}
.search .search-bar .search-btn {
  position: absolute;
  right: 3%;
  font-size: 22px;
  top: 50%;
  transform: translateY(-50%);
  color: #8b8dbc;
}
.search .search-bar input {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  height: 50%;
  width: 75%;
  font-size: 14px;
  border: none;
  outline: none;
}
.search .search-bar input:focus {
  border: none;
}

.search .search-bar span {
  position: absolute;
  // right: 7%;
  font-size: 14px;
  color: #010101;
}
.search .search-main ul {
  background: #e3e4e4;
  padding-top: 6px;
  // padding-left: 4.5%;
  padding-bottom: 16px;
}
.search .search-main h4 {
  padding-left: 4.5%;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: #9d9d9d;
}

.search .search-main ul.tuijian li a,.search .search-main ul.tuijian li  {
  display: inline-block;
  padding: 6px 9px;
  color: #dbb58b;
  font-size: 12px;
}
.search .search-main ul.tuijian li {
  border: 1px solid #dbb58b;
  border-radius: 4px;
  margin-right: 11px;
  margin-top: 11px;
  float: left;
}
.search {
  background: #f7f7f7;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: 0;
  // left: 100%;
  overflow: hidden;
  transition: 0.3s left;
  display: flex;
  flex-direction: column-reverse;
}
.vux-slider {
  height: 100%;
}
.hot-list {
  margin-bottom: 50px;
  padding-bottom: 50px;
}
.hot-list li:nth-of-type(2n + 1) {
  width: 49%;
  margin-right: 1%;
  margin-top: 2%;
  position: relative;
  float: left;
  background: #fff;
}
.hot-list li:nth-of-type(2n) {
  width: 49%;
  margin-left: 1%;
  margin-top: 2%;
  position: relative;
  float: left;
  background: #fff;
}
.hot-list li img {
  width: 70%;
  height: 150px;
  margin: 0 auto;
}
.hot-list li .placename {
  box-sizing: content-box;
  width: 35px;
  height: 22px;
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 12px;
  text-align: center;
  line-height: 22px;
  border: 1px solid #9b9b9b;
  border-radius: 3px;
  color: #000;
}
.hot-list li .home-hotinfo p {
  font-size: 12px;
  height: 23px;
  color: #010101;
  line-height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.hot-list li .home-hotinfo p:nth-of-type(2) {
  font-size: 12px;
  height: 23px;
  color: #010101;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.hot-list li .home-hotinfo .jg span:nth-of-type(1) {
  font-size: 14px;
  color: #ec3f7e;
  margin-right: 3px;
}
.hot-list li .home-hotinfo .jg del {
  font-size: 12px;
  color: #aab0b0;
  margin-right: 3px;
}
.hot-list li .home-hotinfo .jg span:nth-of-type(2) {
  font-size: 12px;
  color: #be955f;
}
.hot-list li .home-hotinfo .jg span:nth-of-type(3) {
  font-size: 12px;
  color: #ec3f7e;
}
.add-car {
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 118px;
  width: 28px;
  height: 28px;
  line-height: 32px;
  background: #ccbebe;
  border-radius: 50%;
  text-align: center;
  color: #ed3a7c;
  font-size: 19px;
}
.venue_box_shop .hot-list-shop li {
  width: 100%;
}
.shoplist-top {
  height: 60px;
  line-height: 60px;
  font-size: 19px;
  position: relative;
  padding-left: 75px;
}
.hot-list li .shoplist-top img {
  border-radius: 50%;
  position: absolute;
  left: 7px;
  top: 5px;
  width: 50px;
  height: 50px;
}
.shoplist-top .list_title {
  line-height: 35px;
}
.shoplist-top .list_title_detail {
  line-height: 25px;
  font-size: 15px;
  color: #acb2b3;
}
.shoplist-top .intoshop {
  width: 70px;
  height: 30px;
  line-height: 30px;
  background: #33a7d8;
  border-radius: 50px;
  color: #ffffff;
  position: absolute;
  top: 15px;
  right: 8px;
  text-align: center;
}
.hot-list .hot_list_info {
  height: 120px;
  padding: 0 20px 13px;
  padding-top: 10px;
  font-size: 15px;
  line-height: 18px;
}
.hot-list .hot_list_info {
  display: flex;
}
.hot-list .left_list_info {
  width: 280px;
}
.hot-list .hot_list_info > div span:nth-of-type(2) {
  margin-bottom: 10px;
  color: #acb2b3;
  font-size: 13px;
}
.hot-list .left_list_info > div {
  margin-bottom: 10px;
}
.list_info_address,
.list_info_xz {
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.list_info_main {
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.hot-list .right_list_info img {
  height: 94px;
  width: 113px;
  border-radius: 15px;
}
.search-main h3 {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #000000a1;
  border: 1px solid #000000a1;
}
</style>
<style>
#search .vux-swiper {
  height: 100%;
  overflow: auto;
}
#search .vux-swiper p {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.search-main {
  padding-bottom: 40px;
}
</style>

