import React from "react";

const Input = props => {
  return (
    <div className="form">
      <input
        className="form__input"
        type="text"
        placeholder="wpisz miasto"
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
};

export default Input;
