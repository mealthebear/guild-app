const { response } = require('express');
const { getAdmin } = require('../../database/dbHelpers/admins.js');

const getAdminController = (req, res) => {
  getAdmin(req.body)
    .then((data) => {
      res.status(200).send(data)
    }).catch((err) => {
      res.status(400).send(err)
    });
}

module.exports = { getAdminController };
