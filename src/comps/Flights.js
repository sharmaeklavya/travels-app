import React from "react";

function Flights() {
  return (
    <>
      <form className="section-one-form">
        <div className="form-row">
          <div className="col-12 mb-1">
            <h1 className="section-one-title">
              <span className="px-1">
                <i className="fas fa-plane-departure section-one-icon"></i>
              </span>
              <span className="px-2">business or leisure</span>
            </h1>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-1">
            <label htmlFor="origin">From</label>
            <input
              id="origin"
              type="search"
              className="form-control"
              placeholder="Country, city origin"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-1">
            <label htmlFor="destination">Going to</label>
            <input
              id="destination"
              type="search"
              className="form-control"
              placeholder="Country, city destination"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-1">
            <label htmlFor="depart">Depart</label>
            <input
              id="depart"
              type="date"
              className="form-control"
              placeholder="Departure date"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-1">
            <label htmlFor="return">Return</label>
            <input
              id="return"
              type="date"
              className="form-control"
              placeholder="Arrival date"
            />
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col text-center">
            <button type="button" className="flight-btn">
              Search flights
              <i className="fas fa-arrow-circle-right arrow-right px-2"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Flights;
