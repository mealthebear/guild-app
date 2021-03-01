const router = require('express').Router();
const {
  createMatController,
  deleteMatController,
  getAllMatsController,
  updateMatController,
} = require('./controllers/matControllers.js');
const {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} = require('./controllers/userControllers.js');

router.route('/users')
  .delete(deleteUserController)
  .get(getAllUsersController)
  .post(createUserController)
  .put(updateUserController)

router.route('/mats')
  .delete(deleteMatController)
  .get(getAllMatsController)
  .post(createMatController)
  .put(updateMatController)

module.exports = router;
