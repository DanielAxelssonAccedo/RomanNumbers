var romannumbers = require('./RomanNumbers');
const assert = require('assert');

describe('RomanNumbers', function() {
  describe('ConvertArabicToRoman', function() {
    it('should be callable', function(){
      romannumbers.ConvertArabicToRoman()
    });

    it('should be true', function() {
      assert.ok(romannumbers.ConvertArabicToRoman())

    });
  });
});