import React from "react";
import arbol from "../../media/arbol.png";
import "./Footer.css";
import fb from "../../media/fb.png";
import tw from "../../media/tw.png";
import yt from "../../media/yt.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <hr />
      <br />
      <div className="row">
        <div className="col-md-4">
          <img
            className="b1"
            src={arbol}
            alt="three"
            width="30"
            height="24"
          ></img>
        </div>
        <div className="col-md-4">
          <p className="b text-center">©2022 Forest, Inc.</p>
        </div>
        <div className="col-md-4">
          <img className="bn" src={fb} alt="three" width="30" height="24"></img>
          <img className="bn" src={tw} alt="three" width="30" height="24"></img>
          <img className="bn" src={yt} alt="three" width="30" height="24"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
