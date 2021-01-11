const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;
const expect = require('chai').expect;


// Test

describe('#AssertArraysEqual', ()=>{
  it('Ensure an array trows the expected result',() => {
    const result = assertArraysEqual([1,2,3],[1,2,3]);
    assert.equal(result,'😎😎😎 Assertion Passed: 1,2,3 === 1,2,3' );
  })

  it('Ensure an array trows the expected result',() => {
    const result = assertArraysEqual([1,2,'3'],[1,2,3]);
    assert.equal(result,`🤦🤦🤦 Assertion Failed: 1,2,3 !== 1,2,3` );
  })
  
});

