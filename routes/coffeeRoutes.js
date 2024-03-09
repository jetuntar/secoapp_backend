const express = require('express')
const router = express.Router()

const coffeecontroller = require('../controllers/coffeeController')

router.get('/api/coffee', coffeecontroller.coffee)

router.get('/api/coffee-items', coffeecontroller.index)

router.get('/api/coffee-item/:id', coffeecontroller.show)

router.post('/api/search-coffee', coffeecontroller.searchCoffee)

module.exports = router