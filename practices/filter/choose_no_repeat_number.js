'use strict';

function choose_no_repeat_number(collection) {

  return collection.filter((n,i) => collection.indexOf(n) === i);
  //write code here
}

module.exports = choose_no_repeat_number;
