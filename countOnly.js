
// inherited functions//
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('🤦🤦🤦 Assertion Failed: ' + actual + ' !== ' + expected)
  } else {
    console.log('😎😎😎 Assertion Passed: ' + actual + ' === ' + expected)
  }
}

// Actual Function//

const countOnly = function (allItems, itemsToCount) {

  // create the object that store the counts for each item
  const results = {};
 // loop trough items on the array
  for (const item of allItems) {
    // check if that item is specified in the given object
    if (itemsToCount[item]) {
      //check if the given key correspond to the value of the item
      if (results[item]) {
        //increase count
        results[item] += 1;
        //console.log(item)
      }else {
        //keep the count at 1
        results[item] = 1;
      }//else do nothing

    // console.log(item);
    } 
  }

  //return result object with the counted items
  return results
}

// test code
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
]

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })

assertEqual(result1.Jason, 1)
assertEqual(result1.Karima, undefined)
assertEqual(result1.Fang, 2)
assertEqual(result1.Agouhanna, undefined)
