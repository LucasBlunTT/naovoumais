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

const getFrom = (res, selected, table) => {
    db.query(`SELECT ${selected} FROM public.${table}`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    })
}

module.exports = { start, getFrom }