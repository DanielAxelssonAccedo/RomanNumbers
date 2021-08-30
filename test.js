var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
  }

var mochatest = require('./mochatest.js');
describe('MochaTest', function() {
    
    
    
    
    describe('Pang', function() {
      it('should be callable', function() {
        mochatest.pang();
      });

      it('should return "Hello World"', function() {
         
          assert.equal(mochatest.pang(),"Hello World")      
      });

      it('should only be letters', function() {
        
        var output = mochatest.pang()
        for(const element of output)
        {
            assert.ok(isCharacterALetter(element))
        }
       

      });


    });
  });
