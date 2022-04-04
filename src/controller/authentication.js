const express = require('express')
const User = require('../models/users')
const router = express.Router()

router.post('/register', async (req, res) => {
    console.log(req.headers)
    try {
        const { email } = req.body
        if(await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists with this email' })
        }

        const user = await User.create(req.body)
        user.password = undefined
        user.salt = undefined

        return res.send({ user })
    } catch (err) { 
        return res.status(400).send({ error: 'Registration Failed' }) 
    }
})

module.exports = app => app.use('/auth', router)