const { Object } = require('core-js');
const express = require('express');
const mqtt = require('mqtt');
const fs = require('fs');
const axios = require('axios');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'mqtts.labrus.com',
    user:'labrus',
    password:'V3r2t6b6n2*',
    database:'labrusDB'
})

connection.connect();


var caCRT = fs.readFileSync('C:/Users/Labrus-Kamil/Desktop/1/ca.crt');
var mosCRT = fs.readFileSync('C:/Users/Labrus-Kamil/Desktop/1/mosquitto.crt');
var mosKEY = fs.readFileSync('C:/Users/Labrus-Kamil/Desktop/1/mosquitto.key');
console.log('POSTS');
console.log('CACRT : ',caCRT);
console.log('MOSCRT : ',mosCRT);
console.log('MOSKEY : ',mosKEY);

var PORT = 9883;
var HOST = 'mqttServer';

var opts = {
    rejectUnauthorized: true,
    username: 'labrus',
    password: '112233',
    connectTimeout: 5000,
}

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db.db');

var client  = mqtt.connect('wss://mqtts.labrus.com:8083',opts)
/*async function getCountry() {
    const sunriseSunsiteTime = await axios.get('https://api.sunrise-sunset.org/json?lat=41.0096334&lng=28.9651646&formatted=0');
    var jsonDataTime = sunriseSunsiteTime.data.results;
    
    var jsonSunriseTimeHour = parseInt(jsonDataTime.sunrise.split('T')[1].split(':')[0])+3;
    var jsonSunriseTimeMinute = jsonDataTime.sunrise.split(':')[1];
    var jsonSunsetTimeHour = parseInt(jsonDataTime.sunset.split('T')[1].split(':')[0])+3;
    var jsonSunsetTimeMinute = jsonDataTime.sunset.split(':')[1];
    var jsonSunriseTime = jsonDataTime.sunrise.split('T')[0]+'T'+jsonSunriseTimeHour + ':' + jsonSunriseTimeMinute;
    var jsonSunsetTime = jsonDataTime.sunset.split('T')[0]+ 'T' + jsonSunsetTimeHour + ':'+ jsonSunsetTimeMinute;
    
    console.log(jsonDataTime)
    
    mysqlQuery2 = "UPDATE led_devices SET auto_sunrise_time = ?, auto_sunset_time = ?";

        connection.query(mysqlQuery2,[jsonSunriseTime,jsonSunsetTime],(err,result,fields) => {   

    })
}*/
client.on('connect', function () {
    console.log('connect');
    console.log('GET COUNTRY ')
    
    //getCountry();
    setInterval(() => {
        sql = "SELECT * FROM Device_Status";
        mysqlQuery = "SELECT * FROM lcd_devices_status";
        mysqlQueryLed = "SELECT * FROM led_devices";
        var arrayIDList = [];
        var i;
        var today = new Date();
        var date = today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,"0")+'-'+String(today.getDate()).padStart(2,"0");
		var time = String(today.getHours()).padStart(2,"0") + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
        var dateTime = date+' '+time;
        console.log('DATETIME : ',dateTime,time)
        db.all(sql, [], (err, rows) => {
            //console.log('GETDATA : ',rows);
            if (err) {
            throw err;
            }
            rows.forEach(item => {
                var date1 = new Date(item.Last_Update);
                var date2 = new Date(dateTime);
                var diff = date2.getTime() - date1.getTime();
                if(diff > 950000) {
                    sql = "UPDATE Device_Status SET Connection_Status = 0 WHERE Token = ? AND TvID = ?";
                    db.all(sql, [item.Token,item.TvID], (err, rows) => {
                        
                    })
                    
                }else{
                    sql = "UPDATE Device_Status SET Connection_Status = 1 WHERE Token = ? AND TvID = ?";
                    db.all(sql, [item.Token,item.TvID], (err, rows) => { 
                    })
                    
                }
            });
        });
        connection.query(mysqlQuery, [], (err, rows) => {
            //console.log('GETDATA : ',rows);
            if (err) {
            throw err;
            }
            rows.forEach(item => {
                
                var date1 = new Date(item.last_update);
                var date2 = new Date(dateTime);
                var diff = date2.getTime() - date1.getTime();
                if(diff > 950000) {
                    mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 0 WHERE token = ? AND tv_id = ?";
                    connection.query(mysqlQuery, [item.token,item.tv_id], (err, rows) => {
                        
                    })
                   
                }else{
                    mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 1 WHERE token = ? AND tv_id = ?";
                    connection.query(mysqlQuery, [item.token,item.tv_id], (err, rows) => {
                        
                    })
                    
                }
            });
        })
        connection.query(mysqlQueryLed,[],(err,results,fields) => {
            results.forEach(item => {
                
                var timestampSave = Date.parse(item.last_update);
                var timestampCurrent = Date.now();
                
                var testStamp = timestampCurrent-timestampSave;

                //Connection_Status durumu her 15 dakikada güncelleniyor.
                if(testStamp > 900000) {
                    
                    var mysqlUpdateQuery = "UPDATE led_devices SET connection_status = 0 WHERE token = ?";
                    console.log(item.token);
                    connection.query(mysqlUpdateQuery,[item.token,item.sender_id,item.receiver_id],(err,result,fields) => {
                        var jsonData = {
                            method: 'statusUpdateTime',
                            params: {
                                connection_status: 0
                            }
                        }
                        client.publish('home/attribute/led_novastar/' + item.token, JSON.stringify(jsonData));
                    })
                }else{
                    var mysqlUpdateQuery = "UPDATE led_devices SET connection_status = 1 WHERE token = ?";
                    connection.query(mysqlUpdateQuery,[item.token],(err,result,fields) => {
                        var jsonData = {
                            method: 'statusUpdateTime',
                            params: {
                                connection_status: 1
                            }
                        }
                        client.publish('home/attribute/led_novastar/' + item.token, JSON.stringify(jsonData));
                    })
                    
                }
            })
        })
    }, 15000);

    setInterval(() => {
        var date = new Date();
        
        var currentTimeYear = date.getFullYear();
        var currentTimeMonth = date.getMonth();
        var currentTimeDay = date.getDate();
        var currentDayIndex = date.getDay();
        var currentTimeHour = date.getHours();
        var currentTimeMinute = date.getMinutes();
        
        var days = ['Monday','Tuesday','Wednesday','Thusday','Friday','Saturday','Sunday'];
        mysql = "SELECT * FROM led_devices"
        connection.query(mysql,[],(err,result,fields) => {
            result.forEach(item=> {
                var openTimeHour = item.black_screen_open_time.split(":")[0];
                var openTimeMinute = item.black_screen_open_time.split(":")[1];
                var closeTimeHour = item.black_screen_close_time.split(":")[0];
                var closeTimeMinute = item.black_screen_close_time.split(":")[1];
                var DateOpen = new Date(2020, 11, 31, 15, 55).getTime();
                var DateClose = new Date(2020, 11, 31, 16, 10).getTime();
                var currentDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes()).getTime();
                
                var blackOnTime1 = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,openTimeHour,openTimeMinute);
                var blackOffTime1 = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,closeTimeHour,closeTimeMinute);
                console.log('OPEN TIME : ',blackOnTime1);
                console.log('CLOSE TIME ',blackOffTime1);
                console.log('Current TIME : ',currentDate);
                
                //console.log('DATE : ', date.toLocaleString('en-us', {weekday:'long'}))
                if(item.connection_status == 1) {
                    console.log(`Current Time : ${currentTimeHour}:${currentTimeMinute} - Open Time : ${openTimeHour}:${openTimeMinute} - Close Time : ${closeTimeHour}:${closeTimeMinute}`)
                    console.log(item.last_update)
                    
                    /* Black Screen için Automatic seçili olduğunda yapılacak işlemler */

                    if(item.is_black_screen_auto == 1 && item.black_screen_time_options == 'Always') {
                        //var closeTime =  item.black_screen_close_time;
                        //console.log(`OPEN HOUR : ${item.black_screen_open_time.split(":")[0]} MINUTES : ${item.black_screen_open_time.split(":")[1]}`);
                        //console.log(`CLOSE HOUR : ${item.black_screen_close_time.split(":")[0]} MINUTES : ${item.black_screen_close_time.split(":")[1]}`)
                        var blackOnTime = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,openTimeHour,openTimeMinute)
                            
                        var blackOffTime = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,closeTimeHour,closeTimeMinute)
                        console.log('OPEN : ',openTimeHour,'CLOSE : ', closeTimeHour)
                        if(closeTimeHour < openTimeHour) {
                            blackOnTime.setDate(blackOnTime.getDate()-1);
                        }
                            
                        console.log(`Black On Time : ${blackOnTime.getTime()} - Black Off Time : ${blackOffTime.getTime()} - Current Time : ${currentDate}`)
                        if(currentDate >= blackOnTime && currentDate <= blackOffTime) {
                            var jsonData = {
                                msg:'black',
                                value:''
                            };
                        } else {
                            var jsonData = {
                                msg:'normal',
                                value:''
                            };
                        }
                        client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
                    
                        console.log('CLOSE HOUR : ',closeTimeHour, 'CLOSE MIN : ',closeTimeMinute)
                    } else if (item.is_black_screen_auto == 1 && item.black_screen_time_options == 'Week') {
                        var blackScreenWeekDatas = JSON.parse(item.blackscreen_week_options_json)[currentDayIndex-1];
                        
                        var blackOnTime = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,blackScreenWeekDatas.OnTimeHour,blackScreenWeekDatas.OnTimeMinute);
                        var blackOffTime = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,blackScreenWeekDatas.OffTimeHour,blackScreenWeekDatas.OffTimeMinute);
                        if(blackScreenWeekDatas.OffTimeHour < blackScreenWeekDatas.OnTimeHour) {
                            blackOnTime.setDate(blackOnTime.getDate()-1);
                        }
                        if(currentDate >= blackOnTime && currentDate <= blackOffTime) {
                            var jsonData = {
                                msg:'black',
                                value:''
                            };
                        } else {
                            var jsonData = {
                                msg:'normal',
                                value:''
                            };
                        }
                        client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
                    } 
                    

                    /* Sunrise Sunset değerleri otomatik yollanmak istediğinde yapılacak işlemler*/
                    if(item.is_brightness_auto == 1 && item.sun_time_options == "Always"){
                        var sunriseTimeHour = item.sunrise_time.split(':')[0];
                        var sunriseTimeMinute = item.sunrise_time.split(':')[1];
                        var sunriseValue = item.sunrise_value;
                        var sunsetTimeHour = item.sunset_time.split(':')[0];
                        var sunsetTimeMinute = item.sunset_time.split(':')[1];
                        var sunsetValue = item.sunset_value;
                        //console.log(`Sunrise : ${sunriseTimeHour}:${sunriseTimeMinute} = ${sunriseValue} Sunset : ---${sunsetTimeHour} -${sunsetTimeMinute} -${sunsetValue}`)
                        var sunriseTimestamp = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,sunriseTimeHour,sunriseTimeMinute);
                        var sunsetTimestamp = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,sunsetTimeHour,sunsetTimeMinute);
                        if(sunsetTimeHour < sunriseTimeHour) {
                            sunriseTimestamp.setDate(sunriseTimestamp.getDate() - 1);
                        }
                        if(currentDate >= sunriseTimestamp && currentDate <= sunsetTimestamp) {
                            var jsonData = {
                                msg: 'bright',
                                value: sunriseValue.toString()
                            };
                        } else {
                            var jsonData = {
                                msg: 'bright',
                                value: sunsetValue.toString()
                            };
                        }
                        client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
                    } else if (item.is_brightness_auto == 1 && item.sun_time_options == "Automatic") {
                        var sunriseTimeHour = item.auto_sunrise_time.split(':')[0];
                        var sunriseTimeMinute = item.auto_sunrise_time.split(':')[1];
                        var sunriseValue = item.sunrise_value;
                        var sunsetTimeHour = item.auto_sunset_time.split(':')[0];
                        var sunsetTimeMinute = item.auto_sunset_time.split(':')[1];
                        var sunsetValue = item.sunset_value;
                        
                        var sunriseTimestamp = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,sunriseTimeHour,sunriseTimeMinute).getTime();
                        var sunsetTimestamp = new Date(currentTimeYear,currentTimeMonth,currentTimeDay,sunsetTimeHour,sunsetTimeMinute).getTime();
                        if(sunsetTimeHour < sunriseTimeHour) {
                            sunriseTimestamp.setDate(sunriseTimestamp.getDate() - 1);
                        }
                        if(currentDate >= sunriseTimestamp && currentDate <= sunsetTimestamp) {
                            var jsonData = {
                                msg: 'bright',
                                value: sunriseValue.toString()
                            };
                        } else {
                            var jsonData = {
                                msg: 'bright',
                                value: sunsetValue.toString()
                            };
                        }
                        client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
                    }
                }
            })
        })
        
        console.log('HOUR : ',date.getHours(),'MINUTE : ',date.getMinutes())
        
    }, 5000);
    client.subscribe('home', function () {
      console.log("Home topic Listening")
      //var jsonMethod = '{ "method": "getTvId", "params": { } }';
      //client.publish('home/telemetry/mVThJflRGKgZYkZ18!hU', jsonMethod);
    })
    client.subscribe('#', function() {
        console.log("All topics Listening")
    })
    
});

