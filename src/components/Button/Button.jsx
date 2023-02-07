import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { type, handleClick } = props;

  return (
    <div className="counter__button btn" onClick={handleClick}>
      <span className="counter__button--front">{type}</span>
    </div>
  );
};

export default Button;
