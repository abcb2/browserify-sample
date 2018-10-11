var util = require('./lib/util');
var d = new Date(2018, 10, 10, 13, 0, 0);
// var ret = util.to_utc('2018-10-10 13:00:00', 'YYYY-MM-DD HH:mm:ss');
d = new Date();
var jp = util.tz_date(d, 'Asia/Tokyo');
var utc = util.tz_date(d, 'Etc/GMT');
var us = util.tz_date(d, 'America/New_York');

console.log(jp);
console.log(utc);
console.log(us);