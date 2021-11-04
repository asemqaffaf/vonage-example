require('dotenv').config();
let opentok = require('opentok');
let OT = new opentok(process.env.API_KEY, process.env.API_SECRET);

let token = OT.generateToken('1_MX40NzM3MDA2MX5-MTYzNTk3MDgwOTUyMX5URGdab3dJTDhNSVJGMlpkZXd4WnIvWG5-UH4', { role: 'publisher' });
console.log(token);

// T1==cGFydG5lcl9pZD00NzM3MDA2MSZzaWc9N2Q4NGNiYTNiZWI0NjJjY2IzMDkyODE1NTdmN2Q4YWJiMWEzNzY4ZjpzZXNzaW9uX2lkPTFfTVg0ME56TTNNREEyTVg1LU1UWXpOVGszTURnd09UVXlNWDVVUkdkYWIzZEpURGhOU1ZKR01scGtaWGQ0V25JdldHNS1VSDQmY3JlYXRlX3RpbWU9MTYzNTk3MDg2OCZub25jZT0wLjE2MjEwODg5MTIzNTYxMTIzJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MzYwNTcyNjgmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=