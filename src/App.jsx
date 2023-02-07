import "./App.scss";
import TicketCard from "./components/TicketCard/TicketCard";
import TicketsContainer from "./containers/TicketsContainer/TicketsContainer";

const App = () => {
  return (
    <div className="App">
      <h1 className="ticket-counter__header">Ticket Counter</h1>
      <TicketsContainer />
    </div>
  );
};

export default App;
