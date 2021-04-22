const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const expiration = '2h';

// just taking in an email and id, don't want a username, and email
module.exports = {
    signToken: function({ firstName, lastName, email, _id }) {
        const payload = { firstName, lastName, email, _id };

        return jwt.sign({ data:payload }, secret, { expiresIn: expiration });
    }
};