const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
const MealItem = require('./mealItem.js');
const User = require('./user.js');
const Address = require('./addressItem.js');

const Order = sequelize.define('Order', {
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
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  order_status: {
    type: DataTypes.STRING,
    defaultValue:'on-going'
  }
}, {
  timestamps: false,
});

Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsTo(MealItem, { foreignKey: 'itemId' });
Order.belongsTo(Address, {foreignKey: 'addressId'});

sequelize.sync()
  .then(() => {
    console.log('Order table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Order table:', error);
  });

module.exports = Order;