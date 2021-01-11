
// inherited functions//


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

module.export = countOnly;
