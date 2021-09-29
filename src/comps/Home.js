import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Topbar from "./Topbar";
import Flights from "./Flights";
import Hotels from "./Hotels";
import FlightsCity from "./FlightsCity";
import HotelsCity from "./HotelsCity";
import Tourists from "./Tourists";

function Home() {
  //

  return (
    <>
      <Topbar />
      <section id="section-one">
        <div className="container">
          <div className="section-one-vessel">
            <div className="row text-right">
              <div className="col-md-5 col-12 offset-md-7">
                <Link to="/" className="section-one-btn">
                  FLights
                </Link>
                <Link to="/hotels" className="section-one-btn">
                  Tour Packages
                </Link>
              </div>
            </div>
            <Switch>
              <Route path="/hotels" component={Hotels} exact />
              <Route path="/" component={Flights} exact />
            </Switch>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="container">
          <Switch>
            <Route path="/hotels" component={HotelsCity} exact />
            <Route path="/" component={FlightsCity} exact />
          </Switch>
        </div>
      </section>
      <section className="section-three">
        <div className="container">
          <Switch>
            <Route path="/hotels" component={Tourists} exact />
            <Route path="/" component={Tourists} exact />
          </Switch>
        </div>
      </section>
      <section className="section-four">
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <p className="para-text text-dark">
                @2021&nbsp;
                <a
                  href="https://github.com/sharmaeklavya"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eklavya
                </a>
                - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
