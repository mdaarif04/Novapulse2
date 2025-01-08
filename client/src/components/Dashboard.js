import React from "react";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Cryptocurrency Price Predictor Dashboard</h1>
      <div className="dashboard-metrics">
        <div className="metric-card">
          <h4>Total Trades Simulated</h4>
          <p>1000</p>
        </div>
        <div className="metric-card">
          <h4>Accuracy</h4>
          <p>75%</p>
        </div>
        <div className="metric-card">
          <h4>Profit/Loss</h4>
          <p>+10.5%</p>
        </div>
      </div>
      <div>
        <h3>Price Chart</h3>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
