import React from "react";

const Result = props => {
  const {
    err,
    date,
    temp,
    city,
    sunrise,
    sunset,
    wind,
    pressure,
    humidity,
    timezone
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date((sunrise + timezone) * 1000)
      .toLocaleTimeString()
      .slice(0, -3);
    const sunsetTime = new Date((sunset + timezone) * 1000)
      .toLocaleTimeString()
      .slice(0, -3);

    const timeUTC = date.getTime() + date.getTimezoneOffset() * 60000;
    const time = new Date(timeUTC + timezone * 1000).toLocaleString();
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
        <p>{timezone}</p>
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
