"use strict";

var _require = require('core-js'),
    Object = _require.Object;

var express = require('express');

var mqtt = require('mqtt');

var fs = require('fs');

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
  rejectUnauthorized: false,
  username: 'labrus',
  password: '112233',
  connectTimeout: 5000
};

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db.db');
var client = mqtt.connect('ws://194.169.120.9:9883', opts);
client.on('connect', function () {
  console.log('connect');
  client.subscribe('home', function () {});
  client.subscribe('#', function () {});
});
var selectedTvID, selectedSerialNumber;
client.on('message', function (topic, message) {
  // message is Buffer
  var topicName = topic.toString();
  console.log(topic.toString()); //console.log(message.toString());

  var jsonData = JSON.parse(message);
  var topicArray = topicName.split('/');
  var token = '';
  topicArray.forEach(function (item) {
    if (item.length == 20) {
      token = item;
    }
  });
  console.log('TETETETS', jsonData);
  console.log('TOKEN : ' + token + 'TOPIC : ' + topicName);

  switch (topicName) {
    case 'home/' + token:
      console.log('Home Channel');
      var password = jsonData.params.password;

      if (token != "" && password != "") {
        console.log('Token : ', token);
        var sql = 'SELECT * FROM Settings';
        var arrayIDList = [];
        var arrayPasswordList = [];
        db.all(sql, [], function (err, rows) {
          console.log(rows);
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
                sql = "INSERT INTO devices(Name,Password,Token) VALUES ('labrusNeww',?,?)";
                db.all(sql, [password, token], function (err, rows) {
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
      var jsonID = Object.keys(jsonData);
      console.log('ATTR : ', jsonID);
      console.log('ATTR2 : ', jsonData); //console.log('DX : ',jsonData.params.dx.split(','));

      console.log(selectedTvID);
      console.log(selectedSerialNumber);
      var testArray = {
        km: 'RemoteLock',
        ka: 'TvStatus',
        kf: 'VoiceValue',
        kh: 'BrightnessValue',
        dx: 'PictureMode'
      };
      var selectedPinKey = testArray[Object.keys(jsonData.params)];
      var arrayIDValue = jsonData.params[Object.keys(jsonData.params)].split(',');
      console.log('TVID : ', arrayIDValue[0]);
      console.log('VALUE : ', arrayIDValue[1]);
      selectedTvID = arrayIDValue[0];
      var selectedPinValue = arrayIDValue[1];
      console.log('KEY ', selectedPinKey);
      console.log('VALUE ', jsonData.params[Object.keys(jsonData.params)]);
      sql = "UPDATE Device_Status SET " + selectedPinKey + " = ? WHERE Token = ? AND TvID = ? AND Serial_Number = ?";
      db.all(sql, [selectedPinValue, token, selectedTvID, selectedSerialNumber], function (err, rows) {
        console.log("Token : ", token, "TVID : ", selectedTvID, "Serial Number : ", selectedSerialNumber, 'KEY : ', selectedPinKey);
      }); //var tvStatus = jsonData[jsonID].tvdurum;
      //console.log('TV STATUS ', parseInt(tvStatus));

      /*if(tvStatus == 1){
          Object.keys(jsonData)
          var tvLock = jsonData[jsonID].tvlock;
          var voiceValue = jsonData[jsonID].sesdurum;
          var brightnessValue = jsonData[jsonID].parlakdurum;
          var temperatureValue = jsonData[jsonID].temperature;
          var nosignalValue = jsonData[jsonID].nosignal;
          var firmwareVersion = jsonData[jsonID].firmwareVersion;
          sql = "UPDATE Device_Status SET TvStatus = ?,RemoteLock = ?,VoiceValue = ?,BrightnessValue = ?,TempetureValue = ?,NoSignal = ?, FirmwareVersion = ? WHERE Token = ? AND TvID = ?";
          db.all(sql,[parseInt(tvStatus),parseInt(tvLock),parseInt(voiceValue),parseInt(brightnessValue),parseInt(temperatureValue),parseInt(nosignalValue),firmwareVersion.toString(),token.toString(),parseInt(tvid)],(err,rows) => {console.log(err)})
          console.log(sql)
          console.log(tvid, tvStatus)
      }else {
          sql = "UPDATE Device_Status SET TvStatus = ? WHERE Token = ? AND TvID = ?";
          db.all(sql, [parseInt(tvStatus),token.toString(),parseInt(tvid)],(err,rows) => {
              console.log(err)
              console.log('tv status 0 ')
          });
          console.log(token,tvid, tvStatus)
      }*/
      //console.log(jsonData[jsonID].tvdurum);

      break;

    case 'home/attributesUp/' + token:
      console.log('AttributesUp Channel');
      var dataArray = jsonData.params.up.split(',');
      var TvID = dataArray[0];
      var tvDurum = dataArray[1];
      var nosignal = dataArray[2];
      var temperature = dataArray[3];
      var firmwareVersion = dataArray[4];

      if (tvDurum == 0) {
        sql = "UPDATE Device_Status SET TvStatus = 0 WHERE Token = ? AND TvID = ?";
        db.all(sql, [token, TvID], function (err, rows) {
          console.log("Success AttributesUp Update : " + "Token : ", token, "TVID : ", selectedTvID, "Serial Number : ", selectedSerialNumber, 'KEY : ', selectedPinKey);
        });
      } else {
        sql = "UPDATE Device_Status SET TvStatus = 1, NoSignal = ?, TempetureValue = ?, firmwareVersion = ? WHERE Token = ? AND TvID = ?";
        db.all(sql, [nosignal, temperature, firmwareVersion, token, TvID], function (err, rows) {
          console.log("Success AttributesUp Update ALL");
        });
      }

      console.log('TVID : ', TvID, 'TvDurum : ', tvDurum, 'No Signal : ', nosignal, 'Temp : ', temperature, 'firmwareVersion : ', firmwareVersion);
      break;

    case 'home/create/' + token:
      console.log('Home2 Channel');
      var jsonTvIdList = [];
      var dbTvIdList = [];
      var arraySerialNumber = [];
      var dbSerialNumber = [];
      var ipAddress = jsonData.params.ip;
      var tvBrand = jsonData.params.tvModel;
      jsonTvIdList = jsonData.params.tvIds.split(',');
      jsonTvIdList.splice(jsonTvIdList.length - 1, 1);
      arraySerialNumber = jsonData.params.tvSerial.split(',');
      arraySerialNumber.splice(arraySerialNumber.length - 1, 1);
      sql = "SELECT TvID,Serial_Number FROM Device_Status WHERE Token = ? AND Serial_Number = ?";
      var test;
      arraySerialNumber.forEach(function (item, index) {
        console.log(jsonTvIdList[index]);
        db.all(sql, [token, item], function (err, rows) {
          if (rows.length == 0) {
            sql = "INSERT INTO Device_Status(Token,TvID,Serial_Number,Brand,IP_Address) VALUES (?,?,?,?,?)";
            db.all(sql, [token, jsonTvIdList[index], item, tvBrand, ipAddress], function (err, rows) {
              console.log("Token : ", token, "TVID : ", jsonTvIdList[index], "Serial Number : ", item);
            });
          }
        });
      });
      /*db.all(sql, [token], (err, rows) => {
          
          if(rows.length == 0){
              arraySerialNumber.forEach(function(item){
                  sql = "INSERT INTO Device_Status(Token,TvID,Serial_Number) VALUES (?,?,?)";
                  db.all(sql, [token,item,item.Serial_Number], (err, rows) => {
                      console.log('TVID added.');
                  })
              })
              
          }
          rows.forEach(function(item) {  
              /*console.log(item.TvID.toString());
              console.log(item.Serial_Number.toString());
              dbTvIdList.push(item.TvID.toString());
              dbSerialNumber.push(item.Serial_Number.toString());
          })
          console.log(dbTvIdList);
          console.log(jsonTvIdList);
          console.log('db List Serial Number : ',dbSerialNumber);
          jsonTvIdList.forEach(function(item) {
              
              if(!dbTvIdList.includes(item)){
                  console.log('test');
                  sql = "INSERT INTO Device_Status(Token,TvID) VALUES (?,?)";
                  db.all(sql, [token,item], (err, rows) => {
                      console.log('TVID added.');
                  })
              }
          })
      })*/

      break;
  }
});
var router = express.Router();
router.get('/', function (req, res) {
  res.send('hello');
});
router.get('/loadDevices', function (req, res) {
  var sql = 'SELECT * FROM Device_Status';
  var arrayIDList = [];
  db.all(sql, [], function (err, rows) {
    console.log('GETDATA : ', rows);

    if (err) {
      throw err;
    }

    rows.forEach(function (item) {
      console.log(item.ID);
      console.log(item.deviceName);
      arrayIDList.push(item.ID);
    });
    var response = {
      rows: rows
    };
    console.log(req.body, res.body);
    res.json(rows);
  });
  router.post('/test', function (req, res) {
    selectedTvID = req.body.params.tvId;
    selectedSerialNumber = req.body.params.tvSerial;
    console.log('test : ', req.body);
    client.publish("home/telemetry/" + req.body.token, JSON.stringify(req.body));
  });
  router.post('/detectDevices', function (req, res) {
    console.log('DETECT DEVICES : ' + req.body.token);
    client.publish("home/telemetry/" + req.body.token, JSON.stringify(req.body)).then(function (response, request) {
      console.log('SUCCESS POST', response);
      console.log('SUCCESS REQUEST : ', request);
      response.end();
    })["catch"](function (err) {
      console.log(err);
    });
  });
});
module.exports = router;