import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-slate-50 p-5">
      <ul className="flex justify-end">
        <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
          <a href="#book">Book</a>
        </li>
        <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
          <a href="#author">Author</a>
        </li>
        <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
          <a href="#programs">Programs</a>
        </li>
        <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
          <a href="https://www.amazon.in/gp/aw/review/B0CCJDM7KK/R2NFLGFC6DEPUD?ref_=cm_sw_r_apin_dprv_CJMVMX39T52E45DN5V98">
            Reviews
          </a>
        </li>
        <li className="hover:bg-sky-700 mr-8 p-2 cursor-pointer">
          <a href="https://www.amazon.in/dp/B0CCJDM7KK?ref_=cm_sw_r_cp_ud_dp_A8P1019JDY2B0AMZSQ3M">
            Buy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
