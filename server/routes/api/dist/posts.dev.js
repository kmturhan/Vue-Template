"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('core-js'),
    Object = _require.Object;

var express = require('express');

var mqtt = require('mqtt');

var fs = require('fs');

var axios = require('axios');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'mqtts.labrus.com',
  user: 'labrus',
  password: 'V3r2t6b6n2*',
  database: 'labrusDB'
});
connection.connect();
var caCRT = fs.readFileSync('C:/Users/Labrus-Kamil/Desktop/1/ca.crt');
var mosCRT = fs.readFileSync('C:/Users/Labrus-Kamil/Desktop/1/mosquitto.crt');
var mosKEY = fs.readFileSync('C:/Users/Labrus-Kamil/Desktop/1/mosquitto.key');
console.log('POSTS');
console.log('CACRT : ', caCRT);
console.log('MOSCRT : ', mosCRT);
console.log('MOSKEY : ', mosKEY);
var PORT = 9883;
var HOST = 'mqttServer';
var opts = {
  rejectUnauthorized: true,
  username: 'labrus',
  password: '112233',
  connectTimeout: 5000
};

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db.db');
var client = mqtt.connect('wss://mqtts.labrus.com:8083', opts);
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
  console.log('connect'); //getCountry();

  setInterval(function () {
    sql = "SELECT * FROM Device_Status";
    mysqlQuery = "SELECT * FROM lcd_devices_status";
    mysqlQueryLed = "SELECT * FROM led_devices";
    var arrayIDList = [];
    var i;
    var today = new Date();
    var date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, "0") + '-' + String(today.getDate()).padStart(2, "0");
    var time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
    var dateTime = date + ' ' + time;
    console.log('DATETIME : ', dateTime, time);
    connection.query(mysqlQuery, [], function (err, rows) {
      //console.log('GETDATA : ',rows);
      if (err) {
        console.log(err);
      }

      rows.forEach(function (item) {
        var date1 = new Date(item.last_update);
        var date2 = new Date(dateTime);
        var diff = date2.getTime() - date1.getTime();

        if (diff > 950000) {
          mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 0 WHERE token = ? AND tv_id = ?";
          connection.query(mysqlQuery, [item.token, item.tv_id], function (err, rows) {});
        } else {
          mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 1 WHERE token = ? AND tv_id = ?";
          connection.query(mysqlQuery, [item.token, item.tv_id], function (err, rows) {});
        }
      });
    });
    connection.query(mysqlQueryLed, [], function (err, results, fields) {
      results.forEach(function (item) {
        var timestampSave = Date.parse(item.last_update);
        var timestampCurrent = Date.now();
        var testStamp = timestampCurrent - timestampSave; //Connection_Status durumu her 15 dakikada güncelleniyor.

        if (testStamp > 900000) {
          var mysqlUpdateQuery = "UPDATE led_devices SET connection_status = 0 WHERE token = ?";
          console.log(item.token);
          connection.query(mysqlUpdateQuery, [item.token, item.sender_id, item.receiver_id], function (err, result, fields) {
            var jsonData = {
              method: 'statusUpdateTime',
              params: {
                connection_status: 0
              }
            };
            client.publish('home/attribute/led_novastar/' + item.token, JSON.stringify(jsonData));
          });
        } else {
          var mysqlUpdateQuery = "UPDATE led_devices SET connection_status = 1 WHERE token = ?";
          connection.query(mysqlUpdateQuery, [item.token], function (err, result, fields) {
            var jsonData = {
              method: 'statusUpdateTime',
              params: {
                connection_status: 1
              }
            };
            client.publish('home/attribute/led_novastar/' + item.token, JSON.stringify(jsonData));
          });
        }
      });
    });
  }, 15000);
  setInterval(function () {
    var date = new Date();
    var currentTimeYear = date.getFullYear();
    var currentTimeMonth = date.getMonth();
    var currentTimeDay = date.getDate();
    var currentDayIndex = date.getDay();
    var currentTimeHour = date.getHours();
    var currentTimeMinute = date.getMinutes();
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
    mysql = "SELECT * FROM led_devices";
    connection.query(mysql, [], function (err, result, fields) {
      if (_typeof(result) != undefined) result.forEach(function (item) {
        var openTimeHour = item.black_screen_open_time.split(":")[0];
        var openTimeMinute = item.black_screen_open_time.split(":")[1];
        var closeTimeHour = item.black_screen_close_time.split(":")[0];
        var closeTimeMinute = item.black_screen_close_time.split(":")[1];
        var DateOpen = new Date(2020, 11, 31, 15, 55).getTime();
        var DateClose = new Date(2020, 11, 31, 16, 10).getTime();
        var currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()).getTime();
        var blackOnTime1 = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, openTimeHour, openTimeMinute);
        var blackOffTime1 = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, closeTimeHour, closeTimeMinute);
        console.log('OPEN TIME : ', blackOnTime1);
        console.log('CLOSE TIME ', blackOffTime1);
        console.log('Current TIME : ', currentDate); //console.log('DATE : ', date.toLocaleString('en-us', {weekday:'long'}))

        if (item.connection_status == 1) {
          console.log("Current Time : ".concat(currentTimeHour, ":").concat(currentTimeMinute, " - Open Time : ").concat(openTimeHour, ":").concat(openTimeMinute, " - Close Time : ").concat(closeTimeHour, ":").concat(closeTimeMinute));
          console.log(item.last_update);
          /* Black Screen için Automatic seçili olduğunda yapılacak işlemler */

          if (item.is_black_screen_auto == 1 && item.black_screen_time_options == 'Always') {
            //var closeTime =  item.black_screen_close_time;
            //console.log(`OPEN HOUR : ${item.black_screen_open_time.split(":")[0]} MINUTES : ${item.black_screen_open_time.split(":")[1]}`);
            //console.log(`CLOSE HOUR : ${item.black_screen_close_time.split(":")[0]} MINUTES : ${item.black_screen_close_time.split(":")[1]}`)
            var blackOnTime = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, openTimeHour, openTimeMinute);
            var blackOffTime = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, closeTimeHour, closeTimeMinute);
            console.log('OPEN : ', openTimeHour, 'CLOSE : ', closeTimeHour);

            if (closeTimeHour < openTimeHour) {
              blackOnTime.setDate(blackOnTime.getDate() - 1);
            }

            console.log("Black On Time : ".concat(blackOnTime.getTime(), " - Black Off Time : ").concat(blackOffTime.getTime(), " - Current Time : ").concat(currentDate));

            if (currentDate >= blackOnTime && currentDate <= blackOffTime) {
              var jsonData = {
                msg: 'black',
                value: ''
              };
            } else {
              var jsonData = {
                msg: 'normal',
                value: ''
              };
            }

            client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
            console.log('CLOSE HOUR : ', closeTimeHour, 'CLOSE MIN : ', closeTimeMinute);
          } else if (item.is_black_screen_auto == 1 && item.black_screen_time_options == 'Week') {
            var blackScreenWeekDatas = JSON.parse(item.blackscreen_week_options_json)[currentDayIndex - 1];
            console.log(blackScreenWeekDatas);
            var blackOnTime = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, blackScreenWeekDatas.OnTimeHour, blackScreenWeekDatas.OnTimeMinute);
            var blackOffTime = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, blackScreenWeekDatas.OffTimeHour, blackScreenWeekDatas.OffTimeMinute);
            /*if(blackScreenWeekDatas.OffTimeHour < blackScreenWeekDatas.OnTimeHour) {
                blackOnTime.setDate(blackOnTime.getDate()-1);
            }*/

            console.log(blackOnTime.getTime(), blackOffTime.getTime(), currentDate);
            var diff1 = currentDate - blackOnTime.getTime();
            var diff2 = currentDate - blackOffTime.getTime();
            Math.abs(diff1);
            Math.abs(diff2);

            if (diff1 < diff2) {
              if (currentDate <= blackOnTime.getTime()) {
                var jsonData = {
                  msg: 'normal',
                  value: '',
                  control: 0
                };
              } else {
                var jsonData = {
                  msg: 'black',
                  value: '',
                  control: 1
                };
              }
            } else {
              if (currentDate <= blackOffTime.getTime()) {
                var jsonData = {
                  msg: 'black',
                  value: '',
                  control: 1
                };
              } else {
                var jsonData = {
                  msg: 'normal',
                  value: '',
                  control: 0
                };
              }
            }

            if (jsonData.control != item.screen_on_off) {
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
            }
          }
          /* Sunrise Sunset değerleri otomatik yollanmak istediğinde yapılacak işlemler*/


          if (item.is_brightness_auto == 1 && item.sun_time_options == "Always") {
            var sunriseTimeHour = item.sunrise_time.split(':')[0];
            var sunriseTimeMinute = item.sunrise_time.split(':')[1];
            var sunriseValue = item.sunrise_value;
            var sunsetTimeHour = item.sunset_time.split(':')[0];
            var sunsetTimeMinute = item.sunset_time.split(':')[1];
            var sunsetValue = item.sunset_value; //console.log(`Sunrise : ${sunriseTimeHour}:${sunriseTimeMinute} = ${sunriseValue} Sunset : ---${sunsetTimeHour} -${sunsetTimeMinute} -${sunsetValue}`)

            var sunriseTimestamp = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, sunriseTimeHour, sunriseTimeMinute);
            var sunsetTimestamp = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, sunsetTimeHour, sunsetTimeMinute);

            if (sunsetTimeHour < sunriseTimeHour) {
              sunriseTimestamp.setDate(sunriseTimestamp.getDate() - 1);
            }

            if (currentDate >= sunriseTimestamp && currentDate <= sunsetTimestamp) {
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
            var sunriseTimestamp = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, sunriseTimeHour, sunriseTimeMinute).getTime();
            var sunsetTimestamp = new Date(currentTimeYear, currentTimeMonth, currentTimeDay, sunsetTimeHour, sunsetTimeMinute).getTime();

            if (sunsetTimeHour < sunriseTimeHour) {
              sunriseTimestamp.setDate(sunriseTimestamp.getDate() - 1);
            }

            if (currentDate >= sunriseTimestamp && currentDate <= sunsetTimestamp) {
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
      });
    });
    console.log('HOUR : ', date.getHours(), 'MINUTE : ', date.getMinutes());
  }, 5000);
  client.subscribe('home', function () {
    console.log("Home topic Listening"); //var jsonMethod = '{ "method": "getTvId", "params": { } }';
    //client.publish('home/telemetry/mVThJflRGKgZYkZ18!hU', jsonMethod);
  });
  client.subscribe('#', function () {
    console.log("All topics Listening");
  });
});
var selectedTvID, selectedSerialNumber;
client.on('message', function (topic, message) {
  // message is Buffer
  var topicName = topic.toString(); //console.log(topic.toString());

  console.log(message.toString());
  var jsonData = JSON.parse(message);
  var topicArray = topicName.split('/');
  var token = '';
  topicArray.forEach(function (item) {
    if (item.length == 20) {
      token = item; //her gelen mesajı dinlediğim için token'ı burda alıyorum.
    }
  });
  var today = new Date();
  var date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, "0") + '-' + String(today.getDate()).padStart(2, "0");
  var time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
  var dateTime = date + ' ' + time;
  console.log('Message JSON DATA : ', jsonData);
  console.log('TOKEN : ' + token + 'TOPIC : ' + topicName); //topicName'lere göre case'ler oluşturdum ve her bir case için farklı görevleri var.

  switch (topicName) {
    case 'home/' + token:
      //Cihaz ilk bağlandığında buraya girecek
      console.log('Home Channel');
      var password = jsonData.params.password;

      if (token != "" && password != "") {
        console.log('Token : ', token);
        var sql = 'SELECT * FROM settings';
        var mysqlQuery = 'SELECT * FROM settings';
        var arrayIDList = [];
        var arrayPasswordList = [];
        /*connection.query(mysqlQuery,[],(err,rows) => {
            rows.forEach(item => {
                arrayPasswordList.push(item.password);
                console.log('ARRAY : ',item)
                })
                if (arrayPasswordList.includes(password)) {
                    console.log('Şifre Doğru');
                    sql = 'SELECT * FROM lcd_devices_status WHERE Token = ?';
                    var arrayTokenList = [];
                          connection.query(sql,[token],(err,rows)=>{
                        console.log(rows.length);
                        if (rows.length == 0){
                            console.log('Token Yok')
                            
                            sql = "INSERT INTO lcd_devices_status(Name,Password,Token,Last_Update) VALUES ('labrusNeww',?,?,?)";
                            connection.query(sql, [password,token,dateTime], (err, rows) => {
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
            })*/

        connection.query(sql, [], function (err, rows) {
          rows.forEach(function (item) {
            arrayPasswordList.push(item.password);
          });

          if (arrayPasswordList.includes(password)) {
            console.log('Şifre Doğru');
            sql = 'SELECT * FROM lcd_devices WHERE token = ?';
            var arrayTokenList = [];
            connection.query(sql, [token], function (err, rows) {
              console.log(rows.length);

              if (rows.length == 0) {
                console.log('Token Yok');
                sql = "INSERT INTO lcd_devices(token) VALUES (?)";
                connection.query(sql, [token], function (err, rows) {
                  console.log(err);
                  console.log('SUCCESS');
                  var jsonMethod = '{ "method": "getTvId", "params": { } }';
                  client.publish('home/philips_tv/telemetry/' + token, jsonMethod); //TVID'leri çekebilmek için gerekli publish'i atıyorum
                });
              } else {
                console.log('Token Var');
                var jsonMethod = '{ "method": "getTvId", "params": { } }';
                client.publish('home/philips_tv/telemetry/' + token, jsonMethod);
              }
            });
          } else {
            console.log('Şifre Yanlış');
          }
        });
      } else {
        console.log('HATA');
      }

      break;

    case 'home/lg_tv/attribute/' + token:
      console.log('Attr Channel');
      var jsonID = Object.keys(jsonData); //console.log('ATTR : ',jsonID);

      console.log('ATTR2 : ', jsonData);
      var testArray = {
        km: 'remote_lock',
        ka: 'tv_status',
        kf: 'voice_value',
        kh: 'brightness_value',
        dx: 'PictureMode'
      };
      var selectedPinKey = testArray[Object.keys(jsonData.params)]; //console.log('TVID : ',arrayIDValue[0]);
      //console.log('VALUE : ',arrayIDValue[1]);

      console.log('KEY ', selectedPinKey);
      console.log('TEST : ', testArray[Object.keys(jsonData.params)]); //console.log('VALUE ', jsonData.params[Object.keys(jsonData.params)]);
      //console.log('selectedPinKey : ',selectedPinKey)

      console.log(testArray[Object.keys(jsonData.params)] == selectedPinKey);

      if (testArray[Object.keys(jsonData.params)] == selectedPinKey && typeof selectedPinKey != 'undefined') {
        var arrayIDValue = jsonData.params[Object.keys(jsonData.params)].split(',');
        selectedTvID = arrayIDValue[0];
        console.log('ArrayIDVALUE :', arrayIDValue);
        var selectedPinValue = arrayIDValue[1];
        sql = "UPDATE Device_Status SET " + selectedPinKey + " = ?, Last_Update = ? WHERE Token = ? AND TvID = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET " + selectedPinKey + " = ?, last_update = ? WHERE token = ? AND tv_id = ?";
        connection.query(mysqlQuery, [selectedPinValue, dateTime, token, selectedTvID], function (error, results, fields) {
          if (error) throw error;
          console.log('success');
        });
      } else if (jsonData.params.serial == 'Device Connected') {
        mysqlQuery = "SELECT * FROM lcd_devices_status WHERE token = ?";
        connection.query(mysqlQuery, [token], function (err, results, fields) {
          results.forEach(function (item) {
            var json = {
              method: 'rpcCommand',
              params: {
                command: 'pl',
                tvId: item.tv_id,
                swc: 1,
                getCmd: '19'
              },
              values: ['6', item.tv_id, '0', '18', item.tv_status, '1D']
            };
            client.publish('home/telemetry/' + token, JSON.stringify(json));
          });
        });
      }

      break;

    case 'home/philips_tv/attribute/' + token:
      var testArray = {
        km: 'remote_lock',
        ka: 'tv_status',
        kf: 'voice_value',
        kh: 'brightness_value',
        dx: 'PictureMode'
      };
      var selectedPinKey = testArray[Object.keys(jsonData.params)]; //sql = "UPDATE Device_Status SET " + selectedPinKey + " = ?, Last_Update = ? WHERE Token = ? AND TvID = ?";

      if (testArray[Object.keys(jsonData.params)] == selectedPinKey && typeof selectedPinKey != 'undefined') {
        var arrayIDValue = jsonData.params[Object.keys(jsonData.params)].split(',');
        selectedTvID = arrayIDValue[0];
        console.log('ArrayIDVALUE :', arrayIDValue);
        var selectedPinValue = arrayIDValue[1];

        if (selectedPinValue == 1) {
          selectedPinValue = 0;
        } else {
          selectedPinValue = 1;
        }

        mysqlQuery = "UPDATE lcd_devices_status SET " + selectedPinKey + " = ?, last_update = ? WHERE token = ? AND tv_id = ?";
        connection.query(mysqlQuery, [selectedPinValue, dateTime, token, selectedTvID], function (error, results, fields) {
          if (error) throw error;
          console.log('success');
          console.log('SELECTED PIN VALUE', selectedPinValue);
        });
      } else if (jsonData.params.serial == 'Device Connected') {
        query = "UPDATE ";
        mysqlQuery = "SELECT * FROM lcd_devices_status WHERE token = ?";
        var tvIDArray = [];
        var json = {};
        connection.query(mysqlQuery, [token], function (err, results, fields) {
          results.forEach(function (item) {
            console.log(item);
            tvIDArray.push(item.tv_id);
          }); //console.log('TVID ARRAY : ',tvIDArray);

          json = {
            method: 'rpcCommand',
            params: {
              command: 'pl',
              swc: 2,
              getCmd: '19'
            },
            values: tvIDArray
          };
          console.log('TV AID ', tvIDArray);
          console.log(json);
          client.publish('home/philips_tv/telemetry/' + token, JSON.stringify(json));
        });
      }

      break;

    case 'home/philips_tv/attributesUp/' + token:
      console.log('AttributesUp Channel');
      var dataArray = jsonData.params.up.split(',');
      var TvID = dataArray[0];
      var tvDurum = dataArray[1];
      var nosignal = dataArray[2];
      var temperature = dataArray[3];
      var firmwareVersion = dataArray[4]; //console.log('TV DURUM : ',tvDurum);

      if (tvDurum == 0) {
        mysqlQuery = "UPDATE lcd_devices_status SET tv_status = 0, last_update = ? WHERE token = ? AND tv_id = ?";
        connection.query(mysqlQuery, [dateTime, token, TvID], function (error, results, fields) {
          if (error) throw error;
          console.log('success');
        });
      } else {
        mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?,tv_status = 1, no_signal = ?, temperature_value = ?, firmware_version = ? WHERE token = ? AND tv_id = ?";
        connection.query(mysqlQuery, [dateTime, nosignal, temperature, firmwareVersion, token, TvID], function (error, results, fields) {
          if (error) throw error;
          console.log('success');
        });
      }

      console.log('TVID : ', TvID, 'TvDurum : ', tvDurum, 'No Signal : ', nosignal, 'Temp : ', temperature, 'firmwareVersion : ', firmwareVersion);
      break;

    case 'home/philips_tv/create/' + token:
      if (jsonData.method == 'setDevice') {
        var dbTvIdList = [];
        var arraySerialNumber = [];
        var dbSerialNumber = [];
        var ipAddress = jsonData.params.ip;
        var tvBrand = jsonData.params.tvName;
        jsonTvIdList = jsonData.params.tvIds.split(',');
        jsonTvIdList.splice(jsonTvIdList.length - 1, 1);
        sql = "SELECT tv_id,serial_number FROM lcd_devices_status WHERE token = ? AND serial_number = ?";
        mysqlQuery = "SELECT tv_id,serial_number FROM lcd_devices_status WHERE token = ?";
        jsonTvIdList.forEach(function (item, index) {
          console.log('jsonTVIDLIST : ', item);
          connection.query(mysqlQuery, [token], function (err, result, fields) {
            console.log('philips', result);

            if (result.length == 0) {
              mysqlQuery = "INSERT INTO lcd_devices_status(token,tv_id,brand,ip_address) VALUES (?,?,?,?)";
              connection.query(mysqlQuery, [token, item, tvBrand, ipAddress], function (err, rows) {
                console.log(err);
                console.log('TESTASDF: ', token, item, tvBrand, ipAddress); //console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
              });
            } else {
              mysqlQuery = "UPDATE lcd_devices_status SET brand = ?, ip_address = ? WHERE token = ? AND tv_id = ?";
              connection.query(mysqlQuery, [tvBrand, ipAddress, token, item]);
            }
          });
        });
      } else if (jsonData.method == 'setDeviceModel') {
        jsonTvIdList = jsonData.params.tvIds.split(',');
        tvModels = jsonData.params.tvModel.split(',');
        jsonTvIdList.splice(jsonTvIdList.length - 1, 1); //console.log(jsonTvIdList)

        tvModels.splice(tvModels.length - 1, 1);
        /*tvModels.forEach(function(item,index) { 
            var tvModelNumberHex = Buffer.from(item,'hex');
            tvModels[index] = tvModelNumberHex.toString("utf-8");
        })*/

        mysqlQuery = "UPDATE lcd_devices_status SET model = ?, last_update = ? WHERE tv_id = ? AND token = ?"; //var tvModelNumberHex = Buffer.from(jsonTvIdList[index],'hex');
        //var tvModelNumber = tvModelNumberHex.toString("utf-8");

        jsonTvIdList.forEach(function (item, index) {
          //console.log(tvModels[index],item);
          console.log('setDEVICEMODEL : ', tvModels[index], dateTime, item);
          connection.query(mysqlQuery, [tvModels[index], dateTime, item, token], function (err, result, fields) {
            console.log(err);
            console.log(result);
            console.log(fields);
            console.log(mysqlQuery); //console.log('Model Number - Last Update UPDATE OK!');
          });
        });
      }

      break;

    case 'home/create/' + token:
      var jsonTvIdList = [];
      var tvModels = [];

      if (jsonData.method == 'setDevice') {
        console.log('Home2 Channel');
        var dbTvIdList = [];
        var arraySerialNumber = [];
        var dbSerialNumber = [];
        var ipAddress = jsonData.params.ip;
        var tvBrand = jsonData.params.tvName;
        jsonTvIdList = jsonData.params.tvIds.split(',');
        jsonTvIdList.splice(jsonTvIdList.length - 1, 1);
        arraySerialNumber = jsonData.params.tvModel.split(',');
        arraySerialNumber.splice(arraySerialNumber.length - 1, 1); //sql = "SELECT TvID,Serial_Number FROM Device_Status WHERE Token = ? AND Serial_Number = ?";

        mysqlQuery = "SELECT tv_id,serial_number FROM lcd_devices_status WHERE token = ?";
        console.log('ARRAY SERIAL NUMBER', arraySerialNumber);
        arraySerialNumber.forEach(function (item, index) {
          connection.query(mysqlQuery, [token, item], function (err, result, fields) {
            if (result.length == 0) {
              mysqlQuery = "INSERT INTO lcd_devices_status(token,tv_id,serial_number,brand,ip_address) VALUES (?,?,?,?,?)";
              connection.query(sql, [token, jsonTvIdList[index], item, tvBrand, ipAddress], function (err, rows) {
                console.log(err);
                getCountry(ipAddress, token); //console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
              });
            }
          });
        });
      } else if (jsonData.method == 'setDeviceModel') {
        jsonTvIdList = jsonData.params.tvIds.split(',');
        tvModels = jsonData.params.tvModel.split(',');
        jsonTvIdList.splice(jsonTvIdList.length - 1, 1); //console.log(jsonTvIdList)

        tvModels.splice(tvModels.length - 1, 1);
        tvModels.forEach(function (item, index) {
          var tvModelNumberHex = Buffer.from(item, 'hex');
          tvModels[index] = tvModelNumberHex.toString("utf-8");
        });
        sql = "UPDATE Device_Status SET Model_Number = ?,Last_Update = ? WHERE TvID = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET model_number = ?, last_update = ? WHERE tv_id = ?"; //var tvModelNumberHex = Buffer.from(jsonTvIdList[index],'hex');
        //var tvModelNumber = tvModelNumberHex.toString("utf-8");

        jsonTvIdList.forEach(function (item, index) {
          //console.log(tvModels[index],item);
          connection.query(mysqlQuery, [tvModels[index], dateTime, item], function (err, result, fields) {//console.log('Model Number - Last Update UPDATE OK!');
          });
        });
      }

      break;

    case 'home/led_novastar/telemetry/' + token:
      var date = new Date();
      console.log('LED NOVASTAR test');

      if (jsonData.type == 'dvi_status') {
        mysqlUpdate = "UPDATE led_devices SET last_update = ?,dvi_status = ? WHERE token = ?";
        connection.query(mysqlUpdate, [dateTime, jsonData.value, token], function (err, result, fields) {});
      } else if (jsonData.type == 'screen_on_off') {
        if (jsonData.value == 'black') {
          mysqlUpdate = "UPDATE led_devices SET last_update = ?,screen_on_off = 1 WHERE token = ?";
        } else {
          mysqlUpdate = "UPDATE led_devices SET last_update = ?,screen_on_off = 0 WHERE token = ?";
        }

        connection.query(mysqlUpdate, [dateTime, token], function (err, result, fields) {});
      } else if (jsonData.type == 'brightness_status') {
        mysqlUpdate = "UPDATE led_devices SET last_update = ?,brightness_value = ? WHERE token = ?";
        connection.query(mysqlUpdate, [dateTime, jsonData.value, token], function (err, result, fields) {});
      } else if (jsonData.type == 'firmware_version') {
        mysqlUpdate = "UPDATE led_devices SET last_update = ?,firmware_version = ? WHERE token = ?";
        connection.query(mysqlUpdate, [dateTime, jsonData.value, token], function (err, result, fields) {});
      } else if (jsonData.type == 'model_id') {
        mysqlUpdate = "UPDATE led_devices SET last_update = ?,model_name = ? WHERE token = ?";
        connection.query(mysqlUpdate, [dateTime, jsonData.value, token], function (err, result, fields) {});
      } else if (jsonData.type == 'voltage' && jsonData.value !== 'Finish') {
        var getDataQuery = "SELECT * FROM led_devices_status WHERE token = ? AND sender_id = ? AND receiver_id = ?";
        connection.query(getDataQuery, [token, jsonData.sender_id, jsonData.receiver_id], function (err, result, fields) {
          if (result.length == 0) {
            var insertData = "INSERT INTO led_devices_status(token,sender_id,receiver_id,voltage_value) VALUES(?,?,?,?)";
            connection.query(insertData, [token, jsonData.sender_id, jsonData.receiver_id, jsonData.value]);
          } else {
            mysqlUpdate = "UPDATE led_devices_status SET last_update = ?,voltage_value = ? WHERE token = ? AND sender_id = ? AND receiver_id = ?";
            connection.query(mysqlUpdate, [dateTime, jsonData.value, token, jsonData.sender_id, jsonData.receiver_id], function (err, result, fields) {});
          }

          console.log(result.length, jsonData);
        });
      } else if (jsonData.type == 'temperature' && jsonData.value !== 'Finish') {
        var getDataQuery = "SELECT * FROM led_devices_status WHERE token = ? AND sender_id = ? AND receiver_id = ?";
        connection.query(getDataQuery, [token, jsonData.sender_id, jsonData.receiver_id], function (err, result, fields) {
          if (result.length == 0) {
            var insertData = "INSERT INTO led_devices_status(token,sender_id,receiver_id,temperature_value) VALUES(?,?,?,?)";
            connection.query(insertData, [token, jsonData.sender_id, jsonData.receiver_id, jsonData.value]);
          } else {
            mysqlUpdate = "UPDATE led_devices_status SET last_update = ?,temperature_value = ? WHERE token = ? AND sender_id = ? AND receiver_id = ?";
            connection.query(mysqlUpdate, [dateTime, jsonData.value, token, jsonData.sender_id, jsonData.receiver_id], function (err, result, fields) {
              console.log('TEST ');
            });
          }

          console.log(result.length, jsonData);
        });
      }

      break;

    case 'createDevice':
      var mysqlQuery = "SELECT * FROM led_devices WHERE token = ?";
      connection.query(mysqlQuery, [jsonData.Token], function (err, result, fields) {
        if (result.length == 0) {
          var mysqlQuery = "INSERT INTO led_devices(token,device_name,brand) VALUES (?,'Labrus New Device',?)";
          connection.query(mysqlQuery, [jsonData.Token, jsonData.brand]);
        }
      });
      getCountryLed(jsonData.ip, jsonData.Token);
      break;

    case 'home/led_novastar/attribute/' + token:
      break;

    case 'home/led_linsn/telemetry/' + token:
      if (jsonData.device == 'Device Connected') {
        var mysqlGetdata = "SELECT brightness_value FROM led_devices WHERE token = ?";
        connection.query(mysqlGetdata, [token], function (err, result, fields) {
          var jsonData = {
            msg: 'bright',
            value: result[0].brightness_value
          };
          console.log('BRIGNESS VALUE : ', jsonData);
          client.publish('home/led_linsn/attribute/' + token, JSON.stringify(jsonData));
        });
      }

      break;
  }
});

