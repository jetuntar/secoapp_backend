const express = require('express')
const router = express.Router()

const usercontroller = require('../../controllers/userController')

router.post('/userdata', usercontroller.userdata)

router.get('/users', usercontroller.index)

router.get('/user/:id', usercontroller.show)

router.post('/user', usercontroller.store)

router.put('/user/:id', usercontroller.update)

router.delete('/user/:id', usercontroller.delete)

router.post('/user/register', usercontroller.register)

router.post('/user/login', usercontroller.login)

module.exports = router