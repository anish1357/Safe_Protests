const mongoose = require('mongoose');
const emailValidator = require('../validation/email');
const nameValidator = require('../validation/name');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (name) => nameValidator.validator(name),
            msg: nameValidator.errMessage
        }
    },
    email_id: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email_id) => emailValidator.validator(email_id),
            msg: emailValidator.errMessage
        }
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
    },
    blocked: {
        type: Boolean,
        default: false
    },
    createdProtest: [
        {
            protest_id: {
                type: Schema.Types.ObjectId,
                ref: 'Protest'
            }
        }
    ],
    signedupProtest: [
        {
            protest_id: {
                type: Schema.Types.ObjectId,
                ref: 'Protest'
            }
        }
    ]
});
module.exports = mongoose.model('User', UserSchema);