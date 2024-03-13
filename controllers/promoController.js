const Promo = require('../models/promoItem')

module.exports = {

  all_promo: async(req,res)=> {
    const all_promo = await Promo.findAll();
    res.json(all_promo)
  },

  get_promo: async(req,res)=> {
    const {id} = req.params
    try {
      const get_promo = await Promo.findOne({where: {id:id}})
      res.json(get_promo)
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },

  add_promo: async(req,res) => {
    const {imagelink} = req.body
    try {
      const add_promo = await Promo.create({imagelink:imagelink})
      res.status(200).json({message:'Success add new promo', add_promo})
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server Error'});
    }
  },

  delete_promo: async(req,res) => {
    const {id} = req.params
    try {
      await Promo.destroy({where: {id:id}})
      res.status(200).json({message:'Success delete promo'})
    } catch (error) {
      console.log(error)
      res.status(500).json({message:'Server Error'})
    }
  }
}