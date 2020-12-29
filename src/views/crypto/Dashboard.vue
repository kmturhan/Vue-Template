<template>
	<div>
      <div class="container container--fluid">
         <div class="app-card" >
            <div style="display: flex;overflow-x:scroll;">
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card shadow radius">
					<!---->
						<div class="pa-6 white--text green-gradient graphDesign" v-if="openDeviceLength != 0">
							<div class="d-custom-flex align-items-center">
								<span class="font-3x mr-2 align-items-center d-custom-flex svg-background">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g>	<g>		<g>			<path d="M418.133,366.933H17.067V76.8H51.2v264.533c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V68.267     c0-4.71-3.823-8.533-8.533-8.533h-51.2C3.823,59.733,0,63.556,0,68.267v307.2C0,380.177,3.823,384,8.533,384h409.6     c4.719,0,8.533-3.823,8.533-8.533S422.852,366.933,418.133,366.933z"/>			<path d="M318.234,139.034c-3.336,3.337-3.336,8.73,0,12.066l51.2,51.2c1.664,1.664,3.849,2.5,6.033,2.5     c2.185,0,4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066l-51.2-51.2C326.963,135.697,321.57,135.697,318.234,139.034z"/>			<path d="M332.8,435.2h-68.267v-25.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v25.6H179.2     c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h153.6c4.719,0,8.533-3.823,8.533-8.533S337.519,435.2,332.8,435.2z"/>			<path d="M290.133,170.667c2.185,0,4.369-0.836,6.033-2.5c3.336-3.337,3.336-8.73,0-12.066l-8.533-8.533     c-3.337-3.336-8.73-3.336-12.066,0c-3.337,3.337-3.337,8.73,0,12.066l8.533,8.533     C285.764,169.83,287.949,170.667,290.133,170.667z"/>			<path d="M384,162.133c2.185,0,4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066L372.966,130.5     c-3.337-3.336-8.73-3.336-12.066,0c-3.336,3.337-3.336,8.73,0,12.066l17.067,17.067C379.631,161.297,381.815,162.133,384,162.133     z"/>			<path d="M503.467,59.733h-409.6c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h401.067v290.133H460.8V102.4     c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533v273.067c0,4.71,3.814,8.533,8.533,8.533h51.2     c4.719,0,8.533-3.823,8.533-8.533v-307.2C512,63.556,508.186,59.733,503.467,59.733z"/>			<path d="M309.7,193.766l42.667,42.667c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5     c3.336-3.336,3.336-8.73,0-12.066L321.766,181.7c-3.337-3.337-8.73-3.337-12.066,0C306.364,185.037,306.364,190.43,309.7,193.766     z"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
								</span>
								<span class="d-inline-block font-sm fw-bold">Total of Open Screens : {{ openDeviceLength }}</span>
							</div>
							
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold"></span>
							</div>
						</div>
						<div class="pa-6 white--text green-gradient svg-background" v-if="openDeviceLength == 0">
							<div class="graphDesign" style="height: 100%; width: 100%; position: relative; text-align:center; align-items:center; justify-content:center;display:flex;">
						<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="40"  viewBox="0 0 512 512" width="40"><path id="XMLID_1988_" d="m496.964 73.72h-481.928c-8.304 0-15.036 6.732-15.036 15.036v276.892c0 8.304 6.732 15.036 15.036 15.036h187.944v27.523h-40.564c-8.304 0-15.036 6.732-15.036 15.036s6.732 15.036 15.036 15.036h187.167c8.304 0 15.036-6.732 15.036-15.036s-6.732-15.036-15.036-15.036h-40.563v-27.523h187.944c8.304 0 15.036-6.732 15.036-15.036v-276.892c0-8.304-6.732-15.036-15.036-15.036zm-218.016 334.488h-45.896v-27.523h45.896zm202.98-57.595h-451.856v-246.82h451.856z"/></svg>
						<span class="d-inline-block font-sm fw-bold" style="margin-left:10px;">No Screen Open</span>
							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<!--<span class="fw-bold">Total Open Tv : {{openDeviceLength}}</span>-->
							</div>
						</div>
					
					<!----><!---->
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card radius shadow">
					<!---->
					
						<div class="pa-6 white--text red-gradient graphDesign" v-if="closeDeviceLength != 0">
							<div class="d-custom-flex align-items-center">
								<span class="d-flex font-3x mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 16 16" width="40" style="fill:white;"><path d="m12.3789 0h-12.3789l1 1h10.8789v9h-1.87891l1 1h1.37891c.276367 0 .5-.223633.5-.5v-10c0-.276367-.223633-.5-.5-.5z" transform="translate(3.121 1)"/><path d="m0 .707031.327698.327698c-.190491.0705566-.327698.250061-.327698.465271v10c0 .276367.223633.5.5.5h7v2h-4.5v1h10v-1h-4.5v-2h2.79297l4 4 .707031-.707031-15.293-15.293-.707031.707031zm1 10.293v-9h.292969l9 9h-9.29297z"/></svg>
								</span>
								<span class="d-flex font-sm fw-bold">Total of Closed Screens : {{ closeDeviceLength }}</span>
							<!--<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold">Cihaz Sayısı : {{ closeDeviceLength }}</span>
							</div>-->
							</div>
							
						</div>
						<div class="pa-5 white--text grey-gradient graphDesign" v-if="closeDeviceLength == 0">
							<div class="" style="height:100%; width: 100%; position: relative;text-align:center;align-items:center;justify-content:center;display:flex;">
								<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="40" style="fill:white; margin-right:10px;"  viewBox="0 0 512 512" width="40"><path id="XMLID_1988_" d="m496.964 73.72h-481.928c-8.304 0-15.036 6.732-15.036 15.036v276.892c0 8.304 6.732 15.036 15.036 15.036h187.944v27.523h-40.564c-8.304 0-15.036 6.732-15.036 15.036s6.732 15.036 15.036 15.036h187.167c8.304 0 15.036-6.732 15.036-15.036s-6.732-15.036-15.036-15.036h-40.563v-27.523h187.944c8.304 0 15.036-6.732 15.036-15.036v-276.892c0-8.304-6.732-15.036-15.036-15.036zm-218.016 334.488h-45.896v-27.523h45.896zm202.98-57.595h-451.856v-246.82h451.856z"/></svg>
                        <span class="d-inline-block font-sm fw-bold">No Closed Screen</span>
							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold"></span>
							</div>
						</div>
					
					<!----><!---->
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card radius shadow">
					<!---->
						<div class="pa-6 white--text red-gradient graphDesign">
							<div class="d-custom-flex align-items-center">
								<span class="d-inline-block font-3x mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px"  viewBox="0 0 480 480" style="fill:white;enable-background:new 0 0 480 480;" xml:space="preserve"><g>	<g>		<path d="M472,168H8c-4.418,0-8,3.582-8,8v256c0,4.418,3.582,8,8,8h160v16h-32c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8h208    c4.418,0,8-3.582,8-8c0-4.418-3.582-8-8-8h-24v-16h152c4.418,0,8-3.582,8-8V176C480,171.582,476.418,168,472,168z M304,456H184    v-16h120V456z M464,424H16V184h448V424z"/>	</g></g><g>	<g>		<rect x="320" y="392" width="80" height="16"/>	</g></g><g>	<g>		<rect x="416" y="392" width="16" height="16"/>	</g></g><g>	<g>		<path d="M341.656,50.112C285.522-6.031,194.503-6.038,138.36,50.096c-0.005,0.005-0.011,0.011-0.016,0.016    c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c49.891-49.896,130.784-49.899,180.68-0.008    c0.003,0.003,0.005,0.005,0.008,0.008c1.5,1.5,3.534,2.344,5.656,2.344c4.418-0.001,7.999-3.583,7.998-8.002    C343.998,53.646,343.155,51.612,341.656,50.112z"/>	</g></g><g>	<g>		<path d="M317.656,74.112c-42.883-42.888-112.415-42.892-155.303-0.009c-0.003,0.003-0.006,0.006-0.009,0.009    c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c36.664-36.584,96.024-36.584,132.688,0    c1.5,1.5,3.534,2.344,5.656,2.344c4.418-0.001,7.999-3.583,7.998-8.002C319.998,77.646,319.155,75.612,317.656,74.112z"/>	</g></g><g>	<g>		<path d="M293.656,98.112c-29.62-29.633-77.654-29.644-107.288-0.024c-0.008,0.008-0.016,0.016-0.024,0.024    c-3.069,3.178-2.981,8.243,0.197,11.312c3.1,2.994,8.015,2.994,11.115,0c23.377-23.386,61.286-23.393,84.672-0.016    c0.005,0.005,0.011,0.011,0.016,0.016c1.5,1.5,3.534,2.344,5.656,2.344c4.418-0.001,7.999-3.583,7.998-8.002    C295.998,101.646,295.155,99.612,293.656,98.112z"/>	</g></g><g>	<g>		<path d="M269.656,122.344c-16.39-16.35-42.922-16.35-59.312,0c-3.069,3.178-2.981,8.243,0.197,11.312    c3.1,2.994,8.015,2.994,11.115,0c10.139-10.113,26.549-10.113,36.688,0c3.178,3.069,8.242,2.982,11.312-0.196    C272.65,130.359,272.65,125.444,269.656,122.344z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
								</span>
								<span class="d-flex font-sm fw-bold justify-center" style="width:100%;">Unreachable Devices : {{unreachableDeviceLenght}}</span>
							</div>
						</div>
					<!----><!---->
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card shadow radius">
					<!---->
						<div class="pa-6 white--text red-gradient graphDesign">
							<div class="d-custom-flex align-items-center">
								<span class="d-inline-block font-3x mr-2">
									<i class="zmdi zmdi-money-box"></i>
								</span>
								<span class="d-flex font-sm fw-bold justify-center" style="width:100%;">DVI Disconnect : {{ noSignalDeviceLength }}</span>
							</div>
						
						<div class="d-custom-flex align-items-center justify-space-between">
						<div class="" style="height: 80px; width: 100%; position: relative;">
				</div>
			</div>
		</div><!----><!----></div>
	</div>
