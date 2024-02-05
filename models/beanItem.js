const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

const BeanItem = sequelize.define('BeanItem', {
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
  roasted: {
    type: DataTypes.STRING,
  },
  imagelink_square: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagelink_portrait: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.STRING,
  },
  special_ingredient: {
    type: DataTypes.STRING,
  },
  prices: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  average_rating: {
    type: DataTypes.FLOAT,
  },
  ratings_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  favourite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  index: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

sequelize.sync()
  .then(() => {
    console.log('Bean table created successfully.');
  })
  .catch((error) => {
    console.error('Error creating Bean table:', error);
  });

module.exports = BeanItem;