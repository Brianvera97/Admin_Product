const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, { timestamps: true, versionKey: false })

const Product = new mongoose.model("Product", ProductSchema)

module.exports = Product