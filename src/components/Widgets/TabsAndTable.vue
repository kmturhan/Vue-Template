<template>

	<div>
		<div class="container container--fluid">
			<h1>test</h1>
		</div>
		<div style="display: flex;">
		<!--<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
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
		</div>-->
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					<!---->
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
								<!--<span class="fw-bold">Total Open Tv : {{openDeviceLength}}</span>-->
							</div>
						</div>
					</div>
					<!----><!---->
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					<!---->
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
					<!----><!---->
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					<!---->
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
					<!----><!---->
				</div>
			</div>
		</div>
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card ">
					<!---->
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
		</div><!----><!----></div>
	</div>
</div>
		
		</div>
		<v-tabs class="reports-table-tab" v-model="active" slider-color="primary">
			<v-tab class="text-capitalize" v-for="(tab,index) in tabs" :key="index" ripple>
				{{ $t('message'+'.'+tab.title) }}
			</v-tab>
			<v-tab-item v-for="n in 3" :key="n">
				<v-card flat v-if="n==1">
					<div class="table-responsive">
						<button @click="clickSub">attributesUp</button><br><br>
						<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512.101 512.101" height="50" viewBox="0 0 512.101 512.101" width="50" style="transition:all 1s ease"><g><path d="m436.862 75.238c-100.3-100.301-261.29-100.335-361.624 0-100.301 100.3-100.335 261.29 0 361.624 100.3 100.301 261.29 100.335 361.624 0 100.301-100.299 100.335-261.29 0-361.624zm-180.812 406.812c-124.617 0-226-101.383-226-226s101.383-226 226-226 226 101.383 226 226-101.383 226-226 226z"/><path d="m329.703 173.005c-6.197-5.499-15.677-4.934-21.176 1.263-5.499 6.196-4.934 15.677 1.263 21.176 17.324 15.375 27.26 37.465 27.26 60.607 0 44.664-36.336 81-81 81s-81-36.336-81-81c0-23.371 10.101-45.606 27.712-61.005 6.236-5.453 6.872-14.929 1.418-21.166-5.453-6.237-14.929-6.871-21.166-1.418-24.127 21.096-37.965 51.563-37.965 83.589 0 61.206 49.794 111 111 111s111-49.794 111-111c.001-31.714-13.611-61.982-37.346-83.046z"/><path d="m256.05 231.05c8.284 0 15-6.716 15-15v-80c0-8.284-6.716-15-15-15s-15 6.716-15 15v80c0 8.285 6.716 15 15 15z"/></g></svg>
						<button class="mx-4 my-4 v-btn v-btn--contained theme--light v-size--small primary" @click="overlayOpen">Filter</button>
						<div class="v-overlay theme--dark" style="z-index: 99;display:none;">
							<div class="v-overlay__scrim" style="opacity: 0.5; background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);">
							
							</div>
							<div class="filter-overlay" style="width:100vh;height:400px;background-color:white;z-index:999;position: relative;">
								<i class="ti-close" style="cursor:pointer;color:black !important;position:absolute;right:10px;top:10px;" @click="overlayClose"></i>
								<app-card colClasses="col-12 col-md-6">
									<p>{{ name1 }}</p>
									<v-checkbox color="primary" label="Select Input" v-model="name1" value="Select Input" data-pin="dropdown" data-options-key="20,40,60,70,80,90,A0,91,A1,92,A2,95,A5,98,A8,C0,D0,E0,E1,E2" data-options-value="AV,COMPONENT,RGB,DVI-D (PC),DVI-D (DTV),HDMI1 (DTV),HDMI1 (PC),HDMI2/OPS (DTV), HDMI2/OPS (PC),OPS/HDMI3/DVI-D (DTV),OPS/HDMI3/DVI-D (PC),OPS/DVI-D (DTV),OPS/DVI-D (PC),OPS (DTV),OPS (PC),DISPLAYPORT (DTV),DISPLAYPORT (PC),SuperSign webOS Player,Others,Multi Screen"></v-checkbox>
									<v-checkbox color="primary" label="Input Select" v-model="name1" value="Input Select" data-pin="switch" data-options-key="0,1" data-options-value=""></v-checkbox>
									<v-checkbox color="primary" label="Aspect Ratio" v-model="name1" value="Aspect Ratio"  data-pin="dropdown" data-options-key="01,02,04,06,09,10,21" data-options-value="4:3,16:9,Zoom,Set By Program,Just Scan (720p or higher),Cinema Zoom 1 to 16,58:9,Vertical Zoom,All-Direction Zoom"></v-checkbox>
									<v-checkbox color="primary" label="Energy Saving" v-model="name1" value="Energy Saving"  data-pin="dropdown" data-options-key="00,01,02,,03,04,05" data-options-value="Off,Minimum,Medium,Maximum,Automatic,Screen Off"></v-checkbox>
									<button @click="detectType">Select</button>
								</app-card>
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
									<td class="tvstatus">
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
															<div class="v-input--switch__thumb theme--light success--text"></div>
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
															<input class="switch-input" aria-checked="false" role="switch" type="checkbox"  aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
															<div class="v-input--selection-controls__ripple success--text"></div>
															<div class="v-input--switch__track theme--light success--text">
																<span class="open-switch-text">On</span>
															</div>
															<div class="v-input--switch__thumb theme--light success--text"></div>
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
															<div class="v-input--switch__thumb theme--light red--text text--darken-3"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</td>
									<td ref="test" class="pin-kf" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
										<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td class="pin-kf" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else>
										<v-slider v-model="item.VoiceValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kf" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td class="pin-kh" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-if="item.TvStatus == 1">
										<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td class="pin-kh" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" v-else>
										<v-slider v-model="item.BrightnessValue" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
									</td>
									<td>{{ item.TempetureValue }}</td>
									<td>{{ item.NoSignal }}</td>
									<td>{{ item.FirmwareVersion }}</td>
									<td>{{ item.Serial_Number }}</td>
									<td>{{ item.Last_Update }}</td>
									
									<td v-for="filter in filterAttributes" :key="filter.fieldType">
										<select v-if="filter.fieldType == 'dropdown'" style="width:100%;border:1px solid black;border-radius:5px;" @change="selectSendData" :data-token="item.Token" :data-TvID="item.TvID" :data-serial-number="item.Serial_Number" data-pin="xb">
											<option v-for="(value, index) in filter.fieldKey" v-bind:key="value" :value="value">{{filter.fieldValue[index]}}</option>
										</select>
										<div v-if="filter.fieldType == 'switch'" class="v-input v-input--hide-details v-input--selection-controls v-input--switch red--text text--darken-3" @click="clickPub" aria-disabled="false">
											<div class="v-input__control">
												<div class="v-input__slot">
													<div class="v-input--selection-controls__input">
														<input  aria-checked="false" id="input-486" role="switch" type="checkbox" aria-disabled="false"  data-pin="ka" data-swc="1" :data-token="item.Token" :data-TvID="item.TvID" checked="checked" :data-serial-number="item.Serial_Number" data-on="01" data-off="00" value="red darken-3">
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
				</v-card>
			</v-tab-item>
		</v-tabs>
		
	</div>
