const mongoose = require("mongoose");
const schema = mongoose.Schema({
    id: Number,
    title: String,
    vendor: String,
    product_type: String,
    created_at: String,
    status: String
})

module.exports = mongoose.model('collections_product',schema);