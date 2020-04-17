import React, { Component } from "react";
import { connect } from "react-redux";

class PageUnderstanding extends Component {
  render() {
    return (
      <div>
        <h1>How well are you understanding?</h1>
      </div>
    );
  }
}
export default connect()(PageUnderstanding);
