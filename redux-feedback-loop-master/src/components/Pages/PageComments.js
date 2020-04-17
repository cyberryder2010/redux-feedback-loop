import React, { Component } from "react";
import { connect } from "react-redux";

class PageComments extends Component {
  render() {
    return (
      <div>
        <h1>Any comments you want to share?></h1>
      </div>
    );
  }
}
export default connect()(PageComments);
