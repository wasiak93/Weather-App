import React from "react";

const Result = props => {
  const {
    err,
    value,
    date,
    temp,
    city,
    sunrise,
    sunset,
    wind,
    pressure,
    humidity
  } = props.weather;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  return (
    <>
      <h1>
        <strong>{city}</strong>
      </h1>
      <p>{date}</p>
      <p>{temp}</p>
      <p>{sunriseTime}</p>
      <p>{sunsetTime}</p>
      <p>{wind}</p>
      <p>{pressure}</p>
      <p>{humidity}</p>
      <p></p>
    </>
  );
};

export default Result;
