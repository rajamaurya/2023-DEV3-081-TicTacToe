import { createContext, useState } from "react";

export const GlobalContextProvider = createContext();
const GlobalContext = ({ children }) => {
  const CROSS = "X";
  const ZERO = "0";
  const [currentPlayer, setCurrentPlayer] = useState(CROSS);
  const [grids, setGrids] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const gridClicked = (row, col) => {
    const cloneBoard = { ...grids };
    grids[row][col] = currentPlayer;
    setGrids(cloneBoard);
    currentPlayer === CROSS ? setCurrentPlayer(ZERO) : setCurrentPlayer(CROSS);
  };
  return (
    <GlobalContextProvider.Provider
      value={{
        CROSS,
        ZERO,
        grids,
        currentPlayer,
        setCurrentPlayer,
        gridClicked,
      }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
};

export default GlobalContext;
