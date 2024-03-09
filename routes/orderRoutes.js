const express = require('express')
const router = express.Router()

const ordercontroller = require('../controllers/orderController')

router.get('/api/get-user-orders/:userId', ordercontroller.getuserorders)

router.get('/api/get-orders-ongoing', ordercontroller.getordersongoing)

router.post('/api/add-user-order/:userId', ordercontroller.createorder)

router.post('/api/order-finish/:id', ordercontroller.finishorder)

module.exports = router