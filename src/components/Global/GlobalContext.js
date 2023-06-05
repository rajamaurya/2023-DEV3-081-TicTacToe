import { createContext, useEffect, useState } from "react";

import {
  CROSS,
  ZERO,
  FIRST_ROW,
  SECOND_ROW,
  THIRD_ROW,
  FIRST_COL,
  SECOND_COL,
  THIRD_COL,
} from "../../constant";
export const GlobalContextProvider = createContext();

const GlobalContext = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState(CROSS);
  const [winner, setWinner] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [grids, setGrids] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(() => {
    if (checkForWinner()) {
      setWinner(getWinner());
      setIsGameOver(true);
    } else {
      checkGameStatus();
    }
  }, [grids]);

  const getWinner = () => {
    return currentPlayer === CROSS ? ZERO : CROSS;
  };

  const isGridsMarkedBySamePlayer = (firstGrid, secondGrid, thirdGrid) => {
    return firstGrid && firstGrid === secondGrid && firstGrid === thirdGrid;
  };

  const checkFirstRow = () => {
    return isGridsMarkedBySamePlayer(
      grids[FIRST_ROW][FIRST_COL],
      grids[FIRST_ROW][SECOND_COL],
      grids[FIRST_ROW][THIRD_COL]
    );
  };

  const checkSecondRow = () => {
    return isGridsMarkedBySamePlayer(
      grids[SECOND_ROW][FIRST_COL],
      grids[SECOND_ROW][SECOND_COL],
      grids[SECOND_ROW][THIRD_COL]
    );
  };

  const checkThirdRow = () => {
    return isGridsMarkedBySamePlayer(
      grids[THIRD_ROW][FIRST_COL],
      grids[THIRD_ROW][SECOND_COL],
      grids[THIRD_ROW][THIRD_COL]
    );
  };

  const checkRow = () => {
    return checkFirstRow() || checkSecondRow() || checkThirdRow();
  };

  const checkFirstCol = () => {
    return isGridsMarkedBySamePlayer(
      grids[FIRST_ROW][FIRST_COL],
      grids[SECOND_ROW][FIRST_COL],
      grids[THIRD_ROW][FIRST_COL]
    );
  };

  const checkSecondCol = () => {
    return isGridsMarkedBySamePlayer(
      grids[FIRST_ROW][SECOND_COL],
      grids[SECOND_ROW][SECOND_COL],
      grids[THIRD_ROW][SECOND_COL]
    );
  };

  const checkThirdCol = () => {
    return isGridsMarkedBySamePlayer(
      grids[FIRST_ROW][THIRD_COL],
      grids[SECOND_ROW][THIRD_COL],
      grids[THIRD_ROW][THIRD_COL]
    );
  };

  const checkCol = () => {
    return checkFirstCol() || checkSecondCol() || checkThirdCol();
  };

  const checkLeftDiagonal = () => {
    return isGridsMarkedBySamePlayer(
      grids[FIRST_ROW][FIRST_COL],
      grids[SECOND_ROW][SECOND_COL],
      grids[THIRD_ROW][THIRD_COL]
    );
  };

  const checkRightDiagonal = () => {
    return isGridsMarkedBySamePlayer(
      grids[FIRST_ROW][THIRD_COL],
      grids[SECOND_ROW][SECOND_COL],
      grids[THIRD_ROW][FIRST_COL]
    );
  };

  const checkDiagonal = () => {
    return checkLeftDiagonal() || checkRightDiagonal();
  };

  const checkForWinner = () => {
    return checkRow() || checkCol() || checkDiagonal();
  };

  const gridClicked = (row, col) => {
    if (grids[row][col] !== "") return;
    const cloneBoard = { ...grids };
    grids[row][col] = currentPlayer;
    setGrids(cloneBoard);
    togglePlayer();
  };

  const togglePlayer = () => {
    return currentPlayer === CROSS
      ? setCurrentPlayer(ZERO)
      : setCurrentPlayer(CROSS);
  };

  const resetBtnController = () => {
    setGrids([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner("");
    setIsGameOver(false);
  };

  const checkGameStatus = () => {
    if (
      !grids[0].includes("") &&
      !grids[1].includes("") &&
      !grids[2].includes("")
    ) {
      setIsGameOver(true);
    }
  };

  return (
    <GlobalContextProvider.Provider
      value={{
        grids,
        currentPlayer,
        gridClicked,
        checkRow,
        checkCol,
        winner,
        isGameOver,
        resetBtnController,
      }}
    >
      {children}
    </GlobalContextProvider.Provider>
  );
};

export default GlobalContext;
