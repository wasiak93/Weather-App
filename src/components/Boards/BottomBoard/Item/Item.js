import React from "react";
import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ iconName, children }) => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon icon={iconName} className={styles.icon} />
    <p className={styles.text}>{children}</p>
  </div>
);

export default Item;
