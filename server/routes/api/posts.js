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

client.on('connect', function () {
    console.log('connect');
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
                        console.log('Zaman Aşımı '+item.Token+' Connection 0 updated');
                    })
                    console.log(item.Last_Update,'15 dakika geçti');
                }else{
                    sql = "UPDATE Device_Status SET Connection_Status = 1 WHERE Token = ? AND TvID = ?";
                    db.all(sql, [item.Token,item.TvID], (err, rows) => { 
                    })
                    console.log(item.Last_Update,'15 dakika Geçmedi');
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
                        console.log('Zaman Aşımı '+item.token+' Connection 0 updated');
                    })
                    console.log(item.last_update,'15 dakika geçti');
                }else{
                    mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 1 WHERE token = ? AND tv_id = ?";
                    connection.query(mysqlQuery, [item.token,item.tv_id], (err, rows) => {
                        
                    })
                    console.log(item.last_update,'15 dakika Geçmedi');
                }
            });
        })
        connection.query(mysqlQueryLed,[],(err,results,fields) => {
            results.forEach(item => {
                console.log('mysqlLed : ',item);
                var timestampSave = Date.parse(item.last_update);
                var timestampCurrent = Date.now();
                console.log('timestamp : ',timestampCurrent, 'Current : ',timestampSave)
                var testStamp = timestampCurrent-timestampSave;
                console.log('timestamp Fark : ',testStamp)
                if(testStamp > 900000) {
                    console.log('15 dakkadan fazla');
                    var mysqlUpdateQuery = "UPDATE led_devices SET connection_status = 0 WHERE token = ?";
                    console.log(item.token);
                    connection.query(mysqlUpdateQuery,[item.token,item.sender_id,item.receiver_id],(err,result,fields) => {
                        console.log('Connection Update OK! 0')
                    })
                }else{
                    var mysqlUpdateQuery = "UPDATE led_devices SET connection_status = 1 WHERE token = ?";
                    connection.query(mysqlUpdateQuery,[item.token],(err,result,fields) => {
                        console.log(item.token);
                        console.log('Connection Update OK! 1')
                    })
                    console.log("15 dakikadan az");
                }
            })
        })
    }, 30000);
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
    console.log('TETETETS',jsonData);
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
                console.log(rows);
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
            console.log('ATTR : ',jsonID);
            console.log('ATTR2 : ',jsonData);
            
            
            var testArray = {km:'remote_lock',ka:'tv_status',kf:'voice_value',kh:'brightness_value',dx:'PictureMode'}
            var selectedPinKey = testArray[Object.keys(jsonData.params)];
            var arrayIDValue = jsonData.params[Object.keys(jsonData.params)].split(',');

            console.log('TVID : ',arrayIDValue[0]);
            console.log('VALUE : ',arrayIDValue[1]);
            selectedTvID = arrayIDValue[0];
            var selectedPinValue = arrayIDValue[1];
            console.log('KEY ', selectedPinKey);
            console.log('VALUE ', jsonData.params[Object.keys(jsonData.params)]);
            sql = "UPDATE Device_Status SET " + selectedPinKey + " = ?, Last_Update = ? WHERE Token = ? AND TvID = ?";
            mysqlQuery = "UPDATE lcd_devices_status SET " + selectedPinKey + " = ?, last_update = ? WHERE token = ? AND tv_id = ?";
            db.all(sql,[selectedPinValue,dateTime,token,selectedTvID],(err,rows)=>{
                console.log("Token : ",token,"TVID : ",selectedTvID,"Serial Number : ",selectedSerialNumber,'KEY : ',selectedPinKey);
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
            console.log('TV DURUM : ',tvDurum);
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
                db.all(sql,[dateTime,nosignal,temperature,firmwareVersion,token,TvID],(err,rows)=>{
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
            console.log(arraySerialNumber);
            arraySerialNumber.forEach(function(item,index) {
                console.log(jsonTvIdList[index]);
                db.all(sql,[token,item],(err,rows) => {
                    if(rows.length == 0){
                        sql = "INSERT INTO Device_Status(Token,TvID,Serial_Number,Brand,IP_Address) VALUES (?,?,?,?,?)";
                        db.all(sql,[token,jsonTvIdList[index],item,tvBrand,ipAddress],(err,rows)=>{
                            console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
                        })
                    }
                })
                connection.query(mysqlQuery,[token,item],(err,result,fields) => {
                    if(rows.length == 0){
                        mysqlQuery = "INSERT INTO lcd_devices_status(token,tv_id,serial_number,brand,ip_address) VALUES (?,?,?,?,?)";
                        connection.query(sql,[token,jsonTvIdList[index],item,tvBrand,ipAddress],(err,rows)=>{
                            console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
                        })
                    }
                })
                getCountry(ipAddress,token,jsonTvIdList[index])
            });
            
            }
            else if(jsonData.method == 'setDeviceModel') {
                jsonTvIdList = jsonData.params.tvIds.split(',');
                tvModels = jsonData.params.tvModel.split(',');
                jsonTvIdList.splice(jsonTvIdList.length-1,1);
                console.log(jsonTvIdList)
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
                    console.log(tvModels[index],item);
                    db.all(sql,[tvModels[index],dateTime,item],(err,rows)=>{
                        console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",tvModels[index]);
                    })
                    connection.query(mysqlQuery,[tvModels[index],dateTime,item],(err, result, fields) => {
                        console.log('Model Number - Last Update UPDATE OK!');
                    })
                });
            }
            break;
    }
})
async function getCountry(ip,token,jsonTvIdList) {
    console.log('GET COUNTRY : ',ip,token,jsonTvIdList)
  try {
    const response = await axios.get('http://ip-api.com/json/'+ip+'?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query');
    
    var jsonData = response.data;
    
    
        sql = "UPDATE Device_Status SET Country = ?,City = ?,Continent = ? WHERE TvID = ? AND Token = ?";
        db.all(sql,[jsonData.country,jsonData.city,jsonData.continent,jsonTvIdList,token],(err,rows)=>{
            console.log('GET COUNTRY : ',jsonData.country,jsonData.city.toLowerCase(),jsonData.continent,jsonTvIdList,token)
        })
        mysqlQuery = "UPDATE lcd_devices_status SET country = ?, city = ?, continent = ? WHERE tv_id AND token = ?";
        connection.query(mysqlQuery,[jsonData.country,jsonData.city,jsonData.continent,jsonTvIdList,token],(err,result,fields)=> {
            console.log('City, country, continent UPDATE OK!')
        })
    
  } catch (error) {
    console.error(error);
  }
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
        console.log('LOAD LED DEVICES',result)
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
            console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
        })
        connection.query(mysqlQuery,[req.body.updateDate,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(error,results,fields) => {
            console.log('success')
        })
    }else {
        sql = "UPDATE Device_Status SET Last_Update = ?," + selectedPinKey + " = ?, Connection_Status = 1 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?," + selectedPinKey + " = ?, connection_status = 1 WHERE token = ? AND tv_id = ? AND serial_number = ?"
        db.all(sql,[req.body.updateDate,req.body.params.value,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(err,rows)=>{
            console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
        })
        connection.query(mysqlQuery,[req.body.updateDate,req.body.token,req.body.params.tvId,req.body.params.tvSerial],(error,results,fields) => {
            console.log('success')
        })
    }
    console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
    
    
    res.send(jsonSendData);
    //client.publish("home/telemetry/" + req.body.token,JSON.stringify(req.body))
})
router.post('/allAttributesUpdate',function(req,res) {
    console.log('POST /allAttributesUpdate ',req.body);
    var jsonData = req.body;
    console.log(jsonData.updateDate)

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
    console.log('DETECT DEVICES : ' + req.body.token);
    client.publish("home/telemetry/"+ req.body.token ,JSON.stringify(req.body))
    .then((response,request) => {
        console.log('SUCCESS POST',response);
        console.log('SUCCESS REQUEST : ',request)
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
          console.log(item.ID);
          console.log(item.deviceName);
          arrayIDList.push(item.ID);
      });
      
      var response = {
        rows
      };
      console.log(req.body,res.body)
      //res.json(rows);
})
connection.query(mysqlQuery,[],(err,result,fields)=> {
    res.json(result)
})
})

router.post('/nameUpdate',function(req,res){
    console.log(`Name Update : ${req.body.deviceId} - ${req.body.name}`)
    var mysqlQuery = "UPDATE led_devices SET device_name = ? WHERE Id = ?";
    connection.query(mysqlQuery, [req.body.name,req.body.deviceId],(err,results,fields) => {
        console.log('Name Update OK!');        
    })
    res.json('Name Update OK!');
})
module.exports = router;
