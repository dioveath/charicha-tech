// Gateway to db

const User = require('../../../db/mongodb/models/user');
const serialize = require('./serializer');
const makeUser = require('../../../models/user/index').makeUser;
const makeUpdateUser = require('../../../models/user/index').makeUpdateUser;
const errorFormatter = require('./errorFormatter');


function listUsers(){
  return User.find({}).then(serialize).catch(errorFormatter);
}

function findUserBy(prop, val){
  if(prop === "id") prop = "_id";
  return User.find({[prop]: val}).then(res => serialize(res[0])).catch(errorFormatter);
}

function findUserById(id){
  return User.findById(id).then(serialize).catch(errorFormatter);
}

async function addUser(userInfo){
  // defaults
  userInfo.roles = ['614b6844e28ef411e800368d']; // this is not actual role

  var user = await makeUser(userInfo);

  var newUser = {
    first_name: user.getFirstName(),
    last_name: user.getLastName(),
    nickname: user.getNickName(),
    email: user.getEmail(),
    password: user.getPassword(),
    roles: user.getRoles()
  };

  return User.create(newUser).then(serialize).catch(errorFormatter);
}

async function updateUser(id, updateUserInfo) {
  if(!id)
    throw new Error("You must supply id!");

  const validUpdateUserData = await makeUpdateUser(updateUserInfo);

  if(updateUserInfo.hasOwnProperty('password')) {
    updateUserInfo.password = validUpdateUserData.getPassword();
  }

  // TODO: fix error here
  return User.findByIdAndUpdate(id, updateUserInfo, { new: true })
    .then(serialize)
    .catch(errorFormatter);
}

function deleteUser(id){
  return User.findByIdAndDelete(id)
    .then(res => {
      if(!res)
        throw {
          name: 'Error',
          code: 11011,
          _id: id
        };
      return {
        id: res._id.toString()
      };
    }).catch(errorFormatter);
}

function dropUsers(){
  return User.deleteMany().catch(errorFormatter);
}


module.exports = {
  listUsers,
  findUserBy,
  findUserById,
  addUser,
  updateUser,
  deleteUser
};
