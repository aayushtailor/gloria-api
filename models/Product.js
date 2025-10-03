const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  gallery: [String],
  category: { type: String },
  rating: { type: Number, default: 4 }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
