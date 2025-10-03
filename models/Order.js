import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    customerEmail: String,
    customerPhone: String,
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    total: Number,
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
