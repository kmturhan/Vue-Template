<template>
	<div>
		<div style="display: flex;">
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					<!---->
					<div class="app-card-content">
						<div class="pa-6 white--text success d-flex flex-column">
							<div class="cross-out">
							<div class="d-custom-flex align-items-center mb-2">
								<span class="d-inline-block font-2x mr-2">
									<i class="zmdi zmdi-money-box">
										</i>
										</span>
										<span class="d-inline-block font-lg fw-bold">Revenue</span>
										</div>
										<div class="d-custom-flex align-items-center justify-space-between">
											<div class="" style="height: 80px; width: 100%; position: relative;">
												<div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand">
													<div class="">
														</div>
														</div>
														<div class="chartjs-size-monitor-shrink">
															<div class="">
																</div>
																</div>
																</div>
																<canvas id="line-chart" width="300" height="100" style="display: block; height: 80px; width: 240px;" class="chartjs-render-monitor">
																	</canvas>
																	</div>
																	</div>
																	<div class="d-custom-flex align-items-center justify-space-between flex-column">
																		<span>Total Open Tv : {{ openDevices.length }}</span>
																		<span>Total Close Tv : {{ closeDevices.length }}</span>
																		<span>
																			</span>
																			</div>
																			</div>
																			</div>
																			<!----><!---->
																			</div>
																			</div>
																			</div>
																			</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"><div class=""><div class="app-card magazine-stats-card crm-stats-card"><!----><div class="app-card-content"><div class="pa-6 white--text primary"><div class="d-custom-flex align-items-center mb-2"><span class="d-inline-block font-2x mr-2"><i class="zmdi zmdi-money-box"></i></span><span class="d-inline-block font-lg fw-bold">Revenue</span></div><div class="d-custom-flex align-items-center justify-space-between"><div class="" style="height: 80px; width: 100%; position: relative;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="line-chart" width="300" height="100" style="display: block; height: 80px; width: 240px;" class="chartjs-render-monitor"></canvas></div></div><div class="d-custom-flex align-items-center justify-space-between"><span>+ 4381</span><span>Trade :  %</span><span></span></div></div></div><!----><!----></div></div></div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"><div class=""><div class="app-card magazine-stats-card crm-stats-card"><!----><div class="app-card-content"><div class="pa-6 white--text success"><div class="d-custom-flex align-items-center mb-2"><span class="d-inline-block font-2x mr-2"><i class="zmdi zmdi-money-box"></i></span><span class="d-inline-block font-lg fw-bold">Revenue</span></div><div class="d-custom-flex align-items-center justify-space-between"><div class="" style="height: 80px; width: 100%; position: relative;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="line-chart" width="300" height="100" style="display: block; height: 80px; width: 240px;" class="chartjs-render-monitor"></canvas></div></div><div class="d-custom-flex align-items-center justify-space-between"><span>+ 4381</span><span>Trade :  %</span><span></span></div></div></div><!----><!----></div></div></div>
		
		</div>
		<v-tabs class="reports-table-tab" v-model="active" slider-color="primary">
			<v-tab class="text-capitalize" v-for="(tab,index) in tabs" :key="index" ripple>
				{{ $t('message'+'.'+tab.title) }}
			</v-tab>
			<v-tab-item v-for="n in 3" :key="n">
				<v-card flat v-if="n==1">
					<button @click="postData" ref="test">websocketPub</button>
					<br>
					<button @click="clickSub" ref="test">websocketSub</button>
					<div class="table-responsive">
						<app-section-loader :status="loader"></app-section-loader>
						<v-data-table :headers="headersForTransactionList" :items="deviceList"
							hide-default-footer>
							<template v-slot:item="{ item }">
								<tr>
									<td>{{ item.ID }}</td>
									<td class="text-nowrap">
										{{ item.Token }}
									</td>
									
									<td class="text-nowrap">{{ item.TvID }}</td>
									<td class="tvstatus">
									<v-col cols="12" sm="4" md="4" class="col-height-auto">
										{{ item.TvStatus }}
										<div v-if="item.TvStatus == 1">
											<div class="pin-ka v-input v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light v-input--selection-controls v-input--switch success--text" @click="clickPub" aria-disabled="true">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input aria-checked="true" role="switch" type="checkbox" aria-disabled="false" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00">
															<div class="v-input--selection-controls__ripple success--text"></div>
															<div class="v-input--switch__track theme--light success--text"></div>
															<div class="v-input--switch__thumb theme--light success--text"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div v-else-if="item.TvStatus == 0">
											<div class="pin-ka v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text-darken-3" @click="clickPub" aria-disabled="false">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input  aria-checked="false" id="input-486" role="switch" type="checkbox" aria-disabled="false" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
															<div class="v-input--selection-controls__ripple red--text text--darken-3"></div>
															<div class="v-input--switch__track theme--light red--text text--darken-3"></div>
															<div class="v-input--switch__thumb theme--light red--text text--darken-3"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</v-col>
									</td>
									<td>
										<div v-if="item.RemoteLock == 1">
											<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch v-input--is-label-active v-input--is-dirty success--text" @click="clickPub">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input :ref="km" class="switch-input" aria-checked="false" role="switch" type="checkbox"  aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
															<div class="v-input--selection-controls__ripple success--text"></div>
															<div class="v-input--switch__track theme--light success--text"></div>
															<div class="v-input--switch__thumb theme--light success--text"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div v-else-if="item.RemoteLock == 0 ">
											<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch " @click="clickPub">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input class="switch-input" aria-checked="false" role="switch" type="checkbox" aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
															<div class="v-input--selection-controls__ripple red--text "></div>
															<div class="v-input--switch__track theme--light red--text "></div>
															<div class="v-input--switch__thumb theme--light red--text "></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</td>
									<td data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
										<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else>
										<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
										<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else>
										<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td>{{ item.TempetureValue }}</td>
									<td>{{ item.NoSignal }}</td>
									<td>{{ item.FirmwareVersion }}</td>
									<td>{{ item.Serial_Number }}</td>
									<td>{{ item.Last_Updated }}</td>
									<td><button @click="websocketPub" :data-token="item.Token">TEST</button></td>
								</tr>
							</template>
						</v-data-table>
					</div>
				</v-card>
			</v-tab-item>
		</v-tabs>
	</div>
