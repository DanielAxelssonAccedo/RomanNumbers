var romannumbers = require('./RomanNumbers');
const assert = require('assert');

describe('RomanNumbers', function() {
  describe('ConvertArabicToRoman', function() {
    it('should be callable', function(){
      romannumbers.ConvertArabicToRoman(1)
    });

    it('should be true', function() {
      assert.ok(romannumbers.ConvertArabicToRoman(1))

    });

    it('should only accept intergers', function()   {
      assert.ok(romannumbers.ConvertArabicToRoman(2) === "II")
      assert.ok(romannumbers.ConvertArabicToRoman('B') === false)
      assert.ok(romannumbers.ConvertArabicToRoman(null) === false)
      assert.ok(romannumbers.ConvertArabicToRoman(true) === false)
      assert.ok(romannumbers.ConvertArabicToRoman() === false)
      
    });

    it('should return an string', function()  {
      assert.ok(typeof(romannumbers.ConvertArabicToRoman(3)) === "string")

    });

    it('should convert singles to roman', function()   {
      assert.ok(romannumbers.ConvertArabicToRoman(1) === "I")
      assert.ok(romannumbers.ConvertArabicToRoman(5) === "V")
      assert.ok(romannumbers.ConvertArabicToRoman(9) === "IX")

    });

    it('should return false if n=0', function() {
      assert.ok(romannumbers.ConvertArabicToRoman(0) === false)
  
    });
   
    it('should convert decands to roman', function () {
      assert.ok(romannumbers.ConvertArabicToRoman(10) === "X")
      assert.ok(romannumbers.ConvertArabicToRoman(21) === "XXI")
      assert.ok(romannumbers.ConvertArabicToRoman(56) === "LVI")
      assert.ok(romannumbers.ConvertArabicToRoman(98) === "LXXXXVIII")
      assert.ok(romannumbers.ConvertArabicToRoman(99) === "IC" )
      
    });

  });
});