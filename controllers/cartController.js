const Cart = require('../models/cartItem')

module.exports = {
  index: async (req, res) => {
    const userId = req.params.userId;
    
    try {
      const items = await Cart.findAll({ where: {
        userId : userId
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
    const {itemId, quantity } = req.body;

    try {
      const cartItem = await Cart.create({
        userId : req.params.userId,
        itemId,
        quantity,
      });
  
      res.json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeFromCart: async (req, res) => {
    const {id} = req.body;

    try {
      const deletedCount = await Cart.destroy({
        where: {
          id: id
        }
      });
  
      if (deletedCount > 0) {
        res.status(200).json({ message: 'Item removed from cart' });
      } else {
        res.status(404).json({ message: 'Item not found in cart' });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  },

  updateItemCart: async (req, res) => {
    const { id, quantity } = req.body;

    try {
      const [updatedCount, updatedRows] = await Cart.update(
        { quantity: quantity },
        {
          where: {
            id: id
          },
          returning: true, // Returns the updated rows
          plain: true // Returns only the updated row itself, not an array
        }
      );

      if (updatedRows) {
        res.status(200).json({ message: 'Item in cart updated successfully', updatedItem: updatedRows });
      } else {
        res.status(404).json({ message: 'Item not found in cart' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}