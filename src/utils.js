const crypto = require('crypto')

function generatePasswordSalt () {
    return Math.random().toString(8)
}

function sha512(password, salt){
    var hash = crypto.createHmac('sha512', salt); // sha512 crypto algorithm
    hash.update(password);
    var hash = hash.digest('hex')
    return {
        salt,
        hash,
    };
}

function authenticatePassword(loginPassword, hashOnDb, saltOnDb) {
    let attemptPassword = sha512(loginPassword, saltOnDb)
    return hashOnDb === attemptPassword.hash
 }

module.exports = { generatePasswordSalt, sha512, authenticatePassword }