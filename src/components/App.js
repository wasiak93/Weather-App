import React, { Component } from "react";
import Input from "./Input";
import Result from "./Result.js";
const APIKey = "7248b12ac937c4fd8e8f8de3412d50f5";

class App extends Component {
  state = {
    err: false,
    value: "",
    date: "",
    temp: "",
    city: "",
    sunrise: "",
    sunset: "",
    wind: "",
    pressure: "",
    humidity: ""
  };

  handleChangeInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("something one wrong");
        })
        .then(response => response.json())
        .then(data => {
          this.setState(prevState => ({
            err: false,
            temp: data.main.temp,
            city: prevState.value,
            date: data.dt,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            humidity: data.main.humidity
          }));
        })
        .catch(err => {
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }));
        });
    }
  };

  render() {
    return (
      <div>
        <Input value={this.state.value} change={this.handleChangeInput} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
