import "./App.css";
import Board from "./components/Board/Board";
import GlobalContext from "./components/Global/GlobalContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Tic Tac Toe</h3>
      </header>
      <GlobalContext>
        <Board />
      </GlobalContext>
    </div>
  );
}

export default App;
