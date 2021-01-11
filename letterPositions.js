
//actual function

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let char in sentence){
    if(results[sentence[char]]){
      results[sentence[char]].push(Number(char))
    }else{
      results[sentence[char]]=[Number(char)];
    }
  }

  return results;
};

module.exports = letterPositions;
/*
console.log(letterPositions('hello'))
assertArraysEqual(letterPositions("hello").e, [1]);
*/