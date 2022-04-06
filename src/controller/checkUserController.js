const express = require('express')
const router = express.Router()
const checkUserMiddleware = require('../middlewares/checkUserMiddleware')

router.use(checkUserMiddleware)

router.post('/checkUser', async (req, res) => {
    res.send({ ok: true, user: req.userId})
    
})

module.exports = app => app.use('/test', router)