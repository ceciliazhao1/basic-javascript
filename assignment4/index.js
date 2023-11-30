const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const getDevice = require('./routes/getDevice');
const getUser = require('./routes/getUser');
const { escape } = require("querystring");

//database
import {connectToDatabase} from './database.js';
connectToDatabase();

app = express();


const port = 8080
const passphrase = 'zhaochao15=-'
const httpsOptions = {
    key: fs.readFileSync('key.pem','utf8'),
    cert: fs.readFileSync('cert.pem','utf8'),
    passphrase: passphrase
}


const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', startUp)
app.use('/', getDevice)
app.use('/', getUser)

app.get('/get-device',(req,res)=>{
  const whatDeviceIsThis = req.headers('User-Agent')
  res.send({whatDeviceIsThis});
    
});

app.get('/get-ip',(req,res)=>{
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  try {
    if(userIp){
       const location = getUserZipCode(userIp)

       return location
    }
  }
  catch(err){
    console.log(err)
  }
  res.send({userIp})
})

server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});

