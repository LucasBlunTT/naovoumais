const express = require('express')
const path = require('path')
const cors = require('cors');
// const mongoUtils = require('./controller/mongo_utils')

const app = express()
const PORT = 3000
// LISTENER
app.listen (PORT, () => console.log(`Server running on localhost:${PORT}`))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors())
    next()
})

// HOME
app.get('/', (req, res) => {
    // LIST ALL PRODUCTS
    db.getFrom(res, '*', 'product')
})

app.get('search', (req, res) => {
    let searchQuery = req.body
})

// LOGIN PAGE
app.get('/login', (req, res) => {
    // app.use(express.static('/../frontend/public/src', path.join(__dirname + '/../frontend/public/src/routes/login.html')))
})

// AUTHENTICATION POST REQUEST
app.post('/auth', (req, res) => {
    // let temp = JSON.stringify(req.body)

    let email = req.body.email
    let password = req.body.password
    console.log(req.headers)
    // 
})
