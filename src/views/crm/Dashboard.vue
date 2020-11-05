<template>
	<div>
      <page-title-bar></page-title-bar>
      <v-container fluid class="grid-list-xl pt-0">
         <v-row class="border-rad-sm overflow-hidden crm-stats-card-wrap">
            <stats-card-v6
               class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
               :title="visitors.title"
               :viewer="visitors.viewer"
               :icon= "visitors.icon"
               :trade="visitors.trade"
               :bgColor="visitors.card_color"
              >
					
						<line-chart-v3
							:label="visitors.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
							:dataSet= "visitors.chartData"
							:labels="visitors.chartLabel"
						></line-chart-v3>
					
				</stats-card-v6>
            <stats-card-v6
               class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
               :title="revenue.title"
               :viewer="revenue.viewer"
               :trade="revenue.trade"
               :icon= "revenue.icon"
               :bgColor="revenue.card_color"
              >
               
                  <line-chart-v3
                     :label="revenue.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :dataSet= "revenue.chartData"
                     :labels="revenue.chartLabel"
                  ></line-chart-v3>
               
            </stats-card-v6>
            <stats-card-v6
               class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
               :title="sales.title"
               :viewer="sales.viewer"
               :trade="sales.trade"
               :icon= "sales.icon"
               :bgColor="sales.card_color"
              >
                  <line-chart-v3
                     :label="sales.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :dataSet= "sales.chartData"
                     :labels="sales.chartLabel"
                  ></line-chart-v3>
               
            </stats-card-v6>
            <stats-card-v6
               class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
               :title="deals.title"
               :viewer="deals.viewer"
               :trade="deals.trade"
               :icon= "deals.icon"
               :bgColor="deals.card_color"
              >
               
                  <line-chart-v3
                     :label="deals.label"
                     :style="{height: '80px',width:'100%', position: 'relative'}"
                     :dataSet= "deals.chartData"
                     :labels="deals.chartLabel"
                  ></line-chart-v3>
               
            </stats-card-v6>
         </v-row>
         

			

         

         <v-row>
            <app-card
					colClasses="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
					customClasses="mb-0"
				>
            <tabs-and-table></tabs-and-table>
				</app-card>
         </v-row>

		</v-container>
	</div>
</template>
<script>

import TabsAndTable from 'Components/Widgets/TabsAndTable'
import LineChartV3 from "Components/Charts/LineChartV3";
import StatsCardV6 from "Components/StatsCardV6/StatsCardV6";
export default {
   components:{
      TabsAndTable,
      LineChartV3,
      StatsCardV6
   },
   data() {
    return {
      blog: {
        id: 3,
        thumbnail: "/static/img/blog-3.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      },
      visitors:{
         card_color : "primary",
         icon : "zmdi zmdi-account-add",
         title : "Visitors",
         viewer : "+ 41",
         trade : "30",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Visitors",
         bgColor:"primary",
         chartData : [30, 5, 26,10,30]
      },
      revenue:{
         card_color : "success",
         icon : "zmdi zmdi-money-box",
         title : "Revenue",
         viewer : "+ 4381",
         trade : "60",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Revenue",
         chartData : [1, 26, 8,22,1]
      },
      sales: {
         card_color : "warning",
         icon : "zmdi zmdi-shopping-cart",
         title : "Sales",
         viewer : "+ 2611",
         trade : "80",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Sales",
         chartData : [ 30, 5, 26,10,30 ]
      },
      deals: {
         card_color : "error",
         icon : "ti-thumb-up",
         title : "Deals",
         viewer : "+ 611",
         trade : "40",
         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Deals",
         chartData : [1, 26, 8,22,1]
      }
    };
  }
 
};
</script>
