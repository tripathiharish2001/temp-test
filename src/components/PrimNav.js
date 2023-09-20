import React from "react";
import Logo from "./Untitled.png";

const PrimNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-3">
        <a className="navbar-brand" href="#">
          <img src={Logo} className="w-75 d-inline-block" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-primary" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
            <a className="nav-item nav-link" href="#">
              Projects
            </a>
            <a className="nav-item nav-link" href="#">
              Blogs
            </a>
            <a className="nav-item nav-link" href="#">
              Services
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PrimNav;
