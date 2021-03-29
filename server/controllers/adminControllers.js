const { createAdmin, getAdmin } = require('../../database/dbHelpers/admins.js');

const createAdminController = (req, res) => {
  createAdmin(req.body)
    .then((data) => {
      res.status(201).send(data)
    }).catch((err) => {
      res.status(400).send(err)
    });
}

const getAdminController = (req, res) => {
  getAdmin(req.query)
    .then((data) => {
      res.status(200).send(data)
    }).catch((err) => {
      res.status(400).send(err)
    });
}

module.exports = { createAdminController, getAdminController };
