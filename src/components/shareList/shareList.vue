<template>
    <div id="share">
        <ul class="sharelist">
            <li v-for="(item,index) in shareList" :key="index" @click="shareHref(item)">
                <div class="iconfont" :class="item.iconClass" :style="{color:item.color}"></div>
                <span class="label">{{item.label}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "share",
    data() {
        return {
            shareList:[
                {
                    iconClass:'icon-pengyouquan',
                    label:'微信朋友圈',
                    color:'#3eb135',
                    type:'weixin'
                },
                {
                    iconClass:'icon-weixin3',
                    label:'微信好友',
                    color:'#3eb135',
                    type:'weixinFriend'
                },
                {
                    iconClass:'icon-qqhaoyou',
                    label:'QQ好友',
                    color:'#4dafea',
                    type:'qq'
                },
                {
                    iconClass:'icon-weibo',
                    label:'新浪微博',
                    color: '#d22912',
                    type:'sinaweibo'
                }
            ],
            shares:{},
            userInfo:localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')) || {},
        }

    },
    components: {

    },
    created() {

    },
    mounted() {
        mui.plusReady(()=>{
            plus.share.getServices( (s) => {
                this.shares={};
                for(var i in s){
                    var t=s[i];
                    this.shares[t.id]=t;
                }
            }, (e) => {
                mui.toast("获取分享服务列表失败："+e.message );
            });
        })
    },
    methods: {
        shareHref(item){
            switch (item.type) {
                case 'weixin':/*微信朋友圈*/
                        this.shareMessage(this.shares['weixin'],'WXSceneTimeline');  
                    break;
                case 'weixinFriend':/*微信好友*/
                        this.shareMessage(this.shares['weixin'],'WXSceneSession');  
                    break;
                case 'qq':
                        this.shareMessage(this.shares['qq']);
                    break;
                default:
                        //this.shareMessage(this.shares['sinaweibo']);
                    break;
            } 
        },
        shareMessage(s, ex) {
            const _this = this;
             var msg = {
                content: '分享-详情',
                href: 'http://www.kbbabc.com/api/my_invite/show_register?invite_code='+_this.userInfo.phone,
                title: '卡帮帮，帮你，帮我，帮大家',
                content: '推荐使用卡帮帮app',
                thumbs: ['http://www.kbbabc.com/uploads/headimg.jpg'],
                pictures: ['http://www.kbbabc.com/uploads/headimg.jpg'],
                extra: {
                    scene: ex
                }
            };
            s.send(msg, function() {
                mui.toast("分享成功!");
            }, function(e) {
                mui.toast("分享失败!");
            });
        }
    }
}
</script>

<style scoped>
    #share{font-size: 14px;}
    .sharelist{display: flex;padding-top: 30px;}
    .sharelist li{flex: 1;text-align: center;line-height: 1.2;}
    .sharelist li .iconfont{font-size: 46px;}
</style>
