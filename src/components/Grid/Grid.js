import React, { useContext } from "react";
import "./Grid.css";
import { GlobalContextProvider } from "../Global/GlobalContext";
const Grid = ({ row, col }) => {
  const { grids, gridClicked } = useContext(GlobalContextProvider);
  const currentPlayer = grids[row][col];

  return (
    <div role="grid" className="grid" onClick={() => gridClicked(row, col)}>
      <div data-testid="currentPlayer">{currentPlayer}</div>
    </div>
  );
};

export default Grid;
