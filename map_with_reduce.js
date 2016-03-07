module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(prev, current){
  	prev.push(fn.call(thisArg,current));
  	return prev;
  }, [])

}
