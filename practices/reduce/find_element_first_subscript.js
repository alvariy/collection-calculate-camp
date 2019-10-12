'use strict';

function calculate_elements_sum(collection, element) {
  //write code here

  let expected = collection.filter(n => n === element);

  return expected[0];
}

module.exports = calculate_elements_sum;

