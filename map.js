////inherited functions
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

//ACTUAL CODE


const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => {
  const results=[]
  for(let i of arr){
    results.push(callback(i));
  }
  return results
}


const results1 = map(words, word => word[0]);
console.log(results1);

// Assertion tests
assertArraysEqual(map(words, word =>word[1]), ['r','o','o','a','o'])
assertArraysEqual(map(words, word =>word.length), [6,7,2,5,3])
assertArraysEqual(map(words, (word) =>word.length*3), [18,21,6,15,9])
