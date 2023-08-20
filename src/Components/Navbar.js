import React from "react";
import "./Navbar.css";
const Navbar = ({ burger, setBurger }) => {
  return (
    <ul
      className={`flex bg-gray-800 text-slate-50 p-5 navbar justify-end ${
        burger ? "navbar_active" : "navbar_inactive"
      }`}
    >
      <li
        className="hover:bg-sky-700 mr-8 p-2 cursor-pointer"
        onClick={() => setBurger(!burger)}
      >
        <a href="#book">Book</a>
      </li>
      <li
        className="hover:bg-sky-700 mr-8 p-2 cursor-pointer"
        onClick={() => setBurger(!burger)}
      >
        <a href="#author">Author</a>
      </li>
      <li
        className="hover:bg-sky-700 mr-8 p-2 cursor-pointer"
        onClick={() => setBurger(!burger)}
      >
        <a href="#programs">Programs</a>
      </li>
      <li
        className="hover:bg-sky-700 mr-8 p-2 cursor-pointer"
        onClick={() => setBurger(!burger)}
      >
        <a href="https://www.amazon.in/gp/aw/review/B0CCJDM7KK/R2NFLGFC6DEPUD?ref_=cm_sw_r_apin_dprv_CJMVMX39T52E45DN5V98">
          Reviews
        </a>
      </li>
      <li
        className="hover:bg-sky-700 mr-8 p-2 cursor-pointer"
        onClick={() => setBurger(!burger)}
      >
        <a href="https://www.amazon.in/dp/B0CCJDM7KK?ref_=cm_sw_r_cp_ud_dp_A8P1019JDY2B0AMZSQ3M">
          Buy
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
