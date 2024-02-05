const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//const insertData = require('./scripts/insertData');
const beanrouter = require('./routes/beanRoutes');
const coffeerouter = require('./routes/coffeeRoutes');
const loginrouter = require('./routes/auth/loginRoutes')
const cloudinary = require('cloudinary');
const CoffeeItem = require('./models/coffeeItem')
const cartrouter = require('./routes/cartRoutes')

const app = express();
const PORT = process.env.PORT || 3005;

cloudinary.v2.config({
  cloud_name: 'dtiaqms2k',
  api_key: '252915498732975',
  api_secret: 'Jyhb66fJDwinP0nQxnwbbIDZIJI',
  secure: true,
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/api/coffee', async (req, res) => {
  const coffeeItems = await CoffeeItem.findAll();
  res.json(coffeeItems);
});


app.use(cartrouter);
app.use(beanrouter);
app.use(coffeerouter);
app.use(loginrouter);
//insertData;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
