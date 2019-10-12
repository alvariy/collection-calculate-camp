'use strict';
var rank_asc = function(collection){

  return collection.sort(function(a,b){
    console.log(b-a);
    return b-a;
  } );
};

module.exports = rank_asc;
