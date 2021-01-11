

//ACTUAL CODE


//const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => {
  const results=[]
  for(let i of arr){
    results.push(callback(i));
  }
  return results
}
module.exports = map;
/*
const results1 = map(words, word => word[0]);
console.log(results1);

// Assertion tests
assertArraysEqual(map(words, word =>word[1]), ['r','o','o','a','o'])
assertArraysEqual(map(words, word =>word.length), [6,7,2,5,3])
assertArraysEqual(map(words, (word) =>word.length*3), [18,21,6,15,9])
///end///

*/