const mongo = require('../database')

const userSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    cep: {
        type: String,
        required: true,
    },
    shareContact: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongo.model('users', userSchema)

module.exports = User