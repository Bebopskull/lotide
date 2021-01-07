// inhereited functions

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

// /actual function/

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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




////test code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true



const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false



////second test code///

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false