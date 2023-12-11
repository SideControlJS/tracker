// models/Issue.js

// models/Issue.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
    issueId: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open'
    },
    reportedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reportDate: {
        type: Date,
        default: Date.now
    },
    lastUpdatedDate: {
        type: Date,
        default: Date.now
    },
    resolveDate: {
        type: Date
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    device: {
        type: Schema.Types.ObjectId,
        ref: 'Device'
    }
});

module.exports = mongoose.model('Issue', IssueSchema);