</div>
		
		</div>

         </div>
      </div>
      
	</div>
</template>
<style>
::-webkit-scrollbar {
    width: 0;
    background: transparent;
    height: 0;
}
.svg-background {
	
	z-index: 8;
	
}
.svg-background svg {
	height: 40px;
	width: 40px;
	fill: white;
	z-index: 9;
	
}
.graphDesign {
   height:90px; 
   display:flex;
   cursor: pointer;
}
.shadow {
   box-shadow: 0px 0px 10px 0px;

}
.radius {
   border-radius: 10px;
}
.red-gradient {
   background: rgb(228,0,43);
   background: linear-gradient(172deg, rgba(228,0,43,1) 27%, rgba(0,0,0,.9) 120%)
}
.green-gradient {
   background: rgb(50,205,50);
   background: linear-gradient(172deg, rgb(20 121 20) 27%, rgb(230 233 236) 175%)

/*background: rgb(40,164,40);
background: linear-gradient(172deg, rgba(40,164,40,1) 27%, rgba(0,0,0,.9) 100%);
*/}

.grey-gradient {
background: rgb(70,77,105);
background: linear-gradient(172deg, rgb(70 77 105) 27%, rgb(0 0 0) 175%)
}
</style>
<script>
import axios from 'axios';
export default {
   components:{
      //LineChartV3,
      //StatsCardV6
   },
   mqtt: {
		'home/attribute/led_novastar/#' : function(val) {this.loadData();
			var test = String.fromCharCode.apply(null,val);
			var jsonData = JSON.parse(test);
			console.log(jsonData);
      var openDev = 0;
      var closeDev = 0;
      var unreacheableDev = 0;
			var db = this.deviceList;
			
			var i;
			
			for (i = 0; i < db.length; i++) {
				if(db[i].dvi_status == 1 && db[i].connection_status == 1){
					openDev++;
				}else if(db[i].dvi_status == 0 && db[i].connection_status == 1){
					closeDev++;
				}
				if(db[i].connection_status == 0) {
					unreacheableDev++;
				}
				if(db[i].dvi_status == 0 && db[i].connection_status == 1) {
					this.noSignal++;
				}
			}
			console.log('OPEN CLOSE : ',this.openDev,this.closeDev)
			this.closeDeviceLength = closeDev;
			this.openDeviceLength = openDev;
      this.unreachableDeviceLenght = unreacheableDev;
			//if((this.closeDev + this.openDev) == this.totalDeviceLength) {
				
				
				
			//}
    },
   },
   data() {
    return {
      openDeviceLength: 0,
		closeDeviceLength: 0,
		noSignalDeviceLength: 0,
		totalDeviceLength: 0,
		unreachableDeviceLenght: 0,
		noSignal: 0,
		closeDev: 0,
		openDev: 0,
		open: 0,
		close:0,
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
         viewer : this.openDevice,

         chartLabel : ['A', 'B', 'C', 'D', 'E'],
         label:"Visitors",
         bgColor:"primary",
         chartData : [30, 5, 26,10,30],
         openDevice: this.openDevice,
         closeDevice: this.closeDevice
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
         chartData : [ 30, 5, 26,10, 30 ]
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
    }
   },
  
   methods: {
      loadData() {
			this.unreachableDeviceLenght = 0;
			var openDev = 0;
			var closeDev = 0;
			var unreachableDev = 0;
			var dviSignalDev = 0;
			var updatedData = [];
			axios.get('http://192.168.10.30:5000/api/loadLedDevices').then(resp => {
				this.deviceList = resp.data;
        
			updatedData = this.deviceList;
      updatedData.forEach(item => {
        if(item.dvi_status == 1 && item.connection_status == 1) {
          openDev++;
        }
        if(item.dvi_status == 0 && item.connection_status == 1){
          closeDev++;
        }
        if(item.dvi_status == 1 && item.connection_status == 1) {
          dviSignalDev++;
        }
        if(item.connection_status == 0) {
          unreachableDev++;
        }
      })
      this.unreachableDeviceLenght = unreachableDev;
      this.openDeviceLength = openDev;
      this.closeDeviceLength = closeDev;
      this.noSignalDeviceLength = dviSignalDev;
			this.totalDeviceLength = this.deviceList.length;
		})
	},
},
   created() {
        this.loadData();
        this.$mqtt.subscribe('home/attributes/#',function(message){
           console.log('Message : ',message)
			})
			this.$mqtt.subscribe('home/attributesUp/#',function(message){
				console.log('Message : ',message)
			});

   },
   }

</script>