</template>
<style>
*
{
    user-select: none;
}

*:focus
{
    outline: none;
}

html, body
{
    height: 100%;
    min-height: 100%;
}

body
{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 100px;
    margin: 0;
    background-color: #ebf3f3;
}

.brd
{
    border: 1px solid #e2eded;
    border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

#info
{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: #2d3667;
    font-size: 10px;
    text-align: center;
    padding: 14px;
    background-color: #f3f9f9;
}

#app-cover
{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100px;
    height: 42px;
    margin: 100px auto 0 auto;
}

#select-button
{
    position: relative;
    height: 10px;
    padding: 12px 14px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

#options-view-button
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
}

#selected-value
{
    font-size: 10px;
    line-height: 1;
    margin-right: 26px;
}

.option i
{
    width: 16px;
    height: 16px;
}

.option, .label
{
    color: #2d3667;
    font-size: 8px;
}

#chevrons
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 12px;
    padding: 9px 14px;
}

#chevrons i
{
    display: block;
    height: 50%;
    color: #d1dede;
    font-size: 10px;
    text-align: right;
}

#options-view-button:checked + #select-button #chevrons i
{
    color: #2d3667;
}

.options
{
    position: absolute;
    left: 0;
    width: 100px;
}

#options
{
    position: absolute;
    top: 42px;
    right: 0;
    left: 0;
    width: 100px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
}

