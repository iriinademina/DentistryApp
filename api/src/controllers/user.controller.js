const service = require('../services/user.service');
const uploadSingleFile = require('../common/s3.service');

async function create(req, res) {
  res.send(await service.create(req.body));
}

async function getUser(req, res) {
  res.send(await service.getUserById(req.params.id));
}

async function updateImage(req, res) {
  const uid = req.params.id;
  const fileKey = await uploadSingleFile(req, res);
  let result = await service.updateUserAvatarPath(uid, fileKey);
  res.send(result);
}

async function updateUserData (req, res) {
  const uid = req.params.id;
  let result = await service.updateUserData(uid, req.body);
  res.send(result);
}

module.exports = {
  create,
  getUser,
  updateImage,
  updateUserData
};
