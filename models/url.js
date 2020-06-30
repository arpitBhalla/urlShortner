const mongoose = require('mongoose')
const { Schema } = mongoose
const Model = new Schema({
    url: { type: String, required: true },
    short: { type: String, required: true},
    createdAt: { type: Number}
})

Model.index("short")

module.exports = mongoose.model("url", Model)