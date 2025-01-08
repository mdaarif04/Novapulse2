const mongoose = require("mongoose");

const HistoricalDataSchema = new mongoose.Schema({
  symbol: String,
  interval: String,
  timestamp: Date,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
});

module.exports = mongoose.model("HistoricalData", HistoricalDataSchema);
