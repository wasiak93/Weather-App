import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faPercent,
  faClock,
  faTemperatureLow,
  faSun,
  faArrowUp,
  faArrowDown,
  faWind,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

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

    const timeUTC =
      date.getTime() + date.getTimezoneOffset() * 60000 + timezone * 1000;
    const time = new Date(timeUTC).toLocaleString();
    content = (
      <div className="date">
        <h1>
          <FontAwesomeIcon icon={faCity} /> <strong>{city}</strong>
        </h1>
        <p>
          <FontAwesomeIcon icon={faClock} /> {time}
          {time}
        </p>
        <p>
          <FontAwesomeIcon icon={faTemperatureLow} /> {Math.round(temp)} &#176;C
        </p>
        <p>
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faArrowUp} />
          {sunriseTime}
        </p>
        <p>
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faArrowDown} />
          {sunsetTime}
        </p>
        <p>
          <FontAwesomeIcon icon={faWind} /> {wind} m/s
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> {pressure} hPa
        </p>
        <p>
          <FontAwesomeIcon icon={faPercent} /> {humidity} %
        </p>
      </div>
    );
  }

  return (
    <div className="result">
      {err ? `Sorry, we don't have "${city}" in our database` : content}
    </div>
  );
};

export default Result;
