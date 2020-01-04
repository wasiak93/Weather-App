import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="wpisz miasto"
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
};

export default Input;
