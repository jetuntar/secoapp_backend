const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

const PromoItem = sequelize.define('PromoItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  imagelink: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  timestamps: false,
});

sequelize.sync()
  .then(() => {
    console.log('Promo table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Promo table:', error);
  });

module.exports = PromoItem;