import React from "react";
import Picture from "../../Assets/picture.jpg";
import "./AboutAuthor.css";
const AboutAuthor = () => {
  return (
    <div id="author" className="flex flex-col mb-5">
      <h1 className="font-bold text-3xl	">About the Author: </h1>
      <div className="flex">
        <p className="p-2 text-justify">
          A symphony of inspiration, Yogita, the driving force behind the
          groundbreaking program "Decipher & Unlock the Potential in Your
          Child," is a mentor, author, and parenting coach. With a profound
          understanding of the challenges children face, Yogita guides them
          towards conquering stress, anxiety, and procrastination. Drawing from
          a distinguished corporate career spanning over two decades,
          encompassing media, banking, and non-banking financial companies, she
          brings a unique perspective to parenting. Yogita's expertise extends
          beyond children, empowering parents to manage their emotional states
          while equipping them with skills to create an environment that fosters
          the holistic growth of both parents and children. Join us on this
          remarkable journey of discovery and growth, where the Ultimate
          Parenting Model awaits to elevate your parenting experience and
          unleash the genius within your child.
        </p>
        <div className="p-3 ">
          <img src={Picture} className="h-48 w-4/5	author_image" />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
