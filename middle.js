// PRE FUNCTIONS///
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION///

const middle = function (arr) {
  // lets create a new array to store the selected values.
  const newArr = []

  // let's check if an the lenght is more than 2.
  if (arr.length > 2) {
    // lets divide the lenght of the array by 2, rounded down, and store it in a   variable.

    const m = Math.floor(arr.length / 2)

    // Then let's create a new iteration of that variable and then add 1 to be   sure we always got the first value in even length arrays.

    const m1 = Math.floor(arr.length / 2) + 1

    // lets add a condition to sort even and odd array's lengths. then make   selection options for both cases and store them in the new array (newArr).

    if (arr.length % 2 === 0) {
      newArr.push(m)
      newArr.push(m1)
    } else {
      newArr.push(m1)
    }
    console.log(newArr)
    return newArr
  } else {
    console.log(newArr)
    return newArr
  }
}

module.exports = middle;