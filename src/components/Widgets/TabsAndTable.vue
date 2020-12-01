<template>

	<div>
		<!--<div style="display: flex;">
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card" style="position: relative;">
			
					<div class="open-close-tv-overlay">
							<div class="open-tv-background"></div>
							<div class="close-tv-background"></div>
						</div>
					<div class="app-card-content">
						<div class="close-tv-content danger">
							<span class="d-inline-block font-lg fw-bold white--text">KAPALI</span>
							<span class="white--text">Total Close Tv : {{ closeDeviceLength }}</span>
						</div>
						<div class="open-tv-content">
							<span class="d-inline-block font-lg fw-bold white--text">AÇIK</span>
							<span class="white--text">Total Open Tv : {{ openDeviceLength }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					
					<div class="app-card-content" style="height:100%;">
						<div class="pa-6 white--text success" v-if="openDeviceLength != 0">
							<div class="d-custom-flex align-items-center mb-2">
								<span class="d-inline-block font-3x mr-2">
									<i class="zmdi zmdi-money-box"></i>
								</span>
								<span class="d-inline-block font-lg fw-bold">AÇIK</span>
							</div>
							<div class="" style="height: 80px; width: 100%; position: relative;">

							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold">Total Open Tv : {{openDeviceLength}}</span>
							</div>
						</div>
						<div class="pa-6 white--text grey" style="height:100%;" v-if="openDeviceLength == 0">
							
							<div class="" style="height: 100%; width: 100%; position: relative; text-align:center; align-items:center; justify-content:center;display:flex;">
								<span>Açık Cihaz Yoktur</span>
							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold">Total Open Tv : {{openDeviceLength}}</span>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					
					<div class="app-card-content" style="height:100%;">
						<div class="pa-6 white--text error" v-if="closeDeviceLength != 0">
							<div class="d-custom-flex align-items-center mb-2">
								<span class="d-inline-block font-3x mr-2">
									<i class="zmdi zmdi-money-box"></i>
								</span>
								<span class="d-inline-block font-lg fw-bold">KAPALI</span>
							</div>
							<div class="" style="height: 80px; width: 100%; position: relative;">

							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold">Cihaz Sayısı : {{ closeDeviceLength }}</span>
							</div>
						</div>
						<div class="pa-6 white--text grey" style="height:100%;" v-if="closeDeviceLength == 0">
							<div class="" style="height: 100%; width: 100%; position: relative;text-align:center;align-items:center;justify-content:center;display:flex;">
								<span>Kapalı Cihaz Yoktur</span>
							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold"></span>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					
					<div class="app-card-content">
						<div class="pa-6 white--text error">
							<div class="d-custom-flex align-items-center mb-2">
								<span class="d-inline-block font-3x mr-2">
									<i class="zmdi zmdi-money-box"></i>
								</span>
								<span class="d-inline-block font-lg fw-bold">Ulaşılamayan Cihazlar</span>
							</div>
							<div class="" style="height: 80px; width: 100%; position: relative;">

							</div>
							<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold">Cihaz Sayısı : 0</span>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card ">
					
					<div class="app-card-content">
						<div class="pa-6 white--text error">
							<div class="d-custom-flex align-items-center mb-2">
								<span class="d-inline-block font-3x mr-2">
									<i class="zmdi zmdi-money-box"></i>
								</span>
								<span class="d-inline-block font-lg fw-bold">NO SIGNAL</span>
							</div>
						
						<div class="d-custom-flex align-items-center justify-space-between">
						<div class="" style="height: 80px; width: 100%; position: relative;">

					</div>
				</div>
				<div class="d-custom-flex align-items-center justify-space-between">
					<span class="fw-bold">Cihaz Sayısı : {{ this.noSignalDeviceLength}}</span>
				</div>
			</div>
		</div></div>
	</div>
</div>
		
		</div>-->
		
		<div class="table-responsive">
			<!--<button @click="clickSub">attributesUp</button><br><br>-->
			<!--<button class="mx-4 my-4 v-btn v-btn--contained theme--light v-size--small primary" @click="overlayOpen">Filter</button>-->
			<div class="v-overlay theme--light" style="z-index: 99;display:none;">
				<div class="v-overlay__scrim" style="opacity: 0.5; background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);" @click="overlayClose">
				
				</div>
				<div class="filter-overlay" style="width:100vh;height:400px;background-color:white;z-index:999;position: relative;">
					<i class="ti-close" style="cursor:pointer;color:black !important;position:absolute;right:10px;top:10px;" @click="overlayClose"></i>
		
					<app-card colClasses="col-12 col-md-12 mt-5" style="flex-wrap:wrap;height:340px">
						
						<!--<p>{{ name1 }}</p>-->
						<v-checkbox color="primary" label="Select Input" v-model="name1" value="Select Input" data-pin="xb" data-type="dropdown" data-options-key="20,40,60,70,80,90,A0,91,A1,92,A2,95,A5,98,A8,C0,D0,E0,E1,E2" data-options-value="AV,COMPONENT,RGB,DVI-D (PC),DVI-D (DTV),HDMI1 (DTV),HDMI1 (PC),HDMI2/OPS (DTV), HDMI2/OPS (PC),OPS/HDMI3/DVI-D (DTV),OPS/HDMI3/DVI-D (PC),OPS/DVI-D (DTV),OPS/DVI-D (PC),OPS (DTV),OPS (PC),DISPLAYPORT (DTV),DISPLAYPORT (PC),SuperSign webOS Player,Others,Multi Screen"></v-checkbox>
						<v-checkbox color="primary" label="Mute" v-model="name1" value="Mute" 					data-pin="ke" data-type="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
						<v-checkbox color="primary" label="Aspect Ratio" v-model="name1" value="Aspect Ratio"  data-pin="kc" data-type="dropdown" data-options-key="01,02,04,06,09,10,21" data-options-value="4:3,16:9,Zoom,Set By Program,Just Scan (720p or higher),Cinema Zoom 1 to 16,58:9,Vertical Zoom,All-Direction Zoom"></v-checkbox>
						<v-checkbox color="primary" label="Energy Saving" v-model="name1" value="Energy Saving"  data-pin="jq" data-type="dropdown" data-options-key="00,01,02,03,04,05" data-options-value="Off,Minimum,Medium,Maximum,Automatic,Screen Off"></v-checkbox>
						<v-checkbox color="primary" label="Picture Mode" v-model="name1" value="Picture Mode"  data-pin="dx" data-type="dropdown" data-options-key="00,01,02,03,04,05,06,08,09,10,11" data-options-value="Vivid,Standard,Cinema,Sports,Game,Expert 1,Expert 2,APS,Photos,Touch,Calibration"></v-checkbox>
						<v-checkbox color="primary" label="Sound Mode" v-model="name1" value="Sound Mode"  data-pin="dy" data-type="dropdown" data-options-key="01,02,03,04,05,07" data-options-value="Standard,Music,Cinema,Sports,Game,News(Clear Voice III)"></v-checkbox>
						<v-checkbox color="primary" label="Energy Saving" v-model="name1" value="Energy Saving"  data-pin="jq" data-type="dropdown" data-options-key="00,01,02,03,04,05" data-options-value="Off,Minimum,Medium,Maximum,Automatic,Screen Off"></v-checkbox>						
						<v-checkbox color="primary" label="Off Time Schedule" v-model="name1" value="Off Time Schedule" data-pin="fc" data-type="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
						<v-checkbox color="primary" label="On Time Schedule" v-model="name1" value="On Time Schedule" data-pin="fb" data-type="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
						<v-checkbox color="primary" label="On Timer Input" v-model="name1" value="On Timer Input"  data-pin="fu" data-type="dropdown" data-options-key="40,60,70,90,91,92,95,98,D0" data-options-value="COMPONENT,RGB,DVI-D,HDMI1,HDMI2/OPS,OPS/DVI-D,OPS/DVI-D,OPS,DISPLAYPORT"></v-checkbox>						
						<v-checkbox color="primary" label="No Signal Power Off (15 Min)" v-model="name1" value="No Signal Power Off (15 Min)" data-pin="fg" data-type="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
						<v-checkbox color="primary" label="Auto Power Off (4 Hours)" v-model="name1" value="Auto Power Off (4 Hours)" data-pin="mn" data-type="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
						<v-checkbox color="primary" label="Language" v-model="name1" value="Language"  data-pin="fi" data-type="dropdown" data-options-key="00,01,02,03,04,05,06,07,08,09,0A,0B,0C,0D,0E,0F,10,11,12" data-options-value="Czech,Danish,German,English,Spanish (Europe),Greek,French,Italian,Dutch,Norwegian,Portuguese,Portuguese (Brazil),Russian,Finnish,Swedish,Korean,Chinese (Mandarin),Japanese,Chinese (Cantonese)"></v-checkbox>						
						
						
					</app-card>
					<button @click="detectType" class="ml-5 fw-bold" >Select</button>
				</div>
			</div>
			<app-section-loader :status="loader"></app-section-loader>
			<v-data-table :headers="headersForTransactionList" :items="deviceList"
				hide-default-footer>
				<template v-slot:item="{ item }">
					<tr v-bind:style="item.TvStatus ? 0 : 'pointer-events:none'">
						<td class="text-nowrap">{{ item.TvID }}</td>
						<td>{{ item.Brand }}</td>
						<td>{{ item.Model_Number}}</td>
						<td class="tvstatus" v-bind:style="item.TvStatus ? 0 : 'pointer-events:auto'">
						<v-col cols="12" sm="4" md="4" class="col-height-auto">
							<div v-if="item.TvStatus == 1">
								<div class="pin-ka v-input v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light v-input--selection-controls v-input--switch success--text" @click="clickPub" aria-disabled="true">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input aria-checked="true" role="switch" type="checkbox" aria-disabled="false" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00">
												<div class="v-input--selection-controls__ripple success--text"></div>
												<div class="v-input--switch__track theme--light success--text">
													<span class="open-switch-text">On</span>
												</div>
												<div class="v-input--switch__thumb theme--light success--text">
													<svg version="1.1" id="Layer_1" class="tv-status-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" width="20px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M256.026,0c-24.816,0-45.004,20.188-45.004,45.004v181.016c0,24.816,20.188,45.004,45.004,45.004s45.004-20.188,45.004-45.004V45.004C301.03,20.188,280.842,0,256.026,0z"/>	</g></g><g>	<g>		<path d="M406.625,118.959c-18.939-17.083-46.502-15.14-63.041,1.873c-16.632,17.109-17.917,46.086,3.153,65.296			c33.44,30.395,50.343,76.459,42.336,122.928c-10.868,63.067-65.717,112.767-133.05,112.915			c-68.971,0.152-121.809-50.77-132.708-110.617c-8.497-46.747,7.179-93.553,41.972-125.197c21.01-19.127,19.913-48.232,3.234-65.36			c-16.567-17.013-44.295-18.851-63.4-1.56c-52.909,47.923-80.527,118.769-72.843,190.58C44.496,423.995,140.9,512,256.553,512			c114.326,0,207.934-88.216,222.368-194.743C488.985,243.027,461.957,168.899,406.625,118.959z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-else-if="item.TvStatus == 0">
								
								<div class="pin-ka v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text--darken-3" @click="clickPub" aria-disabled="false">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input  aria-checked="false" id="input-486" role="switch" type="checkbox" aria-disabled="false"  data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
												<div class="v-input--selection-controls__ripple red--text text--darken-3"></div>
												<div class="v-input--switch__track theme--light red--text text--darken-3">
													<span class="close-switch-text">Off</span>
												</div>
												<div class="v-input--switch__thumb theme--light red--text text--darken-3">
													<svg version="1.1" id="Layer_1" class="tv-close-svg tv-status-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" width="20px" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M256.026,0c-24.816,0-45.004,20.188-45.004,45.004v181.016c0,24.816,20.188,45.004,45.004,45.004s45.004-20.188,45.004-45.004V45.004C301.03,20.188,280.842,0,256.026,0z"/>	</g></g><g>	<g>		<path d="M406.625,118.959c-18.939-17.083-46.502-15.14-63.041,1.873c-16.632,17.109-17.917,46.086,3.153,65.296			c33.44,30.395,50.343,76.459,42.336,122.928c-10.868,63.067-65.717,112.767-133.05,112.915			c-68.971,0.152-121.809-50.77-132.708-110.617c-8.497-46.747,7.179-93.553,41.972-125.197c21.01-19.127,19.913-48.232,3.234-65.36			c-16.567-17.013-44.295-18.851-63.4-1.56c-52.909,47.923-80.527,118.769-72.843,190.58C44.496,423.995,140.9,512,256.553,512			c114.326,0,207.934-88.216,222.368-194.743C488.985,243.027,461.957,168.899,406.625,118.959z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
												</div>
													
											</div>
										</div>
									</div>
								</div>
							</div>
						</v-col>
						</td>
						<td v-bind:style="item.TvStatus ? 0:'opacity:.1;pointer-events:none;'">
							<div v-if="item.RemoteLock == 1">
								<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch v-input--is-label-active v-input--is-dirty success--text" @click="clickPub">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input class="switch-input" aria-checked="false" role="switch" type="checkbox"  aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
												<div class="v-input--selection-controls__ripple success--text"></div>
												<div class="v-input--switch__track theme--light success--text">
													<span class="open-switch-text">On</span>
												</div>
												<div class="v-input--switch__thumb theme--light success--text">
													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="tv-open-svg tv-status-svg" style="transform:rotate(45deg);" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 470.363 470.363" xml:space="preserve"><g>	<g>		<g>			<path d="M331.353,40.469c-0.192-0.21-0.394-0.411-0.603-0.603c-53.004-53.091-139.011-53.163-192.102-0.159     c-0.053,0.053-0.106,0.106-0.159,0.159c-3.462,4.617-2.527,11.166,2.09,14.629c3.715,2.786,8.824,2.786,12.539,0     c45.058-44.902,117.946-44.902,163.004,0c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603     C334.789,50.788,335.059,44.508,331.353,40.469z"/>			<path d="M197.003,94.722c0.792-0.594,1.496-1.298,2.09-2.09c19.54-19.322,50.99-19.322,70.531,0     c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603c4.04-3.706,4.31-9.986,0.603-14.025     c-0.192-0.21-0.394-0.411-0.603-0.603c-27.532-27.556-72.19-27.575-99.745-0.042c-0.014,0.014-0.028,0.028-0.042,0.042     c-4.617,3.462-5.552,10.012-2.09,14.629C185.837,97.249,192.386,98.185,197.003,94.722z"/>			<path d="M293.656,141.22H176.105c-16.986,0.836-30.323,14.863-30.302,31.869v268.016c0.563,16.326,13.966,29.267,30.302,29.257     h117.029c16.336,0.01,29.739-12.931,30.302-29.257V173.09C323.472,156.274,310.436,142.323,293.656,141.22z M213.721,352.812     c0,5.771-4.678,10.449-10.449,10.449s-10.449-4.678-10.449-10.449v-14.629c0-5.771,4.678-10.449,10.449-10.449     s10.449,4.678,10.449,10.449V352.812z M213.721,285.416c0,5.771-4.678,10.449-10.449,10.449s-10.449-4.678-10.449-10.449V271.31     c0-5.771,4.678-10.449,10.449-10.449s10.449,4.678,10.449,10.449V285.416z M213.721,218.543c0,5.771-4.678,10.449-10.449,10.449     s-10.449-4.678-10.449-10.449v-14.629c0-5.771,4.678-10.449,10.449-10.449s10.449,4.678,10.449,10.449V218.543z M271.19,352.812     c0,5.771-4.678,10.449-10.449,10.449c-5.771,0-10.449-4.678-10.449-10.449v-14.629c0-5.771,4.678-10.449,10.449-10.449     c5.771,0,10.449,4.678,10.449,10.449V352.812z M271.19,285.416c0,5.771-4.678,10.449-10.449,10.449     c-5.771,0-10.449-4.678-10.449-10.449V271.31c0-5.771,4.678-10.449,10.449-10.449c5.771,0,10.449,4.678,10.449,10.449V285.416z      M271.19,218.543c0,5.771-4.678,10.449-10.449,10.449c-5.771,0-10.449-4.678-10.449-10.449v-14.629     c0-5.771,4.678-10.449,10.449-10.449c5.771,0,10.449,4.678,10.449,10.449V218.543z"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div v-else-if="item.RemoteLock == 0">
								<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch " @click="clickPub">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input class="switch-input" aria-checked="false" role="switch" type="checkbox"   aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
												<div class="v-input--selection-controls__ripple red--text text--darken-3"></div>
												<div class="v-input--switch__track theme--light red--text text--darken-3">
													<span class="close-switch-text">Off</span>
												</div>
												<div class="v-input--switch__thumb theme--light red--text text--darken-3">
													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="tv-close-svg tv-status-svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 470.363 470.363" style="transform: rotate(45deg);" xml:space="preserve"><g>	<g>		<g>			<path d="M331.353,40.469c-0.192-0.21-0.394-0.411-0.603-0.603c-53.004-53.091-139.011-53.163-192.102-0.159     c-0.053,0.053-0.106,0.106-0.159,0.159c-3.462,4.617-2.527,11.166,2.09,14.629c3.715,2.786,8.824,2.786,12.539,0     c45.058-44.902,117.946-44.902,163.004,0c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603     C334.789,50.788,335.059,44.508,331.353,40.469z"/>			<path d="M197.003,94.722c0.792-0.594,1.496-1.298,2.09-2.09c19.54-19.322,50.99-19.322,70.531,0     c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603c4.04-3.706,4.31-9.986,0.603-14.025     c-0.192-0.21-0.394-0.411-0.603-0.603c-27.532-27.556-72.19-27.575-99.745-0.042c-0.014,0.014-0.028,0.028-0.042,0.042     c-4.617,3.462-5.552,10.012-2.09,14.629C185.837,97.249,192.386,98.185,197.003,94.722z"/>			<path d="M293.656,141.22H176.105c-16.986,0.836-30.323,14.863-30.302,31.869v268.016c0.563,16.326,13.966,29.267,30.302,29.257     h117.029c16.336,0.01,29.739-12.931,30.302-29.257V173.09C323.472,156.274,310.436,142.323,293.656,141.22z M213.721,352.812     c0,5.771-4.678,10.449-10.449,10.449s-10.449-4.678-10.449-10.449v-14.629c0-5.771,4.678-10.449,10.449-10.449     s10.449,4.678,10.449,10.449V352.812z M213.721,285.416c0,5.771-4.678,10.449-10.449,10.449s-10.449-4.678-10.449-10.449V271.31     c0-5.771,4.678-10.449,10.449-10.449s10.449,4.678,10.449,10.449V285.416z M213.721,218.543c0,5.771-4.678,10.449-10.449,10.449     s-10.449-4.678-10.449-10.449v-14.629c0-5.771,4.678-10.449,10.449-10.449s10.449,4.678,10.449,10.449V218.543z M271.19,352.812     c0,5.771-4.678,10.449-10.449,10.449c-5.771,0-10.449-4.678-10.449-10.449v-14.629c0-5.771,4.678-10.449,10.449-10.449     c5.771,0,10.449,4.678,10.449,10.449V352.812z M271.19,285.416c0,5.771-4.678,10.449-10.449,10.449     c-5.771,0-10.449-4.678-10.449-10.449V271.31c0-5.771,4.678-10.449,10.449-10.449c5.771,0,10.449,4.678,10.449,10.449V285.416z      M271.19,218.543c0,5.771-4.678,10.449-10.449,10.449c-5.771,0-10.449-4.678-10.449-10.449v-14.629     c0-5.771,4.678-10.449,10.449-10.449c5.771,0,10.449,4.678,10.449,10.449V218.543z"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</td>
						<td class="pin-kf" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
							<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td class="pin-kf" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else style="opacity:.1;pointer-events:none;">
							<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td class="pin-kh" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
							<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td class="pin-kh" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else style="opacity:.1;pointer-events:none;">
							<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td>{{ item.TempetureValue }} °C</td>
						<td>{{ item.NoSignal }}</td>
						<td>{{ item.FirmwareVersion }}</td>
						<td>{{ item.Serial_Number }}</td>
						<td>{{ item.Last_Update }}</td>
						
						<td v-for="filter in filterAttributes" :key="filter.fieldPin">
							<select v-if="filter.fieldType == 'dropdown'" style="width:100%;border:1px solid black;border-radius:5px;" @change="selectSendData" :data-pin="filter.fieldPin" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number">
								<option v-for="(value, index) in filter.fieldKey" v-bind:key="value" :value="value">{{filter.fieldValue[index]}}</option>
							</select>
							<div v-if="filter.fieldType == 'switch'" class="v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text--darken-3" @click="clickPub" :data-pin="filter.fieldPin" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false">
								<div class="v-input__control">
									<div class="v-input__slot">
										<div class="v-input--selection-controls__input">
											<input  aria-checked="false" id="input-486" role="switch" type="checkbox" aria-disabled="false"  :data-pin="filter.fieldPin" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" checked="checked" value="red darken-3">
											<div class="v-input--selection-controls__ripple red--text text--darken-3"></div>
											<div class="v-input--switch__track theme--light red--text text--darken-3">
												<span class="close-switch-text">Off</span>
											</div>
											<div class="v-input--switch__thumb theme--light red--text text--darken-3"></div>
										</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
				</template>
			</v-data-table>
		</div>
	</div>
</template>
<style>

.app-card-content{
	height:340px;
	overflow-y: scroll;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row) {
	text-align: center !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
	text-align: center !important;
}
.tvstatus {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}
.v-application .text-start {
	text-align: center !important;
	font-weight: bold;
}
.tv-status-svg {
	height: 20px;
	width: 20px;
	position: absolute;
	z-index: 6;
	
	top: 3px;
	fill:white;
	transition: all .3s ease;
}
.tv-close-svg {
	right: 4px;
}
.tv-status-close {
	fill: #F44336 !important;
}
.tv-status-open {
	fill: #0f9c0e !important;
}
.v-slider.v-slider--horizontal.theme--dark .primary {
	background-color: lightgray !important;
}

.v-slider {
	cursor: pointer !important;
}
.v-input--switch__track {
	height: 20px;
	width: 55px;
}
.v-application .red {
	background-color: #e4002b !important;
	border-color: #e4002b !important;
}
.v-slider--horizontal .v-slider__track-container {
	height: 4px !important;
}
.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple, .v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb {
	transform: translate(34px,0);
}

.v-input--switch__thumb {
	height: 27px;
	width: 27px;
	right: -2px;
}
.v-input--selection-controls__ripple{
	width: 36px;
	height: 36px;
	left: -9px !important;
	top: calc(50% - 21px) !important;
}
.v-input--selection-controls.v-input {
	margin-top: 0;
	padding-top: 0;
}
.v-input__slot {
	margin-bottom: 0;
	left: -10px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.v-slider--horizontal .v-slider__track-container {
	top: 75% !important;
	height: 4px;
}
.v-slider__thumb {
	width: 15px !important;
	height: 15px !important;
}
.v-slider__thumb:before {
	left: -11px !important;
	top: -11px !important;
}
.v-slider__thumb-container {
	top: 75% !important;	
	color: #e4002b !important;
	
}
.event-disabled {
	pointer-events: none;
}
.open-tv-background {
	width: 0;
	height: 0;
	position: absolute;
	border-style: solid;
	border-width: 0 367px 248px 0;
	border-color: transparent #00d014 transparent transparent;
	z-index: 9;
	cursor: pointer;
}
.close-tv-background {
	width: 0;
	position: absolute;
	height: 0;
	z-index: 9;
	border-style: solid;
	border-width: 248px 0 0 367px;
	border-color: transparent transparent transparent #e4002b;
}
.open-close-tv-overlay {
	position: relative;
}

.close-tv-content {
	position: absolute; 
	bottom: 15px;
	padding: 35px 20px 0 0;
	z-index:9;
	display: flex;
	flex-direction: column;
	cursor: pointer;
}

.open-tv-content {
	position: absolute;
	top: 10px;
	text-align: right;
	padding: 0 20px 35px 0;
	right: 0;
	z-index: 9;
	display: flex;
	flex-direction: column;
	cursor: pointer;
}
.open-switch-text {
	left: 7px;
	top: 1px;
	color: white;
	font-size: 12px;
	position: absolute;
	font-weight: bold;
}
.close-switch-text {
	right: 7px;
	color: white;
	font-size: 12px;
	position: absolute;
	font-weight: bold;
	top:2px;
}
.v-input--switch__track {
	opacity: 1;
	width: 60px;
}

.filter-overlay {
	width:100vh;
	height:400px;
	background-color:white;
	z-index:999;
}

tbody tr td{
	text-align: center !important;
}
</style>
<script>

import { tabsAndTableDetails } from 'Views/crm/data.js'
import axios from 'axios'
import JQuery from 'jquery'
//import Dashboard from 'Views/Dashboard.vue'


let $ = JQuery

export default {
	
	data () {
		return {
			val: '',
			name1: [],
			e1:null,
			filterType:[],
			openDeviceLength: 0,
			closeDeviceLength: 0,
			noSignalDeviceLength: 0,
			openDevices: [],
			sendDataList: [],
			closeDevices: [],
			filterAttributes: [],
			TvList:[],
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
					text: "Tv ID",
					sortable: false,
					value: "account"
				},
				{
					text: "Brand",
					sortable: false,
					value: "Brand" 
				},
				{
					text: "Model Number",
					sortable: false,
					value: "Model Number"
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
					text: "Last Updated",
					sortable: false,
					value: "Last_Updated"
				},
				
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
		'home/telemetry/#': function(val) {
			console.log('TELEMETRY : ',val)
		},
		'home/attributes/#' : function(val) {
			var test = String.fromCharCode.apply(null,val);
			var jsonData = JSON.parse(test);
			console.log(jsonData);
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var dateTime = date+' '+time;
			var command = Object.keys(jsonData.params)[0];
			var TVID = jsonData.params[command].split(',')[0];
			var value = jsonData.params[command].split(',')[1];
			console.log('COMMAND : ',command,'TVID : ',TVID,'VALUE : ',value);
			if(command == 'kf' || command == 'kh'){
				console.log('HOOOT',command)
			}
			if(command == "km" || command == "ka") {
			this.$el.querySelectorAll('.pin-ka-svg').forEach(item => {
				if(item.getAttribute('data-tvid') == TVID) {
					if(command == "ka" && value == 1) {
						$(item).removeClass('tv-close-svg');
					}
					else if(command == "ka" && value == 0){
						$(item).addClass('tv-close-svg');
					}
				}
			});
			var tag = [];
			this.$el.querySelectorAll('td .v-input').forEach(item => {
				if($(item).find('input')){
					console.log($(item).find('input').attr('data-tvid'));
					if($(item).find('input').attr('data-tvid') == TVID){
						console.log('Seçilen ITEM : ',item);
							if(value == 0) {
								$(item).closest('td').css('opacity','.1');
								$(item).closest('td.tvstatus').css('opacity','1')
							}else if(value == 1){
								$(item).closest('td').css('opacity','1');
							}
						
					}
				}
			})
			console.log('TAG : ',tag)
			console.log('ATTR CHANNEL')
			this.$el.querySelectorAll('.pin-'+command+ ' input').forEach(item => {
					if(item.getAttribute('data-tvid') == TVID) {
						//Açık/Kapalı Array'den item silmek
						var testTag = item.closest('.pin-' + command)
						if(command == "ka"){
							if(value == 1) {
								$(testTag).closest('td').children().css('pointer-events','auto');
								$(testTag).closest('tr').children().css('pointer-events','auto');
							} else {
								$(testTag).closest('tr').children().css('pointer-events','none');
								$(testTag).closest('td.tvstatus').css('pointer-events','auto');
							}
						}
						
						console.log('TESTTAG',testTag);
						if(value == 1) {
							$(testTag).removeClass('red--text text--darken-3').addClass('v-input--is-label-active v-input--is-dirty success--text');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track span').removeClass('close-switch-text').addClass('open-switch-text');
							$(testTag).find('.v-input--switch__track span').text('On');
							$(testTag).find('.v-input--switch__thumb').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('svg').removeClass('tv-close-svg');
						} else {
							$(testTag).removeClass('v-input--is-label-active v-input--is-dirty success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track span').removeClass('open-switch-text').addClass('close-switch-text');
							$(testTag).find('.v-input--switch__track span').text('Off');
							$(testTag).find('.v-input--switch__thumb').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('svg').addClass('tv-close-svg');
						}

						var serialNumber = item.getAttribute('data-serial-number');
						console.log(serialNumber);
						var token = item.getAttribute('data-token');
						axios.post('http://192.168.10.42:5000/api/test', {
							token:token,
							updateDate:dateTime,
							method:"rpcCommand",
							params: {
								tvSerial:serialNumber,
								command:command,
								tvId:TVID,
								value:value
						}})
						.then(function (response) {
							console.log(response);
							console.log('SUCCESS');
						})
						.catch(function (error) {
							console.log(error);
						});
					}
				
			})
			}
		},
		'home/attributesUp/#' : function(val,topic) {
			console.log('TABS ATTRIBUTES CHANNEL',token)
			
			var test = String.fromCharCode.apply(null,val);
			var jsonData = JSON.parse(test);
			var dataArray = jsonData.params.up.split(',');
			console.log('ATTRIBUTES UP : ',jsonData);
			var token = topic.split('/')[2];
			var TvID = dataArray[0];
            var tvDurum = dataArray[1];
            var nosignal = dataArray[2];
            var temperature = dataArray[3];
			var firmwareVersion = dataArray[4];
			console.log(TvID,tvDurum,nosignal,temperature,firmwareVersion);
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			var time = today.getHours() + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
			var dateTime = date+' '+time;
			console.log(dateTime);
			
			axios.post('http://192.168.10.42:5000/api/allAttributesUpdate', {
						updateDate:dateTime,
						token:token,
						params: {
							tvDurum:tvDurum,
							tvId:TvID,
							nosignal:nosignal,
							temperature: temperature,
							firmwareVersion: firmwareVersion
					}})
					.then(function (response) {
						console.log(response);
						console.log('SUCCESS');
					})
					.catch((err) =>  {
						console.log(err);
					});

					console.log('EL : ',this.$el.querySelectorAll('.pin-ka'));
					this.$el.querySelectorAll('.pin-ka input').forEach(item => {
						console.log('PIN KA INPUT : ',item)
						if(item.getAttribute('data-tvid') == TvID) {
							var testTag = item.closest('.pin-ka');
							console.log('TESTTAGGG : ',testTag);
							if(tvDurum == 1) {
							$(testTag).removeClass('red--text text--darken-3').addClass('v-input--is-label-active v-input--is-dirty success--text');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track span').removeClass('close-switch-text').addClass('open-switch-text');
							$(testTag).find('.v-input--switch__track span').text('On');
							$(testTag).find('.v-input--switch__thumb').removeClass('red--text text--darken-3').addClass('success--text');
							
							console.log('ONNN ::CLOSE : ',this.closeDeviceLength,'OPEN : ',this.openDeviceLength);
							}
							else{
							$(testTag).removeClass('v-input--is-label-active v-input--is-dirty success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track span').removeClass('open-switch-text').addClass('close-switch-text');
							$(testTag).find('.v-input--switch__track span').text('Off');
							$(testTag).find('.v-input--switch__thumb').removeClass('success--text').addClass('red--text text--darken-3');
							
							console.log('OFF : CLOSE : ',this.closeDeviceLength,'OPEN : ', this.openDeviceLength);
							}
							
						}
					})
					var updateDeviceList = this.deviceList;
					updateDeviceList.forEach(function(item,index){
						console.log('TVV: ',TvID,tvDurum)
						console.log('CURRENT : ',event.currentTarget)
						
						if(item.TvID == TvID && parseInt(tvDurum) != 0) {
							console.log('OKEY',item.TvID,TvID,parseInt(tvDurum))
							updateDeviceList[index].Last_Update = dateTime
							updateDeviceList[index].NoSignal = nosignal;
							updateDeviceList[index].TemperatureValue = temperature;
							updateDeviceList[index].FirmwareVersion = firmwareVersion;
						}
						else if(item.TvID == TvID && parseInt(tvDurum) == 0) {
							updateDeviceList[index].Last_Update = dateTime;
							updateDeviceList[index].TvStatus = tvDurum;
							
						}
					})
					this.deviceList = updateDeviceList;
					console.log('Device List : ',this.deviceList)
		}
	},
	methods: {
		selectSendData: function(val) {
			console.log('SELECT SEND DATA',val.target.value);
			var token = val.target.getAttribute('data-token');
			var serialNumber = val.target.getAttribute('data-serial-number');
			var tvID = val.target.getAttribute('data-tvID');
			var command = val.target.getAttribute('data-pin');
			console.log(token);
			//console.log('COMMAND : ',command)
			var jsonData = { 
				token:token,
				method:"rpcCommand",
				params: {
					tvSerial: serialNumber,
					command: command,
					tvId: tvID,
					swc: 2,
					cmd: 'gc',
					on: val.target.value
				}
			}
			this.$mqtt.publish('home/telemetry/'+token, JSON.stringify(jsonData));
			console.log('TESTSET : ',jsonData)
		},
		overlayClose: function() {
			//$('.v-overlay').removeClass('v-overlay--active').css('display','none');
			$('.v-overlay').removeClass('v-overlay--active').fadeOut();
			
		},
		overlayOpen: function() {
			$('.v-overlay').fadeIn(1000, function(){
				$(this).addClass('v-overlay--active');
			});
		},
		clickSub: function(){
			var jsonData = { method: 'getUpdateAll', params: { up: '2,00,00,37,26.1' } };//up: '2,01,00,37,26.1'
			this.$mqtt.publish('home/attributesUp/mVThJflRGKgZYkZ18!hU', JSON.stringify(jsonData));
	},
		clickPub: function() {
			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			var tvID = event.currentTarget.querySelector('input').getAttribute('data-tvID');
			var command = event.currentTarget.querySelector('input').getAttribute('data-pin');
			var jsonData = {
				token:token,
				method:"rpcCommand",
				params: {
					tvSerial:serialNumber,
					command:command,
					tvId:tvID,
					swc:1,
					cmd: 'gc',
					on:'01',
					off:'00'
		}};
		console.log('JSONDATA : ',jsonData,serialNumber)
		this.$mqtt.publish('home/telemetry/'+token,JSON.stringify(jsonData));
		},	
		websocketPub: function() {
			var token = event.currentTarget.getAttribute('data-token');
			axios.post('http://192.168.10.42:5000/api/detectDevices',{ token : token,method: "getTvId"
			}).then((response,request) => {
				console.log('SUCCESS POST',response);
				console.log('SUCCESS REQUEST : ',request)
				response.end();
			}).catch((err) => {
				console.log(err);
			});
		},
		next () {
			const active = parseInt(this.active)
			this.active = (active < 2 ? active + 1 : 0)
		},
		loadData() {
			this.deviceList = [];
			axios.get('http://192.168.10.42:5000/api/loadDevices').then(resp => {
				resp.data.forEach(item => {
					this.deviceList.push(item);
					this.sendDataList.push(item);
					if(item.TvStatus == 1) {
						this.openDeviceLength++;
					}else{
						this.closeDeviceLength++;
					}
					//if(item.NoSignal == 1) {
						//this.noSignalDeviceLength++;
					//}
				});
				
				console.log('Data.js : ',resp.data);
				console.log(this.deviceList)
				console.log('SEND DATA LIST : ',this.sendDataList)
				
				/*
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
				
				*/
				
			});
			
				
			
		},
		detectType() {
			var test = event.currentTarget.parentElement.querySelectorAll('input:checked');
			if(this.headersForTransactionList.length > 11) {
				this.headersForTransactionList.splice(12,this.headersForTransactionList.length-11);	
			}
			this.filterAttributes = [];
			var dynamicFilterType = [];
			
			//test.forEach(function(item,index){
				
				//this.filterType
			//})
			console.log('TEST', test)
			console.log(this.name1)
			this.name1.forEach(item => {
				test.forEach(function(tag){		
					console.log('TAG : ',tag);
					if(tag.value == item){
						console.log('DETECT TYPE : ',tag.getAttribute('data-type'),tag.getAttribute('data-pin'))
						dynamicFilterType.push({text:tag.value,sortable:false,type:tag.getAttribute('data-type'),pin:tag.getAttribute('data-pin'),optionsKey:tag.getAttribute('data-options-key').split(','),optionsValue:tag.getAttribute('data-options-value').split(',')});
					}
				})
				console.log('test Value : ',test);
				console.log(item)
			})
			console.log('Dynamic : ',dynamicFilterType)
			console.log('Dynamic : ',this.headersForTransactionList)
			var i;
			for(i = 0;i< dynamicFilterType.length;i++){
				this.filterAttributes.push({fieldType: dynamicFilterType[i].type,fieldKey: dynamicFilterType[i].optionsKey, fieldValue: dynamicFilterType[i].optionsValue, fieldPin: dynamicFilterType[i].pin});
				console.log('FILTER ATTRIBUTES : ',this.filterAttributes[i]);
				this.headersForTransactionList.push(dynamicFilterType[i])
				console.log(this.deviceList[i]);
			}
		},
		postData() {
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
			axios.post('http://192.168.10.42:5000/api/test',{
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
			var tagName = this.selector.closest('td');
			console.log('TAGNAME : ',tagName)
			var tvid = tagName.getAttribute('data-TvID');
			var token = tagName.getAttribute('data-token');
			var serialNumber = tagName.getAttribute('data-serial-number');
			var pin = tagName.getAttribute('data-pin');	
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var dateTime = date+' '+time;
			setTimeout(() => {
				var value = this.selector.getAttribute('value');
				console.log('VALUE : ',value)
				var jsonData = {
					updateDate:dateTime,
					token:token,
					method:"setValueSes",
					params: {
						tvSerial: serialNumber,
						value:value,
						command: pin,
						tvId:tvid
					},
				}
				this.$mqtt.publish('home/telemetry/'+token,JSON.stringify(jsonData));
				axios.post('http://192.168.10.42:5000/api/test',jsonData)
				
				.then((response) => {
					console.log('SUCCESS POST',response)
				});
				console.log(jsonData);
				console.log('UP : ',this.selector.getAttribute('value'));
			})
		},
		mousedownn() {
		console.log('DOWNN')
		this.selector = event.currentTarget.querySelector('input');
		
		
		console.log('DOWN : ',this.selector);
		console.log(this.val0);
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
		this.$mqtt.subscribe('home/attributesUp/#',function(message) {
			console.log('UP : ',message)
		})		
		this.$mqtt.subscribe('home/telemetry/#',function(message){
			console.log('Telemetry Topic : ',message);
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