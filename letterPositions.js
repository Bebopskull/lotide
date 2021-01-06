
// inherited functions

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('🤦🤦🤦 Assertion Failed: ' + actual + ' !== ' + expected)
  } else {
    console.log('😎😎😎 Assertion Passed: ' + actual + ' === ' + expected)
  }
}
const eqArrays = function (arrA, arrB) {
  let value

  for (let i = 0; i <= arrA.length; i++) {
    if (arrA[i] === arrB[i]) {
      value = true
    } else {
      value = false
      return value
    }
  }

  return value
}
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) !== true) {
    console.log('🤦🤦🤦 Assertion Failed: ' + actual + ' !== ' + expected)
  } else {
    console.log('😎😎😎 Assertion Passed: ' + actual + ' === ' + expected)
  }
}


//actual function

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let char in sentence){
    if(results[sentence[char]]){
      results[sentence[char]].push(Number(char))
    }else{
      results[sentence[char]]=[Number(char)];
    }
  }

  return results;
};


console.log(letterPositions('hello'))
assertArraysEqual(letterPositions("hello").e, [1]);