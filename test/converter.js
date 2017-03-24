var should = require('chai').should() //actually call the function
  , foo = 'bar';

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      foo.should.be.a('string');
    });
  });
});
