module.exports = (error) => {

  if(error.name == "ValidationError") {
    var props = Object.keys(error.errors);
    var messages = [];
    
    for(var prop of props) {
      var message = `${error.errors[`${prop}`].message}`;
      var clearMessage = message.split(',')[1].substring(1);
      
      clearMessage = clearMessage.charAt(0).toUpperCase() + clearMessage.slice(1);
      messages.push(clearMessage);
    }
    throw new Error(messages.join(','));
  }

  // TODO: update other errors handling here
  
  throw new Error("Error in database!");
};
