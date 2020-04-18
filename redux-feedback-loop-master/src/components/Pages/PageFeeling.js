import React, { Component } from "react";
import { connect } from "react-redux";

class PageFeeling extends Component {
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
      </div>
    );
  }
}
export default connect()(PageFeeling);
