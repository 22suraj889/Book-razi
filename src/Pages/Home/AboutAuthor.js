import React from "react";
import Picture from "../../Assets/picture.jpg";
import "./AboutAuthor.css";
const AboutAuthor = () => {
  return (
    <div id="author" className="flex flex-col author">
      <h1 className="font-bold text-3xl">Mentor | Author | Parenting Coach</h1>
      <div className="flex mt-6 flex-wrap">
        <p className="p-2 text-justify w-1/2 pt-7 pl-12">
          With a profound understanding of the challenges children face, Yogita
          guides them towards conquering stress, anxiety, and procrastination.
          Drawing from a distinguished corporate career spanning over two
          decades, encompassing media, banking, and non-banking financial
          companies, she brings a unique perspective to parenting. Yogita's
          expertise extends beyond children, empowering parents to manage their
          emotional states while equipping them with skills to create an
          environment that fosters the holistic growth of both parents and
          children. Join us on this remarkable journey of discovery and growth,
          where the Ultimate Parenting Model awaits to elevate your parenting
          experience and unleash the genius within your child.
        </p>
        <div className="p-3 w-1/2	flex justify-center">
          <img src={Picture} alt="_blank" className="h-48 w-4/5 author_image" />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
