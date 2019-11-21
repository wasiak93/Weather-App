import React from "react";

const Input = props => {
  return <input type = "text"
  placeholder = 'wpisz miasto'
  value = {
    props.value
  }
  onChange = {
    props.change
  }
  />;
};

export default Input;