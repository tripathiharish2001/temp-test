import React from "react";
import Img from "./sec-hero.png";

const Hero = () => {
  return (
    <>
      <div className="container-hero">
        <div className="container ">
          <div className="row align-items-center py-4">
            <div className="col-md-6">
              <div className="hero-text-box">
                <h4 className="fs-5 fw-bold">Ki Name Dhake Bolibo Tomaka</h4>
                <h1 className="display-4 text-capitalize">
                  We are Consulting for your Business Finances
                </h1>
                <p className="hero-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto distinctio illo reprehenderit ipsum accusamus
                </p>
                <a
                  href="#"
                  className="btn btn-primary px-4 py-2 fs-6 fw-bold mt-4"
                >
                  Start Now
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-img-box">
                <img
                  src={Img}
                  alt="hero-image"
                  className="img-fluid img-sm img-md-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
