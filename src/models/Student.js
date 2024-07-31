const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student = sequelize.define('student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  program: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Student;