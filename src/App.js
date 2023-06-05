import { useContext } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { GlobalContextProvider } from "./components/Global/GlobalContext";
import Player from "./components/player/Player";
import GameOver from "./components/game-over/GameOver";
import ResetButton from "./components/reset-button/ResetButton";

import { DRAW, WINNER_MESSAGE } from "./constant";

function App() {
  const { winner, isGameOver, resetBtnController } = useContext(
    GlobalContextProvider
  );

  return (
    <div className="App">
      <header className="App-header">
        <h3>Tic Tac Toe</h3>
      </header>
      <Board />
      {!winner && !isGameOver && <Player />}
      <div data-testid="status">
        {winner ? `${WINNER_MESSAGE} ${winner}` : isGameOver ? DRAW : ""}
      </div>
      {isGameOver && <GameOver />}
      {isGameOver ? (
        <ResetButton btnController={() => resetBtnController()} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
