const express = require('express')
const router = express.Router()

const addresscontroller = require('../controllers/addressController')

router.get('/api/get-address/:userId', addresscontroller.getadd)

router.put('/api/address/:userId', addresscontroller.address_put)

module.exports = router