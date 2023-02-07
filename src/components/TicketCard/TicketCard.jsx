import React from "react";
import "./TicketCard.scss";

const TicketCard = (props) => {
  const { name, role } = props;
  return (
    <div className="ticket-card">
      <h3 className="ticket-card__name">{name}</h3>
      <p className="ticket-card__role">{role}</p>
    </div>
  );
};

export default TicketCard;
