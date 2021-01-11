///imports

const tail = require('../tail');
const assert = require('chai').assert;


/////tests

describe('#tail', ()=>{
  it('Ensure we get back 2 elements',()=>{
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  })
  it('ensure first element is "Lighthouse"',()=>{
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  })
  it('ensure last element is "Labs"',()=>{
    let result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  })
});



