const Fav = require('../models/favouriteItem');
const Meal = require('../models/mealItem');

module.exports = {
  index: async (req, res) => {
    const userId = req.params.userId;
    
    try {
      const items = await Fav.findAll({ where: {
        userId : userId
      },
      include:[
        {
            model: Meal,
        }
      ]
    })
      if (items) {
        res.json(items);
      } else {
        return res.status(401).json({ status: 401, data: "Fav is empty!!!" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  searchFavItem: async(req,res) => {
    try {
      const isFav = await Fav.findAll({where: {
        itemId: req.params.itemId
      }})

      if (isFav.length != 0) {
        res.json(isFav)
      } else {
        return res.status(401).json({ status: 401, data: "Data not found" });
      }
    } catch (error) {
      
    }
  },

  addToFav: async (req, res) => {
    try {
      const existingFavItem = await Fav.findOne({where : {
        userId: req.params.userId,
        itemId: req.params.itemId
      }})

      if (!existingFavItem) {
        const favItem = await Fav.create({
          userId : req.params.userId,
          itemId : req.params.itemId
        });
        res.json(favItem);
      } else {
        res.status(200).json({message:'item is favorite'});
        console.log('item is favorite')
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeFromFav: async (req, res) => {

    try {
      const deletedCount = await Fav.destroy({
        where: {
          userId : req.params.userId,
          itemId : req.params.itemId
        }
      });
  
      if (deletedCount > 0) {
        res.status(200).json({ message: 'Item removed from fav' });
      } else {
        res.status(404).json({ message: 'Item not found in fav' });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  }
}