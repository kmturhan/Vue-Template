<template>
	<div>
		<v-tabs class="reports-table-tab" v-model="active" slider-color="primary">
			<v-tab class="text-capitalize" v-for="(tab,index) in tabs" :key="index" ripple>
				{{ $t('message'+'.'+tab.title) }}
			</v-tab>
			<v-tab-item v-for="n in 3" :key="n">
				<v-card flat v-if="n==1">
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
									<td>
									<v-col cols="12" sm="4" md="4" class="col-height-auto">
										<div v-if="item.TvStatus == 1">
											<div class="v-input v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light v-input--selection-controls v-input--switch success--text" @click="postData" aria-disabled="true">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input aria-checked="true" id="input-486" role="switch" type="checkbox" aria-disabled="false" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00">
															<div class="v-input--selection-controls__ripple success--text"></div>
															<div class="v-input--switch__track theme--light success--text"></div>
															<div class="v-input--switch__thumb theme--light success--text"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div v-else-if="item.TvStatus == 0">
											<div class="v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text-darken-3" @click="postData" aria-disabled="false">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input aria-checked="false" id="input-486" role="switch" type="checkbox" aria-disabled="false" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
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
											<div class="v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch v-input--is-label-active v-input--is-dirty success--text" @click="postData">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input class="switch-input" aria-checked="false" role="switch" type="checkbox" aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
															<div class="v-input--selection-controls__ripple success--text"></div>
															<div class="v-input--switch__track theme--light success--text"></div>
															<div class="v-input--switch__thumb theme--light success--text"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div v-else-if="item.RemoteLock == 0">
											<div class="v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch" @click="postData">
												<div class="v-input__control">
													<div class="v-input__slot">
														<div class="v-input--selection-controls__input">
															<input class="switch-input" aria-checked="false" role="switch" type="checkbox" aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
															<div class="v-input--selection-controls__ripple"></div>
															<div class="v-input--switch__track theme--light"></div>
															<div class="v-input--switch__thumb theme--light"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</td>
									<td data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
										<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else :class="'v-btn--disabled'">
										<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
										<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else :class="'v-btn--disabled'">
										<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td>{{ item.TempetureValue }}</td>
									<td>{{ item.NoSignal }}</td>
									<td>{{ item.FirmwareVersion }}</td>
									<td>{{ item.Serial_Number }}</td>
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
}
.event-disabled {
	pointer-events: none;
}
</style>
<script>

	
			
		

 
</script>
<script>

import { tabsAndTableDetails } from 'Views/crm/data.js'

import axios from 'axios'
import JQuery from 'jquery'
import events from '../../views/calendar/events'
let $ = JQuery

export default {
	data () {
		return {
			
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
		'param/param' : function() {
			console.log('params');
		}		
	},
	methods: {
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
		websocketPub: function() {
			
			this.$mqtt.publish('param/param','message')
			
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
				});
				console.log('Data.js : ',resp.data);
				console.log(this.deviceList)
			});
		},
		postData() {
			$(event.currentTarget).toggleClass('v-input--is-label-active v-input--is-dirty success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');

			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			var tvID = event.currentTarget.querySelector('input').getAttribute('data-tvID');
			var command = event.currentTarget.querySelector('input').getAttribute('data-pin');
			setTimeout(() => {
				
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
			},{timeout:200}).then((response) => {
				console.log('SUCCESS POST',response)
			})
			})
		
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
			axios.post('http://localhost:5000/api/test',{
				token:token,
				method:"setValueSes",
				params:{
					tvSerial:serialNumber,
					command:pin,
					value: value,
					tvId:tvid
				}
			},{timeout:500}).then((response) => {
				
				console.log('SUCCESS POST',response)
			})
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
		this.loadData()
		
			
		
	}
}
</script>