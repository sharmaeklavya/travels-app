import React from "react";

function Hotels() {
  return (
    <form className="section-one-form">
      <div className="form-row justify-content-center">
        <div className="col-12 mb-1">
          <h1 className="section-one-title">
            <span className="px-1">
              <i className="fas fa-umbrella-beach section-one-icon"></i>
            </span>
            <span className="px-2">Don't let anything stop you</span>
          </h1>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-1">
          <button type="button" className="hotels-btn">
            All
          </button>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-1">
          <button type="button" className="hotels-btn">
            India
          </button>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mb-1">
          <button type="button" className="hotels-btn">
            International
          </button>
        </div>
      </div>
      <div className="form-row mt-3">
        <div className="col">
          <div className="search-city">
            <input
              id="search-city"
              type="search"
              className="form-control"
              placeholder="Search your destination"
            />
            <i className="fas fa-search hotels-icon"></i>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Hotels;
