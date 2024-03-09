const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const midtransClient = require('midtrans-client')

// const insertData = require('./scripts/insertData');
const coffeerouter = require('./routes/coffeeRoutes');
const mealrouter = require('./routes/mealRoutes')
const loginrouter = require('./routes/auth/loginRoutes');
const favrouter = require('./routes/favouriteRoutes');
const addressrouter = require('./routes/addressRoutes');
const orderrouter = require('./routes/orderRoutes');
const promorouter = require('./routes/promoRoutes')
const cloudinary = require('cloudinary');
const checkoutrouter = require('./routes/api/route')
const cartrouter = require('./routes/cartRoutes')

const app = express();
const PORT = process.env.PORT || 3005;

cloudinary.v2.config({
  cloud_name: 'dtiaqms2k',
  api_key: '252915498732975',
  api_secret: 'Jyhb66fJDwinP0nQxnwbbIDZIJI',
  secure: true,
});


const {Snap} = midtransClient;
let snap = new Snap({
  isProducion:false,
  serverKey:'SB-Mid-server-NxDJMYT-daettKH3d_-1ky5r',
  clientKey: 'SB-Mid-client-3gh4wNPXWZ-03SEx'
})

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/checkout', checkoutrouter(snap));



// app.use(coffeerouter);
app.use(mealrouter);
app.use(loginrouter);
app.use(favrouter);
app.use(cartrouter);
app.use(addressrouter);
app.use(orderrouter);
app.use(promorouter);
//insertData;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
