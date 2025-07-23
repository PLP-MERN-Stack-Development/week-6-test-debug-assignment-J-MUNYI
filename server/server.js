const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./src/middleware/errorMiddleware");

dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
connectDB();

// Example Routes
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

// TODO: Add your /api/posts and /api/categories routes here
// app.use("/api/posts", require("./src/routes/postRoutes"));
// app.use("/api/categories", require("./src/routes/categoryRoutes"));

// Global Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
