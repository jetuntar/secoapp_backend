const Promo = require('../models/promoItem')

module.exports = {

  all_promo: async(req,res)=> {
    const all_promo = await Promo.findAll();
    res.json(all_promo)
  },

  
}