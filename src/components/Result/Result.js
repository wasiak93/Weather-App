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
import styles from "./Result.module.scss";

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
      <div className={styles.wrapper}>
        <h1> {city}</h1>
        <p className={styles.time}>{time}</p>

        <p className={styles.degree}>{Math.round(temp)} &#176;C</p>

        <div className={styles.itemsWrapper}>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faWind} className={styles.icon} />
            <p>{wind} m/s</p>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <p>{pressure} hPa</p>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon icon={faPercent} className={styles.icon} />
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
