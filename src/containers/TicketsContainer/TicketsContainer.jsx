import React from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import "./TicketsContainer.scss";

const TicketsContainer = (props) => {
  const { teamArr } = props;

  const TeamJSX = teamArr.map((employee) => {
    return (
      <TicketCard key={employee.id} name={employee.name} role={employee.role} />
    );
  });

  return <div className="ticket-container">{TeamJSX}</div>;
};

export default TicketsContainer;
