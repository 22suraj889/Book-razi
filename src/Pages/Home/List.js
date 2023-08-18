import React from "react";

const List = ({ content }) => {
  const civicNumber = content.split(":")[0];
  const y = content.split(":")[1];
  return (
    <>
      <li>
        <span className="font-semibold	">{civicNumber}:</span>
        {y}
      </li>
      <br />
    </>
  );
};

export default List;
