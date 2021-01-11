// Inherited keys
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
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('🛑 Assertion Failed: ' + actual + ' !== ' + expected)
  } else {
    console.log('✅ Assertion Passed: ' + actual + ' === ' + expected)
  }
}

// actual function

const findKey= function(obj, callback){

  let v=[]

  for(let i in obj){
    if(callback(obj[i])){
      v = i
      // console.log(v)
      return v
    }
    
  }
  // return v
}

module.exports = findKey;

////test cases
/*
const l = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
const m = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) // => "noma"
const n = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"

assertEqual(l, 'noma')
assertEqual(m, 'Blue Hill')
assertEqual(n, 'Akaleri')
*/