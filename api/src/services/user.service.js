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
      attributes: ['id', 'userName', 'avatarPath', 'firstName', 'lastName', 'speciality'],
    });
    return user;
  } catch (err) {
    throw err;
  }
}

async function updateUserAvatarPath (id, fileKey) {
  try {
    const user = await getUserById(id);
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

async function updateUserData (id, userData) {
  try {
    const user = await getUserById(id);
    const { firstName, lastName, speciality } = userData;
     if(user) {
      const result = await models.update(
        { firstName, lastName, speciality },
        { where: { id: id } }
      )
      const updatedUser = {
        ...user,
        firstName,
        lastName,
        speciality
      }
      return {  firstName: updatedUser.firstName,
                lastName : updatedUser.lastName,
                speciality: updatedUser.speciality
      }
    }} catch (err) {
      throw err;
    }
}

module.exports = {
  create,
  getUserById,
  updateUserAvatarPath,
  updateUserData
};
