import React from "react";

const SecNav = () => {
  return (
    <>
      <nav
        className="sec-nav d-flex flex-row justify-content-between px-5 align-items-center text-light fw-bold fs-4 sticky-top"
        style={{
          height: "3rem",
        }}
      >
        <div className="secNav-text d-flex fs-6">
          <p className="m-auto pe-5">
            <i class="fa-regular fa-envelope"></i> <span>xyz@abc.com</span>
          </p>
          <p className="m-auto">
            <i class="fa-regular fa-clock"></i> <span>We are open 24/7</span>
          </p>
        </div>
        <div className="icons-nav d-flex">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-discord"></i>
        </div>
      </nav>
    </>
  );
};

export default SecNav;
