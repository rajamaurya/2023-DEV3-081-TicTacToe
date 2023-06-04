import { createContext, useEffect, useState } from "react";

export const GlobalContextProvider = createContext();

const GlobalContext = ({ children }) => {
  const CROSS = "X";
  const ZERO = "0";
  const [currentPlayer, setCurrentPlayer] = useState(CROSS);
  const [winner, setWinner] = useState("");
  const [grids, setGrids] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(() => {
    checkRow(0);
    checkRow(1);
  }, [grids]);
  /**
   *  check specific row cells status
   * @param {*} cell
   * @returns boolean
   */
  const checkRow = (cell) => {
    if (
      grids[cell][0] &&
      grids[cell][0] === grids[cell][1] &&
      grids[cell][0] === grids[cell][2]
    ) {
      setWinner("X");
      return true;
    }
    return false;
  };

  const gridClicked = (row, col) => {
    if (grids[row][col] !== "") return;
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
        checkRow,
        winner,
      }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
};

export default GlobalContext;
