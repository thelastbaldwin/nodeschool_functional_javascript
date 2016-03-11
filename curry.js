function curryN(fn, n) {
	n = n | fn.length;
	return function curryIn(curryFunc, arg){
		if(--n > 1){
			curryFunc = curryFunc.bind(null, arg);
			return curryIn;
		}else{
			fn(arg);
		}
	};
}

module.exports = curryN