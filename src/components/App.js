import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result.js";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Input />
        <Result />
      </div>
    );
  }
}

export default App;
