const mongoose = require("mongoose");
const schema = mongoose.Schema({
    id: Number,
    total_price: Number,
    email: String,
    phone: Number,
    billing_address: Object,
    created_at: String
})

module.exports = mongoose.model('order',schema);