<template>
	<v-menu offset-y left origin="right top" z-index="99" content-class="notification-dropdown" transition="slide-y-transition" nudge-top="-10">
		<template v-slot:activator="{ on }">
			<v-btn class="notification-icon ma-0" v-on="on" icon large >
				<!--<i class="zmdi grey--text zmdi-notifications-active animated infinite wobble zmdi-hc-fw font-lg"></i>-->
        <i id="notificationIcon" class="zmdi grey--text zmdi-notifications-active zmdi-hc-fw font-lg" @click="test" v-if="notificationDevice.length <= 0" :class="notificationDevice.length > 0 ? 'animated infinite wobble':''"></i>

			<i id="notificationIcon" class="zmdi grey--text zmdi-notifications-active zmdi-hc-fw font-lg" @click="test" v-if="notificationDevice.length > 0" :class="notificationDevice.length > 0 ? 'animated infinite wobble':''"></i>
			</v-btn>
		</template>
		<div class="dropdown-content">
			<div class="dropdown-top d-custom-flex justify-space-between primary">
				<span class="white--text fw-bold">Notifications</span>
				<span class="v-badge error">{{notificationDevice.length}} NEW</span>
			</div>
			<v-list class="dropdown-list">
				<v-list-item v-for="notification in notificationDevice" :key="notification.Id" >
					<i class="mr-3 zmdi zmdi-email error--text"></i>
					<span>{{notification.tv_id}} - {{notification.model}} - {{notification.connection_status == 0 ? 'Disconnect':'Close'}}</span>
				</v-list-item>
			</v-list>
		</div>
	</v-menu>
</template>
<style>
i.animated.infinite.wobble.zmdi-notifications-active:before{
	color: #e4002b !important;
}
i.zmdi-notifications-active:before{
	color: white !important;
}
</style>
<script>
import axios from 'axios'
//import JQuery from 'jquery'
//import Dashboard from 'Views/Dashboard.vue'


//let $ = JQuery;
	export default {
		
		data() {
			return {
				deviceList:[],
				notificationDevice: [],
				notifications: [{
						title: "message.totalAppMemory",
						icon: "zmdi-storage primary--text"
					},
					{
						title: "message.totalMemoryUsed",
						icon: "zmdi-memory warning--text"
					},
					{
						title: "message.unreadMail",
						icon: "zmdi-email error--text"
					
					},
					{
						title: "message.feedback",
						icon: "zmdi-edit success--text"
					}
				]
			};
		},
    methods: {
		test() {
			
			console.log('test');
		},
	loadData() {
			var updateData = [];
			this.unreachableDevices = 0;
			axios.get('http://192.168.10.46:5000/api/loadLcdDevices').then(resp => {
				resp.data.forEach(item=> {
					console.log('resp Connection Status : ',item.connection_status);
					
					if(item.tv_status == 0 && item.connection_status == 1) {
						updateData.push(item);
					}
					if(item.connection_status == 0) {
						updateData.push(item)
					}
					
				});
				
						
				this.deviceList = updateData
				this.notificationDevice = updateData;
				
				console.log('Data.js : ',resp.data);
				console.log(this.deviceList);
				console.log('SEND DATA LIST : ',this.notificationDevice);
			});
		}
	},
	mqtt:{
		'home/attributes/#' : function() {
			this.loadData();
		},
		'home/attributesUp/#' : function() {
			this.loadData();
		}
	},
	
	created: function(){
		this.loadData();
		this.$mqtt.subscribe('home/attributes/#',function(message){
			console.log('Message : ',message)
		})
		this.$mqtt.subscribe('home/attributesUp/#',function(message){
			console.log('Message : ',message)
		})
	},
	};
</script>
