const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('🛑 Assertion Failed: ' + actual + ' !== ' + expected)
  } else {
    console.log('✅ Assertion Passed: ' + actual + ' === ' + expected)
  }
}

module.exports = assertEqual;

/*
🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
✅✅✅ Assertion Passed: 1 === 1
*/


