const mongoose = require('mongoose');

const ClaimSchema = mongoose.Schema({
    productName: String,
    cost: String,
    email: String,
    comment: String,
    status: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Claim', ClaimSchema);