import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="section-form">
      <div className="container-form container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2>Subscribe Our newsletter for more updates</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, omnis?
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="form-control" // Added Bootstrap form-control class
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
