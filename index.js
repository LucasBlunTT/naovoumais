const express = require('express')
const app = express()

const db = require('./src/database_utils')
db.connect(app)

const PORT = 3000

app.listen (PORT, () => {
    
    console.log(`Server running on localhost:${PORT}`)
})