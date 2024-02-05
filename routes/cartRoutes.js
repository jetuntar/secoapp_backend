const express = require('express')
const router = express.Router()

const coffeecontroller = require('../controllers/cartController')

router.get('/api/cartItems/:userId', coffeecontroller.index)

router.post('/api/addToCart/:userId', coffeecontroller.addToCart)

router.post('/api/removeItem', coffeecontroller.removeFromCart)

router.put('/api/updateCart', coffeecontroller.updateItemCart)

module.exports = router