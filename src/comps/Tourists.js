import React from "react";
import cities from "./PopularCities";

function Tourists() {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2 className="section-three-title">Top Tourist Destinations</h2>
        </div>
      </div>
      <div className="row pb-5">
        {cities.map((i) => (
          <div key={i.id} className="col-4 col-md-3 col-lg-2">
            <p className="section-three-text">{i.city}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tourists;
