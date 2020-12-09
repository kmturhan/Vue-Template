<template>
	<div>

      <v-container fluid class="grid-list-xl pt-0">
         <div class="crypto-dash-wrap"> 
            <crypto-slider></crypto-slider>
            <LedScreens></LedScreens>




         </div>
      </v-container>
	</div>
</template>

<script>

// Widgets 

import { ChartConfig } from "Constants/chart-config";
import LedScreens from 'Components/Widgets/LedScreens';




export default {
   components:{
     LedScreens,
   },
   data() { 
    return {
      //  statsCardData,
       ChartConfig,
         bitcoin:{
            icon : "cc BTC primary--text",
            name : "Bitcoin",
            color : "primary",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[1, 26, 8, 22, 1],
            chartBorderColor: ChartConfig.color.primary,            
         },
         ethereum:{
            icon : "cc ETH success--text",
            name : "Ethereum",
            color : "success",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[29, 5, 26, 10, 21],
            chartBorderColor: ChartConfig.color.success,
         },
         litecoin:{
            icon : "cc LTC error--text",
            name : "Litecoin",
            color : "warn",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[1, 26, 8, 22, 1],
            chartBorderColor: ChartConfig.color.danger,
           
         },
         zcash:{
            icon : "cc ZEC-alt info--text",
            name : "Zcash",
            color : "accent",
            duration : "last 4 days",
            market_cap : "2.3",
            market_cap_icon : "fa-arrow-up",
            market_cap_color : "success-text",
            chartLabel : ["A", "B", "C", "D", "E"],
            data:[29, 5, 26, 10, 21],
            chartBorderColor: ChartConfig.color.info,
            
         }      
      }
   }
}
</script>
