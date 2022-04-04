const mongo = require('../database')
const utils = require('../utils')

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
    salt: {
        type: String,
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

userSchema.pre('save', async function (next) {
    try {
        this.salt = utils.generatePasswordSalt()
        this.password = utils.sha512(this.password, this.salt).hash
    } catch(err) {
        console.log(err)
    }
    next()
})

const User = mongo.model('users', userSchema)

module.exports = User
