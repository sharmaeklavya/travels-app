import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Currency from "./Currency";
import axios from "axios";

function Topbar() {
  const [currency, setCurrency] = useState({
    name: localStorage.getItem("currencyName"),
    code: localStorage.getItem("currencyCode"),
  });

  const selectedCurrency = (data) => {
    setCurrency({ name: data.name, code: data.code });
  };

  useEffect(() => {
    axios
      .get("https://countryapi.gear.host/v1/Country/getCountries", {
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((res) => console.log(res.response));
  }, [currency]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav__bar">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <i className="fas fa-hiking logo-icon"></i>
            <small className="px-2">Wanderers</small>
          </Link>

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
    </>
  );
}

export default Topbar;
