<template>   
    <div class="swiper">  
        <div class="swiper-container" ref="slider">     
            <div class="swiper-wrapper">       
                <div class="swiper-slide" v-for="(slide,index) in Swiperlist" :key="index"  :data-swiper-autoplay="index<2?slide.time:''">        
                    <router-link :to="{name:'BookDetail',params:{id:slide.id}}">        
                        <img :src="slide.img_url"/>         
                    </router-link>       
                </div>     
            </div>  
                <div class="swiper-pagination"></div>
        </div>   
     </div>
</template>
<script>  
 import '../../../static/dist/css/swiper.css'  
 import Swiper from  '../../../static/dist/js/swiper.min.js'  
   export default {    
        name: "Slider",    
         data(){      
             return{       }    
             },   
        mounted(){ 
            // this.$nextTick(()=>{
                console.log(this.way)
                 if(this.way){
                      new Swiper (this.$refs.slider, 
                        {         loop: true,     
                                 direction: 'horizontal',   
                                 autoplay:true, 
                                  delay:3000, 
                                // 如果需要分页器
                                pagination: {
                                el: '.swiper-pagination',
                                type: 'fraction',
                                },
                                //旋转效果
                               
                                // effect : 'cube',
                                // cubeEffect: {
                                //     slideShadows: true,
                                //     shadow: true,
                                //     shadowOffset: 100,
                                //     shadowScale: 0.6
                                // },
                     })     
                }else{
                                new Swiper (this.$refs.slider, 
                                    {         
                                        // loop: true,     
                                            direction: 'horizontal',   
                                            autoplay:true, 
                                            delay:3000, 
                                            // 如果需要分页器
                                            pagination: {
                                            el: '.swiper-pagination',
                                            type: 'fraction',
                                            },
                                            //折片效果
                                        effect : 'flip',
                                })  

               }
                     
               
       },
       props:['Swiperlist','way']
    }
</script>
<style scoped>   
.swiper{  width: 100%; height: 100%;}
.swiper-container {     width: 100%; height: 100%;    margin: 0;     padding: 0;  position: relative; }   
.swiper-wrapper {     height: 100%;   }   
.swiper-slide img { width: 100%;  height: 100%; }   
.swiper-slide {     text-align: center;     background: #fff; width: 100%; height: 100%;      }
.swiper-pagination{text-align: right;transform: translateX(-20px);}
.swiper-pagination{color: #7fc0f0;}
</style>
