const express = require('express')
const router = express.Router()

const promocontroller = require('../controllers/promoController')

router.get('/api/all-promo', promocontroller.all_promo)

router.get('/api/get-promo/:id', promocontroller.get_promo)

router.post('/api/add-promo', promocontroller.add_promo)

router.post('/api/delete-promo/:id', promocontroller.delete_promo)

module.exports = router