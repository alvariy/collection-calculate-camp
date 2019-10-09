'use strict';

function choose_common_elements(collection_a, collection_b) {

  return collection_a.filter( (collection,i) => collection === collection_b[i]);
  

  //write code here
}

module.exports = choose_common_elements;
