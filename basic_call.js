function duckCount() {
 return Array.prototype.reduce.call(arguments, function(prev, current){
 	return prev + (Object.prototype.hasOwnProperty.call(current, 'quack')? 1: 0);
 }, 0);
}

module.exports = duckCount