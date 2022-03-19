const { urlencoded } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const db = require('./controller/database_utils')
const PORT = 3000


// HOME
app.get ('/', (req, res) => {
    // db.start()
    // db.getFrom(res, '*', 'users')
    res.sendFile(path.join('/public/index.html'))
})

// LOGIN PAGE
app.get('/login', (req, res) => {
    // app.use(express.static('/utils', path.join(__dirname + '/routes/login.html')))
    console.log(req.headers)
})
// AUTHENTICATION POST REQUEST
app.use(express.json())
app.post('/auth', (req, res) => {
    // let temp = JSON.stringify(req.body)
    let email = req.body.email
    let password = req.body.password
    db.start()
    let user = db.getUser(email)
    console.log(user)
    if (password == null) {
        res.send("Email doesn't exist")
    }
    else if(password == db.getUser(email)) {
        res.send('Success')
    }
    else {
        res.send('Password incorrect')
    }
})

// LISTENER
app.listen (PORT, () => {  
    console.log(`Server running on localhost:${PORT}`)
}
)