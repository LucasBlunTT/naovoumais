const { Client } = require('pg');
const client = require('pg/lib/native/client');

const client = new Client({
    host: 'localhost',
    user: 'igorsilvestre',
    port: 5432,
    password: 'll -',
    database: 'naovoumais'
})
client.connect()
export default client

// app.get('/', function (req, res, next) {
//     client.query('SELECT * FROM Employee where id = $1', [1], function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send(result.rows);
//     });
// });
