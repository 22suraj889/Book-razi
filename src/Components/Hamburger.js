import React from "react";
import "./Hamburger.css";
const Hamburger = ({ burger, setBurger }) => {
  return (
    <div className="burger" onClick={() => setBurger(!burger)}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
};

export default Hamburger;
