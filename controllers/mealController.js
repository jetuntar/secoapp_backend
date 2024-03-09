const Meal = require('../models/mealItem');
const { Op } = require('sequelize');

module.exports = {

  meals: async (req, res)=> {
  const mealItems = await Meal.findAll();
    res.json(mealItems);
  },

  index: async (req, res) => {
    try {
      const mealItem = await Meal.findAll()
      if(mealItem.length > 0){
      res.status(200).json({
        status: true,
        data: mealItem,
        method: req.method,
        url: req.url
      })
      }else{
        res.json({
          status: false,
          message: "Data masih kosong"
        })
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },

  show: async (req, res) => {
    const {id} = req.params;
    try {
      const mealItem = await Meal.findOne({where: {id:id}})
      if (!mealItem) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
  
      res.json(mealItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },


  mealAdd: async (req,res) => {
    const { name, description, imagelink_square, item_piece, price, type } = req.body
    try {
      const newMeal = await Meal.create({
        name:name,
        description:description,
        imagelink_square:imagelink_square,
        item_piece:item_piece,
        price:price,
        type:type
      });
      res.status(200).json({meesage: 'success add new meal', newMeal})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed add new meal' });
    }
  },

  mealEdit: async (req,res) => {
    const { name, description, imagelink_square, item_piece, price, type } = req.body

    try {
      const updatedMeal = await Meal.update(
        { name:name, description:description, imagelink_square:imagelink_square, item_piece:item_piece, price:price, type:type },
        { where: { id:req.params.id }}
      );
      res.status(200).json({message: `Success update meal`, updatedMeal})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed edit meal' });
    }
  },

  type: async (req, res) => {
    const {type} = req.params;
    try {
      const mealItem = await Meal.findAll({where: {type:type}})
      if (!mealItem) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
      res.json(mealItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  }
}