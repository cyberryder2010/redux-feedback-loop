import React, { Component } from "react";
import { connect } from "react-redux";

class PageReview extends Component {
  render() {
    return (
      <div>
        <h1>Review></h1>
      </div>
    );
  }
}
export default connect()(PageReview);
