function loadUsers(userIds, load, done) {
	var count = 0;
	var users = []
	userIds.forEach(function(userId){
		load(userId, function(){
			if(++count == userIds.length){
				done(users);
			}
		});
	});
}

module.exports = loadUsers