module.exports = function makeGetUser(userAccess){
  
  return async function getUser(httpRequest){
    
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const user = await userAccess.findUserById(httpRequest.params.id);

      return {
        headers,
        statusCode: 200,
        body: {
          status: 'success',
          user
        }
      };

    } catch(error){
      console.log(error);

      return {
        headers,
        statusCode: 400,
        body: {
          status: 'fail',
          statusCode: 400,
          errorList: error.message.split(',')
        }
      };
    }

  };

};
