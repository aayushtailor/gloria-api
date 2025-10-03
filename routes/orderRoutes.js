import { Router } from "express";
import Order from "../models/Order.js";

const router = Router();

// GET all orders (for admin)
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

// Create order (from storefront)
router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// Update order status
router.put("/:id", async (req, res) => {
  const updated = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete order
router.delete("/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
});

export default router;
