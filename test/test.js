var assert = require('assert');
var util = require('../lib/util');

describe('Array', () => {
  it('should return -1 when the value is not present', () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
  it('DateオブジェクトはJSTのtimezoneの文字列に変換される。', () => {
    d = new Date(2018, 10, 10, 19, 0, 0);
    var expect = '2018-11-10 19:00:00.000+09:00';
    assert.equal(util.date2str(d), expect);
  });
});