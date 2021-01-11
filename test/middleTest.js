const middle = require('../middle')
const assert = require('chai').assert;
const expect = require('chai').expect;

/// test code always

describe('#middle', ()=>{
  it('returns one value when fed odd array',() => {
    
    assert.deepEqual(middle([1, 2, 3]),[2] );
  })

  it('returns two values when fed even array',() => {
    
    assert.deepEqual(middle([1, 2, 3 , 4]),[ 2,3 ] );
  })

  it('returns ane empty array when fed an array with 1 element',() => {
    
    assert.deepEqual(middle([1, 2]),[] );
  })
  it('returns ane empty array when fed an array with 2 elements',() => {
    
    assert.deepEqual(middle([1]),[] );
  })
  it('returns ane empty array when fed an empty aray',() => {
    
    assert.deepEqual(middle([]),[] );
  })
  
});

