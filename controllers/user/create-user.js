module.exports = function makeCreateUser(userAccess) {

  return async function createUser(httpRequest){
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const newUser = await userAccess.addUser(httpRequest.body);
      return {
        headers,
        statusCode: 200,
        body: {
          status: 'success',
          statusCode: 200,
          newUser
        }
      };
    } catch (error){
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
