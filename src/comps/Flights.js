import React, { useState } from "react";
import flightData from "./IataData.json";
import axios from "axios";

function Flights() {
  const [departureList, setDepartureList] = useState([]);
  const [arrivalList, setArrivalList] = useState([]);
  const [departureResult, setDepartureResult] = useState({
    code: "",
    name: "",
  });
  const [arrivalResult, setArrivalResult] = useState({ code: "", name: "" });

  const suggestedOriginCity = ({ municipality, iata_code }) => {
    setDepartureResult({ name: municipality + " ", code: iata_code });
    setDepartureList([]);
  };

  const suggestedDestinationCity = ({ municipality, iata_code }) => {
    setArrivalResult({ name: municipality + " ", code: iata_code });
    setArrivalList([]);
  };

  const inputFlyingOrigin = (e) => {
    const value = e.target.value;
    setDepartureResult({ code: "", name: value });

    if (value !== "") {
      setDepartureList(airportData(value));
    } else {
      setDepartureList([]);
    }
  };

  const inputFlyingDestination = (e) => {
    const value = e.target.value;
    setArrivalResult({ code: "", name: value });

    if (value !== "") {
      setArrivalList(airportData(value));
    } else {
      setArrivalList([]);
    }
  };

  const airportData = (value) => {
    const cities = flightData.filter((city) => {
      let result = "";
      if (city.municipality !== null) {
        const inputValue = value.toLowerCase();
        const municipality = city.municipality.toLowerCase();
        result = municipality.includes(inputValue);
      }
      return result;
    });
    return cities;
  };

  const produceResults = () => {
    const currency = localStorage.getItem("currencyCode");
    axios
      .get(
        `https://api.travelpayouts.com/v2/prices/month-matrix?currency=${currency}&show_to_affiliates=true&origin=${departureResult.name}&destination=${arrivalResult.name}`,
        {
          headers: {
            "x-access-token": "579e4e0ae2c0f36024f0bbd95821c8f1",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  };

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
            <label htmlFor="input-origin">From</label>
            <input
              id="input-origin"
              type="search"
              value={`${departureResult.name}${departureResult.code}`}
              className="form-control"
              placeholder="City Origin"
              onChange={inputFlyingOrigin}
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-1">
            <label htmlFor="input-destination">Going to</label>
            <input
              id="input-destination"
              type="search"
              value={`${arrivalResult.name}${arrivalResult.code}`}
              className="form-control"
              placeholder="City Destination"
              onChange={inputFlyingDestination}
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
          <div
            id="autocomplete-origin"
            className="col-12 col-sm-6 col-lg-3 mb-1"
          >
            {departureList
              .filter((city) => city.iata_code !== null)
              .map((city, i) => (
                <li
                  key={i}
                  className="autocomplete-search"
                  onClick={() => suggestedOriginCity(city)}
                >
                  <span className="px-2">{city.iata_code}</span>
                  <span className="px-2">{city.municipality}</span>
                </li>
              ))}
          </div>
          <div
            id="autocomplete-destination"
            className="col-12 col-sm-6 col-lg-3 mb-1"
          >
            {arrivalList
              .filter((city) => city.iata_code !== null)
              .map((city, i) => (
                <li
                  key={i}
                  className="autocomplete-search"
                  onClick={() => suggestedDestinationCity(city)}
                >
                  <span className="px-2">{city.iata_code}</span>
                  <span className="px-2">{city.municipality}</span>
                </li>
              ))}
          </div>
        </div>

        <div className="form-row mt-3">
          <div className="col text-center">
            <button
              type="button"
              className="flights-btn"
              onClick={produceResults}
            >
              Search flights
              <i className="fas fa-arrow-circle-right px-2"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Flights;
