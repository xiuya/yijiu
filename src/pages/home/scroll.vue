<template>
    <div id="scroll" >
        <div id="maindiv" class="maindiv">
    
            <div id="contentdiv1" class="contentdiv">1</div>
            <div id="contentdiv2" class="contentdiv">2</div>
            <div id="contentdiv3" class="contentdiv">3</div>
            <div id="contentdiv4" class="contentdiv">4</div>
            <div id="contentdiv5" class="contentdiv">5</div>
        
        </div>
        
        <div id="radiodiv" class="radiodiv">
            <input type="radio" id="radio1" onmouseenter="showScreen(1);" name="radio" value="1" checked="checked" />
            <br/><br/><input type="radio" id="radio2" onmouseenter="showScreen(2)" name="radio" value="2" />
            <br/><br/><input type="radio" id="radio3" onmouseenter="showScreen(3)" name="radio" value="3" />
            <br/><br/><input type="radio" id="radio4" onmouseenter="showScreen(4)" name="radio" value="4" />
            <br/><br/><input type="radio" id="radio5" onmouseenter="showScreen(5)" name="radio" value="5" />	
            <br/><br/><div id="informationdiv"></div>
        </div>
    </div>
</template>

<script>

import '../../../static/js/fenping.js' 

export default {
    name : 'scroll',
    data() {
		return {
		}
	},
	components: {
		Swiper,
		SwiperItem,
		Flexbox,
        FlexboxItem,
         Tab,
          TabItem
	},
	created() {
		alert(11)

    },
    mounted() {
		alert(11)
    },
    distoryed() {

    },
    methods: {
    },
    filters: {
    },
    watch:{
    }
}
</script>

<style scoped lang="less">
body{
	margin:0px;
	padding:0px;
	color:#FFFFFF;
}
.maindiv{
	position:absolute;
	width:100%;
	height:100%;
	overflow:auto;
}
.radiodiv{
	position:absolute;
	bottom:30%;
	right:20px;
	display:inline-table;
	text-align:right;
}
.contentdiv{
	position:absolute;
	width:100%;
	height:100%;
	color:#999999;
	background-color:#333333;
}
#contentdiv1{
	top:0%;
	background-color:#000000;
}
#contentdiv2{
	top:100%;
	background-color:#333333;
}
#contentdiv3{
	top:200%;
	background-color:#666666;
}
#contentdiv4{
	top:300%;
	background-color:#999999;
}
#contentdiv5{
	top:400%;
	background-color:#CCCCCC;
}
 
</style>
<style>


</style>

