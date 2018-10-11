var moment = require('moment-timezone');
var fmt = 'YYYY-MM-DD HH:mm:ss.SSSZ';

module.exports = {
  date2str: function(d) {
    if (!d instanceof (Date)) {
      throw new Error('need Date object');
    }
    return moment(d).format(fmt);
  },
  tz_date: function(d, tz) {
    if (!d instanceof Date) {
      throw new Error('need Date object');
    }
    return moment(d).tz(tz).format('YYYY-MM-DD HH:mm:ssZ');
  },
};