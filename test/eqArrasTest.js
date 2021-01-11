const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;
const expect = require('chai').expect;


////TEST
describe('#eqArrays', ()=>{
  it('returns true when fed identical arrays',() => {
    
    assert.isTrue(eqArrays([1,2,3],[1,2,3]) );
  })

  it('returns false when fed different arrays',() => {
    
    assert.isFalse(eqArrays([1,2,'3'],[1,2,3]) );
  })
  
  it('returns false when fed arrays with same items in different order',() => {
    
    assert.isFalse(eqArrays([1,2,3],[3,2,1]) );
  })
});

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])) // => true
// console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
