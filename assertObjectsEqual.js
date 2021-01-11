// inherited functions

const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects');

//actual function

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) !== true) {
    console.log(`🤦🤦🤦 Assertion Failed:  ${inspect(actual)}  !== ${inspect(expected)}`)
  } else {
    console.log(`😎😎😎 Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`)
  }
};

// console.log(`Example label: ${inspect(actual)}`);

const ab = { a: "1", b: "2" };

// assertObjectsEqual(ab,ab)

module.exports = assertObjectsEqual;