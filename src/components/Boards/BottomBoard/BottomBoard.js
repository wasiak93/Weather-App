import React from "react";
import { faPercent, faWind, faHeart } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item/Item";
import styles from "./BottomBoard.module.scss";

const BottomBoard = ({ wind, pressure, humidity }) => (
  <div className={styles.itemsWrapper}>
    <Item iconName={faWind}>{wind} m/s</Item>
    <Item iconName={faHeart}>{pressure} hPa</Item>
    <Item iconName={faPercent}>{humidity} %</Item>
  </div>
);

export default BottomBoard;
