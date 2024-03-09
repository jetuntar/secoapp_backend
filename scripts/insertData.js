const Item = require('../models/mealItem');
const data = require('../item.json');

const insertData = async () => {
  try {
    await Item.sync({ force: true });
    
    for (const ItemData of data) {
      await Item.create(ItemData);
    }

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit();
  }
};

insertData();