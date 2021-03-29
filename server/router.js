const router = require('express').Router();

const { createAdminController, getAdminController } = require('./controllers/adminControllers.js');

const {
  createMatController,
  deleteMatController,
  getAllMatsController,
  getOneMatController,
  updateMatController,
} = require('./controllers/matControllers.js');
const {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} = require('./controllers/userControllers.js');

router.route('/admins')
  .get(getAdminController)
  .post(createAdminController)

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

router.route('/onemat')
  .get(getOneMatController)

module.exports = router;
