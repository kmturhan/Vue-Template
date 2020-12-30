"use strict";

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
var sendDataChannel = [];
client.on('connect', function () {
  console.log('connect');
  console.log('GET COUNTRY ');

  function getCountry() {
    var sunriseSunsiteTime, jsonDataTime, jsonSunriseTimeHour, jsonSunriseTimeMinute, jsonSunsetTimeHour, jsonSunsetTimeMinute, jsonSunriseTime, jsonSunsetTime;
    return regeneratorRuntime.async(function getCountry$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(axios.get('https://api.sunrise-sunset.org/json?lat=41.0096334&lng=28.9651646&formatted=0'));

          case 2:
            sunriseSunsiteTime = _context.sent;
            jsonDataTime = sunriseSunsiteTime.data.results;
            jsonSunriseTimeHour = parseInt(jsonDataTime.sunrise.split('T')[1].split(':')[0]) + 3;
            jsonSunriseTimeMinute = jsonDataTime.sunrise.split(':')[1];
            jsonSunsetTimeHour = parseInt(jsonDataTime.sunset.split('T')[1].split(':')[0]) + 3;
            jsonSunsetTimeMinute = jsonDataTime.sunset.split(':')[1];
            jsonSunriseTime = jsonDataTime.sunrise.split('T')[0] + 'T' + jsonSunriseTimeHour + ':' + jsonSunriseTimeMinute;
            jsonSunsetTime = jsonDataTime.sunset.split('T')[0] + 'T' + jsonSunsetTimeHour + ':' + jsonSunsetTimeMinute;
            console.log(jsonDataTime);
            mysqlQuery2 = "UPDATE led_devices SET auto_sunrise_time = ?, auto_sunset_time = ?";
            connection.query(mysqlQuery2, [jsonSunriseTime, jsonSunsetTime], function (err, result, fields) {});

          case 13:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  getCountry();
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
    db.all(sql, [], function (err, rows) {
      //console.log('GETDATA : ',rows);
      if (err) {
        throw err;
      }

      rows.forEach(function (item) {
        var date1 = new Date(item.Last_Update);
        var date2 = new Date(dateTime);
        var diff = date2.getTime() - date1.getTime();

        if (diff > 950000) {
          sql = "UPDATE Device_Status SET Connection_Status = 0 WHERE Token = ? AND TvID = ?";
          db.all(sql, [item.Token, item.TvID], function (err, rows) {});
        } else {
          sql = "UPDATE Device_Status SET Connection_Status = 1 WHERE Token = ? AND TvID = ?";
          db.all(sql, [item.Token, item.TvID], function (err, rows) {});
        }
      });
    });
    connection.query(mysqlQuery, [], function (err, rows) {
      //console.log('GETDATA : ',rows);
      if (err) {
        throw err;
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
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
    mysql = "SELECT * FROM led_devices WHERE token='AkiGRCtbwEe9EgsSl2v8'";
    connection.query(mysql, [], function (err, result, fields) {
      result.forEach(function (item) {
        var currentTimeHour = date.getHours();
        var currentTimeMinute = date.getMinutes();
        var currentDayIndex = date.getDay();
        var openTimeHour = item.black_screen_open_time.split(":")[0];
        var openTimeMinute = item.black_screen_open_time.split(":")[1];
        var closeTimeHour = item.black_screen_close_time.split(":")[0];
        var closeTimeMinute = item.black_screen_close_time.split(":")[1];
        var DateOpen = new Date(2020, 11, 30, 18, 50).getTime();
        var DateClose = new Date(2020, 11, 30, 18, 59).getTime();
        var currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(date.getHours() + 3), date.getMinutes()).getTime();
        console.log('OPEN TIME : ', DateOpen);
        console.log('CLOSE TIME ', DateClose);
        console.log('Current TIME : ', currentDate); //console.log('DATE : ', date.toLocaleString('en-us', {weekday:'long'}))

        if (item.connection_status == 1) {
          console.log("Current Time : ".concat(currentTimeHour, ":").concat(currentTimeMinute, " - Open Time : ").concat(openTimeHour, ":").concat(openTimeMinute, " - Close Time : ").concat(closeTimeHour, ":").concat(closeTimeMinute));
          console.log(item.last_update);

          if (item.is_black_screen_auto == true && item.black_screen_time_options == 'Always') {
            //var closeTime =  item.black_screen_close_time;
            //console.log(`OPEN HOUR : ${item.black_screen_open_time.split(":")[0]} MINUTES : ${item.black_screen_open_time.split(":")[1]}`);
            //console.log(`CLOSE HOUR : ${item.black_screen_close_time.split(":")[0]} MINUTES : ${item.black_screen_close_time.split(":")[1]}`)
            if (openTimeHour < closeTimeHour) {
              var currentDate = new Date().getTime();
            }

            if (openTimeHour >= currentTimeHour && closeTimeHour <= currentTimeHour && openTimeMinute >= currentTimeMinute && closeTimeMinute <= currentTimeMinute) {
              var jsonData = {
                msg: 'black',
                value: ''
              };
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
              jsonData.token = item.token;

              if (sendDataChannel.includes(JSON.stringify(jsonData)) == false) {
                sendDataChannel.push(JSON.stringify(jsonData));
              }
            } else {
              var jsonData = {
                msg: 'normal',
                value: ''
              };
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
            }

            console.log('CLOSE HOUR : ', closeTimeHour, 'CLOSE MIN : ', closeTimeMinute);
          }

          if (item.is_black_screen_auto == 1 && item.black_screen_time_options == 'Week') {
            var blackScreenWeekDatas = JSON.parse(item.blackscreen_week_options_json)[currentDayIndex - 1];

            if (currentTimeHour == blackScreenWeekDatas.OnTimeHour && currentTimeMinute == blackScreenWeekDatas.OnTimeMinute) {
              var jsonData = {
                value: '',
                msg: 'black'
              };
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
              console.log(item.token, 'BLACK SEND');
              jsonData.token = item.token;

              if (sendDataChannel.includes(JSON.stringify(jsonData)) == false) {
                sendDataChannel.push(JSON.stringify(jsonData));
              }
            }

            if (currentTimeHour == blackScreenWeekDatas.OffTimeHour && currentTimeMinute == blackScreenWeekDatas.OffTimeMinute) {
              var jsonData = {
                value: '',
                msg: 'normal'
              };
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
              console.log(item.token, 'NORMAL SEND');

              if (sendDataChannel.includes(JSON.stringify(jsonData)) == false) {
                sendDataChannel.push(JSON.stringify(jsonData));
              }
            }
          }

          if (item.is_brightness_auto) {
            var sunriseTimeHour = item.sunrise_time.split(':')[0];
            var sunriseTimeMinute = item.sunrise_time.split(':')[1];
            var sunriseValue = item.sunrise_value;
            var sunsetTimeHour = item.sunset_time.split(':')[0];
            var sunsetTimeMinute = item.sunset_time.split(':')[1];
            var sunsetValue = item.sunset_value; //console.log(`Sunrise : ${sunriseTimeHour}:${sunriseTimeMinute} = ${sunriseValue} Sunset : ---${sunsetTimeHour} -${sunsetTimeMinute} -${sunsetValue}`)

            if (currentTimeHour == sunriseTimeHour && currentTimeMinute == sunriseTimeMinute) {
              var jsonData = {
                msg: 'bright',
                value: sunriseValue.toString()
              };
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
              jsonData.token = item.token;

              if (sendDataChannel.includes(JSON.stringify(jsonData)) == false) {
                sendDataChannel.push(JSON.stringify(jsonData));
              }
            }

            if (currentTimeHour == sunsetTimeHour && currentTimeMinute == sunsetTimeMinute) {
              var jsonData = {
                msg: 'bright',
                value: sunsetValue.toString()
              };
              client.publish('home/led_novastar/attribute/' + item.token, JSON.stringify(jsonData));
              jsonData.token = item.token;

              if (sendDataChannel.includes(JSON.stringify(jsonData)) == false) {
                sendDataChannel.push(JSON.stringify(jsonData));
              }
            }
          }
        }
      });
    });
    console.log('HOUR : ', date.getHours(), 'MINUTE : ', date.getMinutes());
  }, 3000);
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
  var topicName = topic.toString();
  console.log(topic.toString());
  console.log(message.toString());
  var jsonData = JSON.parse(message);
  var topicArray = topicName.split('/');
  var token = '';
  topicArray.forEach(function (item) {
    if (item.length == 20) {
      token = item;
    }
  });
  var today = new Date();
  var date = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, "0") + '-' + String(today.getDate()).padStart(2, "0");
  var time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
  var dateTime = date + ' ' + time;
  console.log('Message JSON DATA : ', jsonData);
  console.log('TOKEN : ' + token + 'TOPIC : ' + topicName);

  switch (topicName) {
    case 'home/' + token:
      console.log('Home Channel');
      var password = jsonData.params.password;

      if (token != "" && password != "") {
        console.log('Token : ', token);
        var sql = 'SELECT * FROM Settings';
        var mysqlQuery = 'SELECT * FROM Settings';
        var arrayIDList = [];
        var arrayPasswordList = [];
        connection.query(mysqlQuery, [], function (err, rows) {});
        db.all(sql, [], function (err, rows) {
          rows.forEach(function (item) {
            arrayPasswordList.push(item.Password);
          });

          if (arrayPasswordList.includes(password)) {
            console.log('Şifre Doğru');
            sql = 'SELECT * FROM devices WHERE Token = ?';
            var arrayTokenList = [];
            db.all(sql, [token], function (err, rows) {
              console.log(rows.length);

              if (rows.length == 0) {
                console.log('Token Yok');
                sql = "INSERT INTO devices(Name,Password,Token,Last_Update) VALUES ('labrusNeww',?,?,?)";
                db.all(sql, [password, token, dateTime], function (err, rows) {
                  console.log('SUCCESS');
                  var jsonMethod = '{ "method": "getTvId", "params": { } }';
                  client.publish('home/telemetry/' + token, jsonMethod);
                });
              } else {
                console.log('Token Var');
                var jsonMethod = '{ "method": "getTvId", "params": { } }';
                client.publish('home/telemetry/' + token, jsonMethod);
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

    case 'home/attributes/' + token:
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
      var selectedPinKey = testArray[Object.keys(jsonData.params)];
      var arrayIDValue = jsonData.params[Object.keys(jsonData.params)].split(','); //console.log('TVID : ',arrayIDValue[0]);
      //console.log('VALUE : ',arrayIDValue[1]);

      selectedTvID = arrayIDValue[0];
      var selectedPinValue = arrayIDValue[1]; //console.log('KEY ', selectedPinKey);
      //console.log('VALUE ', jsonData.params[Object.keys(jsonData.params)]);

      sql = "UPDATE Device_Status SET " + selectedPinKey + " = ?, Last_Update = ? WHERE Token = ? AND TvID = ?";
      mysqlQuery = "UPDATE lcd_devices_status SET " + selectedPinKey + " = ?, last_update = ? WHERE token = ? AND tv_id = ?";
      db.all(sql, [selectedPinValue, dateTime, token, selectedTvID], function (err, rows) {//console.log("Token : ",token,"TVID : ",selectedTvID,"Serial Number : ",selectedSerialNumber,'KEY : ',selectedPinKey);
      });
      connection.query(mysqlQuery, [selectedPinValue, dateTime, token, selectedTvID], function (error, results, fields) {
        if (error) throw error;
        console.log('success');
      });
      break;

    case 'home/attributesUp/' + token:
      console.log('AttributesUp Channel');
      var dataArray = jsonData.params.up.split(',');
      var TvID = dataArray[0];
      var tvDurum = dataArray[1];
      var nosignal = dataArray[2];
      var temperature = dataArray[3];
      var firmwareVersion = dataArray[4]; //console.log('TV DURUM : ',tvDurum);

      if (tvDurum == 0) {
        sql = "UPDATE Device_Status SET TvStatus = 0,Last_Update = ? WHERE Token = ? AND TvID = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET tv_status = 0, last_update = ? WHERE token = ? AND tv_id = ?";
        db.all(sql, [dateTime, token, TvID], function (err, rows) {//console.log("Success AttributesUp Update : "+"Token : ",token,"TVID : ",selectedTvID,"Serial Number : ",selectedSerialNumber,'KEY : ',selectedPinKey);
        });
        connection.query(mysqlQuery, [dateTime, token, TvID], function (error, results, fields) {
          if (error) throw error;
          console.log('success');
        });
      } else {
        sql = "UPDATE Device_Status SET Last_Update = ?,TvStatus = 1, NoSignal = ?, TempetureValue = ?, firmwareVersion = ? WHERE Token = ? AND TvID = ?";
        mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?,tv_status = 1, no_signal = ?, temperature_value = ?, firmware_version = ? WHERE token = ? AND tv_id = ?";
        db.all(sql, [dateTime, parseInt(nosignal), temperature, firmwareVersion, token, TvID], function (err, rows) {//console.log("Success AttributesUp Update ALL");
        });
        connection.query(mysqlQuery, [dateTime, nosignal, temperature, firmwareVersion, token, TvID], function (error, results, fields) {
          if (error) throw error;
          console.log('success');
        });
      }

      console.log('TVID : ', TvID, 'TvDurum : ', tvDurum, 'No Signal : ', nosignal, 'Temp : ', temperature, 'firmwareVersion : ', firmwareVersion);
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
        arraySerialNumber = jsonData.params.tvSerial.split(',');
        arraySerialNumber.splice(arraySerialNumber.length - 1, 1);
        sql = "SELECT TvID,Serial_Number FROM Device_Status WHERE Token = ? AND Serial_Number = ?";
        mysqlQuery = "SELECT tv-id,serial_number FROM lcd_devices_status WHERE token = ? AND serial_number = ?";
        var test; //console.log(arraySerialNumber);

        arraySerialNumber.forEach(function (item, index) {
          //console.log(jsonTvIdList[index]);
          db.all(sql, [token, item], function (err, rows) {
            if (rows.length == 0) {
              sql = "INSERT INTO Device_Status(Token,TvID,Serial_Number,Brand,IP_Address) VALUES (?,?,?,?,?)";
              db.all(sql, [token, jsonTvIdList[index], item, tvBrand, ipAddress], function (err, rows) {//console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
              });
            }
          });
          connection.query(mysqlQuery, [token, item], function (err, result, fields) {
            if (rows.length == 0) {
              mysqlQuery = "INSERT INTO lcd_devices_status(token,tv_id,serial_number,brand,ip_address) VALUES (?,?,?,?,?)";
              connection.query(sql, [token, jsonTvIdList[index], item, tvBrand, ipAddress], function (err, rows) {//console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
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
          db.all(sql, [tvModels[index], dateTime, item], function (err, rows) {//console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",tvModels[index]);
          });
          connection.query(mysqlQuery, [tvModels[index], dateTime, item], function (err, result, fields) {//console.log('Model Number - Last Update UPDATE OK!');
          });
        });
      }

      break;

    case 'home/led_novastar/telemetry/' + token:
      console.log('LED NOVASTAR test');

      try {
        if (jsonData.type == 'dvi_status') {
          mysqlUpdate = "UPDATE led_devices SET last_update = ? WHERE token = ?";
          connection.query(mysqlUpdate, [dateTime, token], function (err, result, fields) {
            console.log(token, 'DateTime : ', dateTime);
          });
        }

        console.log('SEND DATA CHANNEL : ', sendDataChannel);
        sendDataChannel.forEach(function (item, index) {
          console.log('Send data channel : ', sendDataChannel);
          var jsonData = item;

          if (jsonData.value != jsonData.msg) {
            console.log('Tekrar Atıyor');
            client.publish('home/led_novastar/attribute/' + jsonData.token, JSON.stringify(item));
          } else {
            sendDataChannel.splice(index, 1);
          }
        });

        if (sendDataChannel.length == 0) {
          console.log('INTREVAL SIFIRLANDI ');
        }
      } catch (_unused) {
        console.log('SEND DATA CHANNEL : ', sendDataChannel);
        sendDataChannel.forEach(function (item, index) {
          console.log('Send data channel : ', sendDataChannel);
          var jsonData = item;

          if (jsonData.value != jsonData.msg) {
            console.log('Tekrar Atıyor');
            client.publish('home/led_novastar/attribute/' + jsonData.token, JSON.stringify(item));
          } else {
            sendDataChannel.splice(index, 1);
          }
        });

        if (sendDataChannel.length == 0) {
          console.log('INTREVAL SIFIRLANDI ');
          clearInterval(sendDataInterval);
        }
      }

      break;
  }
});

function getCountry(ip, token) {
  var response, jsonData;
  return regeneratorRuntime.async(function getCountry$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get('http://ip-api.com/json/' + ip + '?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query'));

        case 3:
          response = _context2.sent;
          jsonData = response.data;
          /*sql = "UPDATE Device_Status SET Country = ?,City = ?,Continent = ? WHERE TvID = ? AND Token = ?";
          db.all(sql,[jsonData.country,jsonData.city,jsonData.continent,jsonTvIdList,token],(err,rows)=>{
              //console.log('GET COUNTRY : ',jsonData.country,jsonData.city.toLowerCase(),jsonData.continent,jsonTvIdList,token)
          })*/

          mysqlQuery = "UPDATE lcd_devices SET country = ?, city = ?, continent = ? WHERE token = 'eXFRrVFMJDglqeBzmFIl'";
          connection.query(mysqlQuery, [jsonData.country, jsonData.city, jsonData.continent, jsonTvIdList], function (err, result, fields) {//console.log('City, country, continent UPDATE OK!')
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function getSunsetSunriseTime(ip, token) {
  var response;
  return regeneratorRuntime.async(function getSunsetSunriseTime$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get(''));

        case 3:
          response = _context3.sent;
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

var router = express.Router();
router.get('/', function (req, res) {
  res.send('hello');
});
router.get('/loadLcdDevices', function (req, res) {
  var sql = 'SELECT * FROM Device_Status';
  var mysqlQuery = 'SELECT * FROM lcd_devices_status';
  var arrayIDList = []; //    db.all(sql, [], (err, rows) => {
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

  connection.query(mysqlQuery, [], function (err, result, fields) {
    res.json(result);
  });
});
router.get('/loadLedDevices', function (req, res) {
  var mysqlQuery = "SELECT * FROM led_devices";
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
    sql = "UPDATE Device_Status SET Last_Update = ?, Connection_Status = 0 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
    mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?, connection_status = 0 WHERE token = ? AND tv_id = ? AND serial_number = ?";
    db.all(sql, [req.body.updateDate, req.body.token, req.body.params.tvId, req.body.params.tvSerial], function (err, rows) {//console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
    });
    connection.query(mysqlQuery, [req.body.updateDate, req.body.token, req.body.params.tvId, req.body.params.tvSerial], function (error, results, fields) {
      console.log('success');
    });
  } else {
    sql = "UPDATE Device_Status SET Last_Update = ?," + selectedPinKey + " = ?, Connection_Status = 1 WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
    mysqlQuery = "UPDATE lcd_devices_status SET last_update = ?," + selectedPinKey + " = ?, connection_status = 1 WHERE token = ? AND tv_id = ? AND serial_number = ?";
    db.all(sql, [req.body.updateDate, req.body.params.value, req.body.token, req.body.params.tvId, req.body.params.tvSerial], function (err, rows) {//console.log("1+Token : ",req.body.token,"TVID : ",req.body.params.tvId,"Serial Number : ",req.body.params.tvSerial,'KEY : ',selectedPinKey,'VALUE : ',req.body.params.value);
    });
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
    db.all(sql, [req.body.updateDate, jsonData.token, jsonData.params.tvId], function (err, rows) {//console.log("Success AttributesUp Update : "+"Token : ",token,"TVID : ",selectedTvID,'DATETIME : ',jsonData.updateDate);
    });
    connection.query(mysqlQuery, [req.body.updateDate, jsonData.token, jsonData.params.tvId], function (err, result, fields) {
      console.log("All Attributes Update OK! TV STATUS = 0");
    });
  } else {
    console.log(jsonData.updateDate);
    sql = "UPDATE Connection_Status = 1,Device_Status SET Last_Update = ?, TvStatus = 1, NoSignal = ?, TempetureValue = ?, firmwareVersion = ? WHERE Token = ? AND TvID = ?";
    mysqlQuery = "UPDATE connection_status = 1, device_status SET last_update = ?, tv_status = 1, no_signal = ?, temperature_value = ?, firmware_version = ? WHERE token = ? AND tv_id = ?";
    db.all(sql, [jsonData.updateDate, jsonData.params.nosignal, jsonData.params.temperature, jsonData.params.firmwareVersion, jsonData.token, jsonData.params.tvId], function (err, rows) {
      console.log('UPDATE DATE : ', jsonData.updateDate, 'NO SIGNAL : ', jsonData.params.nosignal, 'Temperature :', jsonData.params.temperature, 'FirmwareVersion : ', jsonData.params.firmwareVersion, jsonData.token, jsonData.tvId);
    });
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
  var arrayIDList = [];
  db.all(sql, [], function (err, rows) {
    console.log('GETDATA : ', rows);

    if (err) {
      throw err;
    }

    rows.forEach(function (item) {
      //console.log(item.ID);
      //console.log(item.deviceName);
      arrayIDList.push(item.ID);
    });
    var response = {
      rows: rows
    }; //console.log(req.body,res.body)
    //res.json(rows);
  });
  connection.query(mysqlQuery, [], function (err, result, fields) {
    res.json(result);
  });
});
router.post('/nameUpdate', function (req, res) {
  var mysqlQuery;
  var data = req.body; //console.log('Data : ',data);
  //console.log(`Name Update : ${data.deviceId} - ${data.name}`)

  if (data.isBrightnessAuto == false && data.blackScreenAuto == false) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?,is_brightness_auto = ?,is_black_screen_auto = ? WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.isBrightnessAuto, data.blackScreenAuto, data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
    });
  } else if (data.isBrightnessAuto && data.blackScreenAuto) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?,sunrise_value = ?, sunset_value = ?, sunrise_time = ?, sunset_time = ?,black_screen_open_time = ?, black_screen_close_time = ?,is_brightness_auto = 1,is_black_screen_auto = 1,black_screen_time_options = ?,sun_time_options = ?,blackscreen_week_options_json = ?  WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.sunriseValue, data.sunsetValue, data.sunriseTime, data.sunsetTime, data.blackScreenOpenTime, data.blackScreenCloseTime, data.blackScreenTimeOptions, data.sunTimeOptions, JSON.stringify(data.blackScreenWeekData), data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
      console.log(err);
      console.log(mysqlQuery);
    });
  } else if (data.isBrightnessAuto) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?,sunrise_value = ?, sunset_value = ?, sunrise_time = ?, sunset_time = ?,is_brightness_auto = 1,is_black_screen_auto = ?, sun_time_options = ? WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.sunriseValue, data.sunsetValue, data.sunriseTime, data.sunsetTime, data.blackScreenAuto, data.sunTimeOptions, data.deviceId], function (err, results, fields) {
      console.log('Name Update OK!');
      console.log(err);
      console.log(mysqlQuery);
    });
  } else if (data.blackScreenAuto) {
    mysqlQuery = "UPDATE led_devices SET device_name = ?, black_screen_open_time = ?, black_screen_close_time = ?,is_brightness_auto = ?,is_black_screen_auto = 1,black_screen_time_options = ?,blackscreen_week_options_json = ? WHERE Id = ?";
    connection.query(mysqlQuery, [data.name, data.blackScreenOpenTime, data.blackScreenCloseTime, data.isBrightnessAuto, data.blackScreenTimeOptions, JSON.stringify(data.blackScreenWeekData), data.deviceId], function (err, results, fields) {
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