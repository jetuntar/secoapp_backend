const express = require('express')
const router = express.Router()

const mealcontroller = require('../controllers/mealController')

router.get('/api/meals', mealcontroller.meals)

router.get('/api/meal-item/:id', mealcontroller.show)

router.get('/api/type-meal/:type', mealcontroller.type)

router.post('/api/add-meal', mealcontroller.mealAdd)

router.put('/api/edit-meal/:id', mealcontroller.mealEdit)

module.exports = router