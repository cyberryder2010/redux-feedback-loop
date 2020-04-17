import React, { Component } from "react";
import { connect } from "react-redux";

class PageSupport extends Component {
  render() {
    return (
      <div>
        <h1>How well are you being supported today?></h1>
      </div>
    );
  }
}
export default connect()(PageSupport);
