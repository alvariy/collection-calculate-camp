'use strict';

function choose_multiples_of_three(collection) {

  return collection.filter(n => n % 3 === 0);
  //write code here
}

module.exports = choose_multiples_of_three;
