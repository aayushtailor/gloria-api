import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => res.send("Gloria API running ✅"));
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);

await connectDB();
app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
