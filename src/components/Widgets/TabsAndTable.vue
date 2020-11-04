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
								<button @click="postData" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" :checked="item.TvStatus == 1" :data-serial-number="item.Serial_Number" data-on="01" data-off="00">TEST</button>
								<tr>
									<td>{{ item.ID }}</td>
									<td class="text-nowrap">
										{{ item.Token }}
									</td>
							
									<td class="text-nowrap">{{ item.TvID }}</td>
									<td>
									<v-col cols="12" sm="4" md="4" class="col-height-auto">
										<v-switch color="red darken-3" value="red darken-3" hide-details @click="postData" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" :checked="item.TvStatus == 1" :data-serial-number="item.Serial_Number" data-on="01" data-off="00"></v-switch>
									</v-col>
									</td>
									<td>
										<v-switch color="red darken-3" value="red darken-3" hide-details @click="postData" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" :checked="item.RemoteLock == 1" :data-serial-number="item.Serial_Number" data-on="01" data-off="00"></v-switch>
									</td>
									<td role="test" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number">
										<v-slider :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number"></v-slider>
									</td>
									<td role="tsad" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number">
										<v-slider :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number"></v-slider>
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

</style>
<script>

import { tabsAndTableDetails } from 'Views/crm/data.js'

import axios from 'axios'


export default {
	data () {
		return {
			loader: false,
			invoice: [],
			deviceList: [],
			ex3: { label: "thumb-color", val: 50, color: "red" },
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

        headersForTransferReport: [
				{
					text: "Transfer Id",
					sortable: false,
					value: "transfer Id"
				},
				{
					text: "Date",
					sortable: false,
					value: "date"
				},
				{
					text: "Account",
					sortable: false,
					value: "account"
				},
				{
					text: "Type",
					sortable: false,
					value: "type"
				},
				{
					text: "Amount",
					sortable: false,
					value: "amount"
				},
				{
					text: "Balance",
					sortable: false,
					value: "balance"
            },
            {
					text: "Status",
					sortable: false,
					value: "status"
				}
        ],
        
        headersForExpenseCategory: [
				{
					text: "Item No",
					sortable: false,
               value: "item No",
				},
				{
					text: "Date",
					sortable: false,
               value: "date",
				},
				{
					text: "Type",
					sortable: false,
               value: "type",
				},
				{
					text: "Description",
					sortable: false,
					value: "description",
				},
				{
					text: "Amount",
					sortable: false,
					value: "Amount",
            },
            {
					text: "Status",
					sortable: false,
					value: "info",
				}
        ],
        tabsAndTableDetails,
			active: null,
			tabs:[
				{
					title:"transactionList",
				},
				{
					title:"transferReport",
				},
				{
					title:"expenseCategory",
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
			
			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			
			setTimeout(() => {
				
			axios.post('http://localhost:5000/api/test',{
				token:token,
				method:"rpcCommand",
				params: {
					tvSerial:serialNumber,
					command:'ka',
					value: '50',
					tvId:'2',
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
	}
	
	
	
	
	},
	watch: {
		
	},
	created: function() {
		this.loadData()
	}
}
</script>