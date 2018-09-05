<template>
    <div>
        <div id="order">
            <actionsheet v-model="show5" :menus="menus5" show-cancel  @on-click-menu="click5"></actionsheet>

                <tab :line-width=2 active-color='#fc378c' v-model="index">
                    <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in tabberGoods" @click="tabName= item" :key="index">{{item}}</tab-item>
                </tab>
                  <swiper v-model="index"  :show-dots="false">
                    <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <div>搜索</div>
                                    <search
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
                                        ref="search"></search>
                            </section>
                        </div>
                    </swiper-item>
                    <swiper-item  ref="swiper2">
                        <div class="tab-swiper vux-center">
                            <section class="search-main saleAll">
                                 <div class="sale_total">汇总统计</div>
                                 <div class="saleAlldetail status5 clearfix">
                                      <div class="fl">在售商品总数：<span>1852</span></div>  
                                      <div class="fl">下架商品总数：<span>1852</span></div>  
                                      <div class="fl">待编辑商品总数：<span>1852</span></div>  
                                 </div>
                                 <div class="goods_list xiajiawrap">
                                    <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                        <div class="count_title clearfix status5">
                                                <div class="title_left fl">待编辑商品</div>
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
                                <div class="goods_list xiajiawrap">
                                    <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                        <div class="count_title clearfix status5">
                                                <div class="title_left fl">下架商品</div>
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
                                <div class="goods_list xiajiawrap">
                                    <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                        <div class="count_title clearfix status5">
                                                <div class="title_left fl">上架商品</div>
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
                                    <div class="goods_list xiajiawrap">
                                        <router-link  :to="{ path: '/order/orderDetail', query: { orderId: 123 }}"  >
                                            <div class="count_title clearfix status5">
                                                    <div class="title_left fl">上架商品</div>
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
                                                        <a href="#" class="pay_money del"  >编辑</a>
                                                        <div class="saleOut">已售999套</div>
                                                        <a href="#" class="pay_money xiajia">上架</a>
                                                    </div>
                                                </div>      
                                            </div>
                                            <!-- <div class="goodsfooter">
                                                在售商品：999种
                                                <span>按分类</span>
                                            </div> -->
                                        </router-link>
                                    </div>
                            </section>
                        </div>
                    </swiper-item>
                   <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main">
                                <div class="basicinfo">基本信息</div>
                                <group>
                                    <popup-picker :title="title2" :data="list2" v-model="value2"></popup-picker>
                                    <x-input title="商品品牌" name="username" placeholder="请输入商品品牌" ></x-input>
                                    <x-textarea title="商品名称" :max="50" placeholder="请输入商品名称" :show-counter="false" :height="50" :rows="8" :cols="30"></x-textarea>
                                    <x-input title="商品卖点" name="username" placeholder="请输入商品卖点" :max="10"></x-input>
                                    <x-input title='上传收缩页缩略图' text-align="right" disabled v-model="disabledValue" ref='thmailImg' @click="show5=true">
                                         <x-button slot="right" type="primary" mini @click.native="show5=true">点击上传图片</x-button></x-input>
                                    <x-input title='上传详情页主图1' text-align="right" disabled v-model="disabledValue">
                                        <x-button slot="right" type="primary" mini @click="show5=true">点击上传图片</x-button>
                                    </x-input>
                                    <x-input title='上传详情页主图2' text-align="right" disabled v-model="disabledValue">
                                        <x-button slot="right" type="primary" mini @click="show5=true">点击上传图片</x-button>
                                    </x-input>
                                </group>
                                <div class="basicinfo">款式编辑</div>
                                <div class="kswrap">
                                    <group>
                                        <x-input title="款式1名称" name="username" placeholder="" ></x-input>
                                        <x-input title="单价" name="username" placeholder="" ></x-input>
                                        <x-input title="起订量" name="username" placeholder="" :max="10"></x-input>
                                        <x-input title="购买单位" name="username" placeholder="" ></x-input>
                                        <x-input title="库存" name="username" placeholder="" ></x-input>
                                        <x-input title="商品型号" name="username" placeholder="" ></x-input>
                                        <x-input title='上传缩略图' text-align="right" disabled v-model="disabledValue">
                                            <x-button slot="right" type="primary" mini @click="show5=true">点击上传图片</x-button>
                                        </x-input>
                                    </group>   
                                     <group>
                                        <x-input title="款式2名称" name="username" placeholder="" ></x-input>
                                        <x-input title="单价" name="username" placeholder="" ></x-input>
                                        <x-input title="起订量" name="username" placeholder="" :max="10"></x-input>
                                        <x-input title="购买单位" name="username" placeholder="" ></x-input>
                                        <x-input title="库存" name="username" placeholder="" ></x-input>
                                        <x-input title="商品型号" name="username" placeholder="" ></x-input>
                                        <x-input title='上传缩略图' text-align="right" disabled v-model="disabledValue">
                                            <x-button slot="right" type="primary" mini @click="show5=true">点击上传图片</x-button>
                                        </x-input>
                                    </group> 
                                    <div class="kswrap_add">
                                         <x-button slot="right" type="primary" mini @click="show5=true">添加款式</x-button>   
                                    </div>
                                </div>
                                <div class="basicinfo">宣传主图上传</div>
                                <div class="basicinfo">售后质保</div>
                                <group  title="">
                                    <div class="quelity">
                                        <div class="quelity_left">质量承诺</div>
                                        <div class="quelity_right">质保期<input type="num" />月</div>
                                    </div>    
                                    <x-textarea placeholder="质量承诺内容" :show-counter="false" :height="50" :rows="8" :cols="30"></x-textarea>
                                    <div>质量承诺</div>
                                    <x-textarea placeholder="质量承诺内容" :show-counter="false" :height="50" :rows="8" :cols="30"></x-textarea>

                                </group>
                                <div class="compare">
                                    <div class="header">对标参数</div>
                                    <div class="header-detail">该商品在其他电商有销售 对比凸显在 傻傻平台 购买的超值优惠</div>
                                    <x-table :cell-bordered="false" style="background-color:#fff;">
                                        <thead>
                                        <tr>
                                            <th width="35">序号</th>
                                            <th width="200">电商名称</th>
                                            <th>售价（元）</th>
                                            <th>销量</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><x-input></x-input></td>
                                                <td><x-input></x-input></td>
                                                <td><x-input></x-input></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><x-input></x-input></td>
                                                <td><x-input></x-input></td>
                                                <td><x-input></x-input></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td><x-input></x-input></td>
                                                <td><x-input></x-input></td>
                                                <td><x-input></x-input></td>
                                            </tr>
                                        </tbody>
                                    </x-table>
                                </div>
                                 <!-- <tab :line-width=2 active-color='#fc378c' v-model=" edit_index"> -->
                                    <!-- <tab-item class="vux-center" :selected="tabName === item" v-for="(item, index) in tabberGoods" @click="tabName= item" :key="index">{{item}}</tab-item> -->
                                <!-- </tab> -->
                            </section>
                        </div>
                    </swiper-item>
                    <swiper-item >
                        <!-- 下架商品 -->
                        <div class="tab-swiper vux-center">
                            <section class="search-main saleOff"  >
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
                                                    <a href="#" class="pay_money del"  >编辑</a>
                                                    <div class="saleOut">已售999套</div>
                                                    <a href="#" class="pay_money xiajia">上架</a>
                                                </div>
                                            </div>      
                                        </div>
                                        <div class="goodsfooter">
                                            在售商品：999种
                                            <span>按分类</span>
                                        </div>

                                    </router-link>
                                </div>
                            </section>
                        </div>
                    </swiper-item>
                    <swiper-item >
                        <div class="tab-swiper vux-center">
                            <section class="search-main saleOn clearfix">
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
                                                    <a href="#" class="pay_money ">编辑</a>
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
                                                    <a href="#" class="pay_money ">编辑</a>
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
                                                    <a href="#" class="pay_money ">编辑</a>
                                                    <div class="saleOut">已售999套</div>
                                                    <a href="#" class="pay_money xiajia">下架</a>
                                                </div>
                                            </div>      
                                        </div>
                                    </router-link>
                                </div>
                                <div class="goodsfooter">
                                    在售商品：999种
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
import {
  Actionsheet,
  Swiper,
  XTable,
  Search,
  SwiperItem,
  XTextarea,
  XHeader,
  XButton,
  XInput,
  Box,
  Flexbox,
  FlexboxItem,
  Tab,
  TabItem,
  PopupPicker,
  Group
} from "vux";
import creditCard from "./../../components/creditCard/creditCard";
import listImg from "@/assets/img/order/dingdan.jpg";
export default {
  name: "order",
  data() {
    return {
      status: "",
      listImg: listImg,
      index: 0,
      edit_index:0,
      tabberGoods: ["搜索", "汇总统计", "编辑商品", "下架商品", "在售商品"],
      tabberGoodsItem: [
        [
          { name: "热卖面膜" },
          { name: "幻彩化妆品" },
          { name: "个人用品" },
          { name: "母子用品" }
        ],
        [
          { name: "热卖面膜" },
          { name: "母子用品" },
          { name: "母子用品" },
          { name: "幻彩化妆品" },
          { name: "个人用品" },
          { name: "母子用品" }
        ],
        [
          { name: "母子用品" },
          { name: "母子用品" },
          { name: "热卖面膜" },
          { name: "幻彩化妆品" },
          { name: "个人用品" },
          { name: "母子用品" }
        ]
      ],
      tabName: "在售商品",
      // height:180,
      title2: "所属类别",
      list2: [
        ["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"],
        ["小米1", "iPhone2", "华为3", "情怀4", "三星5", "其他6", "不告诉你7"]
      ],
      value2: ["iPhone", "华为3"],
      show5: false,
      menus5: {
        // 'title.noop': this.$t('Actionsheet header'),
        // delete: '<span style="color:red">Delete</span>'
        menu1: "拍照",
        menu2: "从相册中选取"
      },
      showSuccess: true,
      disabledValue: "点击上传图片",
      results: [],
      value: "test"
    };
  },
  computed: {},
  components: {
    Actionsheet,
    XHeader,
    XButton,
    Box,
    creditCard,
    Swiper,
    SwiperItem,
    XTextarea,
    Search,
    Flexbox,
    FlexboxItem,
    XTable,
    Tab,
    XInput,
    TabItem,
    PopupPicker,
    Group
  },
  created() {},
  mounted() {
    // this.height=document.querySelector('.saleOn').offsetHeight;
    // console.log(this.height)
    // this.$refs.swiper.height=this.height;
  },
  distoryed() {},
  methods: {
    onDelete() {
      this.showSuccess = true;
    },
    click5(key, item) {
      console.log(key, item);
    },
    setFocus() {
      //搜索start
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      console.log("on-change", val);
      this.results = val ? this.getResults(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "on submit"
      });
    },
    onFocus() {
      console.log("on focus");
    },
    onCancel() {
      console.log("on cancel");
    },
    getResults(val) {
      let rs = [];
      for (let i = 0; i < 20; i++) {
        rs.push({
          // title: `${val} result: ${i + 1} `,
          other: i
        });
      }
      return rs;
    } //搜索end
  },
  watch: {
    "card.creditCard"() {
      this.creditCard = this.card.creditCard;
      this.creditCard.map(v => (v["path"] = "/order/repay"));
    },
    "card.msg"() {},
    'index'(val){
        console.log(val);
        if(val==1){
            console.log(document.querySelector('#order .vux-swiper-item .vux-center').scrollHeight)
        }
    },
  }
};
</script>

