// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/config.js');

// const MealItem = sequelize.define('MealItem', {
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
//   imagelink_square: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   imagelink_portrait: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   ingredients: {
//     type: DataTypes.STRING,
//   },
//   prices: {
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
//     console.log('Meal table created successfully.');
//   })
//   .catch((error) => {
//     console.error('Error creating Meal table:', error);
//   });

// module.exports = MealItem;