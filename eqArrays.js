// const assertEqual = requires('./assertEqual')


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

module.exports = eqArrays;