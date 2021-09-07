var romannumbers = require('./RomanNumbers');
const assert = require('assert');
var chai = require('chai');
var expect = chai.expect; 


describe('RomanNumbers', function() {
  describe('ConvertArabicToRoman', function() {
    it('should be callable', function(){
      romannumbers.ConvertArabicToRoman(1)
    });

    it('should be true', function() {
      assert.ok(romannumbers.ConvertArabicToRoman(1))

    });

    it('should only accept integer', function()   {
      assert.ok(romannumbers.ConvertArabicToRoman(2) === "II")
      expect(() => romannumbers.ConvertArabicToRoman('A')).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertArabicToRoman('B')).to.throw("n is not an integer") 
      expect(() => romannumbers.ConvertArabicToRoman("D")).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertArabicToRoman(null)).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertArabicToRoman(true)).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertArabicToRoman()).to.throw("n is not an integer")
      
    });

    it('should return a string on success', function()  {
      
      assert.ok(typeof(romannumbers.ConvertArabicToRoman(3)) === "string")
      
    });

    it('should convert singles to roman', function()   {
      assert.ok(romannumbers.ConvertArabicToRoman(1) === "I")
      assert.ok(romannumbers.ConvertArabicToRoman(5) === "V")
      assert.ok(romannumbers.ConvertArabicToRoman(9) === "IX")

    });

    it('should throw error if n <= 0', function() {
      expect(() => romannumbers.ConvertArabicToRoman(0)).to.throw("n must be a postive non-zero integer")
      expect(() => romannumbers.ConvertArabicToRoman(-1)).to.throw("n must be a postive non-zero integer")
      expect(() => romannumbers.ConvertArabicToRoman(-13)).to.throw("n must be a postive non-zero integer")
  
    });
   
    // it('should convert decands to roman', function () {
    //   assert.ok(romannumbers.ConvertArabicToRoman(10) === "X")
    //   assert.ok(romannumbers.ConvertArabicToRoman(21) === "XXI")
    //   assert.ok(romannumbers.ConvertArabicToRoman(56) === "LVI")
    //   assert.ok(romannumbers.ConvertArabicToRoman(98) === "LXXXXVIII")
    //   assert.ok(romannumbers.ConvertArabicToRoman(99) === "IC" )
      
    // });

  });
});