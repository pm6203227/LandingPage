import React from "react";
import "./Slider.css";
import ex from "../../media/ex.jpg";
import gr from "../../media/gr.jpg";
import org from "../../media/org.jpg";
import rf from "../../media/rf.jpg";

const Slider = () => {
  return (
    <div className="container-fluid">
      <br />
      <h1 className=" title1 text-center">Our Projects</h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ex} className="nm d-block w-100" alt="amazonas" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Taking care the mother nature</h5>
              <p>Forest is life</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={gr} className="nm d-block w-100" alt="forest" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Green bring happines</h5>
              <p>Breath in an relax</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={rf} className=" nm d-block w-100" alt="forest" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Reforestation</h5>
              <p>To increase the nature in the world</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={org} className="nm d-block w-100" alt="reforestation" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Natural parks</h5>
              <p>Creating more natural reserves</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
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
  );
};

export default Slider;
