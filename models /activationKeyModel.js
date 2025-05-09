const mongoose = require('mongoose');

const activationKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '30d' // Key expires after 30 days
    }
});

module.exports = mongoose.model('ActivationKey', activationKeySchema);
