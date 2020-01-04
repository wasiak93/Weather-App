import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faCity,
  faPercent,
  // faClock,
  // faTemperatureLow
  // faSun,
  // faArrowUp,
  // faArrowDown,
  faWind,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const Result = props => {
  const {
    err,
    date,
    temp,
    city,
    wind,
    pressure,
    humidity,
    timezone
  } = props.weather;

  let content = null;

  if (!err && city) {
    const timeUTC =
      date.getTime() + date.getTimezoneOffset() * 60000 + timezone * 1000;
    const hours = new Date(timeUTC)
      .getHours()
      .toString()
      .padStart(2, 0);
    const minutes = new Date(timeUTC)
      .getMinutes()
      .toString()
      .padStart(2, 0);
    const time = hours + ":" + minutes;

    content = (
      <div>
        <h1 className="date__city">{city}</h1>
        <p className="date__time">{time}</p>

        <p className="date__degree">{Math.round(temp)} &#176;C</p>

        <div className="items">
          <div className="items__item">
            <FontAwesomeIcon icon={faWind} />
            <p>{wind} m/s</p>
          </div>
          <div className="items__item">
            <FontAwesomeIcon icon={faHeart} />
            <p>{pressure} hPa</p>
          </div>
          <div className="items__item">
            <FontAwesomeIcon icon={faPercent} />
            <p>{humidity} %</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="date">
      {err ? `Sorry, we don't have "${city}" in our database` : content}
    </div>
  );
};

export default Result;
