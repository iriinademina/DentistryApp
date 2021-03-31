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
    },
    lastName: {
      type: Sequelize.UUID,
    },
    avatarPath: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = User;
