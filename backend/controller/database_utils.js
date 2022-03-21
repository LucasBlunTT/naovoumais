const { Client } = require('pg');

const start = () => {
    db = new Client({
        host: 'localhost',
        user: 'igorsilvestre',
        port: 5432,
        password: 'll -',
        database: 'naovoumais'
    })
    db.connect()
}

const getFrom = (res, column, table) => {
    start()
    db.query(`SELECT ${column} FROM public.${table}`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    })
}

const authenticateUser = (res, email, password) =>{
    start()
    db.query(`SELECT email, password FROM public.users WHERE email='${email}'`, (err, result) => {
        // BREAKS IF EMAIL INCORRECT
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        else if(email == result.rows[0].email) {
            if(password == result.rows[0].password) {
                res.status(200).send('OK')
            }
            res.status(200).send('Incorrect password')
        }
    })
}

module.exports = { start, getFrom, authenticateUser }
