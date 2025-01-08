import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/data/historical?symbol=BTC/USDT&interval=1h&limit=100"
      )
      .then((response) => {
        const data = response.data.map((item) => ({
          x: new Date(item.timestamp),
          y: item.close,
        }));

        setChartData({
          datasets: [
            {
              label: "BTC Price",
              data: data,
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
            },
          ],
        });
      });
  }, []);

  return <Line data={chartData} />;
};

export default Chart;
