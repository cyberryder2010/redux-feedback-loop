import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class PageReview extends Component {
  submitFeedback = (event) => {
    const feedback = {
      feeling: this.props.store.feelingReducer,
      understanding: this.props.store.understandingReducer,
      support: this.props.store.supportReducer,
      comments: this.props.store.commentsReducer,
    };

    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Review of Your Feedback</h1>
        <h2>You're Feeling</h2>
        <h3>{this.props.store.feelingReducer}</h3>
        <h2>You're Understanding</h2>
        <h3>{this.props.store.understandingReducer}</h3>
        <h2>You received Support</h2>
        <h3>{this.props.store.supportReducer}</h3>
        <h2>Your Comments</h2>
        <h3>{this.props.store.commentsReducer}</h3>
        <button onClick={this.submitFeedback}>SUBMIT</button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageReview);
