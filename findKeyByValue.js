// inhereited functions


///actual function


let findKeyByValue= function(Object, value){

  let v

  for(let i in Object){
    if(Object[i]===value){
      v = i
      return v
    }

  }
  return v
}

module.export = findKeyByValue;



////assertion test (should write some more)

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const objectExemple = {
  a:1,
  b:2,
  c:3
}

assertEqual(findKeyByValue(objectExemple, 1), 'a');
assertEqual(findKeyByValue(objectExemple, 4), undefined);

*/