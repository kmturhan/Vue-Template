<template>
	<div class="col-md-7 col-12">
		<v-container fluid class="pt-0 grid-list-xl" style="margin-left:0;">
			<section-tooltip :title="$t('message.settings')" :tooltip="$t('message.settings')"></section-tooltip>

			<v-form v-model="form1.valid" ref="form">
					<v-text-field
						label="Name"
						v-model="form1.name"
						:rules="form1.nameRules"
						:counter="30"
						required></v-text-field>
					<v-text-field
						label="E-mail"
						v-model="form1.email"
						:rules="form1.emailRules"
						required></v-text-field>
					<v-select
						label="Screen Update Time"
						v-model="form2.select"
						:items="form2.items"
						:rules="[v => !!v || 'Item is required']"
						required
					></v-select>
					<v-menu
						ref="menu"
						:close-on-content-click="false"
						v-model="menu2"
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
								label="Datetime"
								v-model="time"
								prepend-icon="access_time"
								readonly
							></v-text-field>
						</template>
						<v-time-picker v-model="time" @change="$refs.menu.save(time)"></v-time-picker>
						
					
					</v-menu>	
					<v-menu 
						ref="menu1"  
						:close-on-content-click="false" 
						v-model="menu1" 
						transition="scale-transition" 
						offset-y 
						
						:nudge-right="40" 
						min-width="290px" 
						:return-value.sync="date1"
						>
						<template v-slot:activator="{ on }">
							<v-text-field 
								v-on="on" 
								label="Date in M/D/Y format" 
								v-model="dateFormatted" 
								prepend-icon="event" 
								@blur="date1 = parseDate(dateFormatted)" 
								readonly
								>
							</v-text-field>
						</template>
						<v-date-picker 
							v-model="date1" 
							@input="dateFormatted = formatDate($event)" 
							no-title 
							scrollable
							>
							<v-spacer></v-spacer>
							<v-btn color="error" @click="menu1 = false">Cancel</v-btn>
							<v-btn color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
						</v-date-picker>
					</v-menu>
						<v-btn
						@click="submit"
						:disabled="!form2.valid"
						color="success"
						class="mr-3"
					>
						{{$t("message.submit")}}
					</v-btn>
						<v-btn @click="clear" color="primary">{{$t("message.clear")}}</v-btn>
						
				</v-form>
		</v-container>
	</div>
</template>

<script>
// charts component

//import Sales from "Components/Charts/SalesChartV2";
//import LineChartWithArea from "Components/Charts/LineChartWithArea";

// // widgets
//import RecentSale from "Components/Widgets/RecentSales";
//import SupportRequest from "Components/Widgets/SupportRequestV2";
//import ToDoList from "Components/Widgets/ToDoList";
//import Invoice from "Components/Widgets/Invoice";
//import RecentOrders from "Components/Widgets/RecentOrders";
//import WeeklySales from "Components/Widgets/WeeklySales.vue";
//import Reviews from "Components/Widgets/Reviews";
//import SocialFeeds from "Components/Widgets/SocialFeeds";
//import TopSelling from "Components/Widgets/TopSelling";
//import NewPost from "Components/Widgets/AddNewBlog";
//import BlogLayoutOne from "Components/Widgets/BlogLayoutOne";
//import BlogLayoutFour from "Components/Widgets/BlogLayoutFour";
//import CategorySale from "Components/Widgets/CategorySales";
//import DeviceShare from "Components/Widgets/DeviceShare";

//import { ChartConfig } from "Constants/chart-config";

export default {
  components: {
   
    //RecentSale,
    //SupportRequest,
    //Sales,
    //ToDoList,
    //Invoice,
    //RecentOrders,
    //CategorySale,
    //LineChartWithArea,
    //WeeklySales,
    //Reviews,
    //SocialFeeds,
    //TopSelling,
    //NewPost,
    //BlogLayoutOne,
    //BlogLayoutFour,
    //DeviceShare
  },
  data() {
    return {
		dateFormatted: null,
		menu2:false,
		date1: null,
		menu1: false,
		time:null,
		date2: new Date().toISOString().substr(0, 10),
	form1: {
        valid: false,
        name: "",
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
      }
    };
  },
  methods:{
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
		console.log(this.form1.email);
		console.log(this.form2.select);
		console.log(this.time)
		console.log(this.date1)

      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
