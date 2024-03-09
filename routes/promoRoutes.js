const express = require('express')
const router = express.Router()

const promocontroller = require('../controllers/promoController')

router.get('/api/all-promo', promocontroller.all_promo)


module.exports = router