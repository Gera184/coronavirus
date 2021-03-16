import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./components/main/Main";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoronaMap from "./components/map/CoronaMap";

export default () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/home" component={Main} />
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={CoronaMap} />\
        </Switch>
      </Router>
    </div>
  );
};
