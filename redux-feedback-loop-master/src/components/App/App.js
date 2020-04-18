import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import PageFeeling from "../Pages/PageFeeling";
import PageUnderstanding from "../Pages/PageUnderstanding";
import PageSupport from "../Pages/PageSupport";
import PageComments from "../Pages/PageComments";
import PageReview from "../Pages/PageReview";
import PageThankYou from "../Pages/PageThankYou";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <Route exact path="/" component={PageFeeling} />
          <Route exact path="/understanding" component={PageUnderstanding} />
          <Route exact path="/support" component={PageSupport} />
          <Route exact path="/comments" component={PageComments} />
          <Route exact path="/review" component={PageReview} />
          <Route exact path="/thankyou" component={PageThankYou} />
        </Router>
      </div>
    );
  }
}

export default App;
