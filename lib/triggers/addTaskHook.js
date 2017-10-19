'use strict';
const messages = require('elasticio-node').messages;

function processTrigger(msg = {}) {
    const self = this;
    self.emit('data', messages.newMessageWithBody(msg));
    self.emit('end');
}

exports.process = processTrigger;