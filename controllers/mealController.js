// const e = require('express');
// const Meal = require('../models/mealItem');
// const { Op } = require('sequelize');

// module.exports = {
//   index: async (req, res) => {
//     try {
//       const mealItem = await Meal.findAll()
//       if(mealItem.length > 0){
//       res.status(200).json({
//         status: true,
//         data: mealItem,
//         method: req.method,
//         url: req.url
//       })
//       }else{
//         res.json({
//           status: false,
//           message: "Data masih kosong"
//         })
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({message: 'Server Error'});
//     }
//   },

//   show: async (req, res) => {
//     const {id} = req.params;
//     try {
//       const mealItem = await Meal.findOne({id})
//       if (!mealItem) {
//         return res.status(404).json({
//           status: false,
//           message: "Data tidak ditemukan",
//         });
//       }
  
//       res.json({
//         status: true,
//         data: mealItem,
//         method: req.method,
//         url: req.url,
//         message: "Data berhasil didapat",
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({message: 'Server Error'});
//     }
//   },


//   searchMeal: async (req, res) => {
//     try {
//       const { name } = req.body;

//       const query = {
//         name: {
//           [Op.iLike]: `%${name}%`,
//         },
//       };
  
//       const mealItems = await Meal.findAll({
//         where: query,
//       });
  
//       res.json({
//         status: true,
//         data: mealItems,
//         message: 'Search results retrieved successfully',
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: false, message: 'Server error' });
//     }
//   },
// }