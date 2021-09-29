import React from "react";
import cities from "./PopularCities";

function HotelsCity() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="section-two-title">Popular hotel destinations</h2>
        </div>
      </div>
      <div className="row">
        {cities
          .filter((i) => i.id > 9 && i.id <= 18)
          .map((i) => (
            <div
              key={i.id}
              className="col-12 col-md-6 col-lg-4 section-two-vessel"
            >
              <img className="section-two-img" src={i.image} alt={i.city} />
              <div className="section-two-text">
                <p className="caption-title">{i.city}</p>
                <p className="caption-sub-title">{i.country}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default HotelsCity;
