const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/users')
const utils = require('../utils')
const authConfig = require('../config/auth.json')

const router = express.Router()

function generateToken (params = {}) {
    return jwt.sign(params, authConfig.secretKey, { expiresIn: 86400 })
}

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

        res.send({ 
            user,
            id: user.id, 
            token: generateToken({ id: user.id }) 
        })
    } catch (err) { 
        res.status(400).send({ error: `${err}` }) 
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).select('+password +salt')
        if (!user)
            res.status(400).send({ error: 'User not found' })
        
        let isCorrectPassword = utils.authenticatePassword(password, user.password, user.salt)
        if (!isCorrectPassword)
            res.status(400).send({ error: 'Invalid Password'} )

        user.password = undefined
        user.salt = undefined
        
        res.send({
            user,
            id: user.id,
            token: generateToken({ id: user.id }) 
        })

    } catch(err) {
        console.log(err)
        res.status(400).send({ error: `${err}` })
    }
})

module.exports = app => app.use('/auth', router)