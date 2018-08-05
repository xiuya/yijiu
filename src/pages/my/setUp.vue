<template> 
    <div id="setUp">
        <x-header title="设置" :left-options="{showBack: true}" :right-options="{showMore: true}"></x-header>
        <group>
            <cell title="绑定推荐人" is-link :link="{path:'/my/setUp/binding'}"></cell>
            <cell title="设置密码" :link="{path: '/my/setUp/setPwd'}"></cell>
            <!-- <cell title="修改密码" :link="{path: '/my/setUp/editPwd'}"></cell> -->
        </group>
        <group>
            <x-switch title="推送通知"></x-switch>
            <cell title="清除缓存"  @click.native="clean"></cell>
        </group>
        <div class="fixed-bottom">
            <box gap="10px 20px" >
                <XButton type="primary"  @click.native="confirmLogOut">退出登录</XButton>
            </box>
        </div>
    </div>

</template>

<script>
import { XHeader , Group , Cell , XSwitch ,Box , XButton} from 'vux'

export default {
    name: "setUp",
    data() {
        return {
            
        }

    },
    components: {
        XHeader,Group,Cell,XSwitch,Box , XButton
    },
    created() {

    },
    mounted() {
    },
    methods: {
        confirmLogOut(){
            const _this = this;
            this.$vux.confirm.show({
                title: '确认退出？',
                onCancel () {
                },
                onConfirm () {
                    _this.$store.dispatch('logout');
                    _this.$router.replace({
                        path: '/login',
                        query: { redirect: _this.$route.fullPath }
                    })
                }
            })
        },
        clean(){
            const _this = this;
            this.$vux.confirm.show({
                title: '清除缓存之后需要重新登录哦',
                onCancel () {
                },
                onConfirm () {
                    _this.$store.dispatch('logout');
                    mui.toast('清除成功');
                    _this.$router.replace({
                        path: '/login',
                        query: { redirect: _this.$route.fullPath }
                    })
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
    #setUp .weui-cell{padding: 15px;}
    #setUp,.animated{width: 100%;height: 100%;background-color: #f0f0f0;}  
 
</style>
<style> 
    #setUp .vux-no-group-title{margin-top: 0 !important;margin-bottom: 10px;}
    #setUp .vux-no-group-title .vux-cell-bd p label{font-size: 15px;color: #333;}
    #setUp .vux-header .vux-header-title > span{font-size: 16px;}
    #setUp .weui-cell_switch .weui-cell__bd .weui-label{font-size: 15px;color:#333;}
   
</style>

