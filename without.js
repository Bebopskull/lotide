const without = function (arrA, arrB) {
  const newArr = []
  const nonArr = []
  for (let i = 0; i < arrA.length; i++) {
    if (arrB.includes(arrA[i])) {
      //console.log(arrA[i])
      nonArr.push(arrA[i])
    } else {
      //console.log(arrA[i])
      newArr.push(arrA[i])
    }
  }
  return newArr
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

const words = ['hello', 'world', 'lighthouse']
console.log(without(words, ['lighthouse'])) // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])
