const { 
  createUser, 
  deleteUser, 
  getAllUsers, 
  updateUser,
} = require('../../database/dbHelpers/users.js');

const createUserController = (req, res) => {
  return Promise.resolve(createUser(req.body)
  .then((data) => {
    res.status(201).send(data)
  })
  .catch((err) => {
    res.status(401).send(err);
  }));
}

const deleteUserController = (req, res) => {
  deleteUser(req.body)
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const getAllUsersController = (req, res) => {
  getAllUsers()
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const updateUserController = (req, res) => {
  updateUser(updatedInfo, existingInfo)
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

module.exports = {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
};
