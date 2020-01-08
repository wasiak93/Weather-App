import React from "react";
import styles from "./TopBoard.module.scss";

const TopBoard = ({ city, time, temp }) => {
  return (
    <div className={styles.wrapper}>
      <h1> {city}</h1>
      <p className={styles.time}>{time}</p>
      <p className={styles.degree}>
        <span>{Math.round(temp)}</span> &#176;C
      </p>
    </div>
  );
};

export default TopBoard;
