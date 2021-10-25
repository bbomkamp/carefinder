import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./views/HomePage";
import Login from "./views/Login";

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/homepage"} component={HomePage} />
        </Switch>
      </Router>
  );
}

export default App;
