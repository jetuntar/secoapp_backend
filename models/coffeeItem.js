// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/config.js');

// const CoffeeItem = sequelize.define('CoffeeItem', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.TEXT,
//   },
//   roasted: {
//     type: DataTypes.STRING,
//   },
//   imagelink_square: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   imagelink_portrait: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   ingredients: {
//     type: DataTypes.STRING,
//   },
//   special_ingredient: {
//     type: DataTypes.STRING,
//   },
//   price: {
//     type: DataTypes.DOUBLE,
//     allowNull: false,
//   },
//   average_rating: {
//     type: DataTypes.FLOAT,
//   },
//   ratings_count: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   favourite: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
//   type: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   index: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// });

// sequelize.sync()
//   .then(() => {
//     console.log('Coffee table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating Coffee table:', error);
//   });

// module.exports = CoffeeItem;