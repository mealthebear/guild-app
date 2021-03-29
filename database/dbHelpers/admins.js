const { Admin } = require('../index.js');

const createAdmin = (user) => {
  return Admin.create(user)
}

const getAdmin = (user) => {
  return Admin.find(user)
};

module.exports = { createAdmin, getAdmin };