<style scoped lang="less">
.maijia {
  color: #fff;
}
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
.count_down > .left {
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

.count_down > .right-content {
  padding-left: 5px;
  float: right;
  background-color: #7a7a84;
  color: #fff;
  width: 66%;
}
.count_down > .right-content .center {
  float: left;
  width: 50%;
  line-height: 25px;
}
.count_down > .right-content .right {
  float: right;
  width: 40%;
  line-height: 25px;
  margin-top: 10px;
}
.count_down .right .title {
  font-size: 0.7em;
  color: #58616d;
  display: block;
}
.count_footer {
  color: #fff;
  font-size: 18px;
  line-height: 40px;
  padding: 0 8px;
  // background: #4e4e9d;
}
.count_up {
  background: #fff;
  font-size: 14px;
  line-height: 36px;
  padding: 0 8px;
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
  line-height: 34px;
  padding: 0 8px;
  background-size: 100% 100%;
  //   background: #000;
  // background: url(../../assets/img/);
}
.goods_list .count_title.status1 {
  background-image: url(../../assets/img/order/status1.jpg);
}
.goods_list .count_title.status2 {
  background-image: url(../../assets/img/order/status2.jpg);
}
.goods_list .count_title.status3,
.count_footer,
.goodsfooter,
.sale_total {
  background-image: url(../../assets/img/order/status3.jpg);
}
.goods_list .count_title.status4,
.goods_list a.pay_money {
  background-image: url(../../assets/img/order/status4.jpg);
}
.goods_list .count_title.status5,
a.pay_money.xiajia,
.status5 {
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
#order {
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
}
.container {
  background: #282828;
}
.count_down > .right-content .right-singer.right {
  margin-top: 0;
  padding-left: 8px;
}
.right-singer {
  background: #ffffff;
  height: 100%;
}
.sktime {
  background: #7a7a84;
  line-height: 20px;
  margin-top: 10px;
}
.sktime > span {
  display: block;
  height: 20px;
  padding: 0 5px;
}
/* //商品管理 */
.goodsmanager {
}
.goods-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  background: #333;
  line-height: 60px;
}
.goods-footer > div {
  width: 20%;
  float: left;
}
.saleOut {
  color: #4e4d48;
}
.goods_list.xiajiawrap a.del {
  background: #cc0000;
  background-image: none;
  margin-left: 15px;
}
a.pay_money.xiajia {
  margin-left: 15px;
}
.goods_list.xiajiawrap .saleOut {
  margin: 7px 0 7px 15px;
}
.saleOn .goodsfooter {
  position: absolute;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  width: 100%;
  color: #91f880;
  text-align: center;
}
.saleOff .goodsfooter {
  position: absolute;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  width: 100%;
  color: #91f880;
  text-align: center;
}
// .saleAll .goodsfooter{position: absolute;bottom: 0;height: 40px;line-height: 40px;font-size: 18px;width: 100%;color: #91f880;text-align: center;    ;}
.saleAll.search-main {
  padding-bottom: 0;
}
.saleOn .goodsfooter > span {
  float: right;
  margin-right: 14px;
  color: #ffffff;
  font-size: 14px;
  line-height: 40px;
}
.search-main {
}
#order .vux-slider {
  height: 100%;
  width: 100%;
}
.saleAll .title_left {
  color: #0dda31;
}
.sale_total {
  line-height: 40px;
  color: #fff;
  height: 40px;
  padding-left: 12px;
}
.saleAlldetail .fl {
  width: 50%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-indent: 13px;
}
.saleAlldetail.status5 {
  background-size: contain;
}

</style>
<style>
#order .vux-slider .vux-swiper {
  height: 100% !important;
  overflow: scroll;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
}
.search-main {
  padding-bottom: 40px;
}
#order .vux-swiper-item .vux-center {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
#order .scrollable .vux-tab-item {
  flex: 0 0 20%;
}
/* #home-view{padding: 0;} */
.kswrap {
  padding: 10px;
  background: #ffffff;
}
.kswrap > div .weui-cells {
  background: #eee;
}
.kswrap > div .weui-cells .weui-cell__bd {
  background: #fff;
}
.kswrap > div .weui-cells .weui-label {
  color: #4aa7fc;
  width: 5.5em !important;
  text-align: right;
  padding-right: 5px;
}
.kswrap_add {
  padding-top: 10px;
  width: 100%;
  overflow: hidden;
}
.kswrap_add > button {
  float: right;
}
.quelity {
  overflow: hidden;
  width: 100%;
}
.quelity_right {
  float: right;
}
.quelity_left {
  float: left;
}
.compare input {
  border: 1px solid #3333;
}
</style>




