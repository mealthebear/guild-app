const { Admin } = require('../index.js');

const getAdmin = (user) => {
  return Admin.find(user)
};

module.exports = { getAdmin };