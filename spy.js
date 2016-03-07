function Spy(target, method) {
	var result = {
		count: 0
	}
	//creates a copy?
	var originalMethod = target[method];

	target[method] = function(){
		result.count++;
		return originalMethod.apply(target, arguments);
	}

	return result;
}

module.exports = Spy
