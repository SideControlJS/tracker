// models/Room.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    roomName: {
        type: String,
        required: true
    },
    devices: [{
        type: Schema.Types.ObjectId,
        ref: 'Device'
    }],
    issues: [{
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    }]
});

module.exports = mongoose.model('Room', RoomSchema);
