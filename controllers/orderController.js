const Order = require('../models/orderItem');
const Meal = require('../models/mealItem');
const Address = require('../models/addressItem')

module.exports = {

  getordersongoing: async (req,res) => {
    try {
        const orders = await Order.findAll({
            where: {
                order_status: 'on-going'
            },
            // include: [
            //     {
            //         model: Meal,
            //     },
            //     {
            //         model: Address,
            //     }
            // ]
        });

        if (orders) {
            res.json(orders);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
},

  getuserorders: async (req,res) => {
    try {
      const orders = await Order.findAll({where: {
        userId : req.params.userId
      }})

      if (orders) {
        res.json(orders);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createorder: async (req, res) => {
    const { item_details, address_details, order_details } = req.body;
  
    try {
      // Assuming you want to create an order for each item in item_details
      const orders = await Promise.all(item_details.map(async (item) => {
        const order = await Order.create({
          userId: req.params.userId,
          itemId: item.itemId,
          addressId: address_details[0].addressId, // Assuming there's only one address for the order
          quantity: item.quantity,
          order_date: order_details.order_date
        });
        return order;
      }));
  
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  finishorder: async (req,res) => {
    const id = req.params.id
    try {
      const order = await Order.findOne({where: {
        id:id
      }})

      if (order) {
        order.order_status = 'order-finished';
        await order.save();
      }
      res.json(order)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}