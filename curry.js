function curryN(fn, n) {
    n = n || fn.length;
    return function curryIn(curryFunc, arg){
        if(n-- > 1){
            return curryIn.bind(null, curryFunc.bind(null, arg));
        }else{
            return curryFunc(arg);
        }
    }.bind(null, fn);
}

module.exports = curryN