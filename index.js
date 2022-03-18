const express = require('express')
const app = express()
const path = require('path')
const db = require('./src/database_utils')
const PORT = 3000


// HOME
app.get ('/', (req, res) => {
    // db.start()
    // db.getFrom(res, '*', 'users')
    res.sendFile(path.join('/index.html'))
})

// LOGIN PAGE
app.get('/login', (req, res) => {
    // app.use(express.static('/utils', path.join(__dirname + '/routes/login.html')))
    console.log(req)
    res.render('/routes/login.html')
})


  // AUTHENTICATION POST REQUEST
app.post('/auth', (req, res) => {
    console.log(res)
})

// LISTENER
app.listen (PORT, () => {  
    console.log(`Server running on localhost:${PORT}`)
})