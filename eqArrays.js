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

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])) // => true
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
