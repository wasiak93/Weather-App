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
    // sunrise,
    // sunset,
    wind,
    pressure,
    humidity,
    timezone
  } = props.weather;

  let content = null;

  if (!err && city) {
    // const sunriseTime = new Date((sunrise + timezone) * 1000)
    //   .toLocaleTimeString()
    //   .slice(0, -3);
    // const sunsetTime = new Date((sunset + timezone) * 1000)
    //   .toLocaleTimeString()
    //   .slice(0, -3);

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
        <h1 className="date__city">
          {/* <FontAwesomeIcon icon={faCity} /> <strong>{city}</strong> */}
          {city}
        </h1>
        <p className="date__time">
          {/* <FontAwesomeIcon icon={faClock} />  */}
          {time}
        </p>
        <div className="date__temp">
          {/* <FontAwesomeIcon icon={faTemperatureLow} /> */}
          <p className="date__degree">{Math.round(temp)}</p>
          <p className="date__symbol">&#176;C</p>
        </div>
        <div className="items">
          {/* <div className="items__item">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faArrowUp} />
            {sunriseTime}
          </div>
          <div className="items__item">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faArrowDown} />
            {sunsetTime}
          </div> */}
          <div className="items__item">
            <FontAwesomeIcon icon={faWind} /> {wind} m/s
          </div>
          <div className="items__item">
            <FontAwesomeIcon icon={faHeart} /> {pressure} hPa
          </div>
          <div className="items__item">
            <FontAwesomeIcon icon={faPercent} /> {humidity} %
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
