import React, { Component } from "react";
import { connect } from "react-redux";

class PageUnderstanding extends Component {
  state = {
    understanding: 0,
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        input: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onNextClick = (event) => {
    this.props.dispatch({ type: "SET_UNDERSTANDING", payload: this.state });
    this.props.history.push("/support");
  };
  render() {
    return (
      <div>
        <h1>How well are you Understanding?</h1>
        <p>Please enter a number between 1 :( and 5 :)</p>
        <input type="number" onChange={this.onInputChange("understanding")} />
        <button onClick={this.onNextClick}>NEXT</button>
      </div>
    );
  }
}
export default connect()(PageUnderstanding);
