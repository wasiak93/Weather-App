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

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const time = new Date(date * 1000).toLocaleString().slice(0, -3);
    content = (
      <>
        <h1>
          <strong>{city}</strong>
        </h1>
        <p>{time}</p>
        <p>{temp}</p>
        <p>{sunriseTime}</p>
        <p>{sunsetTime}</p>
        <p>{wind}</p>
        <p>{pressure}</p>
        <p>{humidity}</p>
        <p></p>
      </>
    );
  }
  return (
    <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>
  );
};

export default Result;
