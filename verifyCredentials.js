'use strict';
const request = require('request-promise');
const co = require('co');

module.exports = function verifyCredentials(credentials, cb) {
    const self = this;
    console.log('Credentials passed for verification %j', credentials);
    co(function* () {
        if (credentials.apiKey == "test") {
            console.log('Verification completed');
            return cb(null, {verified: true});
        } else
            return cb(null, {verified: true});
    }).catch(err => {
        console.log('Error occurred', err.stack || err);
        return cb(err, {verified: false});
    });
};

