module.exports = function makeUpdateUser(userAccess) {

  return async function updateUser(httpRequest){
    
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const updatedUser = await userAccess.updateUser(httpRequest.params.id, httpRequest.body);

      return {
        headers,
        statusCode: 200,
        body: {
          status: 'success',
          updatedUser
        }
      };

    } catch(error){
      console.log(error);

      return {
        headers,
        statusCode: 400,
        body: {
          status: 'fail',
          errorList: error.message.split(',')
        }
      };
    }

  };
  
};
