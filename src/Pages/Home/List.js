import React from "react";
import "./List.css";
const List = ({ content }) => {
  const civicNumber = content.split(":")[0];
  const y = content.split(":")[1];
  return (
    <>
      <li className="card flex flex-col items-center text-center mr-5 mt-5">
        <div className="font-semibold">{civicNumber}</div>
        <div className="text-current">{y}</div>
      </li>
      <br />
    </>
  );
};

export default List;
