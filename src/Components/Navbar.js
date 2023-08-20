import React from "react";
import "./Navbar.css";
const Navbar = ({ burger, setBurger }) => {
  return (
    <ul
      className={`flex bg-gray-800 text-slate-50 p-5 navbar justify-end ${
        burger ? "navbar_active" : "navbar_inactive"
      }`}
    >
      <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
        <a href="#book" onClick={() => setBurger(!burger)}>
          Book
        </a>
      </li>
      <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
        <a href="#author" onClick={() => setBurger(!burger)}>
          Author
        </a>
      </li>
      <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
        <a href="#programs" onClick={() => setBurger(!burger)}>
          Programs
        </a>
      </li>
      <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
        <a
          href="https://www.amazon.in/gp/aw/review/B0CCJDM7KK/R2NFLGFC6DEPUD?ref_=cm_sw_r_apin_dprv_CJMVMX39T52E45DN5V98"
          onClick={() => setBurger(!burger)}
        >
          Reviews
        </a>
      </li>
      <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
        <a
          href="https://www.amazon.in/dp/B0CCJDM7KK?ref_=cm_sw_r_cp_ud_dp_A8P1019JDY2B0AMZSQ3M"
          onClick={() => setBurger(!burger)}
        >
          Buy
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
