<template>
    <div id="shopCar">
        <x-header title="商城"></x-header>
        <group v-if="item.num>0" v-for="(item,i) in goodList" :key="i">
            <cell>
                <!-- <check-icon :value.sync="item.checked" class="fl" ></check-icon> -->
                <img :src="baseURL+'uploads/'+item.head_pic" :onerror="defaultImg" class="fl">
                <div class="shopCon fl">
                    <h5>{{item.goods_name}}</h5>
                    <p>
                        <span v-for="(gg,k) in item.gg.split(',')" :key="k">{{gg}}</span>
                        <span>库存：{{item.num}}</span>
                    </p>
                    <i>{{item.price}} 元</i>
                </div> 
                <inline-x-number style="display:block;" :min="0" :max="item.num" v-model='item.chosenNum'></inline-x-number>
            </cell>
        </group>
        <box gap="20px 15px">
            <x-button type="primary" @click.native="pay">预购</x-button>
        </box>
        <alert v-model="show" @on-hide="onHide"> {{ showMsg }}</alert>
    </div>
</template>

<script>
import { XHeader,Group,Cell,Radio,CheckIcon,InlineXNumber,Box,XButton,AlertModule, Alert } from 'vux'

export default {
    name: "shopCar",
    data() {
        return {
            goodList:[],
            defaultImg: 'this.src="' + require('@/assets/img/headimg.jpg') + '"',
            show:false,
            showMsg:'',
            code:0
        }

    },
    components: {
        XHeader,Group,Cell,Radio,CheckIcon,InlineXNumber,Box,XButton, Alert
    },
    created() {
        this.$http.post('api/store/goods')
            .then(res=>{
                if(res.data.code==1){
                    this.goodList = res.data.result;
                }else{
                    mui.toast(res.data.msg)
                }
                console.log(res.data)
            })
    },
    mounted() {

    },
    methods: {
        pay(){
            let paylist = this.goodList.filter(v=>{
                return (v.chosenNum && v.chosenNum>0)
            })
            //console.log(paylist)
            if(paylist.length<1) return mui.toast('请选择商品');
            const _this = this;
            let content = '';
            for(let i=0;i<paylist.length;i++){
                content += `<div class="fix"><img src=${this.baseURL}uploads/${paylist[i].head_pic}  class="fl">
                            <span class="fr">${paylist[i].goods_name} x ${paylist[i].chosenNum}</span></div>`;
            }
            this.$vux.confirm.show({
                title: '已选商品',
                content: content,
                onCancel () {
                },
                onConfirm () {
                    _this.$http.post('/api/Store/orderGoods',`data=${JSON.stringify(paylist)}`)
                        .then(res=>{
                            _this.showMsg = res.data.msg;
                            _this.show = true;
                            _this.code = res.data.code;
                        })
                }
            })
            
        },
        onHide(){
            if(this.code==1){
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style scoped lang="less">
    #shopCar{width: 100%;height: 100%;background-color: #f0f0f0;}
    .shop_cont{overflow: hidden;background-color: #fff;padding: 10px 15px;position: relative;}
    img{width: 80px;height: 80px;}
    .shopCon{float: left;margin-left: 15px;}
    .shopCon h5{font-size: 14px;color: #333;}
    .shopCon p span{font-size: 12px;margin-right: 15px;}
    .shopCon i{color: red;display: inline-block;margin-top: 10px;font-weight: 500;}
    .vux-check-icon{padding-top: 25px;}
</style>
<style>
#shopCar .vux-no-group-title{margin-top: 0 !important;margin-bottom: 10px;}
#shopCar .weui-cells .weui-cell__ft{width: 100%;overflow: hidden;text-align: left;}
#shopCar .vux-inline-x-number{position: absolute;right: 15px;bottom: 10px;}
#shopCar .vux-inline-x-number input{width: 35px;height: 25px;}
#shopCar .vux-number-selector{padding:0;width: 25px;height: 25px;text-align: center;padding-top: 2px;border:1px solid #ddd;}
#shopCar .vux-number-selector-sub{padding-top: 3px;}
</style>
