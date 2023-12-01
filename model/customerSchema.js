const mongoose = require("mongoose");
const schema = mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    created_at: String
})

module.exports = mongoose.model('customer',schema);