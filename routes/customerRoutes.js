import { Router } from "express";
import Customer from "../models/Customer.js";

const router = Router();

// GET all customers
router.get("/", async (req, res) => {
  const customers = await Customer.find().sort({ createdAt: -1 });
  res.json(customers);
});

// Add customer
router.post("/", async (req, res) => {
  const customer = await Customer.create(req.body);
  res.json(customer);
});

// Update customer
router.put("/:id", async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete customer
router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
});

export default router;
