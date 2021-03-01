const User = require('../index.js');

const createUser = (userInfo) => {
  let newUser = new User(userInfo);
  return newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log(user);
  });
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
