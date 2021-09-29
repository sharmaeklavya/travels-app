import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Currency from "./Currency";
import axios from "axios";

function Topbar() {
  const hereMapToken =
    "eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiIxTVdUT0lNRVNDYUhUWmk5ZlRvNiIsImlhdCI6MTYzMjk0MzE5NywiZXhwIjoxNjMzMDI5NTk3LCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLjQ4WGR5MlVfV2JZNVJibE1wckJnb2cuNlVuTzdadmpGQ1lsM0pWVGk1VFYxa0xla0hEaFZydE9MUWhJLXZtQ29PUmVxa2xaOC0wMXotTU1QRmNrNnFET2FKVktkNkZKcXBjVExBaHJjaUZ5WVVXVkRvV05LcDIySDh5YzVNR1NlVkY0dmJxUjl6VEJzN2FlRDhNQ2xBUkZoenJXZ0V6a096dzNtNVMxZF9rOUxBLnQ4YXVEQ0tQRG1DTnFFd3FNUnpxZzZuU1J2SlhyaFZEZDA0ZmRBTGoyRDg.PkkYCHDrS75nToD2_y3r5G9EzO-7hFzcbpiYzgiB2T4BmxwZBKrCvFAZ0HZScQlyZ3HZOc9P7NX-FxG4Fgb-p2rMD8qhL5-dk3QI4_EXDS-un1nZ2jDgHDK4Ewfn3ikgpmmIDlCMU1JaTtSTGgINGNJoKQjD6cm5oUHxp2B-QowRSoHdwyFMI8ypaD4u1Ney_fDkaXZAvCJlTbSyY8OQHfyPlsTHFzuSqi1rvNWKKo7VuIZnl_s410Zqm7hEY_xknFK7FPF5LTZ4vK7kpPHqHZd8T8j6mIst_tEOGjtfVpglOGgb4s3OR0IcbQ_1FzkVuS2Sa5ybuSdh514ZBVw1Rw";

  const [geoLocation, setGeoLocation] = useState({
    latitude: "",
    longitude: "",
  });

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

  useEffect(() => {
    const success = (position) => {
      setGeoLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const error = (err) => {
      console.error(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  }, []);

  // useEffect(() => {
  //   if (geoLocation.latitude !== "") {
  //     axios
  //       .get(
  //         `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${geoLocation.latitude}%2C${geoLocation.longitude}&lang=en-US`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${hereMapToken}`,
  //           },
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => console.log(res.data.items[0].address.countryName))
  //       .catch((err) => console.log(err.response));
  //   }
  // }, [geoLocation]);

  useEffect(() => {
    axios
      .get("https://countryapi.gear.host/v1/Country/getCountries", {
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((res) => console.log(res.response));
  }, []);

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
