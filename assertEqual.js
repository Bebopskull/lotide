const assertEqual = function(actual, expected) {

  let assert=null;

  if(actual !== expected){
    console.log('🤦🤦🤦 Assertion Failed: '+actual+' !== '+ expected)
  }else{
    console.log('😎😎😎 Assertion Passed: '+actual+' === ' +expected)
  }

};
/*
🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
✅✅✅ Assertion Passed: 1 === 1
*/
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Hello","Hello");

assertEqual('Hello',"hello");

assertEqual(3,3);

assertEqual(3,30);
