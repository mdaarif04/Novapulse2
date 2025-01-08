const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./DB/index.js')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectDB()

// Routes
const apiRoutes = require("./routes/api");
const connectDB = require("./DB");
app.use("/api", apiRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
