function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
	return submittedUsers.every(function(submittedUser){
		//check to see if the element is in goodUsers
		return goodUsers.some(function(goodUser){
			return submittedUser.id === goodUser.id;
		});
	});
  };
}

module.exports = checkUsersValid