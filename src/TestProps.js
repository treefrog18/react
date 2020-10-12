import React, { Component } from "react";

class TestProps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <input type={this.props.thisType} />
        <button onClick={this.props.onclick}> {this.props.name} </button>
      </>
    );
  }
}

export default TestProps;
