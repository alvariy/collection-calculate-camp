'use strict';

function find_last_even(collection) {
  //write code here
  return collection.reduce((a,b) =>
  {
    if(b % 2 == 0)
    {

      a=b;
      return a;
    }
    else
    return a;
  }
  );
}

module.exports = find_last_even;
