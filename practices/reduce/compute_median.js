'use strict';

function compute_median(collection) {
  //write code here
  let collectionSize = collection.length;

  if(collectionSize % 2 == 1)
  {
      console.log(collectionSize);
      return (collection[Math.round((collection.length - 1) / 2)]);
  }
  else
  {
      console.log(collectionSize);
      return ((collection[collectionSize / 2]-1) + (collection[(collectionSize/ 2)]) ) / 2;
  }
}

module.exports = compute_median;


