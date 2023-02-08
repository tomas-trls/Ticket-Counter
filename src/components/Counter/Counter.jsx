import React, { useState } from "react";
import Button from "../Button/Button";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(Math.round(Math.random() * 8));

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <div className="ticket-card__counter counter">
      <h4 className="counter__title">Counter</h4>
      <div className="counter__buttons-container">
        <Button type="-" handleClick={handleDecrease} />
        <div className="counter__result">{count}</div>
        <Button type="+" handleClick={handleIncrease} />
      </div>
    </div>
  );
};

export default Counter;
