import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Backtesting from "./components/Backtesting";
import LivePredictions from "./components/LivePredictions";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/backtesting" element={<Backtesting />} />
          <Route path="/live-predictions" element={<LivePredictions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
