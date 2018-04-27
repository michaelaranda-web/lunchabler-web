var assert = require('assert');

describe('only one restaurant has a meh preference', function() {
  def('testArray', function() { return [1,2,3] });
  
  it('should return -1 when the value is not present', function() {
    assert.equal($testArray.indexOf(4), -1);
  });
});
