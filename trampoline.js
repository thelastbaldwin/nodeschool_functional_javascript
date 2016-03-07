// had to look this one up:
// http://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript

function repeat(operation, num) {
	// Modify this so it doesn't cause a stack overflow!
	return function(){
		if (num <= 0) return
		operation()
		return repeat(operation, --num)
	}
}

function trampoline(fn) {
	while(fn && typeof fn === 'function'){
		fn = fn();
	}
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(function(){
  	return repeat(operation, num)
  });
}