var selectedTvID, selectedSerialNumber;
client.on('message', function (topic, message) {
    // message is Buffer
    
    var topicName = topic.toString();
    console.log(topic.toString());
    console.log(message.toString());
    var jsonData = JSON.parse(message);
    
    var topicArray = topicName.split('/');
    var token = '';
    topicArray.forEach(item => {
        if(item.length == 20) {
            token= item;
        }
    })
    var today = new Date();
    var date = today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,"0")+'-'+String(today.getDate()).padStart(2,"0");
	var time = String(today.getHours()).padStart(2,"0") + ":" + String(today.getMinutes()).padStart(2,"0") + ":" + String(today.getSeconds()).padStart(2,"0");
    var dateTime = date+' '+time;
    console.log('Message JSON DATA : ',jsonData);
    console.log('TOKEN : '+ token + 'TOPIC : '+ topicName);
    
    switch(topicName){
        case 'home/' + token :
            console.log('Home Channel');
            var password = jsonData.params.password;
            if(token != "" && password != "")
            {
                console.log('Token : ',token);
                var sql = 'SELECT * FROM Settings';
                var mysqlQuery = 'SELECT * FROM Settings';
                var arrayIDList = [];
                var arrayPasswordList = [];
                connection.query(mysqlQuery,[],(err,rows,) => {

                })
                db.all(sql, [], (err, rows) => {
                
                rows.forEach(item => {
                    arrayPasswordList.push(item.Password);
                    })
                    if (arrayPasswordList.includes(password)) {
                        console.log('Şifre Doğru');
                        sql = 'SELECT * FROM devices WHERE Token = ?';
                        var arrayTokenList = [];

                        db.all(sql,[token],(err,rows)=>{
                            console.log(rows.length);
                            if (rows.length == 0){
                                console.log('Token Yok')
                                
                                sql = "INSERT INTO devices(Name,Password,Token,Last_Update) VALUES ('labrusNeww',?,?,?)";
                                db.all(sql, [password,token,dateTime], (err, rows) => {
                                    console.log('SUCCESS')
                                    var jsonMethod = '{ "method": "getTvId", "params": { } }';
                                    client.publish('home/telemetry/' + token, jsonMethod);
                                })
                            }
                            else{
                                console.log('Token Var');
                                var jsonMethod = '{ "method": "getTvId", "params": { } }';
                                client.publish('home/telemetry/' + token, jsonMethod);
                            }
                        })
                    }
                    else {
                        console.log('Şifre Yanlış');
                    }
                })
            }
            else {
                console.log('HATA');
            }
            
            break;
        case 'home/attributes/' + token :
            console.log('Attr Channel');
            var jsonID = Object.keys(jsonData);
            //console.log('ATTR : ',jsonID);
            console.log('ATTR2 : ',jsonData);
            
            
            var testArray = {km:'remote_lock',ka:'tv_status',kf:'voice_value',kh:'brightness_value',dx:'PictureMode'}
            var selectedPinKey = testArray[Object.keys(jsonData.params)];
            var arrayIDValue = jsonData.params[Object.keys(jsonData.params)].split(',');

            //console.log('TVID : ',arrayIDValue[0]);
            //console.log('VALUE : ',arrayIDValue[1]);
            selectedTvID = arrayIDValue[0];
            var selectedPinValue = arrayIDValue[1];
            //console.log('KEY ', selectedPinKey);
            //console.log('VALUE ', jsonData.params[Object.keys(jsonData.params)]);
            sql = "UPDATE Device_Status SET " + selectedPinKey + " = ?, Last_Update = ? WHERE Token = ? AND TvID = ?";
            mysqlQuery = "UPDATE lcd_devices_status SET " + selectedPinKey + " = ?, last_update = ? WHERE token = ? AND tv_id = ?";
            db.all(sql,[selectedPinValue,dateTime,token,selectedTvID],(err,rows)=>{
                //console.log("Token : ",token,"TVID : ",selectedTvID,"Serial Number : ",selectedSerialNumber,'KEY : ',selectedPinKey);
            })   

            connection.query(mysqlQuery,[selectedPinValue,dateTime,token,selectedTvID],function (error, results, fields) {
                if (error) throw error;
                console.log('success')
            })

            break;
        case 'home/attributesUp/'+token:
            console.log('AttributesUp Channel');
            
            var dataArray = jsonData.params.up.split(',');
            var TvID = dataArray[0];
            var tvDurum = dataArray[1];
            var nosignal = dataArray[2];
            var temperature = dataArray[3];
            var firmwareVersion = dataArray[4];
            //console.log('TV DURUM : ',tvDurum);
            if(tvDurum == 0){
                sql = "UPDATE Device_Status SET TvStatus = 0,Last_Update = ? WHERE Token = ? AND TvID = ?";
                mysqlQuery = "UPDATE lcd_devices_status SET tv_status = 0, last_update = ? WHERE token = ? AND tv_id = ?";
                db.all(sql,[dateTime,token,TvID],(err,rows)=>{
                    //console.log("Success AttributesUp Update : "+"Token : ",token,"TVID : ",selectedTvID,"Serial Number : ",selectedSerialNumber,'KEY : ',selectedPinKey);
                })   
                connection.query(mysqlQuery,[dateTime,token,TvID],function (error, results, fields) {
                    if (error) throw error;
                    console.log('success')
                })
            }else{
                sql = "UPDATE Device_Status SET Last_Update = ?,TvStatus = 1, NoSignal = ?, TempetureValue = ?, firmwareVersion = ? WHERE Token = ? AND TvID = ?";
                mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?,tv_status = 1, no_signal = ?, temperature_value = ?, firmware_version = ? WHERE token = ? AND tv_id = ?";
                db.all(sql,[dateTime,parseInt(nosignal),temperature,firmwareVersion,token,TvID],(err,rows)=>{
                    //console.log("Success AttributesUp Update ALL");
                })
                connection.query(mysqlQuery,[dateTime,nosignal,temperature,firmwareVersion,token,TvID],function (error, results, fields) {
                    if (error) throw error;
                    console.log('success')
                })
            }
            console.log('TVID : ',TvID,'TvDurum : ',tvDurum, 'No Signal : ', nosignal, 'Temp : ', temperature, 'firmwareVersion : ',firmwareVersion);
            break;
        case 'home/create/'+token:
            var jsonTvIdList = [];
            var tvModels = [];
            
            if(jsonData.method == 'setDevice'){
            console.log('Home2 Channel');
            var dbTvIdList = [];
            var arraySerialNumber = [];
            var dbSerialNumber = [];
            var ipAddress = jsonData.params.ip;
            var tvBrand = jsonData.params.tvName; 
            
            jsonTvIdList = jsonData.params.tvIds.split(',');
            jsonTvIdList.splice(jsonTvIdList.length-1, 1);
            arraySerialNumber = jsonData.params.tvSerial.split(',');
            arraySerialNumber.splice(arraySerialNumber.length-1,1);
            sql = "SELECT TvID,Serial_Number FROM Device_Status WHERE Token = ? AND Serial_Number = ?";
            mysqlQuery = "SELECT tv-id,serial_number FROM lcd_devices_status WHERE token = ? AND serial_number = ?";
            var test;
            //console.log(arraySerialNumber);
            arraySerialNumber.forEach(function(item,index) {
                //console.log(jsonTvIdList[index]);
                db.all(sql,[token,item],(err,rows) => {
                    if(rows.length == 0){
                        sql = "INSERT INTO Device_Status(Token,TvID,Serial_Number,Brand,IP_Address) VALUES (?,?,?,?,?)";
                        db.all(sql,[token,jsonTvIdList[index],item,tvBrand,ipAddress],(err,rows)=>{
                            //console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
                        })
                    }
                })
                connection.query(mysqlQuery,[token,item],(err,result,fields) => {
                    if(rows.length == 0){
                        mysqlQuery = "INSERT INTO lcd_devices_status(token,tv_id,serial_number,brand,ip_address) VALUES (?,?,?,?,?)";
                        connection.query(sql,[token,jsonTvIdList[index],item,tvBrand,ipAddress],(err,rows)=>{
                            //console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
                        })
                    }
                })
                
            });
            
            }
            else if(jsonData.method == 'setDeviceModel') {
                jsonTvIdList = jsonData.params.tvIds.split(',');
                tvModels = jsonData.params.tvModel.split(',');
                jsonTvIdList.splice(jsonTvIdList.length-1,1);
                //console.log(jsonTvIdList)
                tvModels.splice(tvModels.length-1,1);
                
                tvModels.forEach(function(item,index) { 
                    var tvModelNumberHex = Buffer.from(item,'hex');
                    tvModels[index] = tvModelNumberHex.toString("utf-8");
                })
                sql = "UPDATE Device_Status SET Model_Number = ?,Last_Update = ? WHERE TvID = ?";
                mysqlQuery = "UPDATE lcd_devices_status SET model_number = ?, last_update = ? WHERE tv_id = ?"
                //var tvModelNumberHex = Buffer.from(jsonTvIdList[index],'hex');
                //var tvModelNumber = tvModelNumberHex.toString("utf-8");
                jsonTvIdList.forEach(function(item,index) {    
                    //console.log(tvModels[index],item);
                    db.all(sql,[tvModels[index],dateTime,item],(err,rows)=>{
                        //console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",tvModels[index]);
                    })
                    connection.query(mysqlQuery,[tvModels[index],dateTime,item],(err, result, fields) => {
                        //console.log('Model Number - Last Update UPDATE OK!');
                    })
                });
            }
            break;
            case 'home/led_novastar/telemetry/'+token:
                    
                    console.log('LED NOVASTAR test');
                   
                        if(jsonData.type == 'dvi_status') {
                            mysqlUpdate = "UPDATE led_devices SET last_update = ?,dvi_status = ? WHERE token = ?";
                            connection.query(mysqlUpdate,[dateTime,jsonData.value,token],(err,result,fields)=>{
                               
                            })
                        }else if(jsonData.type == 'screen_on_off') {
                            if(jsonData.value == 'black') {
                                mysqlUpdate = "UPDATE led_devices SET last_update = ?,screen_on_off = 1 WHERE token = ?"
                            }else {
                                mysqlUpdate = "UPDATE led_devices SET last_update = ?,screen_on_off = 0 WHERE token = ?"
                            }
                            
                            connection.query(mysqlUpdate,[dateTime,token],(err,result,fields)=>{
                                
                            })
                        }else if(jsonData.type == 'brightness_status') {
                            mysqlUpdate = "UPDATE led_devices SET last_update = ?,brightness_value = ? WHERE token = ?"
                            connection.query(mysqlUpdate,[dateTime,jsonData.value,token],(err,result,fields)=>{
                                
                            })
                        }else if(jsonData.type == 'firmware_version') {
                            mysqlUpdate = "UPDATE led_devices SET last_update = ?,firmware_version = ? WHERE token = ?"
                            connection.query(mysqlUpdate,[dateTime,jsonData.value,token],(err,result,fields)=>{
                                
                            })
                        }else if(jsonData.type == 'model_id') {
                            mysqlUpdate = "UPDATE led_devices SET last_update = ?,model_name = ? WHERE token = ?"
                            connection.query(mysqlUpdate,[dateTime,jsonData.value,token],(err,result,fields)=>{
                                
                            })
                        }else if(jsonData.type == 'voltage' && jsonData.value !== 'Finish') {
                            var getDataQuery = "SELECT * FROM led_devices_status WHERE token = ? AND sender_id = ? AND receiver_id = ?"
                            connection.query(getDataQuery,[token,jsonData.sender_id,jsonData.receiver_id],(err,result,fields)=>{
                                if(result.length == 0){
                                    var insertData = "INSERT INTO led_devices_status(token,sender_id,receiver_id,voltage_value) VALUES(?,?,?,?)" 
                                    connection.query(insertData,[token,jsonData.sender_id,jsonData.receiver_id,jsonData.value]);
                                }else{
                                    mysqlUpdate = "UPDATE led_devices_status SET last_update = ?,voltage_value = ? WHERE token = ? AND sender_id = ? AND receiver_id = ?"
                                    connection.query(mysqlUpdate,[dateTime,jsonData.value,token,jsonData.sender_id,jsonData.receiver_id],(err,result,fields)=>{
                                        
                                    })
                                }
                                console.log(result.length,jsonData);
                            })
                        }else if(jsonData.type == 'temperature' && jsonData.value !== 'Finish') {
                            var getDataQuery = "SELECT * FROM led_devices_status WHERE token = ? AND sender_id = ? AND receiver_id = ?"
                            connection.query(getDataQuery,[token,jsonData.sender_id,jsonData.receiver_id],(err,result,fields)=>{
                                if(result.length == 0){
                                    var insertData = "INSERT INTO led_devices_status(token,sender_id,receiver_id,temperature_value) VALUES(?,?,?,?)" 
                                    connection.query(insertData,[token,jsonData.sender_id,jsonData.receiver_id,jsonData.value]);
                                }else{
                                    mysqlUpdate = "UPDATE led_devices_status SET last_update = ?,temperature_value = ? WHERE token = ? AND sender_id = ? AND receiver_id = ?"
                                    connection.query(mysqlUpdate,[dateTime,jsonData.value,token,jsonData.sender_id,jsonData.receiver_id],(err,result,fields)=>{
                                        console.log('TEST ')
                                    })
                                }
                                console.log(result.length,jsonData);
                            })
                        }
            break;
            
            case 'createDevice':
                var mysqlQuery = "SELECT * FROM led_devices WHERE token = ?";
                connection.query(mysqlQuery,[jsonData.Token],(err,result,fields) => {
                    if(result.length == 0) {
                        var mysqlQuery = "INSERT INTO led_devices(token,device_name) VALUES (?,'Labrus New Device')"
                        connection.query(mysqlQuery,[jsonData.Token])    
                    }
                })
                getCountryLed(jsonData.ip,jsonData.Token)    
                
            break;
            
            case 'home/led_novastar/attribute/'+token:

            break;
    }
})

