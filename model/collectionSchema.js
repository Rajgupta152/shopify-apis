const mongoose = require("mongoose");
const schema = mongoose.Schema({
    id: Number,
    title: String,
    body_html: String,
    published_at: String,
})

module.exports = mongoose.model('collection',schema);