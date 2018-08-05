<template>
	<div id="cardWebview">
		<!-- <input type="hidden" v-model="url" :value="target"/> -->
	</div>
</template>

<script>
	export default {
		name:"cardWebview",
		data(){
			return {
				view:null,
				url:"",
				error:false
			}
		},
		destroyed(){
			this.view.close();
			this.view.addEventListener('close',()=>{
				this.view = null;
			});
		},
		methods:{
			//返回上级
			clickButton(e){
				this.view.canBack((e)=>{
					if(!error && e.canBack) {
						this.view.back();
					}else{
						this.$router.push("/index");
					}
			    });
			}
		},
		mounted(){
			// let appid = hex_md5("byzk_shop_zl"+this.$store.state.loginModule.appid||"0");
			const opa = {
				top:"46px",
				bottom:'0px',
				'titleNView':{
						progress:{color:'#39ABFB'}
				}
			};

            /* var all = plus.webview.all(); 
            var current = plus.webview.currentWebview().id; 
            for(var i=0,len=all.length;i<len;i++){ 
                if(all[i].id!==current){ 
                    all[i].close(); 
                } 
            }  */

			this.view = plus.webview.create( this.target, "webviewMy",opa);
			// console.log(this.$store.state.loginModule.appid)

			this.view.show();

			this.view.onerror = ()=>{
                this.error = true
            }

			this.view.addEventListener('progressChanged', (e)=>{
				if(e.progress==100){
					console.log("当前页面URL："+plus.webview.getWebviewById('webviewMy').getURL());
				}
			}, false);	
			
		},
		props:["target","title"]
	}
</script>

<style scoped>
	#hoppingCart{width: 100%;height: 100%;}
</style>