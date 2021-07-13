import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Watchlist from "../components/Watchlist";
import Header from "../components/Header";
import Add from "../components/Add";
import Watched from "../components/Watched";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Watchlist} />
        <Route path="/add" exact component={Add} />
        <Route path="/watched" exact component={Watched} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
