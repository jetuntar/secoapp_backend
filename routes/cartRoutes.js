const express = require('express')
const router = express.Router()

const cartcontroller = require('../controllers/cartController')

router.get('/api/user-cart-items/:userId', cartcontroller.index)

router.post('/api/add-to-cart/:userId', cartcontroller.addToCart)

router.post('/api/remove-items/:userId', cartcontroller.removeFromCart)

router.put('/api/increment-item-cart/:userId/:itemId', cartcontroller.incrementItemQuantity)

router.put('/api/decrement-item-cart/:userId/:itemId', cartcontroller.decrementItemQuantity)

module.exports = router