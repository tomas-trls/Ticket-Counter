import React from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import "./TicketsContainer.scss";
import team from "../../data/team";

const TicketsContainer = () => {
  const TeamJSX = team.map((employee) => {
    return (
      <TicketCard key={employee.id} name={employee.name} role={employee.role} />
    );
  });

  return <div className="ticket-container">{TeamJSX}</div>;
};

export default TicketsContainer;
