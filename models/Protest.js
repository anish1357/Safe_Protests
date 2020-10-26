const mongoose = require('mongoose');
const User = require('./User');

const Schema = mongoose.Schema;

const ProtestSchema = new Schema({
    organisation: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    signedupUser: [
        {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    presentUser: [
        {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    admins: [
        {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ]
});

module.exports = mongoose.model('Protest', ProtestSchema);