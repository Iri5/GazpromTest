const Router = require('express');
const router = new Router();
const pageController = require('../controllers/pageController') 

router.get('/', pageController.init)

module.exports = router