async function getCountry(ip,token) {
    //console.log('GET COUNTRY : ',ip,token,jsonTvIdList)
  try {
    const response = await axios.get('http://ip-api.com/json/'+ip+'?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query')
    .then(

    );
    
    var jsonData = response.data;
    
    
        /*sql = "UPDATE Device_Status SET Country = ?,City = ?,Continent = ? WHERE TvID = ? AND Token = ?";
        db.all(sql,[jsonData.country,jsonData.city,jsonData.continent,jsonTvIdList,token],(err,rows)=>{
            //console.log('GET COUNTRY : ',jsonData.country,jsonData.city.toLowerCase(),jsonData.continent,jsonTvIdList,token)
        })*/
        mysqlQuery = "UPDATE lcd_devices SET country = ?, city = ?, continent = ? WHERE token = ?";
        connection.query(mysqlQuery,[jsonData.country,jsonData.city,jsonData.continent,token],(err,result,fields)=> {
            //console.log('City, country, continent UPDATE OK!')
        })
        
  } catch (error) {
    console.error(error);
  }
}
async function getCountryLed(ip,token) {
    //console.log('GET COUNTRY : ',ip,token,jsonTvIdList)
  try {
    const response = await axios.get('http://ip-api.com/json/'+ip+'?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query')
    .then(function (res){
        console.log('RES : ',res.data)
        //getSunriseSunsetLed(res.lat,res.lon,token)
        getSunriseSunsetLed(res.data.lat,res.data.lon,token)
        
        var jsonData = res.data;
        mysqlQuery2 = "UPDATE led_devices SET country = ?, city = ?, continent = ? WHERE token = ?";

        connection.query(mysqlQuery2,[jsonData.country,jsonData.city,jsonData.continent,token],(err,result,fields) => {   
            
        })
    })
        
    
    

    
    
    

    
    
  }catch (error) {
      console.error(error)
  }
}
async function getSunriseSunsetLed(lat,lon,token) {
    const sunriseSunsiteTime = await axios.get('https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+lon+'&formatted=0')
    .then(function(res){
        var date = new Date();
        
        var currentTimeYear = date.getFullYear();
        var currentTimeMonth = date.getMonth();
        var currentTimeDay = date.getDate();
        //var currentDayIndex = date.getDay();
        //var currentTimeHour = date.getHours();
        //var currentTimeMinute = date.getMinutes();
        console.log('RES : ',date)
        var jsonDataTime = res.data.results;
            console.log(new Date(jsonDataTime.sunrise));
            /*var jsonSunriseTimeHour = jsonDataTime.sunrise.split('T')[1].split(':')[0];
            var jsonSunriseTimeMinute = jsonDataTime.sunrise.split(':')[1];
            var jsonSunsetTimeHour = jsonDataTime.sunset.split('T')[1].split(':')[0];
            var jsonSunsetTimeMinute = jsonDataTime.sunset.split(':')[1];
            
            var jsonSunriseTime = jsonSunriseTimeHour+':'+jsonSunriseTimeMinute;
            var jsonSunsetTime = jsonSunsetTimeHour+':'+jsonSunsetTimeMinute;*/
            var selectedDateSunrise = new Date(jsonDataTime.sunrise)
            var selectedDateSunset = new Date(jsonDataTime.sunset)
            var mysqlQuery2 = "UPDATE led_devices SET auto_sunrise_time = ?,auto_sunset_time = ? WHERE token = ?";
                connection.query(mysqlQuery2,[selectedDateSunrise,selectedDateSunset,token],(err,result,fields) => {   
                    
                    
                })
    })
        
            
}

const router = express.Router();

router.get('/',(req,res) => {
    res.send('hello');
})

router.get('/loadLcdDevices', (req,res)=>{
    let sql = 'SELECT * FROM Device_Status';
    var mysqlQuery = 'SELECT * FROM lcd_devices_status';
    var arrayIDList = [];
//    db.all(sql, [], (err, rows) => {
//        console.log('GETDATA : ',rows);
//        if (err) {
//        throw err;
//      }
//      
//      rows.forEach(item => {
//          arrayIDList.push(item.ID);
//      });
//      
//      var response = {
//        rows
//      };
//      console.log(req.body,res.body)
//      res.json(rows);
//})

connection.query(mysqlQuery,[],(err,result,fields) => {
    res.json(result)
})
})

router.get('/loadLedDevices',(req,res)=>{
    var mysqlQuery = "SELECT * FROM led_devices";
    connection.query(mysqlQuery,[],(err,result,fields) => {
        
        res.json(result);
    })
})
router.post('/test',function(req,res){  
    //selectedTvID = req.body.params.tvId;
    //selectedSerialNumber = req.body.params.tvSerial;
    var testArray = {km:'remote_lock',ka:'tv_status',kf:'voice_value',kh:'brightness_value',dx:'picture_mode'}
    var selectedPinKey = testArray[req.body.params.command];
    console.log('POST /TEST API ADDRESS');
    var jsonSendData = {
        TVID : req.body.params.tvId,
        command : req.body.params.command,
        value: req.body.params.value
    }
    if(req.body.params.value == '') {
        sql = "UPDATE Device_Status SET Last_Update = ?, Connection_Status = 0 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?, connection_status = 0 WHERE token = ? AND tv_id = ? AND serial_number = ?"
        db.all(sql,[req.body.updateDate,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(err,rows)=>{
            //console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
        })
        connection.query(mysqlQuery,[req.body.updateDate,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(error,results,fields) => {
            console.log('success')
        })
    }else {
        sql = "UPDATE Device_Status SET Last_Update = ?," + selectedPinKey + " = ?, Connection_Status = 1 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?," + selectedPinKey + " = ?, connection_status = 1 WHERE token = ? AND tv_id = ? AND serial_number = ?"
        db.all(sql,[req.body.updateDate,req.body.params.value,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(err,rows)=>{
            //console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
        })
        connection.query(mysqlQuery,[req.body.updateDate,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(error,results,fields) => {
            console.log('success')
        })
    }
    //console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
    
    
    res.send(jsonSendData);
    //client.publish("home/telemetry/" + req.body.token,JSON.stringify(req.body))
})
router.post('/allAttributesUpdate',function(req,res) {
    console.log('POST /allAttributesUpdate ',req.body);
    var jsonData = req.body;
    //console.log(jsonData.updateDate)

    if(jsonData.params.tvDurum == 0){
        sql = "UPDATE Device_Status SET Connection_Status = 1,Last_Update = ?, TvStatus = 0 WHERE Token = ? AND TvID = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 1, last_update = ?,tv_status = 0 WHERE token = ? AND tv_id = ?";
        db.all(sql,[req.body.updateDate,jsonData.token,jsonData.params.tvId],(err,rows)=>{
            //console.log("Success AttributesUp Update : "+"Token : ",token,"TVID : ",selectedTvID,'DATETIME : ',jsonData.updateDate);
        })   
        connection.query(mysqlQuery,[req.body.updateDate,jsonData.token,jsonData.params.tvId],(err,result,fields) => {
            console.log("All Attributes Update OK! TV STATUS = 0");
        })
    } else {
        console.log(jsonData.updateDate)
        sql = "UPDATE Connection_Status = 1,Device_Status SET Last_Update = ?, TvStatus = 1, NoSignal = ?, TempetureValue = ?, firmwareVersion = ? WHERE Token = ? AND TvID = ?";
        mysqlQuery = "UPDATE connection_status = 1, device_status SET last_update = ?, tv_status = 1, no_signal = ?, temperature_value = ?, firmware_version = ? WHERE token = ? AND tv_id = ?";
        db.all(sql,[jsonData.updateDate,jsonData.params.nosignal,jsonData.params.temperature,jsonData.params.firmwareVersion,jsonData.token,jsonData.params.tvId],(err,rows)=> {
            console.log('UPDATE DATE : ',jsonData.updateDate,'NO SIGNAL : ',jsonData.params.nosignal,'Temperature :',jsonData.params.temperature,'FirmwareVersion : ',jsonData.params.firmwareVersion,jsonData.token,jsonData.tvId);
        })
        connection.query(mysqlQuery, [jsonData.updateDate,jsonData.params.nosignal,jsonData.params.temperature,jsonData.params.firmwareVersion,jsonData.token,jsonData.params.tvId],(err,results,fields) => {
            console.log('All Attributes Update OK! Tv Status = 1');        
        })
    }
    res.send('testing');
});
router.post('/detectDevices',function(req,res){
    //console.log('DETECT DEVICES : ' + req.body.token);
    client.publish("home/telemetry/"+ req.body.token ,JSON.stringify(req.body))
    .then((response,request) => {
        //console.log('SUCCESS POST',response);
        //console.log('SUCCESS REQUEST : ',request)
        response.end();
    }).catch((err) =>  {
        console.log(err);
    });
})

router.get('/loadDevicesGroupBy', function(req,res) {
    console.log('Group By');
    let sql = 'SELECT sum(TvStatus) AS OpenTV,count(TvStatus) AS TotalTV,City FROM Device_Status GROUP BY City';
    var mysqlQuery = "SELECT sum(tv_status) AS OpenTV, count(tv_status) AS TotalTV,City FROM lcd_devices_status GROUP BY City";
    var arrayIDList = [];
    db.all(sql, [], (err, rows) => {
        console.log('GETDATA : ',rows);
        if (err) {
        throw err;
      }
     
      rows.forEach(item => {
          //console.log(item.ID);
          //console.log(item.deviceName);
          arrayIDList.push(item.ID);
      });
      
      var response = {
        rows
      };
      //console.log(req.body,res.body)
      //res.json(rows);
})
connection.query(mysqlQuery,[],(err,result,fields)=> {
    res.json(result)
})
})

router.post('/nameUpdate',function(req,res){
    var mysqlQuery;
    var data = req.body;
    
    //console.log('Data : ',data);
    //console.log(`Name Update : ${data.deviceId} - ${data.name}`)
    if(data.isBrightnessAuto == false && data.blackScreenAuto == false) {

        mysqlQuery = "UPDATE led_devices SET device_name = ?,is_brightness_auto = ?,is_black_screen_auto = ? WHERE Id = ?";
        connection.query(mysqlQuery, [data.name,data.isBrightnessAuto,data.blackScreenAuto, data.deviceId],(err,results,fields) => {
            console.log('Name Update OK!');
        })

    }else if(data.isBrightnessAuto && data.blackScreenAuto) {
        mysqlQuery = "UPDATE led_devices SET device_name = ?,sunrise_value = ?, sunset_value = ?, sunrise_time = ?, sunset_time = ?,black_screen_open_time = ?, black_screen_close_time = ?,is_brightness_auto = 1,is_black_screen_auto = 1,black_screen_time_options = ?,sun_time_options = ?,blackscreen_week_options_json = ?  WHERE Id = ?";
        connection.query(mysqlQuery, [data.name,data.sunriseValue,data.sunsetValue,data.sunriseTime,data.sunsetTime,data.blackScreenOpenTime,data.blackScreenCloseTime,data.blackScreenTimeOptions,data.sunTimeOptions,JSON.stringify(data.blackScreenWeekData),data.deviceId],(err,results,fields) => {
            console.log('Name Update OK!');
            console.log(err);
            console.log(mysqlQuery);
        })
    }else if(data.isBrightnessAuto){
        mysqlQuery = "UPDATE led_devices SET device_name = ?,sunrise_value = ?, sunset_value = ?, sunrise_time = ?, sunset_time = ?,is_brightness_auto = 1,is_black_screen_auto = ?, sun_time_options = ? WHERE Id = ?";
        connection.query(mysqlQuery, [data.name,data.sunriseValue,data.sunsetValue,data.sunriseTime,data.sunsetTime,data.blackScreenAuto,data.sunTimeOptions,data.deviceId],(err,results,fields) => {
            console.log('Name Update OK!');
            console.log(err);
            console.log(mysqlQuery);
        })
    } else if (data.blackScreenAuto){
        mysqlQuery = "UPDATE led_devices SET device_name = ?, black_screen_open_time = ?, black_screen_close_time = ?,is_brightness_auto = ?,is_black_screen_auto = 1,black_screen_time_options = ?,blackscreen_week_options_json = ? WHERE Id = ?";
        connection.query(mysqlQuery, [data.name,data.blackScreenOpenTime,data.blackScreenCloseTime,data.isBrightnessAuto,data.blackScreenTimeOptions,JSON.stringify(data.blackScreenWeekData),data.deviceId],(err,results,fields) => {
            console.log('Name Update OK!');
            console.log(err);
            console.log(mysqlQuery);
            console.log(data.name,data.sunriseValue,data.sunsetValue,data.sunriseTime,data.sunsetTime,data.deviceId,data.blackScreenAuto)
            console.log('JSON : ',JSON.stringify(data.blackScreenWeekData))
        })
    }
   
    res.json('Name Update OK!');
})
module.exports = router;
