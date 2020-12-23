<template>

	<div>
	
	<v-dialog v-model="dialog3" max-width="800px">
						<v-card>
							<v-card-title>
								<span>Edit Screen {{selectedName}}</span>
								<v-spacer></v-spacer>
								<v-menu>
									<template v-slot:activator="{ on }">
										<v-btn icon v-on="on">
											<v-icon @click.stop="dialog3=false">close</v-icon>
										</v-btn>
									</template>
								</v-menu>
							</v-card-title>
							<v-row style="width:85%;margin-left:auto;margin-right:auto;">
								<v-form v-model="form1.valid" ref="form" style="display:flex;flex-direction:column;" class="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12">
									<div style="display:flex;">
									<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
									
									<v-text-field
										label="Name"
										v-model="form1.name"
										:rules="form1.nameRules"
										:counter="30"
										required></v-text-field>
										<div style="position:relative;">
										<v-checkbox
											class=""
											:label="$t('Sunrise / Sunset')"
											color="primary"
											v-model="checked"
										></v-checkbox>
										<label style="position:absolute;top:19px;font-size:8px;left:32px;">*test</label>
										</div>
									<div style="display:flex;justify-content:space-around;border:1px solid white;border-radius:10px;padding:10px;height:160px" v-if="checked">
										<div>
											<span>test</span>
										</div>
										
										<div style="display:flex;flex-direction:column" class="col-6">
										
										<v-menu
											ref="menu"
											:close-on-content-click="false"
											v-model="menu1"
											transition="scale-transition"
											offset-y
											:nudge-right="40"
											max-width="290px"
											min-width="290px"
											:return-value.sync="time"
										>
											<template v-slot:activator="{ on }">
												<v-text-field
													v-on="on"
													label="Sunrise Time"
													v-model="time"
													prepend-icon="access_time"
													readonly
													:rules="form1.timeRules"
													required
												></v-text-field>
											</template>
											<v-time-picker v-model="time" @change="$refs.menu.save(time)"></v-time-picker>
										</v-menu>
										<!--<v-text-field
										label="Sunrise Time"
										v-model="sunriseItem.time"
										:rules="form1.nameRules"
										:counter="5"
										
										required></v-text-field>-->
										<div style="position:relative">
										<div style="display:flex;align-items:center;">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 511.99998 511.99998" style="width:20px;height:20px;fill:white;"><path d="m271 112.011719c-4.929688-.507813-9.929688-.769531-15-.769531-79.824219 0-144.757812 64.933593-144.757812 144.757812 0 79.820312 64.933593 144.753906 144.757812 144.753906 5.070312 0 10.070312-.257812 15-.769531 72.800781-7.527344 129.765625-69.222656 129.765625-143.984375s-56.964844-136.457031-129.765625-143.988281zm0 257.765625v-227.558594c56.222656 7.371094 99.769531 55.578125 99.769531 113.78125s-43.546875 106.410156-99.769531 113.777344zm0 0"/><path d="m256 89.542969c8.28125 0 15-6.71875 15-15v-59.542969c0-8.285156-6.71875-15-15-15-8.285156 0-15 6.714844-15 15v59.542969c0 8.28125 6.714844 15 15 15zm0 0"/><path d="m256 422.457031c-8.285156 0-15 6.71875-15 15v59.542969c0 8.285156 6.714844 15 15 15 8.28125 0 15-6.714844 15-15v-59.542969c0-8.285156-6.714844-15-15-15zm0 0"/><path d="m89.542969 256c0-8.285156-6.71875-15-15-15h-59.542969c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15h59.542969c8.28125 0 15-6.714844 15-15zm0 0"/><path d="m497 241h-59.542969c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15h59.542969c8.285156 0 15-6.71875 15-15 0-8.285156-6.714844-15-15-15zm0 0"/><path d="m113.484375 134.695312c2.929687 2.929688 6.769531 4.394532 10.605469 4.394532 3.839844 0 7.675781-1.464844 10.605468-4.394532 5.855469-5.859374 5.855469-15.355468 0-21.210937l-43.285156-43.285156c-5.855468-5.859375-15.355468-5.859375-21.210937 0-5.859375 5.855469-5.859375 15.351562 0 21.210937zm0 0"/><path d="m398.515625 377.304688c-5.855469-5.859376-15.351563-5.859376-21.210937 0-5.855469 5.855468-5.855469 15.351562 0 21.210937l43.285156 43.285156c2.929687 2.929688 6.769531 4.394531 10.605468 4.394531 3.839844 0 7.675782-1.464843 10.605469-4.394531 5.855469-5.859375 5.855469-15.355469 0-21.210937zm0 0"/><path d="m113.484375 377.304688-43.285156 43.285156c-5.855469 5.855468-5.855469 15.351562 0 21.210937 2.929687 2.929688 6.765625 4.394531 10.605469 4.394531 3.835937 0 7.675781-1.464843 10.605468-4.394531l43.285156-43.285156c5.855469-5.859375 5.855469-15.355469 0-21.210937-5.855468-5.859376-15.355468-5.859376-21.210937 0zm0 0"/><path d="m387.910156 139.089844c3.839844 0 7.675782-1.464844 10.605469-4.394532l43.285156-43.285156c5.855469-5.859375 5.855469-15.355468 0-21.210937-5.855469-5.859375-15.355469-5.859375-21.210937 0l-43.285156 43.285156c-5.859376 5.855469-5.859376 15.351563 0 21.210937 2.929687 2.929688 6.765624 4.394532 10.605468 4.394532zm0 0"/></svg>
											<v-slider v-model="sunriseItem.val" v-bind:max="255" :thumb-color="sunriseItem.color" thumb-label data-pin="kh" data-id="34" aria-disabled="false"></v-slider>
										</div>
										<label style="position:absolute;top:32px;left:66px;font-size:14px;">{{sunriseItem.val}}</label>
										</div>
										</div>
										<div style="display:flex;flex-direction:column;" class="col-7">
										<v-menu
											ref="menu2"
											:close-on-content-click="false"
											v-model="menu2"
											transition="scale-transition"
											offset-y
											:nudge-right="40"
											max-width="290px"
											min-width="290px"
											:return-value.sync="time2"
										>
											<template v-slot:activator="{ on }">
												<v-text-field
													v-on="on"
													label="Sunset Time"
													v-model="time2"
													prepend-icon="access_time"
													readonly
													:rules="form1.timeRules"
													required
												></v-text-field>
											</template>
											<v-time-picker v-model="time2" @change="$refs.menu2.save(time2)"></v-time-picker>
										</v-menu>
										<!--<v-text-field
										label="Sunset Time"
										v-model="sunsetItem.time"
										:rules="form1.nameRules"
										:counter="5"
										required></v-text-field>-->
										<div style="position:relative;">
										<div style="display:flex;align-items:center;">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 511.99998 511.99998" style="width:20px;height:20px;fill:white;"><path d="m271 112.011719c-4.929688-.507813-9.929688-.769531-15-.769531-79.824219 0-144.757812 64.933593-144.757812 144.757812 0 79.820312 64.933593 144.753906 144.757812 144.753906 5.070312 0 10.070312-.257812 15-.769531 72.800781-7.527344 129.765625-69.222656 129.765625-143.984375s-56.964844-136.457031-129.765625-143.988281zm0 257.765625v-227.558594c56.222656 7.371094 99.769531 55.578125 99.769531 113.78125s-43.546875 106.410156-99.769531 113.777344zm0 0"/><path d="m256 89.542969c8.28125 0 15-6.71875 15-15v-59.542969c0-8.285156-6.71875-15-15-15-8.285156 0-15 6.714844-15 15v59.542969c0 8.28125 6.714844 15 15 15zm0 0"/><path d="m256 422.457031c-8.285156 0-15 6.71875-15 15v59.542969c0 8.285156 6.714844 15 15 15 8.28125 0 15-6.714844 15-15v-59.542969c0-8.285156-6.714844-15-15-15zm0 0"/><path d="m89.542969 256c0-8.285156-6.71875-15-15-15h-59.542969c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15h59.542969c8.28125 0 15-6.714844 15-15zm0 0"/><path d="m497 241h-59.542969c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15h59.542969c8.285156 0 15-6.71875 15-15 0-8.285156-6.714844-15-15-15zm0 0"/><path d="m113.484375 134.695312c2.929687 2.929688 6.769531 4.394532 10.605469 4.394532 3.839844 0 7.675781-1.464844 10.605468-4.394532 5.855469-5.859374 5.855469-15.355468 0-21.210937l-43.285156-43.285156c-5.855468-5.859375-15.355468-5.859375-21.210937 0-5.859375 5.855469-5.859375 15.351562 0 21.210937zm0 0"/><path d="m398.515625 377.304688c-5.855469-5.859376-15.351563-5.859376-21.210937 0-5.855469 5.855468-5.855469 15.351562 0 21.210937l43.285156 43.285156c2.929687 2.929688 6.769531 4.394531 10.605468 4.394531 3.839844 0 7.675782-1.464843 10.605469-4.394531 5.855469-5.859375 5.855469-15.355469 0-21.210937zm0 0"/><path d="m113.484375 377.304688-43.285156 43.285156c-5.855469 5.855468-5.855469 15.351562 0 21.210937 2.929687 2.929688 6.765625 4.394531 10.605469 4.394531 3.835937 0 7.675781-1.464843 10.605468-4.394531l43.285156-43.285156c5.855469-5.859375 5.855469-15.355469 0-21.210937-5.855468-5.859376-15.355468-5.859376-21.210937 0zm0 0"/><path d="m387.910156 139.089844c3.839844 0 7.675782-1.464844 10.605469-4.394532l43.285156-43.285156c5.855469-5.859375 5.855469-15.355468 0-21.210937-5.855469-5.859375-15.355469-5.859375-21.210937 0l-43.285156 43.285156c-5.859376 5.855469-5.859376 15.351563 0 21.210937 2.929687 2.929688 6.765624 4.394532 10.605468 4.394532zm0 0"/></svg>
										<v-slider v-model="sunsetItem.val" v-bind:max="255" :thumb-color="sunsetItem.color" thumb-label data-pin="kh" data-id="34" aria-disabled="false"></v-slider>
										
										</div>
										<label style="position:absolute;top:32px;left:66px;font-size:14px;">{{sunsetItem.val}}</label>
										</div>
										</div>
									</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
										<div style="position:relative;margin-top:67px;">
										<v-checkbox
											class=""
											:label="$t('Black Screen On/Off')"
											color="primary"
											v-model="checkedSwitch"
										></v-checkbox>
										<label style="position:absolute;top:19px;font-size:8px;left:32px;">*test</label>
										</div>
										<div v-if="checkedSwitch" style="display:flex;border:1px solid white;border-radius:10px;padding:20px 10px;height:160px;">
											<v-menu
											ref="timeBlackScreenOffEdit"
											:close-on-content-click="false"
											v-model="timeBlackScreenOffEdit"
											transition="scale-transition"
											offset-y
											:nudge-right="40"
											max-width="290px"
											min-width="290px"
											:return-value.sync="timeBlackScreenOff"
										>
											<template v-slot:activator="{ on }">
												<v-text-field
													v-on="on"
													label="On Time"
													v-model="timeBlackScreenOff"
													prepend-icon="access_time"
													readonly
													:rules="form1.timeRules"
													required
												></v-text-field>
											</template>
											<v-time-picker v-model="timeBlackScreenOff" @change="$refs.timeBlackScreenOffEdit.save(timeBlackScreenOff)"></v-time-picker>
										</v-menu>
											<v-menu
											ref="timeBlackScreenOnEdit"
											:close-on-content-click="false"
											v-model="timeBlackScreenOnEdit"
											transition="scale-transition"
											offset-y
											:nudge-right="40"
											max-width="290px"
											min-width="290px"
											:return-value.sync="timeBlackScreenOn"
										>
											<template v-slot:activator="{ on }">
												<v-text-field
													v-on="on"
													label="Off Time"
													v-model="timeBlackScreenOn"
													prepend-icon="access_time"
													readonly
													:rules="form1.timeRules"
													required
												></v-text-field>
											</template>
											<v-time-picker v-model="timeBlackScreenOn" @change="$refs.timeBlackScreenOnEdit.save(timeBlackScreenOn)"></v-time-picker>
										</v-menu>
											
										</div>
									</div>
									</div>
									<!--<v-text-field
										label="Day Light"
										v-model="form1.day_light"
										
										:counter="30"
										required></v-text-field>
										<v-text-field
										label="Day Sun Set"
										v-model="form1.day_sun_set"
										
										:counter="30"
										required></v-text-field>-->
										<div style="width:100%;align-items:center;justify-content:center;display:flex;">
										<v-btn
										@click="submit"
										:disabled="!form2.valid"
										color="success"
										class="mr-3"
										style="width:40%;"
										>
										
										{{$t("Save")}}
									</v-btn>
									<v-btn
										@click.stop="dialog3 = false"
										:disabled="!form2.valid"
										color="secondary"
										class="mr-3"
										style="width:40%;"
										>
										
										{{$t("Cancel")}}
									</v-btn>
									</div>
								</v-form>
							</v-row>
							
							<v-card-actions>
								<!--<v-btn color="error" @click.stop="dialog3=false">Save</v-btn>-->
							</v-card-actions>
						</v-card>
					</v-dialog>
	
		
		<div class="table-responsive">
			<!--<button @click="websocketPub">Test</button>-->
			<!--<button @click="clickSub">attributesUp</button><br><br>-->
			<!--<button class="mx-4 my-4 v-btn v-btn--contained theme--light v-size--small primary" @click="overlayOpen">Filter</button>-->
			<!--<div class="v-overlay theme--light" style="z-index: 99;display:none;">
				<div class="v-overlay__scrim" style="opacity: 0.5; background-color: rgb(33, 33, 33); border-color: rgb(33, 33, 33);" @click="overlayClose">
				
				</div>
				<div class="filter-overlay" style="width:100vh;height:400px;background-color:white;z-index:999;position: relative;">
					<i class="ti-close" style="cursor:pointer;color:black !important;position:absolute;right:10px;top:10px;" @click="overlayClose"></i>
		
					<app-card colClasses="col-12 col-md-12 mt-5" style="flex-wrap:wrap;height:340px">
						<p>{{ name1 }}</p>
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
			</div>-->
			
			<v-data-table :headers="headersForTransactionList" :items="deviceList"
				hide-default-footer>
				<template v-slot:item="{ item }">
					<tr>
						<td>{{deviceList.indexOf(item) + 1}}</td>
						<!--<td class="text-nowrap">{{ item.Id }}</td>-->
						<td style="display:flex;align-items:center;justify-content:center;">
							<div style="display:flex;align-items:center;height:100%;" id="name-info" :data-device-id="item.Id">
								<label>
									<!--<a href="/default/crypto/market-cap" style="text-decoration:underline;">{{item.device_name}}</a>-->
									{{item.device_name}}
								</label>
								<!--<svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -1 401.52289 401" width="15" @click="showInput" style="fill:white;margin-left:10px;"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>-->
							</div>
							<br>
							<div style="display:none;"  id="name-change" >
								<div style="display:flex;align-items:center;">
								<input type="text" @blur="leaveInput" :value="item.device_name" style="width:140px;height:30px;text-align:center;border:2px solid white;border-radius:10px;padding:0 5px;width:auto;" :data-device-id="item.Id"> 
								<svg class="" xmlns="http://www.w3.org/2000/svg" @click="leaveInput" id="Bold" enable-background="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15" style="margin-left:5px;display:block;fill:#0f9c0e;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
								</div>
							</div>
						</td>
						<td>{{ item.brand }}</td>
						<td>{{ item.model_name}}</td>
						<td v-if="item.connection_status == 1" style="">
							<svg class="device-connection device-connect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="10" style="display:block;margin-right:auto;margin-left:auto;fill:#0f9c0e;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
							<svg class="device-connection device-disconnect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;height:15px;width:15px;display:none;margin-right:auto;margin-left:auto;fill:#e4002b" xml:space="preserve"><g>	<g id="cloud-off">		<path d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25    c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5    c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65    l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65z     M196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
						</td>
						<td v-if="item.connection_status == 0" style="margin-right:auto;margin-left:auto;">
							<svg class="device-connection device-connect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="10" style="display:none;margin-right:auto;margin-left:auto;fill:#0f9c0e;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
							<svg class="device-connection device-disconnect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;height:15px;width:15px;display:block;margin-right:auto;margin-left:auto;fill:#e4002b;" xml:space="preserve"><g>	<g id="cloud-off">		<path d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25    c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5    c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65    l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65z     M196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
						</td>
						<td v-if="item.dvi_status == 1 && item.connection_status == 1" style="">
							<svg  class="device-connection device-disconnect" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve" style="enable-background:new 0 0 612 612;height:15px;width:15px;display:none;margin-right:auto;margin-left:auto;fill:#e4002b;"><g>	<g>		<path fill="#e4002b;" d="M562.27,511.274l305.892-305.888c1.935-1.937,1.935-5.809,0-9.68l-44.532-42.592    c-1.936-1.937-3.868-1.937-3.868-1.937c-1.94,0-1.94,0-3.872,1.937L510,459.002l-305.887-306.13    c-1.939-1.936-3.873-1.936-3.873-1.936c-1.939,0-1.939,0-3.872,1.936l-44.528,44.77c-1.939,1.935-1.939,5.808,0,9.68    L457.728,513.21L151.84,816.92c-1.939,1.936-1.939,5.808,0,9.68l42.592,44.527c1.936,1.939,3.869,1.939,3.869,1.939    s1.939,0,3.873-1.939L510,563.545l305.889,305.89c1.936,1.936,3.872,1.936,3.872,1.936s1.935,0,3.868-1.936l42.592-44.532    c1.94-1.935,1.94-5.807,0-9.68L562.27,511.274z"/>	</g></g></svg>
							<svg class="device-connection device-connect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="10" style="display:block;margin-right:auto;margin-left:auto;fill:#0f9c0e;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
							<!--<svg class="device-connection device-disconnect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612"  xml:space="preserve"><g>	<g id="cloud-off">		<path d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25    c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5    c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65    l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65z     M196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>-->
						</td>
						<td v-if="item.dvi_status == 0 && item.connection_status == 1" style="margin-right:auto;margin-left:auto;">
							<svg  class="device-connection device-disconnect" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve" style="enable-background:new 0 0 612 612;height:15px;width:15px;margin-right:auto;margin-left:auto;fill:"><g>	<g>		<path fill="#e4002b;" d="M562.27,511.274l305.892-305.888c1.935-1.937,1.935-5.809,0-9.68l-44.532-42.592    c-1.936-1.937-3.868-1.937-3.868-1.937c-1.94,0-1.94,0-3.872,1.937L510,459.002l-305.887-306.13    c-1.939-1.936-3.873-1.936-3.873-1.936c-1.939,0-1.939,0-3.872,1.936l-44.528,44.77c-1.939,1.935-1.939,5.808,0,9.68    L457.728,513.21L151.84,816.92c-1.939,1.936-1.939,5.808,0,9.68l42.592,44.527c1.936,1.939,3.869,1.939,3.869,1.939    s1.939,0,3.873-1.939L510,563.545l305.889,305.89c1.936,1.936,3.872,1.936,3.872,1.936s1.935,0,3.868-1.936l42.592-44.532    c1.94-1.935,1.94-5.807,0-9.68L562.27,511.274z"/>	</g></g></svg>
							<svg class="device-connection device-connect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="10" viewBox="0 0 24 24" width="10" style="display:none;margin-right:auto;margin-left:auto;fill:#0f9c0e;"><path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"/></svg>
							<!--<svg class="device-connection device-disconnect" :class="'device-status-'+item.Id"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;height:15px;width:15px;margin-top:12px;cursor:pointer;display:block;margin-right:auto;margin-left:auto;fill:#e4002b;" xml:space="preserve"><g>	<g id="cloud-off">		<path d="M494.7,229.5c-17.851-86.7-94.351-153-188.7-153c-38.25,0-73.95,10.2-102,30.6l38.25,38.25    c17.85-12.75,40.8-17.85,63.75-17.85c76.5,0,140.25,63.75,140.25,140.25v12.75h38.25c43.35,0,76.5,33.15,76.5,76.5    c0,28.05-15.3,53.55-40.8,66.3l38.25,38.25C591.6,438.6,612,400.35,612,357C612,290.7,558.45,234.6,494.7,229.5z M76.5,109.65    l71.4,68.85C66.3,183.6,0,249.9,0,331.5c0,84.15,68.85,153,153,153h298.35l51,51l33.15-33.15L109.65,76.5L76.5,109.65z     M196.35,229.5l204,204H153c-56.1,0-102-45.9-102-102c0-56.1,45.9-102,102-102H196.35z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>-->
						</td>
						<td v-if="item.connection_status == 0"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="10" height="10" viewBox="0 0 510.842 510.843" style="enable-background:new 0 0 510.842 510.843;fill: red;" xml:space="preserve"><g>	<g>		<path d="M214.646,412.929c-4.425,0-8.011,3.586-8.011,8.011v81.892c0,4.425,3.586,8.012,8.011,8.012h81.891    c4.426,0,8.012-3.587,8.012-8.012v-81.886c0-4.425-3.586-8.011-8.012-8.011h-81.891V412.929z"/>		<path d="M235.901,379.128h39.382c4.424,0,8.359-3.568,8.781-7.975l24.322-251.281V8.011c0-4.425-3.588-8.011-8.012-8.011h-89.909    c-4.425,0-8.011,3.586-8.011,8.011v111.861l24.657,251.287C227.542,375.56,231.477,379.128,235.901,379.128z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></td>
						<td>-</td>
						<td class="tvRemoteLock input-control" :data-tvid="item.Id" :data-value="item.screen_on_off">
							{{item.screen_on_off}}
            <div v-if="item.screen_on_off == 1"  :data-value="item.screen_on_off">
								<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls" >
									<div class="v-input__control v-input--switch v-input--is-label-active success--text"  :class="[item.connection_status == 1 ? 'input-switch-enabled' : 'input-switch-disabled','tv-id-'+item.Id]" :data-value="item.screen_on_off" @click="clickPub">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input class="switch-input" aria-checked="false" role="switch" type="checkbox"  aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.token" :data-TvID="item.Id" checked="checked" :data-serial-number="item.serial_number" data-on="01" data-off="00" value="red darken-3">
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
							
							<div v-else-if="item.screen_on_off == 0" ref="thebutton" :data-value="item.screen_on_off">
								<div class="pin-km v-input v-input--hide-details theme--light v-input--selection-controls v-input--switch">
									<div class="v-input__control" :class="[item.connection_status == 1 ?  'input-switch-enabled' : 'input-switch-disabled','tv-id-'+item.Id]" :data-value="item.screen_on_off" @click="clickPub">
										<div class="v-input__slot">
											<div class="v-input--selection-controls__input">
												<input class="switch-input" aria-checked="false" role="switch" type="checkbox"   aria-disabled="false" data-pin="km" data-swc="1" :data-token="item.token" :data-TvID="item.Id" checked="checked" :data-serial-number="item.serial_number" data-on="01" data-off="00" value="red darken-3">
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
						
						<td class="pin-kh input-gauch " data-pin="kh" :data-token="item.token" :data-TvID="item.Id" :data-serial-number="item.serial_number" :class="[item.connection_status == 1 ? 'input-switch-enabled':'input-switch-disabled','tv-id-'+item.Id]">
							<v-slider v-model="item.brightness_value" v-bind:max="255" :thumb-color="ex3.color" thumb-label @mousedown="mousedownn" @mouseup="mouseupp" data-pin="kh" :data-token="item.token" :data-TvID="item.Id" :data-serial-number="item.Serial_Number" aria-disabled="false"></v-slider>
						</td>
						
						<!--<td>{{ item.temperature_value }} °C</td>-->
						<!--<td>{{ item.voltage_value}} V</td>-->
						
						
						<td>{{ item.firmware_version }}</td>
						<!--<td>{{new Date(item.last_update).toLocaleDateString()}} {{new Date(item.last_update).toLocaleTimeString()}}</td>-->
						<td>{{ String((new Date(item.last_update).getDate())).padStart(2,"0")+'-'+String(((new Date(item.last_update).getMonth()+1))).padStart(2,"0")+'-'+new Date(item.last_update).getFullYear() + " "+String((new Date(item.last_update).getHours())).padStart(2,"0") + ':'+String((new Date(item.last_update).getMinutes())).padStart(2,"0")+ ":"+String((new Date(item.last_update).getSeconds())).padStart(2,"0")}}</td>
						<td @click="dropdownMoreMenu" class="td-options" style="display:flex;align-items:center;justify-content:center;" :data-name="item.device_name" :data-id="item.Id">
							<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;width:15px;height:15px;cursor:pointer;fill:white;" xml:space="preserve"><g>	<path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>	<path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>	<path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
							<ul class="more-list" @mousedown="menuClose" @click.stop="settingsMenu = false">
								<a href="/default/crypto/market-cap"><li>Manage</li></a><hr>
								<li @click.stop="dialog3 = true" :data-device-id="item.Id" @click="assignDeviceID" :data-device-name="item.device_name" :data-token="item.token">Edit</li>
							</ul>
						</td>
						
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
			<!--<div style="position:relative">
			<v-switch v-model="ex" color="red darken-3"  style="position:relative;"> 
			</v-switch>
			<span style="position:absolute;top:0">{{ex == true ? 'ON':'OFF'}}</span>
			</div>-->
			<!--<button class="danger" @click="clickTest">Test</button>-->
		</div>
	</div>
