const sequelize = require('sequelize');
const models = require('../models/user');

async function create(data) {
  try {
    const newUser = await models.create(data);
    return newUser;
  } catch (err) {
    if (err instanceof sequelize.UniqueConstraintError) {
      throw new errors.BadRequestError(err.errors[0].message);
    }
    throw err;
  }
}

async function getUserById(uId) {
  try {
    const user = await models.findOne({
      where: { id: uId },
      attributes: ['id', 'userName', 'avatarPath'],
    });
    return user;
  } catch (err) {
    throw err;
  }
}

async function updateUserAvatarPath (id, fileKey) {
  try {
    const user = await getUserById(id);
    console.log('user', user)
     if(user) {
      const result = await models.update(
        { avatarPath: fileKey },
        { where: { id: id } }
      )
      const updatedUser = {
        ...user,
        avatarPath: fileKey
      }
      return { avatarPath: updatedUser.avatarPath}
    }} catch (err) {
      throw err;
    }
    
}

module.exports = {
  create,
  getUserById,
  updateUserAvatarPath
};
