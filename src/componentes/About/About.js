import React from "react";
import "./About.css";
import vb from "../../media/vb.jpeg";
import rf1 from "../../media/rf1.jpeg";
import rf2 from "../../media/rf2.jpeg";
import rf3 from "../../media/rf3.jpeg";

const About = () => {
  return (
    <div className="cover-container container-fluid">
      <img className="fondo img-responsive" src={vb} alt="bosque de fondo" />
      <div className="row">
        <div className="col-md-4 text-white text-center">
          <p className="text2">
            Thanks to reforestation, we managed to stop the currents of
            torrential waters in the soil and reduce the erosion and
            sedimentation of the rivers. Trees and forests serve as a habitat
            for a great diversity of species on Earth, including decomposers,
            birds or different mycological species
          </p>
        </div>
        <div className="col-md-8">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={rf1}
                  className="nm1 d-block w-100"
                  alt="reforestation"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={rf2}
                  className="nm1 d-block w-100"
                  alt="reforestation"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={rf3}
                  className="nm1 d-block w-100"
                  alt="reforestation"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
