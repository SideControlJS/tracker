// models/Device.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive', 'Needs Maintenance'],
        default: 'Active'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
});

module.exports = mongoose.model('Device', DeviceSchema);
