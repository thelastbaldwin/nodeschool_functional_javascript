function getDependencies(mod, result) {
	result = result || [];
	//if there are no dependencies in the object make it empty;
	var dependencies = mod.dependencies || [];
	var key;
	Object.keys(dependencies).forEach(function(dep){
		key = dep + '@' + mod.dependencies[dep].version;
		if(result.indexOf(key) === -1){
			result.push(key);
		}
		getDependencies(mod.dependencies[dep], result);
	});
	//sorting alphabetically so no callback needed
	return result.sort();
}

module.exports = getDependencies