const { listUsers,
        findUserBy,
        findUserById,
        addUser,
        updateUser,
        deleteUser,
        dropUsers
      } = require('./mongodb');

module.exports = {
  listUsers,
  findUserBy,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
  dropUsers
};
