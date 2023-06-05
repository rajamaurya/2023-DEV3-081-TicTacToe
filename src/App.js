import { useContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { GlobalContextProvider } from "./components/Global/GlobalContext";
import Player from "./components/player/Player";
import GameOver from "./components/game-over/GameOver";

function App() {
  const { winner, isGameOver } = useContext(GlobalContextProvider);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Tic Tac Toe</h3>
      </header>
      <Board />
      {!winner && !isGameOver && <Player />}
      <div data-testid="status">
        {winner ? `Winner: Player ${winner}` : isGameOver ? "Draw" : ""}
      </div>
      {isGameOver && <GameOver />}
    </div>
  );
}

export default App;
