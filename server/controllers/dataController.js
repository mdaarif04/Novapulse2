const ccxt = require("ccxt");
const HistoricalData = require("../models/HistoricalData");

const fetchHistoricalData = async (req, res) => {
  const { symbol, interval, limit } = req.query;

  try {
    const exchange = new ccxt.binance();
    const ohlcv = await exchange.fetchOHLCV(
      symbol,
      interval,
      undefined,
      parseInt(limit)
    );

    const formattedData = ohlcv.map((candle) => ({
      symbol,
      interval,
      timestamp: new Date(candle[0]),
      open: candle[1],
      high: candle[2],
      low: candle[3],
      close: candle[4],
      volume: candle[5],
    }));

    await HistoricalData.insertMany(formattedData);
    res.status(200).json({ message: "Data fetched and stored successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchHistoricalData };
