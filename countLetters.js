// inhereited functions

// actual function

const countLetters = function(string){

  let letterCount={}

  if (typeof string === 'string'){
    for (let char in string){
      //letterCount[string] = 1
        if (char === ' '){
          letterCount;
        }else{
          if(letterCount[string[char]]){
            letterCount[string[char]] += 1
          }else{
            letterCount[string[char]] = 1
          }
        }
    }
  }else{
    console.log('please feed a string');
    return
  }
  return letterCount
  console.log(letterCount)
}

module.exports = countLetters;