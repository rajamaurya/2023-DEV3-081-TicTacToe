import { useContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { GlobalContextProvider } from "./components/Global/GlobalContext";
import Player from "./components/player/Player";

function App() {
  const { winner, isGameOver } = useContext(GlobalContextProvider);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Tic Tac Toe</h3>
      </header>
      <Board />
      <Player />
      <div data-testid="status">
        {winner ? `Winner: Player ${winner}` : isGameOver ? "Draw" : ""}
      </div>
    </div>
  );
}

export default App;
