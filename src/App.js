import { useContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { GlobalContextProvider } from "./components/Global/GlobalContext";

function App() {
  const { winner } = useContext(GlobalContextProvider);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Tic Tac Toe</h3>
      </header>
      <Board />
      <div data-testid="status">Winner: Player {winner}</div>
    </div>
  );
}

export default App;
