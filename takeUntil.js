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

const takeUntil = function(array, callback) {
  // ...
  
  const taken = []
  for(let i of array){
    if(!callback(i)){
      // console.log(`${array[i]} : ${filter}`)
      taken.push(i)
    }else{
      return taken
    }
  }
  return taken
}


//test code///
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);//[1, 2, 5, 7, 2,]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);