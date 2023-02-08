import "./App.scss";
import Dropdown from "./components/Dropdown/Dropdown";
import SearchBar from "./components/SearchBar/SearchBar";
import TicketsContainer from "./containers/TicketsContainer/TicketsContainer";
import team from "./data/team";
import { useState } from "react";

const App = () => {
  const [employees, setEmployees] = useState(team);

  const handleSearch = (event) => {
    setEmployees(
      team.filter((employee) =>
        employee.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  const handleDropdown = (event) => {
    if (event.target.value === "") {
      setEmployees(team);
    } else {
      setEmployees(
        team.filter((employee) => employee.role === event.target.value)
      );
    }
  };

  return (
    <div className="App">
      <h1 className="ticket-counter__header">Ticket Counter</h1>
      <div className="ticket-counter__filter">
        <SearchBar handleSearch={handleSearch} />
        <Dropdown handleDropdown={handleDropdown} />
      </div>
      <TicketsContainer teamArr={employees} />
    </div>
  );
};

export default App;
