function reduce(arr, fn, initial) {
 	return (function reduceOne(index, value){
 		if(index < arr.length){
 			return reduceOne(index + 1, fn(value, arr[index], index, arr));
 		}
 		return value;
 	}(0, initial));
}

module.exports = reduce