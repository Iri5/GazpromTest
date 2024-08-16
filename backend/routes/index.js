const Router = require('express');
const router = new Router();
const pageRouter = require('./page')

router.use('/page', pageRouter);

module.exports = router