import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StepperForm } from "./components/StepperForm";
import { insuranceDevSteps } from "./constants/insuranceDevStepsConstants";
import { insuranceDesignerSteps } from "./constants/insuranceDisignerStepsConstants";
import { ProductIds } from "./interfaces/productsIdsInterface";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <StepperForm productId={ProductIds.devIns} steps={insuranceDevSteps} />{" "}
          </Route>
          <Route path="/buy/insurance_designer">
            <StepperForm productId={ProductIds.designerIns} steps={insuranceDesignerSteps} />{" "}
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Insurance!</p>
            <Link to="/buy/insurance_dev">Get developer insurance</Link>
            <br/>
            <Link to="/buy/insurance_designer">Get designer insurance</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
