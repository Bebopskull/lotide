// inherited functions
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
const eqObjects = function(object1, object2) {

  let stand=[];

  for(obj in object1){
    if(Array.isArray(object1[obj]) && Array.isArray(object2[obj])){
      //console.log('Shazam!')
      if(eqArrays(object1[obj],object2[obj])){
        stand.push(obj);
      }else{
        return false
      }
    }else{
      if(object1[obj] === object2[obj]){
      stand.push(obj);
      }else{
      return false
      }
    }
  }

  if(stand.length===(Object.keys(object2).length) && stand.length===(Object.keys(object2).length)){
    return true
  }else{
    return false}

    console.log(object1)
    console.log(object2)
    

};

//actual function

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) !== true) {
    console.log(`🤦🤦🤦 Assertion Failed:  ${inspect(actual)}  !== ${inspect(expected)}`)
  } else {
    console.log(`😎😎😎 Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`)
  }
};

// console.log(`Example label: ${inspect(actual)}`);

const ab = { a: "1", b: "2" };

assertObjectsEqual(ab,ab)