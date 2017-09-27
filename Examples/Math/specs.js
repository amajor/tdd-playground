'use strict';
var assert = require('assert');

describe('Math', () => {
  it('should test if 2*3 = 6', () => {
    assert.equal(2*3, 6);
  });

  it('should test if (1+2)*8 = 24', () => {
    assert.equal((1+2)*8, 24);
  });

  it('should test if 2 != 5', () => {
    assert.notEqual(2, 5);
  });
  it('should test if 2 !== \'2\'', () => {
    assert.notStrictEqual(2, '2');
  });
});
