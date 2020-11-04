const express = require('express');
const mqtt = require('mqtt');



const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db.db');

var client  = mqtt.connect({host:'194.169.120.9',port:1883,username:'labrus',password:'112233'})

client.on('connect', function () {
    client.subscribe('home', function () {
      
    })
    client.subscribe('#', function() {
      
    })
});

client.on('message', function (topic, message) {
    // message is Buffer
    
    var topicName = topic.toString();
    console.log(topic.toString());
    //console.log(message.toString());
    var jsonData = JSON.parse(message);
    
    var topicArray = topicName.split('/');
    var token = '';
    topicArray.forEach(item => {
        if(item.length == 20){
            token= item;        
        }
    })

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
                var arrayIDList = [];
                var arrayPasswordList = [];
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
                                
                                sql = "INSERT INTO devices(Name,Password,Token) VALUES ('labrusNeww',?,?)";
                                db.all(sql, [password,token], (err, rows) => {
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
            console.log(jsonID);
            var tvid = jsonID[0].split('tvId')[1];
            //var tvStatus = jsonData[jsonID].tvdurum;

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
            
            console.log(jsonData);

            
            
            break;
        case 'home/create/'+token:
            console.log('Home2 Channel');
            
            var jsonTvIdList = [];
            var dbTvIdList = [];
            var arraySerialNumber = [];
            var dbSerialNumber = [];
            jsonTvIdList = jsonData.params.tvIds.split(',');
            jsonTvIdList.splice(jsonTvIdList.length-1, 1);
            arraySerialNumber = jsonData.params.tvSerial.split(',');
            arraySerialNumber.splice(arraySerialNumber.length-1,1);
            sql = "SELECT TvID,Serial_Number FROM Device_Status WHERE Token = ? AND Serial_Number = ?";
            var test;
            arraySerialNumber.forEach(function(item,index) {
                console.log(jsonTvIdList[index]);
                db.all(sql,[token,item],(err,rows) => {
                    if(rows.length == 0){
                        sql = "INSERT INTO Device_Status(Token,TvID,Serial_Number) VALUES (?,?,?)";
                        db.all(sql,[token,jsonTvIdList[index],item],(err,rows)=>{
                            console.log("Token : ",token,"TVID : ",jsonTvIdList[index],"Serial Number : ",item);
                        })
                    }
                })
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
})





const router = express.Router();

router.get('/',(req,res) => {
    res.send('hello');
})

router.get('/loadDevices', (req,res)=>{
    let sql = 'SELECT * FROM Device_Status';
    var arrayIDList = [];
    db.all(sql, [], (err, rows) => {
        console.log('GETDATA : ',rows);
        if (err) {
        throw err;
      }
     
      rows.forEach(item => {
          console.log(item.ID);
          console.log(item.deviceName)
          arrayIDList.push(item.ID);
      });
      
      var response = {
        rows
      };
      console.log(req.body,res.body)
      res.json(rows);
      
})

router.post('/test',function(req,res){
    
    
    console.log('test : ',req.body);
    client.publish("home/telemetry/" + req.body.token,JSON.stringify(req.body))
})
})
module.exports = router;
