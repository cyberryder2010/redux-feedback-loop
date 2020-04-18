import React, { Component } from "react";
import { connect } from "react-redux";

class PageSupport extends Component {
  state = {
    support: 0,
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onNextClick = (event) => {
    this.props.dispatch({ type: "SET_SUPPORT", payload: this.state.support });
    this.props.history.push("/comments");
  };
  render() {
    return (
      <div>
        <h1>How well were you supported today?</h1>
        <p>Please enter a number between 1 :( and 5 :)</p>
        <input type="number" onChange={this.onInputChange("support")} />
        <button onClick={this.onNextClick}>NEXT</button>
      </div>
    );
  }
}
export default connect()(PageSupport);
