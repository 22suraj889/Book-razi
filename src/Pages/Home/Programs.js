import React from "react";
import "./Programs.css";
import { listData } from "./ListData";
import List from "./List";
const Programs = () => {
  return (
    <div id="programs" className="flex flex-col mb-5">
      <p className="p-3 font-bold programs_text mt-5">
        Is your child grappling with stress, anxiety, or worry? Our program
        offers expert guidance to help your child navigate these challenges and
        emerge stronger.
      </p>
      <ol className="programs_list flex justify-center flex-wrap">
        {listData.map((data) => (
          <List key={data.key} content={data.content} />
        ))}
      </ol>
    </div>
  );
};

export default Programs;
