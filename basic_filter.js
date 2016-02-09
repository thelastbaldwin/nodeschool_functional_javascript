function getShortMessages(messages) {
	return messages.filter(function(message){
		return message.message.length < 50;
	}).map(function(messageObj){
		return messageObj.message;
	});
};
    
module.exports = getShortMessages