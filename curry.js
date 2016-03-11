function curryN(fn, n) {
    n = n || fn.length;
    return function curryIn(arg){
        if(n > 1){
            return curryN(fn.bind(null, arg), n-1);
        }else{
            return fn(arg);
        }
    };
}

module.exports = curryN