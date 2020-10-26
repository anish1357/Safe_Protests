const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProtestUpdateSchema = new Schema({
    protest_id: {
        type: Schema.Types.ObjectId,
        ref: 'Protest',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ProtestUpdate', ProtestUpdateSchema);