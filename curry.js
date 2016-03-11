function curryN(fn, n) {
    n = n || fn.length;
    return function curryIn(curryFunc, count, arg){
        if(count > 1){
            return curryIn.bind(null, curryFunc.bind(null, arg), count-1);
        }else{
            return curryFunc(arg);
        }
    }.bind(null, fn, n);
}

module.exports = curryN