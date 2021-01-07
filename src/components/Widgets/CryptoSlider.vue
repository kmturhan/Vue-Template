<template>
   <div>
      <app-card class="ticker-slider">
         <slick :options="slickOptions">
            <div class="ticker-item-wrap px-3" v-for="(item,index) in cryptoSliderData" :key="index">
               <div class="d-custom-flex align-items-center justify-space-between">
                  <div>

                     <div class="price-wrap fw-bold">
                        <span>{{ item.model_number }} </span>
                     </div>   
                     <span class="d-inline-block">{{ item.brand }}</span>
                     <span class="d-inline-block ml-1 mr-1">/</span> 
                     <span class="d-inline-block">{{ item.serial_number }}</span>
                     
                  </div>
                  <div>
                     <span :class="item.color" class="fw-bold d-flex align-items-center">
                       <i :class="item.icon" class="mr-3 font-lg"></i>
                       <span v-if="item.connection_status == 0" style="color: #e4002b !important;font-weight: bold;">DISCONNECT</span>
                       <span v-if="item.tv_status == 0 && item.connection_status == 1" style="color: #e4002b !important;font-weight: bold;">CLOSE</span>
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
import axios from "axios";

export default {
  components: {
    Slick,
  },
  mqtt: {
    'home/attributes/#': function () {
        console.log('CRYPTO GELDİ')
        this.loadData();
    },
  },
  data() {
    return {
      deviceList: [],
      slickOptions: {
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        unreachableDevices: 0,
      },
      cryptoSliderData: [

        {
          "coin1": "BTC",
          "coin2": "USDT",
          "price": "₮ 3,869.09",
          "market_cap": "10.3%",
          "icon": "zmdi zmdi-long-arrow-down",
          "color": "success--text"
        },

      ]

    };
  },
  methods: {
    loadData() {
      var updateData = [];
      this.unreachableDevices = 0;
      axios.get('http://192.168.10.30:5000/api/loadLcdDevices').then(resp => {
        resp.data.forEach(item => {
          console.log('resp Connection Status : ', item);

          if (item.tv_status == 0 || item.connection_status == 0) {
            console.log('Open', this.openDeviceLength);
            updateData.push(item);
          }
        });
        this.cryptoSliderData = updateData
        console.log('Data.js : ', resp.data);
        console.log(this.deviceList);
        console.log('SEND DATA LIST : ', this.sendDataList);
      })
    },
  },
  created() {
    this.loadData();
    this.$mqtt.subscribe('home/attributes/#',function(message){
      console.log('Message : ',message)
    })
  }
}
</script>
<style scoped>
</style>