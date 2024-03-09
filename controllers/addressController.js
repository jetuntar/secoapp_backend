const Address = require('../models/addressItem');

module.exports = {
  getadd: async (req,res) => {
    try {
      const user_address = await Address.findAll({ where: {
        userId : req.params.userId
      }})

      if (user_address) {
        res.json(user_address);
      } else {
        return res.json({message: "No address" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  
  address_put: async (req, res) => {
    const { recipient, address, phone, notes, distance} = req.body;
    try {
      const userAddresses = await Address.findAll({ where: { userId: req.params.userId } });
  
      if (userAddresses.length == 0) {
        const newAddress = await Address.create({
          userId: req.params.userId,
          address: address,
          phone: phone,
          recipient: recipient,
          notes: notes,
          distance: distance
        });
        res.json(newAddress);
      } else {
        const updatedAddress = await Address.update(
          { address: address, phone: phone, recipient: recipient, notes:notes, distance:distance},
          { where: { userId: req.params.userId } }
        );
        res.status(200).json({message: `Success update user address`, updatedAddress});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}