</template>
<style>
.v-picker__title {
	height: 75px;
	padding: 0 16px !important;
}
.v-time-picker-title__time .v-picker__title__btn, .v-time-picker-title__time span  {
	font-size: 40px !important;
}
.v-time-picker-title .v-time-picker-title__ampm.v-time-picker-title__ampm--readonly {
	font-size: 12px;
}
.v-menu__content.theme--dark.v-menu__content--fixed.menuable__content__active {
	min-width: 230px !important;
}
.v-picker__body {
	width: 230px !important;
	height: 230px !important;
}
.v-menu__content .theme--dark .v-menu__content--fixed .menuable__content__active{
	min-width: 210px;
}
.v-text-field__slot label {
	font-size: 14px;
}
.v-form .v-input--selection-controls__ripple {
	left: -13px !important;
	top: calc(50% - 25px) !important;
}
.v-form .v-input--is-label-active .v-input--selection-controls__ripple {
	left: -13px !important;
	top: calc(50% - 25px) !important;
}
.v-text-field__details{
	margin-top: 5px;
}
div.v-input__slot {
	left: 0 !important;
}
.td-options {
	position: relative;
}
ul.more-list {
	position: absolute;
	background-color: white;
	margin-left: auto;
	margin-right: auto;
	flex-direction: column;
	left: -95px;
	border-radius: 10px;
	padding-left: 0 !important;
	
}
ul.more-list  li {
	width: 150px;
	background-color: white;
	cursor: pointer;
	color: black !important;
	padding: 5px;
	list-style-type: none;
	transition: all .5s ease;
	border-bottom: solid 1px black;
	display: none;
}
ul.more-list li:hover {
	background-color: lightgray;
	
}
ul.more-list hr {
	margin:0;
}
.tv-close-svg {
	right: 4px;
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
div.input-switch {
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
div.v-input--selection-controls__ripple-custom {
	width: 36px;
	height: 36px;
	left: -13px !important;
	top: calc(50% - 22px) !important;
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
div.v-input--switch__track {
	height: 20px;
	width: 60px;
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
	right: 2px;
}
.v-input--selection-controls__ripple{
	width: 36px;
	height: 36px;
	left: -18px !important;
	top: calc(50% - 22px);
}
.v-input--is-label-active .v-input--switch__thumb  {
	right: -40px;
}
.v-input--is-label-active .v-input--switch__thumb.success--text {
	right: -40px;
}
.v-input--is-label-active .v-input--selection-controls__ripple {
	left: 29px !important;
	top: calc(50% - 22px) !important;
}
div.v-input--selection-controls.v-input {
	margin-top: 0;
	padding-top: 0;
}
div.v-input__slot {
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


import axios from 'axios'
import JQuery from 'jquery'
//import Dashboard from 'Views/Dashboard.vue'
import { tabsAndTableDetails } from 'Views/crypto/data.js'

let $ = JQuery;

export default {
	data () {
		return {
			settingsMenu:false,
			checkedSwitch:false,
			selectedInfoItem:[],
			selectedName: "",
			test:[{val:40,color:'red'}],
			checked:false,
			deviceName: "",
			selectedDeviceID: 0,
			dialog3: false,
			ex:'ON',
			deviceList: [],
			val: '',
			name1: [],
			e1:null,
			filterType:[],
			selectedTvID: 0,
			selectedPin: '',
			selectedtag:'',
			interval: 0,
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
			ex3: { label: "thumb-color", val: 40, color: "red" },
			sunriseItem: { label: "thumb-color", val: 40, color: "red",time: "15:30"},
			sunsetItem:{ label:"thumb-color",val:100, color:"red", time:"17:00"},
			gaugeValue: [],
			selector: "",
			val0: 0,
			unreachableDevices: 0,
			dateFormatted: null,
		menu2:false,
		date1: null,
		menu1: false,
		
		time:null,
		time1:null,
		time2:null,
		timeBlackScreenOnEdit: false,
		timeBlackScreenOffEdit: false,
		timeBlackScreenOn: null,
		timeBlackScreenOff: null,
		date2: new Date().toISOString().substr(0, 10),
	form1: {
        valid: false,
		name: "",
		time:"15:30",
		timeRules: [
			v => !!v || "Time is required",
		],
        nameRules: [
          v => !!v || "Name is required",
          v => v.length <= 30 || "Name must be less than 30 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ]
      },
      form2: {
        valid: true,
		name: "",
		day_light: "",
		day_sun_set: "",
        nameRules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 30) || "Name must be less than 20 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ],
        select: null,
        items: ["05min", "10min", "15min", "20min"],
        checkbox: false
      },
			headersForTransactionList: [
				{
					text:"#",
					sortable: false,
					value:"#"
				},
				{
					text: "Name",
					sortable: false,
					value:"name"
				},
				{
					text: "Brand",
					sortable: false,
					value: "Brand" 
				},
				{
					text: "Model Name",
					sortable: false,
					value: "Model Name"
				},
				{
					text: "Connection Status",
					sortable: false,
					value: "Connection Status "
				},
				{
					text: "DVI Status",
					sortable: false,
					value: "DVI Status"
				},
				{
					text: "Resolution",
					sortable: false,
					value: "Resolution"
				},
				{
					text: "Black Screen",
					sortable:false,
					value: "Black Screen"
				},
				{
					text: "Brightness Value",
					sortable: false,
					value: "credit"
				},
				{
					text: "Firmware Version",
					sortable: false,
					value:"Firmware Version"
				},
				{
					text: "Last Updated",
					sortable: false,
					value: "Last_Updated"
				},
				{
					text: "",
					sortable: false,
					value: "More"
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
		'home/attribute/led_novastar/#': function(val){
			console.log('TESTSETSETSE')
			var test = String.fromCharCode.apply(null,val);
			var jsonData = JSON.parse(test);
			console.log('LED NOVASTAR : ',jsonData);
			console.log('Screen on off : ',jsonData.params.screen_on_off);
			console.log('ATTR;')
			var updateDeviceList = this.deviceList;
			console.log(updateDeviceList);
			console.log('TEST : ',jsonData.params)
			if(jsonData.params.screen_on_off == 0) {
				console.log("Screen ON OFF : 0")
				this.$el.querySelectorAll('.v-input__control.tv-id-'+this.selectedTvID).forEach(item => {
				console.log('pin-km : ',item)
				$(item).removeClass('v-input--is-label-active  success--text').addClass('red--text text--darken-3');
				$(item).find('.v-input--selection-controls__ripple').removeClass('success--text').addClass('red--text text--darken-3');
				$(item).find('.v-input--switch__track').removeClass('success--text').addClass('red--text text--darken-3');
				$(item).find('.v-input--switch__thumb').removeClass('success--text').addClass('red--text text--darken-3');
				$(item).find('.v-input--switch__track span').addClass('close-switch-text').removeClass('open-switch-text');
				$(item).find('svg').removeClass('tv-close-svg').addClass('tv-open-svg');
				clearInterval(this.interval);
				$('.v-input__control.tv-id-'+this.selectedTvID).removeClass('input-switch-disabled').addClass('input-switch-enabled');
				$('.input-gauch.tv-id-'+this.selectedTvID).addClass('input-switch-enabled').removeClass('input-switch-disabled');
				$(item).find('.v-input--switch__track span').text('Off')
				$(item).children().data('value',0);
				updateDeviceList.forEach((item,index) => {
					if(item.Id == this.selectedTvID) {
						updateDeviceList[index].screen_on_off = 0;
					}
					
					
				})
			})
			}else if (jsonData.params.screen_on_off == 1){
					console.log("SCREEN ON OFF 1")
					this.$el.querySelectorAll('.v-input__control.tv-id-'+this.selectedTvID).forEach(item => {
					console.log('pin-km : ',item)
				$(item).addClass('v-input--is-label-active  success--text').removeClass('red--text text--darken-3');
				$(item).find('.v-input--selection-controls__ripple').addClass('success--text').removeClass('red--text text--darken-3');
				$(item).find('.v-input--switch__track').addClass('success--text').removeClass('red--text text--darken-3');
				$(item).find('.v-input--switch__thumb').addClass('success--text').removeClass('red--text text--darken-3');
				$(item).find('.v-input--switch__track span').removeClass('close-switch-text').addClass('open-switch-text');
				$(item).find('svg').addClass('tv-close-svg').removeClass('tv-open-svg');
				clearInterval(this.interval);
				$('.v-input__control.tv-id-'+this.selectedTvID).removeClass('input-switch-disabled').addClass('input-switch-enabled');
				$('.input-gauch.tv-id-'+this.selectedTvID).addClass('input-switch-enabled').removeClass('input-switch-disabled');
				$(item).children().data('value',1);
				$(item).find('.v-input--switch__track span').text('On')
					updateDeviceList.forEach((item,index) => {
					if(item.Id == this.selectedTvID) {
						updateDeviceList[index].screen_on_off = 1;
					}
					
					
				})
			})
			
			
			console.log('BRIGHTNESS : ',jsonData.params.brigtnessWrite,'TYPEOF  : ',typeof jsonData.params.brigtnessWrite)
			if(typeof jsonData.params.brigtnessWrite !== 'undefined') {
				
				updateDeviceList.forEach((item,index) => {
					updateDeviceList[index].brightness_value = jsonData.params.brigtnessWrite;
				})
			}
			console.log('UPDATE : ',updateDeviceList)
			this.deviceList = updateDeviceList;
			}
		},
	},
	methods: {
		popup: function() {
			$('.popup-overlay').fadeIn();
		},
		menuClose: function(e) {
			console.log(e)
			console.log('test');
		},
		dropdownMoreMenu: function(e) {
			$('.more-list').find('li').hide();
			$(e.target).closest('td').find('.more-list li').show();
			console.log($(e.target).closest('td').find('.more-list li').hasClass('.more-list li'));
		},
		showInput: function() {
			$('#name-change').show();
			
			$('#name-info').hide();
		},
		leaveInput: function(e) {
			console.log(e.target.value);
			var deviceID = e.target.getAttribute('data-device-id');
			var jsonData = {
				name: e.target.value,
				deviceId: deviceID
			}
			axios.post('http://192.168.10.30:5000/api/nameUpDate',jsonData)
			.then(function (response) {
				console.log(response)

				$('#name-change').hide();
				$('#name-info label a').text(e.target.value)
				$('#name-info').show();
			})
			
		},
		clickTest: function() {
			console.log('TEST')
			var token = 'uHmintRAyuvTAkexgHmv';
			var jsonData = { 
				token:token,
				method:"rpcCommand",
				params: {
					commandId: 11,
				}
			}
			this.$mqtt.publish('home/telemetry/led_novastar/'+token, JSON.stringify(jsonData));
		},
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
		
		clickPub: function() {
			var selectedTag = $(event.currentTarget).data('value');
			console.log('Event current:',$(event.currentTarget));
			var commandOnOff;
			var token = event.currentTarget.querySelector('input').getAttribute('data-token');
			var serialNumber = event.currentTarget.querySelector('input').getAttribute('data-serial-number');
			var tvID = event.currentTarget.querySelector('input').getAttribute('data-tvID');
			var command = event.currentTarget.querySelector('input').getAttribute('data-pin');
			var value = event.currentTarget.getAttribute('data-value');
			console.log('SELECTED TAG : ',selectedTag,'VALUE : ',value)
			this.selectedTvID = tvID;
			this.selectedPin = command;
			console.log('TVID :',tvID)
			if(value == 1){
				commandOnOff = '6';
			}
			else if(value == 0){
				commandOnOff = '5';
			}
			var jsonData = {
				method:"rpcCommand",
				params: {
					commandId:commandOnOff,
			}};
		$('.v-input__control.tv-id-'+tvID).removeClass('input-switch-enabled').addClass('input-switch-disabled');
		$('.input-gauch.tv-id-'+tvID).removeClass('input-switch-enabled').addClass('input-switch-disabled');
		
		var i = 0;
		this.interval = setInterval(() => {
			console.log(i++)
			if(i == 7) {
				console.log('Disconnect ');
				console.log(selectedTag)
			$(selectedTag).toggleClass('v-input--is-label-active  success--text').toggleClass('red--text text--darken-3');
			$(selectedTag).find('.v-input--selection-controls__ripple').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(selectedTag).find('.v-input--switch__track').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(selectedTag).find('.v-input--switch__thumb').toggleClass('success--text').toggleClass('red--text text--darken-3');
			$(selectedTag).find('.v-input--switch__track span').toggleClass('close-switch-text').toggleClass('open-switch-text');
			$(selectedTag).find('svg').removeClass('tv-close-svg').addClass('tv-open-svg');
			console.log('CLICK PUB : ',$(selectedTag).closest('tr'));
			
				clearInterval(this.interval);
				$('.v-input__control.tv-id-'+this.selectedTvID).removeClass('input-switch-disabled').addClass('input-switch-enabled');
				$('.input-gauch').removeClass('input-switch-enabled').addClass('input-switch-disabled');
				
				console.log('CLICK PUB : ',$(selectedTag).closest('tr'));
				if($(selectedTag).find('.v-input--switch__track span').text() == "On") {
					$(selectedTag).find('.v-input--switch__track span').text('Off');
				} else {
					$(selectedTag).find('.v-input--switch__track span').text('On')
				}
		this.$el.querySelectorAll('.input-gauch.tv-id-'+this.selectedTvID).forEach(item => {
			console.log(item)
			if(!$(item).closest('tr').find('td.tvstatus .v-input').hasClass('red--text')) {
				$(item).removeClass('input-switch-disabled').addClass('input-switch-enabled');
			}else {
				$(item).removeClass('input-switch-enabled').addClass('input-switch-disabled');
			}
		})
			}
			
		}, 1000);
		console.log('JSONDATA : ',jsonData,serialNumber)
		this.$mqtt.publish('home/telemetry/led_novastar/'+token,JSON.stringify(jsonData));
		},
		loadData() {
			var updateData =[];
			this.unreachableDevices = 0;
			axios.get('http://192.168.10.30:5000/api/loadLedDevices').then(resp => {
				console.log('LED DEVICES : ',resp)
				
				resp.data.forEach((item)=> {

					console.log('Led Devices resp Connection Status : ',item.Connection_Status);
					console.log('LED : ',item)
					
					updateData.push(item)
					
					
					this.sendDataList.push(item);
					
				});
				
				this.deviceList = updateData;
				console.log('Data.js : ',resp.data);
				console.log(this.deviceList);
				console.log('SEND DATA LIST : ',this.sendDataList);
			});
			
		},
		/*detectType() {
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
		},*/
		mouseupp() {
			console.log('UPP')
			var tagName = this.selector.closest('td');
			console.log('TAGNAME : ',tagName)
			//var tvid = tagName.getAttribute('data-TvID');
			var token = tagName.getAttribute('data-token');
			//var serialNumber = tagName.getAttribute('data-serial-number');
			//var pin = tagName.getAttribute('data-pin');	
			var today = new Date();
			var date = today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,"0")+'-'+String(today.getDate()).padStart(2,"0");
			var time = String(today.getHours()).padStart(2,"0") + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
			var dateTime = date+' '+time;
			
			setTimeout(() => {
				var value = this.selector.getAttribute('value');
				console.log('VALUE : ',value,dateTime)
				var jsonData = {
					
					method:"rpcCommand",
					params: {
						commandId: '2',
						brightness: value
						//value:value,
						//command: pin,
						//tvId:tvid
					},
				}
				console.log('TOKEN : ',token)
				this.$mqtt.publish('home/telemetry/led_novastar/'+token,JSON.stringify(jsonData));
				axios.post('http://192.168.10.30:5000/api/test',jsonData)
				
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
	formatDate(date) {
      if (!date) {
        return null;
      }
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) {
        return null;
      }
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
	submit() {
      if (this.$refs.form.validate()) {
		console.log("form submit");
		console.log(this.form1.name);
		console.log('VAL : ',this.sunriseItem.val)
		//console.log(e.target.value);
		//var deviceID = e.target.getAttribute('data-device-id');
		var jsonData = {
			name: this.form1.name,
			deviceId: this.selectedDeviceID,
			sunriseValue: this.sunriseItem.val,
			sunsetValue: this.sunsetItem.val,
			sunriseTime: this.time,
			sunsetTime: this.time2,
			isBrightnessAuto: this.checked,
			blackScreenOpenTime: this.timeBlackScreenOn,
			blackScreenCloseTime: this.timeBlackScreenOff,
			blackScreenAuto: this.checkedSwitch,

		}
		var updateData = this.deviceList;
		axios.post('http://192.168.10.30:5000/api/nameUpDate',jsonData)
		.then(function (response) {
			console.log(response)
			updateData.forEach(item => {
				if(item.Id == jsonData.deviceId) {
					//$('#name-info label a').text(jsonData.name)
					item.device_name = jsonData.name
					item.black_screen_close_time = jsonData.blackScreenCloseTime,
					item.black_screen_open_time = jsonData.blackScreenOpenTime,
					item.sunrise_value = jsonData.sunriseValue,
					item.sunrise_time = jsonData.sunriseTime,
					item.sunsetValue = jsonData.sunsetValue,
					item.sunsetTime = jsonData.sunsetTime,
					item.is_brightness_auto = jsonData.isBrightnessAuto,
					item.is_black_screen_auto = jsonData.blackScreenAuto
				}
			})
		})
		this.deviceList = updateData;

		this.dialog3 = false;
		
		//console.log(this.form1.email);
		//console.log(this.form2.select);
		//console.log(this.time)
		//console.log(this.date1)
      }
	},
	assignDeviceID(e) {
		this.loadData();
		this.selectedDeviceID = e.target.getAttribute('data-device-id')
		console.log('selectedDeviceID : ',this.selectedDeviceID) 
		this.selectedName = e.target.getAttribute('data-device-name');
		this.form1.name = e.target.getAttribute('data-device-name');
		this.deviceList.forEach(item => {
			if(item.Id == this.selectedDeviceID) {
				this.selectedInfoItem = item;
				console.log('ASSIGN DEVICE ID : ',item);
			}
		})
		this.form1.name = this.selectedInfoItem.device_name;
		this.time = this.selectedInfoItem.sunrise_time.split(':')[0] + ":"+ this.selectedInfoItem.sunrise_time.split(':')[1];
		this.time2 = this.selectedInfoItem.sunset_time.split(':')[0] + ":"+this.selectedInfoItem.sunset_time.split(':')[1]
		this.sunsetItem.val = this.selectedInfoItem.sunset_value;
		this.sunriseItem.val = this.selectedInfoItem.sunrise_value;
		this.timeBlackScreenOn = this.selectedInfoItem.black_screen_open_time.split(':')[0] + ":"+ this.selectedInfoItem.black_screen_open_time.split(':')[1];
		this.timeBlackScreenOff = this.selectedInfoItem.black_screen_close_time.split(':')[0] + ":"+ this.selectedInfoItem.black_screen_close_time.split(':')[1];
		
	},
    clear() {
      this.$refs.form.reset();
    }
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
		this.$mqtt.subscribe('home/attribute/led_novastar/#',function(message){
			console.log('Novastar',message);
		})
		
			
	}
}

</script>