import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result.js";

class App extends Component {
  state = {
    value: ""
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Input value={this.state.value} change={this.handleChangeInput} />
        <Result />
      </div>
    );
  }
}

export default App;
