const e = require('express');
const Bean = require('../models/beanItem');
const { Op } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    try {
      const beanItem = await Bean.findAll()
      if(beanItem.length > 0){
      res.status(200).json({
        status: true,
        data: beanItem,
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
      const beanItem = await Bean.findOne({id})
      if (!beanItem) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
  
      res.json({
        status: true,
        data: beanItem,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },


  searchBean: async (req, res) => {
    try {
      const { name } = req.body;

      const query = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
  
      const beanItem = await Bean.findAll({
        where: query,
      });
  
      res.json({
        status: true,
        data: beanItem,
        message: 'Search results retrieved successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Server error' });
    }
  },
}