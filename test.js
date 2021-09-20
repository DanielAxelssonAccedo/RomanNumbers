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
   
    it('should convert 10 to roman', function () {
      assert.ok(romannumbers.ConvertArabicToRoman(10) === "X")
      
      
    });

    it('should convert 30 to roman', function () {

      assert.ok(romannumbers.ConvertArabicToRoman(30) === "XXX")
      
    });

    it('should convert 21 to roman', function () {

      assert.ok(romannumbers.ConvertArabicToRoman(21) === "XXI")
      
    });

    it('should convert decands to roman', function () {
      assert.ok(romannumbers.ConvertArabicToRoman(56) === "LVI")
      assert.ok(romannumbers.ConvertArabicToRoman(98) === "XCVIII")
      assert.ok(romannumbers.ConvertArabicToRoman(99) === "XCIX")
    });

    it('should convert 100 to roman', function() {

      assert.ok(romannumbers.ConvertArabicToRoman(100) === "C")
      
    });

    it('should convert 200 to roman', function() {

      assert.ok(romannumbers.ConvertArabicToRoman(200) === "CC")
      
    });

    it('should convert 210 to roman', function () {

      assert.ok(romannumbers.ConvertArabicToRoman(210) === "CCX")
      
    });

     it('should convert 345 to roman', function () {

       assert.ok(romannumbers.ConvertArabicToRoman(345) === "CCCXLV")
      
    });

 
    it('should convert 4000 to roman', function () {

      assert.ok(romannumbers.ConvertArabicToRoman(4000) === "I\u0305V\u0305")
     
   });

   
   it('should convert 4000 to roman', function () {

    assert.ok(romannumbers.ConvertArabicToRoman(5000) === "V\u0305")
   
 });


  });

  describe('ConvertSingleToRoman', function() {
    it('should be callable', function()  {
      romannumbers.ConvertSingleToRoman(1)
    });

    it('should only accept integer', function()   {
      assert.ok(romannumbers.ConvertSingleToRoman(2) === "II")
      expect(() => romannumbers.ConvertSingleToRoman('A')).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertSingleToRoman('B')).to.throw("n is not an integer") 
      expect(() => romannumbers.ConvertSingleToRoman("D")).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertSingleToRoman(null)).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertSingleToRoman(true)).to.throw("n is not an integer")
      expect(() => romannumbers.ConvertSingleToRoman()).to.throw("n is not an integer")
      
    });

    it('should return a string on success', function()  {
      
      assert.ok(typeof(romannumbers.ConvertSingleToRoman(3)) === "string")
      
    });

    it('should convert singles to roman', function()   {
      assert.ok(romannumbers.ConvertSingleToRoman(1) === "I")
      assert.ok(romannumbers.ConvertSingleToRoman(5) === "V")
      assert.ok(romannumbers.ConvertSingleToRoman(9) === "IX")

    });

    it('should throw error if n <= 0', function() {
      expect(() => romannumbers.ConvertSingleToRoman(0)).to.throw("n must be a postive non-zero integer and less then 9")
      expect(() => romannumbers.ConvertSingleToRoman(-1)).to.throw("n must be a postive non-zero integer and less then 9")
      expect(() => romannumbers.ConvertSingleToRoman(-13)).to.throw("n must be a postive non-zero integer and less then 9")
  
    });

    it('should only take n < 10', function() {
      
      expect(() => romannumbers.ConvertSingleToRoman(10)).to.throw("n must be a postive non-zero integer and less then 9")
      expect(() => romannumbers.ConvertSingleToRoman(15)).to.throw("n must be a postive non-zero integer and less then 9")
      expect(() => romannumbers.ConvertSingleToRoman(100)).to.throw("n must be a postive non-zero integer and less then 9")
      expect(() => romannumbers.ConvertSingleToRoman(1000)).to.throw("n must be a postive non-zero integer and less then 9")
      
    });
   
    
  });

});