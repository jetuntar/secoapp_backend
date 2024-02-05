const express = require('express')
const router = express.Router()

const coffeecontroller = require('../controllers/coffeeController')

router.get('/api/coffee', coffeecontroller.coffee)

router.get('/api/coffeeItems', coffeecontroller.index)

router.get('/api/coffeeItem/:id', coffeecontroller.show)

router.post('/api/searchCoffee', coffeecontroller.searchCoffee)

module.exports = router