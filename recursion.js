function reduce(arr, fn, initial) {
  if(!arr.length){
  	return;
  }
 var result = fn(initial, arr[0]);
 reduce(arr.slice(1), fn, result);
 return result;
}

module.exports = reduce