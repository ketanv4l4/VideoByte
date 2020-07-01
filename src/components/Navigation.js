import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p style={{color:"rgb(95, 228, 95)"}}>{props.movie}</p>
      </div>
    </div>
  );
};

export default Navigation;
