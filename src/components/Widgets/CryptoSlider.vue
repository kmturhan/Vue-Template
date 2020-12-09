<template>
   <div>
      <app-card class="ticker-slider">
         <slick :options="slickOptions">
            <div class="ticker-item-wrap px-3" v-for="(item,index) in cryptoSliderData" :key="index">
               <div class="d-custom-flex align-items-center justify-space-between">
                  <div>
                     <div class="price-wrap fw-bold">
                        <span>{{ item.price }} </span>
                     </div>   
                     <span class="d-inline-block">{{ item.coin1 }}</span> 
                     <span class="d-inline-block ml-1 mr-1">/</span> 
                     <span class="d-inline-block">{{ item.coin2 }}</span>
                     <span>{{ item.volume }}</span>
                  </div>
                  <div>
                     <span :class="item.color" class="fw-bold d-flex align-items-center">
                        <i :class="item.icon" class="mr-3 font-lg"></i>{{ item.market_cap }}
                     </span>
                  </div>   
               </div> 
            </div>
         </slick>
      </app-card> 
   </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick,
  },
  data() {
    return {
      slickOptions: {
         speed: 10000,
         autoplay: true,
         autoplaySpeed: 0,
         arrows: false,
         cssEase: 'linear',
         slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: true,
      },
      cryptoSliderData : [

         {
            "coin1" : "BTC",
            "coin2" : "USDT",
            "price" : "₮ 3,869.09",
            "market_cap" : "10.3%",
            "icon" : "zmdi zmdi-long-arrow-down",
            "color" : "success--text"
         },
         {
            "coin1" : "ETH",
            "coin2" : "USDT",
            "price" : "₮ 131.89",
            "market_cap" : "3.43%",
            "icon" : "zmdi zmdi-long-arrow-down",
            "color" : "error--text"
         }
      ]

    };
  }
};
</script>
<style scoped>
</style>