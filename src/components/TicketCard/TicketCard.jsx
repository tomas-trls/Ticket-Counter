import React from "react";
import Counter from "../Counter/Counter";
import "./TicketCard.scss";

const TicketCard = (props) => {
  const { name, role } = props;
  return (
    <div className="ticket-card">
      <div className="ticket-card__text">
        <h3 className="ticket-card__name">{name}</h3>
        <p className="ticket-card__role">{role}</p>
      </div>
      <Counter />
    </div>
  );
};

export default TicketCard;
