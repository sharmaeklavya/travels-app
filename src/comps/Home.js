import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Topbar from "./Topbar";
import Flights from "./Flights";
import Travels from "./Travels";

function Home() {
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
                <Link to="/travels" className="section-one-btn">
                  Tour Packages
                </Link>
              </div>
            </div>
            <Switch>
              <Route path="/travels" component={Travels} exact />
              <Route path="/" component={Flights} exact />
            </Switch>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
