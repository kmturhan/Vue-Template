<template>

	<div>

		<div class="table-responsive">
			<!--<button @click="websocketPub">Test</button>-->
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
						<v-checkbox color="primary" label="Mute" 		v-model="name1" value="Mute" 		data-pin="ke" data-type="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
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
					<tr>
						<td class="text-nowrap">{{ item.TvID }}</td>
						<td>{{ item.Brand }}</td>
						<td>{{ item.Model_Number}}</td>
						<td v-if="item.Connection_Status == 1" style="">
							
							<svg class="device-connection device-connect" :class="'device-status-'+item.TvID"  xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="10" style="margin-top:5px;cursor:pointer;display:block;margin-right:auto;margin-left:auto;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
							<svg class="device-connection device-disconnect" :class="'device-status-'+item.TvID"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;height:15px;width:15px;margin-top:12px;cursor:pointer;display:none;margin-right:auto;margin-left:auto;" xml:space="preserve"><g>	<g id="cloud-off">		<path d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25    c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5    c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65    l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65z     M196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
						</td>
						<td v-if="item.Connection_Status == 0" style="margin-right:auto;margin-left:auto;">
							
							<svg class="device-connection device-connect" :class="'device-status-'+item.TvID"  xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="10" style="margin-top:5px;cursor:pointer;display:none;margin-right:auto;margin-left:auto;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
							<svg class="device-connection device-disconnect" :class="'device-status-'+item.TvID"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;height:15px;width:15px;margin-top:12px;cursor:pointer;display:block;margin-right:auto;margin-left:auto;" xml:space="preserve"><g>	<g id="cloud-off">		<path d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25    c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5    c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65    l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65z     M196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
						</td>
						<td class="tvstatus input-control"  :data-value="item.TvStatus" :data-tvid="item.TvID">
						<span style="display:none;" class="tvstatus-value">{{item.TvStatus}}</span>
						<v-col cols="12" sm="4" md="4" class="col-height-auto">
							<div v-if="item.TvStatus == 1" v-bind:class="item.Connection_Status == 1 ?  'input-switch-enabled' : 'input-switch-disabled'">
								<div class="pin-ka v-input v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light v-input--selection-controls v-input--switch success--text" @click="clickPub" aria-disabled="true">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input aria-checked="true" role="switch" type="checkbox" aria-disabled="false" data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00">
												<div class="v-input--selection-controls__ripple v-input--selection-controls__ripple-custom success--text"></div>
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
								<div class="pin-ka v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text--darken-3" :style="item.Connection_Status == 0 ? {'opacity':'.1','pointer-events':'none'}: ''" @click="clickPub" aria-disabled="false">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input  aria-checked="false" role="switch" type="checkbox" aria-disabled="false"  data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
												<div class="v-input--selection-controls__ripple v-input--selection-controls__ripple-custom red--text text--darken-3"></div>
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
						<td class="tvRemoteLock input-control input-switch-enabled" :data-tvid="item.TvID" >
              <div v-if="item.RemoteLock == 1">
								<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch v-input--is-label-active v-input--is-dirty success--text" :style="item.TvStatus == 0 ? {'opacity':'.1','pointer-events':'none'}:{'opacity':'1','pointer-events':'auto'}" @click="clickPub">
									<div class="v-input__control">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input class="switch-input" aria-checked="false" role="switch" type="checkbox"  aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
												<div class="v-input--selection-controls__ripple v-input--selection-controls__ripple-custom success--text"></div>
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
												<div class="v-input--selection-controls__ripple v-input--selection-controls__ripple-custom red--text text--darken-3"></div>
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
						<td class="pin-kf input-gauch input-switch-enabled"  :class="'tv-id-'+item.TvID" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1" :style="item.Connection_Status == 0 ? {'opacity':'.1','pointer-events':'none'}: ''">
							<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td class="pin-kf input-gauch input-switch-disabled"  :class="'tv-id-'+item.TvID" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else style="opacity:.1;pointer-events:none;" :style="item.Connection_Status == 0 ? {'opacity':'.1','pointer-events':'none'}: ''">
							<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td class="pin-kh input-gauch input-switch-enabled"  :class="'tv-id-'+item.TvID" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1" :style="item.Connection_Status == 0 ? {'opacity':'.1','pointer-events':'none'}: ''">
							<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td class="pin-kh input-gauch input-switch-disabled"  :class="'tv-id-'+item.TvID" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else style="opacity:.1;pointer-events:none;" :style="item.Connection_Status == 0 ? {'opacity':'.1','pointer-events':'none'}: ''">
							<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						<td>{{ item.TempetureValue }} °C</td>
						<td v-if="item.NoSignal == '' || item.NoSignal == 0">0</td>
						<td v-if="item.NoSignal == 1">1</td>
						<td>{{ item.FirmwareVersion }}</td>
						<td>{{ item.Serial_Number }}</td>
						<td>{{ item.Last_Update }}</td>
						
						<td v-for="filter in filterAttributes" :key="filter.fieldPin" class="input-control input-switch-enabled">
							<select v-if="filter.fieldType == 'dropdown'" style="width:100%;border:1px solid black;border-radius:5px;" @change="selectSendData" :data-pin="filter.fieldPin" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number">
								<option v-for="(value, index) in filter.fieldKey" v-bind:key="value" :value="value">{{filter.fieldValue[index]}}</option>
							</select>
							<div v-if="filter.fieldType == 'switch'" class="v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text--darken-3" @click="clickPub" :data-pin="filter.fieldPin" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false">
								<div class="v-input__control">
									<div class="v-input__slot">
										<div class="v-input--selection-controls__input">
											<input  aria-checked="false" id="input-486" role="switch" type="checkbox" aria-disabled="false"  :data-pin="filter.fieldPin" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" checked="checked" value="red darken-3">
											<div class="v-input--selection-controls__ripple v-input--selection-controls__ripple-custom red--text text--darken-3"></div>
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
.input-switch {
	transition: all .5 ease;
}
.input-switch-disabled {
  opacity: .1 !important;
	pointer-events: none !important;
}
.input-switch-enabled {
	opacity: 1 !important;
	pointer-events: auto !important;
}
.v-input--selection-controls__ripple-custom {
	width: 36px;
	height: 36px;
	left: -9px !important;
	top: calc(50% - 21px) !important;
}
.v-application .primary.lighten-3 {
	background-color: lightgray !important;
}
.v-application .primary {
	background-color: #464D69 !important;
}
.v-application .red--text.text--darken-3 {
	color: #e4002b !important;
}
.app-card-content {
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
	left: -13px;
	top: calc(50% - 25px);
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
			selectedTvID: 0,
			selectedPin: '',
			interval: 0,
			openDeviceLength: 0,
			closeDeviceLength: 0,
			noSignalDeviceLength: 0,
			openDevices: [],
			sendDataList: [],
			closeDevices: [],
			filterAttributes: [],
			TvList:[],
      closeTvNotification:[],
			connection: null,
			loader: false,
			invoice: [],
			deviceList: [],
			ex3: { label: "thumb-color", val: 40, color: "red" },
			gaugeValue: [],
			selector: "",
			val0: 0,
			unreachableDevices: 0,
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
					text: "Connection",
					sortable: false,
					value: "Connection"
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
		'home/telemetry/#': function() {
			
		},
		'home/attributes/#' : function(val) {this.loadData();
			var test = String.fromCharCode.apply(null,val);
			var jsonData = JSON.parse(test);
			console.log(jsonData);
			var today = new Date();
			var date = today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,"0")+'-'+String(today.getDate()).padStart(2,"0");
			var time = String(today.getHours()).padStart(2,"0") + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
			var dateTime = date+' '+time;
			var command = Object.keys(jsonData.params)[0];
			var TVID = jsonData.params[command].split(',')[0];
			var value = jsonData.params[command].split(',')[1];
      var notification = [];
			if(value == 0) {
        var json = {
          datetime: dateTime,
          tvid: TVID,
          value: value
        };
        notification.push(json);
      }
			console.log('Notification : ',notification)
			console.log('COMMAND : ',command,'TVID : ',TVID,'VALUE : ',value);

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

			//Eğer attributes'e gelen mesajda ekrandan clicklenen tvid ve pin doğrulanırsa çalışacak kısım.
			if(command == this.selectedPin && TVID == this.selectedTvID) {
				console.log('TEST : BAŞARILI');
				clearInterval(this.interval);
				console.log('selected TVID : ',this.selectedTvID);
				$('.input-control').removeClass('input-switch-disabled').addClass('input-switch-enabled');
			}
			var tag = [];
			/*if(command == 'ka') {
				this.$el.querySelectorAll('td .v-input').forEach(item => {
				if($(item).find('input')){
					console.log($(item).find('input').attr('data-tvid'));
					if($(item).find('input').attr('data-tvid') == TVID){
						console.log('Seçilen ITEM : ',item);
							if(value == 0) {
								$(item).closest('td').css('opacity','.1');
								$(item).closest('td').css('pointer-events','none')
								$(item).closest('td.tvstatus').css('opacity','1')
								$(item).closest('td.tvstatus').css('pointer-events','auto')
								$(item).closest('td.tvRemoteLock').css('opacity','1');
								$(item).closest('td.tvRemoteLock').css('pointer-events','auto')
							}else if(value == 1){
								$(item).closest('td').css('opacity','1');
								$(item).closest('td').css('pointer-events','auto');
							}
						}
					}
				})
			}*/

			console.log('TAG : ',tag)
			console.log('ATTR CHANNEL')
			this.$el.querySelectorAll('.pin-'+command+ ' input').forEach(item => {
					if(item.getAttribute('data-tvid') == TVID) {
						var testTag = item.closest('.pin-' + command)
						if(value == 1) {
							$(testTag).removeClass('red--text text--darken-3').addClass('v-input--is-label-active v-input--is-dirty success--text');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track span').removeClass('close-switch-text').addClass('open-switch-text');
							$(testTag).find('.v-input--switch__track span').text('On');
							$(testTag).find('.v-input--switch__thumb').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('svg').removeClass('tv-close-svg');
							$(testTag).closest('td.tvstatus').children('span.tvstatus-value').text('1')
						} else {
							$(testTag).removeClass('v-input--is-label-active v-input--is-dirty success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track span').removeClass('open-switch-text').addClass('close-switch-text');
							$(testTag).find('.v-input--switch__track span').text('Off');
							$(testTag).find('.v-input--switch__thumb').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('svg').addClass('tv-close-svg');
							$(testTag).closest('td.tvstatus').children('span.tvstatus-value').text('0')
						}
						console.log('TESTTAG',$(testTag).closest('td.tvstatus').children('span.tvstatus-value').text());
						var serialNumber = item.getAttribute('data-serial-number');
						console.log(serialNumber);
						var token = item.getAttribute('data-token');
						this.$el.querySelectorAll('.input-gauch').forEach(item => {
							console.log(item)
							
							if(!$(item).closest('tr').find('td.tvstatus .v-input').hasClass('red--text')) {
								$(item).removeClass('input-switch-disabled').addClass('input-switch-enabled');
							}else {
								$(item).removeClass('input-switch-enabled').addClass('input-switch-disabled');
							}
						})
						axios.post('http://192.168.10.46:5000/api/test', {
							token:token,
							updateDate:dateTime,
							method:"rpcCommand",
							params: {
								tvSerial:serialNumber,
								command:command,
								tvId:TVID,
								value:value,
								updateDate: dateTime,
						}})
						.then(function (response) {
							console.log(response.data);
							console.log('SUCCESS');
						})
						.catch(function (error) {
							console.log(error);
						});
            var updateDeviceList = this.deviceList;
						var connectDevicesIcons = [];
						this.$el.querySelectorAll('.device-connection').forEach(item => {
							connectDevicesIcons.push(item)
						})
						updateDeviceList.forEach((item,index) => {console.log(updateDeviceList[index]);
							var date1 = new Date(item.Last_Update);
							var date2 = new Date(dateTime);
							var diff = date2.getTime() - date1.getTime();
							if(item.TvID == TVID && item.Token == token) {
								console.log('update Device : ',item);
								item.Last_Update = dateTime;
							}
							if(diff > 950000) { 
								$('.device-connect.device-status-'+item.TvID).css('display','none');
								$('.device-disconnect.device-status-'+item.TvID).css('display','block');
								console.log('WHAT : ',$('.device-status-'+item.TvID).closest('tr'))
								$('.device-status-'+item.TvID).closest('td').find('tr.tvstatus').addClass('input-switch-disabled').removeClass('input-switch-enabled');
							}else{
								$('.device-connect.device-status-'+item.TvID).css('display','block');
								$('.device-disconnect.device-status-'+item.TvID).css('display','none');
							}
							console.log(connectDevicesIcons)
						})
            this.deviceList = updateDeviceList;
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
			var date = today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,"0")+'-'+String(today.getDate()).padStart(2,"0");
			var time = String(today.getHours()).padStart(2,"0") + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
			var dateTime = date+' '+time;
			console.log(dateTime);
			
			axios.post('http://192.168.10.46:5000/api/allAttributesUpdate', {
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
						console.log('PIN KA INPUT : ',$(item).closest('tr').children());
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
							else {
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
						var date1 = new Date(item.Last_Update);
						var date2 = new Date(dateTime);
						var diff = date2.getTime() - date1.getTime();
						if(diff > 950000) { 
							updateDeviceList[index].Connection_Status = 0;
						}else{
							updateDeviceList[index].Connection_Status = 1;
						}
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
						console.log('DB LAST UPDATE',updateDeviceList[index].Last_Update);

					})
					this.deviceList = updateDeviceList;

					

					console.log('Device List : ',this.deviceList)
					this.$el.querySelectorAll('.input-gauch').forEach(item => {
						console.log(item);
						
						if(!$(item).closest('tr').find('td.tvstatus .v-input').hasClass('red--text') ) {
							$(item).removeClass('input-switch-disabled').addClass('input-switch-enabled');
						}else {
							$(item).removeClass('input-switch-enabled').addClass('input-switch-disabled');
						}
					})
				//	this.$el.querySelectorAll('td .v-input').forEach(item => {
				//if($(item).find('input')) {
				//	console.log($(item).find('input').attr('data-tvid'));
				//	if($(item).find('input').attr('data-tvid') == TvID){
				//		console.log('Seçilen ITEM : ',item);
				//			if(tvDurum == 0) {
				//				$(item).closest('td').css('opacity','.1');
				//				$(item).closest('td').css('pointer-events','none')
				//				$(item).closest('td.tvstatus').css('opacity','1')
				//				$(item).closest('td.tvstatus').css('pointer-events','auto')
				//				$(item).closest('td.tvRemoteLock').css('opacity','1');
				//				$(item).closest('td.tvRemoteLock').css('pointer-events','auto');
				//			} else if(tvDurum == 1) {
				//				$(item).closest('td').css('opacity','1');
				//				$(item).closest('td').css('pointer-events','auto');
				//			}
				//	}
				//}
			//})
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
		clickSub: function() {
			var jsonData = { method: 'getUpdateAll', params: { up: '2,00,00,37,26.1' } };//up: '2,01,00,37,26.1'
			this.$mqtt.publish('home/attributesUp/mVThJflRGKgZYkZ18!hU', JSON.stringify(jsonData));
	},
		clickPub: function() {
			var selectedTag = $(event.currentTarget);
			$(event.currentTarget).toggleClass('v-input--is-label-active v-input--is-dirty success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(event.currentTarget).find('.v-input--switch__track span').toggleClass('close-switch-text').toggleClass('open-switch-text');
			console.log('CLICK PUB : ',$(event.currentTarget).closest('tr'));
			if($(event.currentTarget).find('.v-input--switch__track span').text() == "On") {
				$(event.currentTarget).find('.v-input--switch__track span').text('Off');
			}else {
				$(event.currentTarget).find('.v-input--switch__track span').text('On')
			}
			
			
			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			var tvID = event.currentTarget.querySelector('input').getAttribute('data-tvID');
			var command = event.currentTarget.querySelector('input').getAttribute('data-pin');
			this.selectedTvID = tvID;
			this.selectedPin = command;
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

			this.$el.querySelectorAll('.input-control').forEach(item => {
        console.log('Input Control : ',item)
        if(item.getAttribute('data-tvid') == tvID) {
          $(item).removeClass('input-switch-enabled').addClass('input-switch-disabled');

        }
      })
      this.$el.querySelectorAll('.input-gauch').forEach(item => {
        console.log('Input Control : ',item)
        if(item.getAttribute('data-tvid') == tvID) {
          $(item).removeClass('input-switch-enabled').addClass('input-switch-disabled');

        }
      })


		//$('.input-control.tv-id-'+tvID).removeClass('input-switch-enabled').addClass('input-switch-disabled');
		//$('.input-gauch.tv-id-'+tvID).removeClass('input-switch-enabled').addClass('input-switch-disabled');

				console.log('Disconnect ');
				clearInterval(this.interval);
				//$('.input-control').removeClass('input-switch-enabled').addClass('input-switch-disabled');
				//$('.input-gauch').removeClass('input-switch-enabled').addClass('input-switch-disabled');
				$(selectedTag).toggleClass('v-input--is-label-active v-input--is-dirty success--text').toggleClass('red--text text--darken-3');
				$(selectedTag).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(selectedTag).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(selectedTag).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');
				$(selectedTag).find('.v-input--switch__track span').toggleClass('close-switch-text').toggleClass('open-switch-text');
				console.log('CLICK PUB : ',$(selectedTag).closest('tr'));
				if($(selectedTag).find('.v-input--switch__track span').text() == "On") {
					$(selectedTag).find('.v-input--switch__track span').text('Off');
				}else {
					$(selectedTag).find('.v-input--switch__track span').text('On')
				}
				
		this.$el.querySelectorAll('.input-gauch').forEach(item => {
			console.log('GAUCH : ',item)
			if(!$(item).closest('tr').find('td.tvstatus .v-input').hasClass('red--text')) {
				//$(item).removeClass('input-switch-disabled').addClass('input-switch-enabled');
			}else {
				$(item).removeClass('input-switch-enabled').addClass('input-switch-disabled');
			}
		})

		
		console.log('JSONDATA : ',jsonData,serialNumber)
		this.$mqtt.publish('home/telemetry/'+token,JSON.stringify(jsonData));
		},	
		websocketPub: function() {
			this.unreachableDevices = 0;
		},
		next () {
			const active = parseInt(this.active)
			this.active = (active < 2 ? active + 1 : 0)
		},
		
		loadData() {
			var updateData = [];
			this.unreachableDevices = 0;
			axios.get('http://192.168.10.46:5000/api/loadDevices').then(resp => {
				resp.data.forEach(item=> {
					console.log('resp Connection Status : ',item.Connection_Status);
					updateData.push(item);
					if(item.TvStatus == 1 && item.Connection_Status == 1) {
						this.openDeviceLength++;
						console.log('Open',this.openDeviceLength);
					}else if(item.TvStatus == 0 && item.Connection_Status == 1){
						this.closeDeviceLength++;
						console.log('Close : ',this.closeDeviceLength)
					}
					if(item.Connection_Status == 0) {
						this.unreachableDevices++;
					}
					
				});
				this.deviceList = updateData
				console.log('Data.js : ',resp.data);
				console.log(this.deviceList);
				console.log('SEND DATA LIST : ',this.sendDataList);
			});
			
		},
		detectType() {
			var test = event.currentTarget.parentElement.querySelectorAll('input:checked');
			if(this.headersForTransactionList.length > 11) {
				this.headersForTransactionList.splice(12,this.headersForTransactionList.length-11);	
			}
			this.filterAttributes = [];
			var dynamicFilterType = [];

			console.log('TEST', test)
			console.log(this.name1)
			this.name1.forEach(item => {
				test.forEach(function(tag){		
					console.log('TAG : ',tag);
					if(tag.value == item) {
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
			axios.post('http://192.168.10.46:5000/api/test',{
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
			var date = today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,"0")+'-'+String(today.getDate()).padStart(2,"0");
			var time = String(today.getHours()).padStart(2,"0") + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
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
				axios.post('http://192.168.10.46:5000/api/test',jsonData)
				
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