import "./App.scss";
import Dropdown from "./components/Dropdown/Dropdown";
import SearchBar from "./components/SearchBar/SearchBar";
import TicketsContainer from "./containers/TicketsContainer/TicketsContainer";
import team from "./data/team";

const App = () => {
  const handleSearch = (event) => {
    return team.filter((employee) => {
      if (employee.name === event.target.value) {
        console.log(employee);
        return employee;
      }
    });
  };
  return (
    <div className="App">
      <h1 className="ticket-counter__header">Ticket Counter</h1>
      <div className="ticket-counter__filter">
        <SearchBar action={handleSearch} />
        <Dropdown />
      </div>
      <TicketsContainer />
    </div>
  );
};

export default App;
