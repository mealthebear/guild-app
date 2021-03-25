const { Mat } = require('../index.js');

const createMat = (matInfo) => {
  return Mat.create(matInfo);
}

const deleteMat = (mat) => {
  return Mat.findOneAndDelete(mat);
}

const getAllMats = () => {
  return Mat.find({});
};

const getOneMat = (mat) => {
  return Mat.find(mat)
}

const updateMat = (updatedInfo, existingMat) => {
  return Mat.updateOne(existingMat, updatedInfo);
}

module.exports = {
  createMat,
  deleteMat,
  getAllMats,
  getOneMat,
  updateMat,
};
