const express = require("express");
const { fetchHistoricalData } = require("../controllers/dataController");
const router = express.Router();

router.get("/data/historical", fetchHistoricalData);

module.exports = router;
