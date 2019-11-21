import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result.js";
const APIKey = "7248b12ac937c4fd8e8f8de3412d50f5";

class App extends Component {
  state = {
    value: ""
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    let API = `https://samples.openweathermap.org/data/2.5/find?q=${this.state.value}&units=metric&appid=${APIKey}`;

    if (prevState.value !== this.state.value) {
      console.log("fetchujemy tutaj");
    }
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