function getCountry(ip, token) {
  var response, jsonData;
  return regeneratorRuntime.async(function getCountry$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('http://ip-api.com/json/' + ip + '?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query').then());

        case 3:
          response = _context.sent;
          jsonData = response.data;
          mysqlQuery = "UPDATE lcd_devices SET country = ?, city = ?, continent = ? WHERE token = ?";
          connection.query(mysqlQuery, [jsonData.country, jsonData.city, jsonData.continent, token], function (err, result, fields) {
            console.log('City, country, continent UPDATE OK!', result);
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function getCountryLed(ip, token) {
  var response;
  return regeneratorRuntime.async(function getCountryLed$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get('http://ip-api.com/json/' + ip + '?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query').then(function (res) {
            console.log('RES : ', res.data); //getSunriseSunsetLed(res.lat,res.lon,token)

            getSunriseSunsetLed(res.data.lat, res.data.lon, token);
            var jsonData = res.data;
            mysqlQuery2 = "UPDATE led_devices SET country = ?, city = ?, continent = ? WHERE token = ?";
            connection.query(mysqlQuery2, [jsonData.country, jsonData.city, jsonData.continent, token], function (err, result, fields) {});
          }));

        case 3:
          response = _context2.sent;
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

function getSunriseSunsetLed(lat, lon, token) {
  var sunriseSunsiteTime;
  return regeneratorRuntime.async(function getSunriseSunsetLed$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.get('https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lon + '&formatted=0').then(function (res) {
            var date = new Date();
            var currentTimeYear = date.getFullYear();
            var currentTimeMonth = date.getMonth();
            var currentTimeDay = date.getDate(); //var currentDayIndex = date.getDay();
            //var currentTimeHour = date.getHours();
            //var currentTimeMinute = date.getMinutes();

            console.log('RES : ', date);
            var jsonDataTime = res.data.results;
            console.log(new Date(jsonDataTime.sunrise));
            /*var jsonSunriseTimeHour = jsonDataTime.sunrise.split('T')[1].split(':')[0];
            var jsonSunriseTimeMinute = jsonDataTime.sunrise.split(':')[1];
            var jsonSunsetTimeHour = jsonDataTime.sunset.split('T')[1].split(':')[0];
            var jsonSunsetTimeMinute = jsonDataTime.sunset.split(':')[1];
            
            var jsonSunriseTime = jsonSunriseTimeHour+':'+jsonSunriseTimeMinute;
            var jsonSunsetTime = jsonSunsetTimeHour+':'+jsonSunsetTimeMinute;*/

            var selectedDateSunrise = new Date(jsonDataTime.sunrise);
            var selectedDateSunset = new Date(jsonDataTime.sunset);
            var mysqlQuery2 = "UPDATE led_devices SET auto_sunrise_time = ?,auto_sunset_time = ? WHERE token = ?";
            connection.query(mysqlQuery2, [selectedDateSunrise, selectedDateSunset, token], function (err, result, fields) {});
          }));

        case 2:
          sunriseSunsiteTime = _context3.sent;

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

var router = express.Router();
router.get('/', function (req, res) {
  res.send('hello');
});
router.get('/loadLcdDevices', function (req, res) {
  var sql = 'SELECT * FROM Device_Status';
  var mysqlQuery = 'SELECT * FROM lcd_devices_status';
  var arrayIDList = [];
  connection.query(mysqlQuery, [], function (err, result, fields) {
    res.json(result);
  });
});
router.get('/loadLedDevices', function (req, res) {
  var mysqlQuery = "SELECT * FROM led_devices INNER JOIN users ON led_devices.foreign_key_user = users.Id WHERE users.Id = 1"; //SELECT * FROM led_devices

  connection.query(mysqlQuery, [], function (err, result, fields) {
    res.json(result);
  });
});
router.post('/test', function (req, res) {
  //selectedTvID = req.body.params.tvId;
  //selectedSerialNumber = req.body.params.tvSerial;
  var testArray = {
    km: 'remote_lock',
    ka: 'tv_status',
    kf: 'voice_value',
    kh: 'brightness_value',
    dx: 'picture_mode'
  };
  var selectedPinKey = testArray[req.body.params.command];
  console.log('POST /TEST API ADDRESS');
  var jsonSendData = {
    TVID: req.body.params.tvId,
    command: req.body.params.command,
    value: req.body.params.value
  };

  if (req.body.params.value == '') {
    //sql = "UPDATE Device_Status SET Last_Update = ?, Connection_Status = 0 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
    mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?, connection_status = 0 WHERE token = ? AND tv_id = ? AND serial_number = ?";
    connection.query(mysqlQuery, [req.body.updateDate, req.body.token, req.body.params.tvId, req.body.params.tvSerial], function (error, results, fields) {
      console.log('success');
    });
  } else {
    //sql = "UPDATE Device_Status SET Last_Update = ?," + selectedPinKey + " = ?, Connection_Status = 1 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
    mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?," + selectedPinKey + " = ?, connection_status = 1 WHERE token = ? AND tv_id = ? AND serial_number = ?";
    connection.query(mysqlQuery, [req.body.updateDate, req.body.token, req.body.params.tvId, req.body.params.tvSerial], function (error, results, fields) {
      console.log('success');
    });
  } //console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);


  res.send(jsonSendData); //client.publish("home/telemetry/" + req.body.token,JSON.stringify(req.body))
});
router.post('/allAttributesUpdate', function (req, res) {
  console.log('POST /allAttributesUpdate ', req.body);
  var jsonData = req.body; //console.log(jsonData.updateDate)

  if (jsonData.params.tvDurum == 0) {
    sql = "UPDATE Device_Status SET Connection_Status = 1,Last_Update = ?, TvStatus = 0 WHERE Token = ? AND TvID = ?";
    mysqlQuery = "UPDATE lcd_devices_status SET connection_status = 1, last_update = ?,tv_status = 0 WHERE token = ? AND tv_id = ?";
    connection.query(mysqlQuery, [req.body.updateDate, jsonData.token, jsonData.params.tvId], function (err, result, fields) {
      console.log("All Attributes Update OK! TV STATUS = 0");
    });
  } else {
    console.log(jsonData.updateDate);
    sql = "UPDATE Connection_Status = 1,Device_Status SET Last_Update = ?, TvStatus = 1, NoSignal = ?, TempetureValue = ?, firmwareVersion = ? WHERE Token = ? AND TvID = ?";
    mysqlQuery = "UPDATE connection_status = 1, device_status SET last_update = ?, tv_status = 1, no_signal = ?, temperature_value = ?, firmware_version = ? WHERE token = ? AND tv_id = ?";
    connection.query(mysqlQuery, [jsonData.updateDate, jsonData.params.nosignal, jsonData.params.temperature, jsonData.params.firmwareVersion, jsonData.token, jsonData.params.tvId], function (err, results, fields) {
      console.log('All Attributes Update OK! Tv Status = 1');
    });
  }

  res.send('testing');
});
router.post('/detectDevices', function (req, res) {
  //console.log('DETECT DEVICES : ' + req.body.token);
  client.publish("home/telemetry/" + req.body.token, JSON.stringify(req.body)).then(function (response, request) {
    //console.log('SUCCESS POST',response);
    //console.log('SUCCESS REQUEST : ',request)
    response.end();
  })["catch"](function (err) {
    console.log(err);
  });
});
router.get('/loadDevicesGroupBy', function (req, res) {
  console.log('Group By');
  var sql = 'SELECT sum(TvStatus) AS OpenTV,count(TvStatus) AS TotalTV,City FROM Device_Status GROUP BY City';
  var mysqlQuery = "SELECT sum(tv_status) AS OpenTV, count(tv_status) AS TotalTV,City FROM lcd_devices_status GROUP BY City";
  var arrayIDList = []; //mysql eklenecek

  connection.query(mysqlQuery, [], function (err, result, fields) {
    res.json(result);
  });
});
router.post('/nameUpdate', function (req, res) {
  var mysqlQuery;
  var data = req.body; //console.log('Data : ',data);
  //console.log(`Name Update : ${data.deviceId} - ${data.name}`)

  if (data.isBrightnessAuto == false && data.blackScreenAuto == false) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?,is_brightness_auto = ?,is_black_screen_auto = ?,device_active = ? WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.isBrightnessAuto, data.blackScreenAuto, data.deviceActive, data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
    });
  } else if (data.isBrightnessAuto && data.blackScreenAuto) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?,sunrise_value = ?, sunset_value = ?, sunrise_time = ?, sunset_time = ?,black_screen_open_time = ?, black_screen_close_time = ?,is_brightness_auto = 1,is_black_screen_auto = 1,black_screen_time_options = ?,sun_time_options = ?,blackscreen_week_options_json = ?, device_active = ?  WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.sunriseValue, data.sunsetValue, data.sunriseTime, data.sunsetTime, data.blackScreenOpenTime, data.blackScreenCloseTime, data.blackScreenTimeOptions, data.sunTimeOptions, JSON.stringify(data.blackScreenWeekData), data.deviceActive, data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
      console.log(err);
      console.log(mysqlQuery);
    });
  } else if (data.isBrightnessAuto) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?,sunrise_value = ?, sunset_value = ?, sunrise_time = ?, sunset_time = ?,is_brightness_auto = 1,is_black_screen_auto = ?, sun_time_options = ?, device_active = ? WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.sunriseValue, data.sunsetValue, data.sunriseTime, data.sunsetTime, data.blackScreenAuto, data.sunTimeOptions, data.deviceActive, data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
      console.log(err);
      console.log(mysqlQuery);
    });
  } else if (data.blackScreenAuto) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?, black_screen_open_time = ?, black_screen_close_time = ?,is_brightness_auto = ?,is_black_screen_auto = 1,black_screen_time_options = ?,blackscreen_week_options_json = ?, device_active = ? WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.blackScreenOpenTime, data.blackScreenCloseTime, data.isBrightnessAuto, data.blackScreenTimeOptions, JSON.stringify(data.blackScreenWeekData), data.deviceActive, data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
      console.log(err);
      console.log(mysqlQuery);
      console.log(data.name, data.sunriseValue, data.sunsetValue, data.sunriseTime, data.sunsetTime, data.deviceId, data.blackScreenAuto);
      console.log('JSON : ', JSON.stringify(data.blackScreenWeekData));
    });
  }

  res.json('Name Update OK!');
});
module.exports = router;