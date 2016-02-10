function countWords(inputWords) {
	return inputWords.reduce(function(uniques, currentWord){
		if(uniques[currentWord]){
			uniques[currentWord]++;
		}else{
			uniques[currentWord]=1;
		}
		return uniques;
	},{});
}

module.exports = countWords	