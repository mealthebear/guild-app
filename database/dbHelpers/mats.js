const Mat = require('../index.js');

const createMat = (matInfo) => {
  let newMat = new Mat(matInfo);
  return newMat.save((err, mat) => {
    if (err) return console.error(err);
    console.log(mat);
  });
}

const deleteMat = (mat) => {
  return Mat.findOneAndDelete(mat);
}

const getAllMats = () => {
  return Mat.find({});
};

const updateMat = (updatedInfo, existingMat) => {
  return Mat.replaceOne(existingMat, updatedInfo);
}

module.exports = {
  createMat,
  deleteMat,
  getAllMats,
  updateMat,
};
