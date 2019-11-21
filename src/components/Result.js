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
          Wyniki dla: <strong>{city}</strong>
        </h1>
        <p>Aktualna data i godzina: {time}</p>
        <p>Tempertura: {Math.round(temp)} &#176;C</p>
        <p>Wschód słońca: {sunriseTime}</p>
        <p>Zachód słońca: {sunsetTime}</p>
        <p>Prędkośc wiatru {wind} m/s</p>
        <p>Ciśnienie: {pressure} hPa</p>
        <p>Wilgotność {humidity} %</p>
        <p></p>
      </>
    );
  }

  return (
    <div className="result">
      {err ? `Sorry, we don't have "${city}" in our database` : content}
    </div>
  );
};

export default Result;
