const BeanItem = require('../models/beanItem');
const data = require('../bean.json');

const insertData = async () => {
  try {
    await BeanItem.sync({ force: true });
    
    for (const BeanItemData of data) {
      await BeanItem.create(BeanItemData);
    }

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    process.exit();
  }
};

insertData();