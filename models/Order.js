const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  paymentMethod: { type: String },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  total: { type: Number }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
