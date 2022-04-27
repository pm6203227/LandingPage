import React from "react";
import "./Cover.css";
import pexels from "../../media/pexels.jpg";

const Cover = () => {
  return (
    <div className="cover-container">
      <img
        className="fondo img-responsive"
        src={pexels}
        alt="bosque de fondo"
      />
      <h1 className="title text-white text-center">
        Nature bring back to life!!
      </h1>
      <p className="subtitle text-white text-center">
        Big breath in and out and just relax
      </p>
    </div>
  );
};

export default Cover;
