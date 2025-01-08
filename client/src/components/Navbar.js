import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/backtesting">Backtesting</Link>
        </li>
        <li>
          <Link to="/live-predictions">Live Predictions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