</template>
<style>
.v-input--selection-controls.v-input {
	margin-top: 0;
	padding-top: 0;
}
.v-input__slot {
	margin-bottom: 0;
}
.v-slider--horizontal .v-slider__track-container {
	top: 75% !important;
}
.v-slider__thumb-container {
	top: 75% !important;
	
	color: #e4002b !important;
	
}
.event-disabled {
	pointer-events: none;
}

</style>
<script>

import { tabsAndTableDetails } from 'Views/crm/data.js'
import axios from 'axios'
import JQuery from 'jquery'



let $ = JQuery

export default {
	data () {
		return {
			val: '',
			openDevices: [],
			sendDataList: [],
			closeDevices: [],
			connection: null,
			loader: false,
			invoice: [],
			deviceList: [],
			ex3: { label: "thumb-color", val: 40, color: "red" },
			gaugeValue: [],
			selector: "",
			val0: 0,
			headersForTransactionList: [
				{
					text: "ID",
					sortable: false,
					value: "transaction Id"
				},
				{
					text: "Token",
					sortable: false,
					value: "date"
				},
				{
					text: "Tv ID",
					sortable: false,
					value: "account"
				},
				{
					text: "Tv Status",
					sortable: false,
					value: "type"
				},
				{
					text: "Remote Lock",
					sortable: false,
					value: "amount"
				},
				{
					text: "Voice Value",
					sortable: false,
					value: "debit"
				},
				{
					text: "Brightness Value",
					sortable: false,
					value: "credit"
				},
				{
					text: "Tempature Value",
					sortable: false,
					value: "balance"
				},
				{
					text: "No Signal",
					sortable: false,
					value: "No Signal"
				},
				{
					text: "Firmware Version",
					sortable: false,
					value: "Firmware Version"
				},
				{
					text: "Serial Number",
					sortable: false,
					value: "Serial Number"
				},
				{
					text: "Last_Updated",
					sortable: false,
					value: "Last_Updated"
				}
        ],
        tabsAndTableDetails,
			active: null,
			tabs:[
				{
					title:"transactionList",
				}
			]
		}
	},
	mounted(){
	},
	mqtt: {
		'home/attributes/#' : function(val) {
			var test = String.fromCharCode.apply(null,val);
			var jsonData = JSON.parse(test);
			console.log(jsonData);
			var command = Object.keys(jsonData.params)[0];
			var TVID = jsonData.params[command].split(',')[0];
			var value = jsonData.params[command].split(',')[1];
			console.log('COMMAND : ',command,'TVID : ',TVID,'VALUE : ',value);
			if(command == 'km') {
				console.log(this.$el.querySelectorAll('.pin-km')[TVID-1]);
				var testTag = this.$el.querySelectorAll('.pin-km')[TVID-1];
				$(testTag).toggleClass('v-input--is-label-active v-input--is-dirty success--text').toggleClass('red--text text--darken-3');
				$(testTag).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(testTag).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(testTag).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');
			}
			if(command == 'ka'){
				var testTagka = this.$el.querySelectorAll('.pin-ka')[TVID-1];
				$(testTagka).toggleClass('v-input--is-label-active v-input--is-dirty success--text').toggleClass('red--text text--darken-3');
				$(testTagka).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(testTagka).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(testTagka).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');
			}
			if(command == 'up') {
				var testTagup = this.$el.querySelectorAll('')
			}
		},
		

	},
	methods: {
		tvStatusControl() {
			
			console.log('TV STATUS CONTROL :',$(event.currentTarget));
		},
		joinServer: function(){
			this.socket.emit('message','testMessage')
			this.socket.on('message', () => {
				console.log('message listening')
			})
		},
		test: function() {
				console.log(event.currentTarget)
				
				//$(event.currentTarget).removeClass('v-input--is-label-active v-input--is-dirty red--text text--darken-3');
				$(event.currentTarget).toggleClass('v-input--is-label-active v-input--is-dirty red--text text--darken-3');
				$(event.currentTarget).toggleClass('success')
				//console.log($(event.currentTarget).find('input').attr('aria-checked',true));
				$(event.currentTarget).find('.v-input--selection-controls__ripple').toggleClass('success');
				$(event.currentTarget).find('.v-input--switch__track').toggleClass('success');
				$(event.currentTarget).find('.v-input--switch__thumb').toggleClass('success');
		},
		clickSub: function() {
        this.$mqtt.subscribe('test')
		},
		clickPub: function() {
			/*
			*/
			setTimeout(function(){
				if(command != 'ka') {
				console.log('Red Text İçeriyor')
				//console.log($(event.currentTarget).closest('td').toggleClass('test'));
				//console.log($(event.currentTarget).closest('v-input__control'))
			}
			})
			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			var tvID = event.currentTarget.querySelector('input').getAttribute('data-tvID');
			var command = event.currentTarget.querySelector('input').getAttribute('data-pin');
		this.$mqtt.publish('home/telemetry/'+token,JSON.stringify({
			token:token,
			method:"rpcCommand",
			params: {
				tvSerial:serialNumber,
				command:command,
				tvId:tvID,
				swc: '1',
				cmd: 'gc',
				on:'01',
				off:'00'
			}}));
		console.log('TOKEN : '+token,'Serial Number : ',serialNumber,'Command : ',command,'TV ID : ',tvID)
		},	
		websocketPub: function() {
			var token = event.currentTarget.getAttribute('data-token');
			axios.post('http://localhost:5000/api/detectDevices',{ token : token,method: "getTvId"
			}).then((response,request) => {
				console.log('SUCCESS POST',response);
				console.log('SUCCESS REQUEST : ',request)
				response.end();
			}).catch((err) =>  {
				console.log(err);
			});
		},
		websocketSub: function() {
			this.$mqtt.subscribe('param/param')
		},
		next () {
			const active = parseInt(this.active)
			this.active = (active < 2 ? active + 1 : 0)
		},
		loadData() {
			this.deviceList = [];
			axios.get('http://localhost:5000/api/loadDevices').then(resp => {
				resp.data.forEach(item => {
					this.deviceList.push(item);
					this.sendDataList.push(item)
					if(item.TvStatus == 1) {
						this.openDevices.push(item)
					}else{
						this.closeDevices.push(item);
					}
				});
				console.log('Data.js : ',resp.data);
				console.log(this.deviceList)
				console.log('SEND DATA LIST : ',this.sendDataList)
				
				setInterval(() => {
				let interval = 10000; //one second
				this.sendDataList.forEach((mode, index) => {
				
				setTimeout(() => {
					console.log(mode)
					this.$mqtt.publish('home/telemetry/'+mode.Token,JSON.stringify({
						token:mode.Token,
						method:"rpcCommand",
						params: {
							tvSerial:mode.Serial_Number,
							command:'up',
							tvId:mode.TvID,
							cmd: 'gc',
							on:'01',
							off:'00'
					}}));
				}, index * interval)
				})	
				}, 60000);
				
				
				
			});
		},
		postControll() {
			var interval = 2000;
			var increment = 1;
			console.log(this.sendDataList)
			this.sendDataList.forEach(function(url) {
			var runner = setTimeout(function() {
				console.log('POST CONTROL');
				// Do your stuff.
				console.log(url);

				clearTimeout(runner);
			}, interval * increment);

			increment = increment + 1;
			});

		},
		postData() {
			console.log()
			
			$(event.currentTarget).toggleClass('v-input--is-label-active v-input--is-dirty success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');
			setTimeout(function(){
				if(command != 'ka') {
				console.log('Red Text İçeriyor')
				//console.log($(event.currentTarget).closest('td').toggleClass('test'));
				//console.log($(event.currentTarget).closest('v-input__control'))
			}
			})
			
			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			var tvID = event.currentTarget.querySelector('input').getAttribute('data-tvID');
			var command = event.currentTarget.querySelector('input').getAttribute('data-pin');

			this.$mqtt.publish('home/telemetry/'+token,{token:token,method:"rpcCommand",params: {tvSerial:serialNumber,command:command,tvId:tvID,swc: '1',cmd: 'gc',on:'01',off:'00'}});
			axios.post('http://localhost:5000/api/test',{
				token:token,
				method:"rpcCommand",
				params: {
					tvSerial:serialNumber,
					command:command,
					tvId:tvID,
					swc: '1',
					cmd: 'gc',
					on:'01',
					off:'00'
				}
			}).then((response,request) => {
				console.log('SUCCESS POST',response);
				console.log('SUCCESS REQUEST : ',request)
				response.end();
			}).catch((err) =>  {
				console.log(err);
			});
		
			
			//this.$mqtt.publish('home/telemetry/'+token,JSON.stringify({token:"mVThJflRGKgZYkZ18!hU",method:"setValueSes",params:{tvSerial:"405MAKRMK373",command:"kf",value: 20,tvId:2}}))
			//console.log('TOKEN : ',token,'serialNumber : ',serialNumber)
		},
		
		dynamicValue() {
		var test = event.currentTarget.querySelector('input');
		console.log(window.getSelection().toString())
		console.log(this.$refs.currentTarget.parent())
		//var test = document.getElementById(this.currentTarget);
		console.log(test);
		
		},
	mouseupp() {
		console.log('UPP')
		var tagName = this.selector.parentElement.parentElement.parentElement.parentElement.parentElement;
		console.log(event.currentTarget.parentElement.parentElement.parentElement)
		console.log('TAGNAME : ',tagName)
		var tvid = tagName.getAttribute('data-TvID');
		var token = tagName.getAttribute('data-token');
		var serialNumber = tagName.getAttribute('data-serial-number');
		var pin = tagName.getAttribute('data-pin');
		
		setTimeout(() => {
			console.log('UP : ',this.selector.getAttribute('value'));
			var value = this.selector.getAttribute('value');
			( async function ()  {

			
			return await axios.post('http://localhost:5000/api/test',{
				token:token,
				method:"setValueSes",
				params:{
					tvSerial:serialNumber,
					command:pin,
					value: value,
					tvId:tvid
				}
			}).then((response) => {
				
				console.log('SUCCESS POST',response)
			})
			})();
		})
	},
	mousedownn() {
		console.log('DOWNN')
		this.selector = event.currentTarget.querySelector('input');
		var test = this.selector;
		console.log('test',test.parentElement.parentElement.parentElement.parentElement.parentElement)
		console.log('DOWN : ',this.selector)
		console.log(this.val0)
	},
	
	
	
	
	},
	watch: {
		
	},
	computed: {

	},
	created: function() {
		
		this.loadData();
		this.$mqtt.subscribe('home/attributes/#',function(message){
			
			console.log('Message : ',message)
		})
		
		
		
		
		
		
			
			
		
		
					

				
			/*axios.post('http://localhost:5000/api/test',{
				token:token,
				method:"rpcCommand",
				params: {
					tvSerial:serialNumber,
					command:command,
					tvId:tvID,
					swc: '1',
					cmd: 'gc',
					on:'01',
					off:'00'
				}
			}).then((response,request) => {
				console.log('SUCCESS POST',response);
				console.log('SUCCESS REQUEST : ',request)
				response.end();
			}).catch((err) =>  {
				console.log(err);
			});*/
		
	}
}
</script>