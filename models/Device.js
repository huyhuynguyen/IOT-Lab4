const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Device = new Schema({
    name: {
        type: 'String',
        required: true
    },
    active: {
        type: 'Boolean',
        required: true,
    },
    lastAccess: {
        type: 'Date',
        required: true
    },
    imageName: {
        type: 'String',
        required: true
    }
})

module.exports = mongoose.model('Device', Device);