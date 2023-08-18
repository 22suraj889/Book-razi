import React from "react";
import "./Programs.css";
import { listData } from "./ListData";
import List from "./List";
const Programs = () => {
  return (
    <div id="programs" className="flex flex-col mb-5">
      <h1 className="font-bold text-3xl	">What Our Program Offers: </h1>
      <p className="p-3 text-justify">
        Is your child grappling with stress, anxiety, or worry? Do you wish to
        empower them with effective tools to manage their emotional states? Our
        program offers expert guidance to help your child navigate these
        challenges and emerge stronger.
      </p>
      <ol className="programs_list">
        {listData.map((data) => (
          <List key={data.key} content={data.content} />
        ))}
      </ol>
    </div>
  );
};

export default Programs;