#options-view-button:checked ~ #options
{
    border: 1px solid #e2eded;
    border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

.option
{
    position: relative;
    line-height: 1;
    transition: 0.3s ease all;
    z-index: 2;
}

.option i
{
    position: absolute;
    left: 14px;
    padding: 0;
    display: none;
}

#options-view-button:checked ~ #options .option i
{
    display: block;
    padding: 12px 0;
}

.label
{
    display: none;
    padding: 0;
    margin-left: 27px;
}

#options-view-button:checked ~ #options .label
{
    display: block;
    padding: 12px 14px;    
}

.s-c
{
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
}

.s-c.top
{
    top: 0;
}

.s-c.bottom
{
    bottom: 0;
}

input[type="radio"]
{
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 50%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
}

.s-c:hover ~ i
{
    color: #fff;
    opacity: 0;
}

.s-c:hover
{
    height: 100%;
    z-index: 1;
}

.s-c.bottom:hover + i
{
    bottom: -25px;
    animation: moveup 0.3s ease 0.1s forwards;
}

.s-c.top:hover ~ i
{
    top: -25px;
    animation: movedown 0.3s ease 0.1s forwards;
}

@keyframes moveup
{
    0%{ bottom: -25px; opacity: 0;}
    100%{ bottom: 0; opacity: 1;}
}

@keyframes movedown
{
    0%{ top: -25px; opacity: 0;}
    100%{ top: 0; opacity: 1;}
}

.label
{
    transition: 0.3s ease all;
}

.opt-val
{
    position: absolute;
    left: 14px;
    width: 217px;
    height: 21px;
    opacity: 0;
    background-color: #fff;
    transform: scale(0);
}

.option input[type="radio"]:checked ~ .opt-val
{
    opacity: 1;
    transform: scale(1);
}

.option input[type="radio"]:checked ~ i
{
    top: 0;
    bottom: auto;
    opacity: 1;
    animation: unset;
}

.option input[type="radio"]:checked ~ i, .option input[type="radio"]:checked ~ .label
{
    color:#fff;
}

.option input[type="radio"]:checked ~ .label:before
{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
}

#options-view-button:not(:checked) ~ #options .option input[type="radio"]:checked ~ .opt-val
{
    top: -30px;
}

.option:nth-child(1) input[type="radio"]:checked ~ .label:before
{
    background-color: #000;
    border-radius: 4px 4px 0 0;
}

.option:nth-child(1) input[type="radio"]:checked ~ .opt-val
{
    top: -31px;
}

.option:nth-child(2) input[type="radio"]:checked ~ .label:before
{
    background-color: #ea4c89;
}

.option:nth-child(2) input[type="radio"]:checked ~ .opt-val
{
    top: -71px;
}

.option:nth-child(3) input[type="radio"]:checked ~ .label:before
{
    background-color: #0057ff;
}

.option:nth-child(3) input[type="radio"]:checked ~ .opt-val
{
    top: -111px;
}

.option:nth-child(4) input[type="radio"]:checked ~ .label:before
{
    background-color: #32c766;
}

.option:nth-child(4) input[type="radio"]:checked ~ .opt-val
{
    top: -151px;
}

.option:nth-child(5) input[type="radio"]:checked ~ .label:before
{
    background-color: #f48024;
}

.option:nth-child(5) input[type="radio"]:checked ~ .opt-val
{
    top: -191px;
}

.option:nth-child(6) input[type="radio"]:checked ~ .label:before
{
    background-color: #006400;
    border-radius: 0 0 4px 4px;
}

.option:nth-child(6) input[type="radio"]:checked ~ .opt-val
{
    top: -231px;
}

.option .fa-codepen
{
    color: #000;
}

.option .fa-dribbble
{
    color: #ea4c89;
}

.option .fa-behance
{
    color: #0057ff;
}

.option .fa-hackerrank
{
    color: #32c766;
}

.option .fa-stack-overflow
{
    color: #f48024;
}

.option .fa-free-code-camp
{
    color: #006400;
}

#option-bg
{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 40px;
    transition: 0.3s ease all;
    z-index: 1;
    display: none;
}

#options-view-button:checked ~ #options #option-bg
{
    display: block;
}

.option:hover .label
{
    color: #fff;
}

.option:nth-child(1):hover ~ #option-bg
{
    top: 0;
    background-color: #000;
    border-radius: 4px 4px 0 0;
}

.option:nth-child(2):hover ~ #option-bg
{
    top: 30px;
    background-color: #ea4c89;
}

.option:nth-child(3):hover ~ #option-bg
{
    top: 50px;
    background-color: #0057ff;
}

.option:nth-child(4):hover ~ #option-bg
{
    top: 80px;
    background-color: #32c766;
}

.option:nth-child(5):hover ~ #option-bg
{
    top: 140px;
    background-color: #f48024;
}

.option:nth-child(6):hover ~ #option-bg
{
    top: 180px;
    background-color: #006400;
    border-radius: 0 0 4px 4px;
}

#ytd-url {
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px 14px;
  margin: 20px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  background-color: #143240;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(20, 50, 64, 0.76);
}
.v-input--switch__track {
	height: 18px;
	width: 50px;
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
	height: 23px;
	width: 23px;
}
.v-input--selection-controls__ripple{
	width: 36px;
	height: 36px;
}
.v-input--selection-controls.v-input {
	margin-top: 0;
	padding-top: 0;
}
.v-input__slot {
	margin-bottom: 0;
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
	left: -11px;
	top: -11px;
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
}
.v-input--switch__track {
	opacity: 1;
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
			
			this.$el.querySelectorAll('.pin-'+command+ ' input').forEach(item => {
					if(item.getAttribute('data-tvid') == TVID) {
						//Açık/Kapalı Array'den item silmek
						if(command == "ka"){
							if(value == 1) {
								this.openDeviceLength++;
								this.closeDeviceLength--;
							} else {
								this.closeDeviceLength++;
								this.openDeviceLength--;
							}
						}
						var testTag = item.closest('.pin-' + command)
						console.log('TESTTAG',testTag);
						if(value == 1) {
							$(testTag).removeClass('red--text text--darken-3').addClass('v-input--is-label-active v-input--is-dirty success--text');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track span').removeClass('close-switch-text').addClass('open-switch-text');
							$(testTag).find('.v-input--switch__track span').text('On');
							$(testTag).find('.v-input--switch__thumb').removeClass('red--text text--darken-3').addClass('success--text');
						} else {
							$(testTag).removeClass('v-input--is-label-active v-input--is-dirty success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track span').removeClass('open-switch-text').addClass('close-switch-text');
							$(testTag).find('.v-input--switch__track span').text('Off');
							$(testTag).find('.v-input--switch__thumb').removeClass('success--text').addClass('red--text text--darken-3');
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
						if(item.getAttribute('data-tvid') == TvID && tvDurum == 1) {
							var testTag = item.closest('.pin-ka');
							$(testTag).removeClass('red--text text--darken-3').addClass('v-input--is-label-active v-input--is-dirty success--text');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track').removeClass('red--text text--darken-3').addClass('success--text');
							$(testTag).find('.v-input--switch__track span').removeClass('close-switch-text').addClass('open-switch-text');
							$(testTag).find('.v-input--switch__track span').text('On');
							$(testTag).find('.v-input--switch__thumb').removeClass('red--text text--darken-3').addClass('success--text');
						}
						else if(item.getAttribute('data-tvid') == TvID && tvDurum == 0){
							$(testTag).removeClass('v-input--is-label-active v-input--is-dirty success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--selection-controls__ripple').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track').removeClass('success--text').addClass('red--text text--darken-3');
							$(testTag).find('.v-input--switch__track span').removeClass('open-switch-text').addClass('close-switch-text');
							$(testTag).find('.v-input--switch__track span').text('Off');
							$(testTag).find('.v-input--switch__thumb').removeClass('success--text').addClass('red--text text--darken-3');
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
			var command = val.target.getAttribute('data-pin')
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
			$('.v-overlay').removeClass('v-overlay--active').css('display','none');
		},
		overlayOpen: function() {
			$('.v-overlay').addClass('v-overlay--active').css('display','flex');
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
					if(item.NoSignal == 1) {
						this.noSignalDeviceLength++;
					}
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
						dynamicFilterType.push({text:tag.value,sortable:false,type:tag.getAttribute('data-pin'),optionsKey:tag.getAttribute('data-options-key').split(','),optionsValue:tag.getAttribute('data-options-value').split(',')});
					}
				})
				console.log('test Value : ',test);
				console.log(item)
			})
			console.log('Dynamic : ',dynamicFilterType)
			console.log('Dynamic : ',this.headersForTransactionList)
			var i;
			for(i = 0;i< dynamicFilterType.length;i++){
				this.filterAttributes.push({fieldType: dynamicFilterType[i].type,fieldKey: dynamicFilterType[i].optionsKey, fieldValue: dynamicFilterType[i].optionsValue});
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
		this.$mqtt.subscribe('home/attributesUp/#', function(message){
			console.log('ATTRIBUTESUP : ',message);
		});
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