const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
const MealItem = require('./mealItem.js');
const User = require('./user.js');

const Favourite = sequelize.define('Favourite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
});

Favourite.belongsTo(User, { foreignKey: 'userId' });
Favourite.belongsTo(MealItem, { foreignKey: 'itemId' });

sequelize.sync()
  .then(() => {
    console.log('Favourite table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Favourite table:', error);
  });

module.exports = Favourite;