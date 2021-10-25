
var buildMakeUser = function(userValidator, bcrypt) {

  return async ({
    first_name,
    last_name,
    nickname,
    email,
    password
  } = {}) => {

    var error = userValidator({
      first_name,
      last_name,
      nickname,
      email,
      password
    });

    if(error instanceof Object) throw new Error(error.errorList);

    const saltRounds = 5;
    var salt;
    var hashedPassword;

    if(password != undefined){
      salt = await bcrypt.genSalt(saltRounds);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    return Object.freeze({
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getNickName: () => nickname,
      getEmail: () => email,
      getPassword: () => hashedPassword
    });
    

  };

};

module.exports = buildMakeUser;
