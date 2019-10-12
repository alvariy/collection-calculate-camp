'use strict';

function find_first_even(collection) {
  //write code here

  var count = 0;
  return collection.reduce((a,b) =>
  {

    if(b % 2 === 0 && count === 0)
    {
      count++;
      a=b;
      return a;
    }
    else
    {
    return a;
    }
    
  }
  );
}

module.exports = find_first_even;

