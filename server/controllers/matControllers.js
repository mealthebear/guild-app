const { 
  createMat, 
  deleteMat, 
  getAllMats, 
  updateMat,
} = require('../../database/dbHelpers/mats.js');

const createMatController = (req, res) => {
  return Promise.resolve(createMat(req.body)
  .then((data) => {
    res.status(201).send(data)
  })
  .catch((err) => {
    res.status(401).send(err);
  }));
}

const deleteMatController = (req, res) => {
  deleteMat(req.body)
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const getAllMatsController = (req, res) => {
  getAllMats()
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const updateMatController = (req, res) => {
  updateMat(updatedInfo, existingInfo)
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

module.exports = {
  createMatController,
  deleteMatController,
  getAllMatsController,
  updateMatController,
};
