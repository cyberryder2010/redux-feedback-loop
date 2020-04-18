import React, { Component } from "react";
import { connect } from "react-redux";

class PageComments extends Component {
  state = {
    comments: "",
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
    this.props.dispatch({ type: "SET_COMMENTS", payload: this.state });
    this.props.history.push("/review");
  };
  render() {
    return (
      <div>
        <h1>Comments</h1>
        <p>Please leave your comments here:</p>
        <input type="text" onChange={this.onInputChange("comments")} />
        <button onClick={this.onNextClick}>NEXT</button>
      </div>
    );
  }
}
export default connect()(PageComments);
