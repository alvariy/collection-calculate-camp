'use strict';

function calculate_elements_sum(collection) {
  //write code here
  return collection.reduce((a,b) => a+b);

}

module.exports = calculate_elements_sum;

