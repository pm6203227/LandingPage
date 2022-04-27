import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import arbol from "../../media/arbol.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
      <div class="container-fluid">
        <img src={arbol} alt="three" width="30" height="24"></img>
        <NavLink className="navbar-brand" to={"/"}>
          Forest
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to={"/About"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" nav-link" to={"/Project"}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" nav-link" to={"/Contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
