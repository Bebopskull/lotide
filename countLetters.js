// inhereited functions

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('🤦🤦🤦 Assertion Failed: ' + actual + ' !== ' + expected)
  } else {
    console.log('😎😎😎 Assertion Passed: ' + actual + ' === ' + expected)
  }
}

// actual function

const countLetters = function(string){

  let letterCount={}

  if (typeof string === 'string'){
    for (let char in string){
      //letterCount[string] = 1
        if (letterCount[string[char]]){
          letterCount[string[char]] += 1
        }else{
          letterCount[string[char]] = 1
        }
    }
  }else{
    console.log('please feed a string');
    return
  }
  console.log(letterCount)
}

countLetters("torero")
countLetters(1)