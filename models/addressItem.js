const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
const User = require('./user.js');

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipient: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  notes: {
    type: DataTypes.STRING
  },
  distance: {
    type: DataTypes.FLOAT
  }
}, {
  timestamps: false,
});

Address.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync()
  .then(() => {
    console.log('Address table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Address table:', error);
  });

module.exports = Address;