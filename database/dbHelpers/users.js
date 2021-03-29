const { User } = require('../index.js');

const createUser = (userInfo) => {
  return User.create(userInfo);
}

const deleteUser = (user) => {
  return User.findOneAndDelete(user);
}

const getAllUsers = () => {
  return User.find({});
};

const updateUser = (updatedInfo, existingUser) => {
  return User.replaceOne(existingUser, updatedInfo);
}

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
};
