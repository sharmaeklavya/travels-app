import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Flights from "./comps/Flights";
import Travels from "./comps/Travels";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Flights} exact />
        <Route path="/travels" component={Travels} exact />
      </Switch>
    </Router>
  );
}

export default App;
