const mongoose = require("mongoose");
const schema = mongoose.Schema({
    id: Number,
    title: String,
    product_type: String,
    vendor: String,
    status: String,
    created_at: String,
    variants: Object

})

module.exports = mongoose.model('product',schema);