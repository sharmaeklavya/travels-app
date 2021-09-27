import React, { useEffect, useState } from "react";
import Currency from "./Currency";

function Flights() {
  const [currency, setCurrency] = useState({
    name: localStorage.getItem("currencyName"),
    code: localStorage.getItem("currencyCode"),
  });

  const selectedCurrency = (data) => {
    setCurrency({ name: data.name, code: data.code });
  };

  useEffect(() => {
    if (currency.name === null || currency.code === null)
      setCurrency({ name: "Indian Rupee", code: "INR" });
  }, [currency]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav__bar">
        <div className="container">
          <a className="navbar-brand" href="#section-one">
            <i className="fas fa-hiking logo-icon"></i>
            <small className="px-2">Wanderers</small>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="currency-btn"
                  data-toggle="modal"
                  data-target="#currencyModal"
                >
                  <small className="small-text">{currency.code}</small>
                  {currency.name}
                </button>

                <div
                  className="modal fade"
                  id="currencyModal"
                  tabIndex="-1"
                  aria-labelledby="currencyModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="lead" id="currencyModalLabel">
                          Choose Currency
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body pb-5">
                        <Currency value={selectedCurrency} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="section-one">
        <div className="container">
          <div className="row text-right">
            <div className="col-md-5 col-12 offset-md-7">
              <button className="section-btn">FLights</button>
              <button className="section-btn">Tour Packages</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form className="flight-form">
                <div className="form-row">
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
                    <input id="depart" type="date" className="form-control" />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 mb-1">
                    <label htmlFor="return">Return</label>
                    <input id="return" type="date" className="form-control" />
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col text-center">
                    <button type="button" className="flight-btn">
                      Search flights
                      <i className="fas fa-arrow-circle-right px-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Flights;
