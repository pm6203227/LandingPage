import React from "react";
import "./Contacto.css";
import conbk from "../../media/conbk.jpeg";

const Contacto = () => {
  return (
    <div className="container-fluid">
      <div className="cover-container">
        <img
          className="fondo img-responsive"
          src={conbk}
          alt="bosque de fondo"
        />
        <div className="row">
          <div className="col-md-5">
            <p className="text-white text-center">
              {" "}
              A forest is an ecosystem where the predominant vegetation is made
              up of trees and shrubs. These plant communities cover large areas
              of the Earth and constitute habitats for animals, modulators of
              hydrological flows and soil conservation, constituting one of the
              most relevant aspects of the biosphere of the globe.
            </p>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label text-white"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label text-white"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <br />
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
