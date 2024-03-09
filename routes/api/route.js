const express = require('express');
const router = express.Router();

module.exports = (snap) => {
  router.post('/', async (req, res) => {
    const { item_details, transaction_details } = req.body;
    try {
      const parameter = {
        item_details: item_details.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        transaction_details: {
          order_id: transaction_details.order_id,
          gross_amount: transaction_details.gross_amount
        }
    };

      // Create transaction using Midtrans Snap
      const transaction = await snap.createTransaction(parameter);
      const transactionToken = transaction.token;
      console.log('transactionToken:', transactionToken);
      return res.json({ transactionToken });
    } catch (error) {
      console.error('Error creating transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};
