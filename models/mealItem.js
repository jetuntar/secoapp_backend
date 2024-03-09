const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

const MealItem = sequelize.define('MealItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imagelink_square: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  item_piece: {
    type: DataTypes.STRING,
    allowNull:false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

sequelize.sync()
  .then(() => {
    console.log('Meal table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Meal table:', error);
  });

module.exports = MealItem;