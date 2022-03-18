const path = require('path')
const db = require('./database_utils')
db.start()

const render = (app) => {
    app.get('/login', (req, res) => {
        console.log(req.headers)
        res.sendFile(path.join(__dirname + '/routes/login.html'))
    })
}

module.exports = { render }

