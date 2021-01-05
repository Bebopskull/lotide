/* eslint-disable no-unused-vars */
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

console.log(assertArraysEqual([1,2,3],[1,2,3]))
console.log(assertArraysEqual([1,2,3],[1,2,'3']))
