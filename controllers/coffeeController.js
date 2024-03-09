const e = require('express');
const Coffee = require('../models/coffeeItem');
const { Op } = require('sequelize');

module.exports = {

  coffee: async (req, res) => {
    const coffeeItems = await Coffee.findAll();
    res.json(coffeeItems);
  },

  index: async (req, res) => {
    try {
      const coffeeItem = await Coffee.findAll()
      if(coffeeItem.length > 0){
      res.status(200).json({
        status: true,
        data: coffeeItem,
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
      const coffeeItem = await Coffee.findOne({where: {id:id}})
      if (!coffeeItem) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
  
      res.json(coffeeItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },

  show_idx: async (req, res) => {
    const {index} = req.params;
    try {
      const coffeeItem = await Coffee.findOne({where: {index:index}})
      if (!coffeeItem) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
  
      res.json(coffeeItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },


  searchCoffee: async (req, res) => {
    try {
      const { name } = req.body;

      const query = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
  
      const coffeeItems = await Coffee.findAll({
        where: query,
      });
  
      res.json({
        status: true,
        data: coffeeItems,
        message: 'Search results retrieved successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Server error' });
    }
  },
}