import React from "react";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-3">
            <div className="text-center card mb-4 border-white">
              <div className="ser-top">
                <i class="fa-brands fa-google-wallet"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Financial Content</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center card mb-4 border-primary">
              <div className="ser-top">
                <i class="fa-solid fa-money-check-dollar"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Content Management</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center card mb-4 border-white">
              <div className="ser-top">
                <i class="fa-solid fa-coins"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Financial Advice</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-start">
          <a href="#" className="btn btn-primary w-auto fs-5 fw-bold">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
