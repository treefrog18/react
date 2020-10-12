import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TestProps from "./TestProps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("constructor method 호출");
  }
  static getDerivedStateFromProps(nexProps, preState) {
    console.log("getDerivedStateFromProps method 호출");
    return null;
  }

  shouldComponentUpdate(nexProps, preState) {
    console.log("shouldComponentUpdate 호출");
    return true;
  }

  //안에다가 함수 호출만, 함수작성이아니라
  componentDidMount() {
    //화면이 렌더링 될때 새로운 스테이트값을 반영해줌
    console.log("componentDidMount method 호출");
    this.setState({ count: 1 });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate 호출");
  }
  getSnapshotBeforeUpdate(nexProps, preState) {
    console.log("getSnapshotBeforeUpdate 호출");
    return null;
  }

  handleState = () => {
    return this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render method 호출");
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <TestProps name={"제출"} onclick={this.handleState} />
      </div>
    );
  }
}

export default App;
