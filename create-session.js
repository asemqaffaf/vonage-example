require('dotenv').config();
let opentok = require('opentok');
let OT = new opentok(process.env.API_KEY, process.env.API_SECRET);

OT.createSession(function(error, result) {
    console.log(error)
  console.log(result);
});

// 1_MX40NzM3MDA2MX5-MTYzNTk3MDgwOTUyMX5URGdab3dJTDhNSVJGMlpkZXd4WnIvWG5-UH4