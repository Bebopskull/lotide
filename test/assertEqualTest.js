///calling the function to test

const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const expect = require('chai').expect;

///TEST CODE

// Test

describe('#assertEqual', ()=>{
  it('Ensure it returns false when fed two different strings',() => {
   
    assert.equal(assertEqual('Lighthouse Labs', 'Bootcamp'), '🛑 Assertion Failed: Lighthouse Labs !== Bootcamp' );
  })
  it('Ensure it returns true when fed 1 and 1',() => {
   
    assert.equal(assertEqual(1, 1), ' ✅ Assertion Passed: 1 === 1' );
  })
});
