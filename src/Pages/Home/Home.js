import React from "react";
import AboutAuthor from "./AboutAuthor";
import Programs from "./Programs";
import Carousel from "../../Components/Carousel";

const Home = () => {
  return (
    <div>
      <AboutAuthor />
      <Carousel />
      {/* <AboutBook /> */}
      <Programs />
    </div>
  );
};

export default Home;
