const express = require('express')
const bodyParser = require('body-parser')

// EXPRESS
const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'))

// AUTHENTICATION POST REQUEST
require('./src/controller/authentication')(app)

// LISTENER
app.listen (PORT, () => console.log(`Server running on localhost:${PORT}`))