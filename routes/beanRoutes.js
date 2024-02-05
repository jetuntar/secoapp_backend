const express = require('express')
const router = express.Router()

const beancontroller = require('../controllers/beanController')

router.get('/api/beanItems', beancontroller.index)

router.get('/api/beanItem/:id', beancontroller.show)

router.post('/api/searchBean', beancontroller.searchBean)

module.exports = router