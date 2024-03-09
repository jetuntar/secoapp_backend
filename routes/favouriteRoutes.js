const express = require('express')
const router = express.Router()

const favcontroller = require('../controllers/favouriteController')

router.get('/api/user-fav-items/:userId',favcontroller.index)

router.get('/api/fav-item/:itemId',favcontroller.searchFavItem)

router.post('/api/add-to-fav/:userId/:itemId',favcontroller.addToFav)

router.post('/api/remove-fav/:userId/:itemId',favcontroller.removeFromFav)

module.exports = router