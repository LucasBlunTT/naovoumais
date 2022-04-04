const mongo = require('mongoose')

const url = 'mongodb://localhost:27017/naovoumais';

mongo.connect(url)
mongo.Promise = global.Promise

module.exports = mongo
