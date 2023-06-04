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
    checkRow(2);
    checkCol(0);
    checkCol(1);
    checkCol(2);
    checkDiagonal();
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
      setWinner(grids[cell][0]);
      return true;
    }
    return false;
  };

  /**
   *  check specific column status
   * @param {*} col
   * @returns boolean
   */
  const checkCol = (col) => {
    if (
      grids[0][col] &&
      grids[0][col] === grids[1][col] &&
      grids[0][col] === grids[2][col]
    ) {
      setWinner(grids[0][col]);
      return true;
    }
    return false;
  };

  const checkDiagonal = () => {
    // from left to right
    if (
      grids[1][1] &&
      grids[0][0] === grids[1][1] &&
      grids[0][0] === grids[2][2]
    ) {
      setWinner("X");
      return true;
    }
    // from right to left
    if (
      grids[1][1] &&
      grids[2][0] === grids[1][1] &&
      grids[2][0] === grids[0][2]
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
        checkCol,
        winner,
      }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
};

export default GlobalContext;
