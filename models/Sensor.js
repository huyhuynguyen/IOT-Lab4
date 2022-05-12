const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Sensor = new Schema({
    name: {
        type: 'String',
        required: true
    },
    value: {
        type: 'Number',
        required: true,
    },
    unit: {
        type: 'String',
        required: true
    },
    icon: {
        type: 'String',
        required: true
    }
})

module.exports = mongoose.model('Sensor', Sensor);