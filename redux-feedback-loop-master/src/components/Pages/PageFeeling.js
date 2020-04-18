import React, { Component } from "react";
import { connect } from "react-redux";

class PageFeeling extends Component {
  state = {
    feeling: 0,
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
    this.props.dispatch({ type: "SET_FEELING", payload: this.state });
    this.props.history.push("/understanding");
  };
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <p>Please enter a number between 1 :( and 5 :)</p>
        <input type="number" onChange={this.onInputChange("feeling")} />
        <button onClick={this.onNextClick}>NEXT</button>
      </div>
    );
  }
}
export default connect()(PageFeeling);
