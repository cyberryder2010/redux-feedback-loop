import React, { Component } from "react";
import { connect } from "react-redux";

class PageThankYou extends Component {
  onNextClick = (event) => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h2>FEEDBACK!</h2>
        <h2>THANK YOU!</h2>
        <button onClick={this.onNextClick}>Leave New Feedback</button>
      </div>
    );
  }
}
export default connect()(PageThankYou);
