import React from "react";
import styles from "./Result.module.scss";

import TopBoard from "../Boards/TopBoard/TopBoard";
import BottomBoard from "../Boards/BottomBoard/BottomBoard";

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
        <TopBoard city={city} time={time} temp={temp} />
        <BottomBoard wind={wind} pressure={pressure} humidity={humidity} />
      </div>
    );
  }

  return (
    <>{err ? `Sorry, we don't have "${city}" in our database` : content}</>
  );
};

export default Result;
