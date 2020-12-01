<template>
    <div class="container container--fluid">
         <div class="app-card" >
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
		<div class="flex col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" slot="test">
			<div class="">
				<div class="app-card magazine-stats-card crm-stats-card">
					<!---->
					<div class="app-card-content" style="height:100%;">
						<div class="pa-6 white--text success" v-if="openDeviceLength != 0" style="height:100px;">
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
						<div class="pa-6 white--text grey" style="height:100px;" v-if="openDeviceLength == 0">
							
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
						<div class="pa-6 white--text error" v-if="closeDeviceLength != 0" style="height:100px;">
							<div class="d-custom-flex align-items-center mb-2">
								<span class="d-inline-block font-3x mr-2">
									<i class="zmdi zmdi-money-box"></i>
								</span>
								<span class="d-inline-block font-lg fw-bold">Kapalı Cihaz Sayısı : 0</span>
                        
							<!--<div class="d-custom-flex align-items-center justify-space-between">
								<span class="fw-bold">Cihaz Sayısı : {{ closeDeviceLength }}</span>
							</div>-->
							</div>
							
						</div>
						<div class="pa-6 white--text grey" style="height:100%;" v-if="closeDeviceLength == 0">
							<div class="" style="height:100px; width: 100%; position: relative;text-align:center;align-items:center;justify-content:center;display:flex;">
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
						<div class="pa-6 white--text error" style="height:100px; display:flex;">
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
						<div class="pa-6 white--text error" style="height:100px; display:flex;">
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
         </div>
      </div>
</template>