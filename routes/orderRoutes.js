const express = require("express");
const Order = require("../models/Order.js");

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Place new order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
