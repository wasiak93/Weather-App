import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result.js";
const APIKey = "7248b12ac937c4fd8e8f8de3412d50f5";

class App extends Component {
  state = {
    value: "",
    temp: ""
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.value !== this.state.value) {
      const API = `api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("Ups, coś poszło nie tak");
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            temp: data.main.temp
          });
        })
        .catch(err => console.log(err));
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
