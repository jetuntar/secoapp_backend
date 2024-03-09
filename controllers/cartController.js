const Cart = require('../models/cartItem')

module.exports = {
  index: async (req, res) => {
    try {
      const items = await Cart.findAll({ where: {
        userId : req.params.userId
      }})

      if (items) {
        res.json(items);
      } else {
        return res.status(401).json({ status: 401, data: "Cart is empty!!!" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addToCart: async (req, res) => {
    // const {itemId, quantity } = req.body;

    try {
      const cartItem = await Cart.create({
        userId : req.params.userId,
        itemId: req.params.itemId,
        quantity: 1,
      });
  
      res.json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeFromCart: async (req, res) => {

    try {
      const deletedCount = await Cart.destroy({
        where: {
          userId: req.params.userId,
        }
      });
  
      if (deletedCount > 0) {
        res.status(200).json({ message: 'All item removed from cart' });
      } else {
        res.status(404).json({ message: 'Item not found in cart' });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  },

  incrementItemQuantity: async (req, res) => {
    try {
      // Check if the item already exists in the cart for the user
      const existingCartItem = await Cart.findOne({
        where: {
          userId: req.params.userId,
          itemId: req.params.itemId
        }
      });

      if (existingCartItem) {
          // If the item exists, update the quantity
          existingCartItem.quantity += 1;
          await existingCartItem.save();
          res.json({existingCartItem, message:`Increment item into ${existingCartItem.quantity}`});
      } else {
          // If the item doesn't exist, create a new entry
          const cartItem = await Cart.create({
              userId: req.params.userId,
              itemId: req.params.itemId,
              quantity: 1
          });
          res.json(cartItem);
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
  },

  decrementItemQuantity: async (req,res) => {
    try {
      const existingCartItem = await Cart.findOne({
        where: {
          userId: req.params.userId,
          itemId: req.params.itemId
        }
      });

      if (existingCartItem.quantity != 0) {
        existingCartItem.quantity -= 1;
        await existingCartItem.save();
        if (existingCartItem.quantity == 0) {
          await Cart.destroy({
            where: {
              userId: req.params.userId,
              itemId: req.params.itemId
            }
          })
          res.json({message:'cartItem removed'})
        } else {
          res.json({existingCartItem, message:`Decrement item into ${existingCartItem.quantity}`});
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}