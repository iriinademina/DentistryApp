const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    avatarPath: {
      type: Sequelize.STRING,
      allowNull: true
    },
    speciality: {
      type: Sequelize.STRING,
      allowNull: true
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = User;
