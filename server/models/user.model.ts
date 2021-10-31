const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    linkedin_url: {
        type: String,
        required: true
    },
    experties: {
        type: Array,
        required: true
    },
    interests: {
        type: Array,
        required: true
    },
    level: {
        type: String,
        default: '4',
        required: true
    }
});

module.exports.User = model('User', userSchema);