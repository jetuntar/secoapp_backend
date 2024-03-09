const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
const MealItem = require('./mealItem.js');
const User = require('./user.js');

const Cart = sequelize.define('Cart', {
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
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
});

Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(MealItem, { foreignKey: 'itemId' });

sequelize.sync()
  .then(() => {
    console.log('Cart table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Cart table:', error);
  });

module.exports = Cart;