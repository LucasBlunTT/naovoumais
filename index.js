const express = require('express')
const app = express()
const db = require('./src/database_utils')

const PORT = 3000
app.get ('/', (req, res, next) => {
    db.start()
    db.getFrom(res, '*', 'users')
})

app.listen (PORT, () => {  
    console.log(`Server running on localhost:${PORT}`)
})