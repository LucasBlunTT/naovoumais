const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader)
        res.status(401).send({ error: 'No token provided'})
    
    const tokenParts = authHeader.split(' ')
    if(tokenParts.length !== 2)
        res.status(401).send({ error: 'Dividing token parts'})
    
    const [ scheme, token ] = tokenParts

    if(!/^Bearer$/i.test(scheme))
        res.status(401).send({ error: 'Token syntax error' })

    jwt.verify(token, authConfig.secretKey, (err, decoded) => {
        if(err)
            res.status(401).send({ error: 'Invalid token' })
        req.userId = decoded.id
    })
    
    next()
}