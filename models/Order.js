const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  phone: String,
  address: String,
  paymentMethod: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  total: Number
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
