import React, { useState } from "react";
import "./Grid.css";
const Grid = ({ row, col }) => {
  const CROSS = "X";
  const ZERO = "0";
  const [currentPlayer, setCurrentPlayer] = useState("");
  const gridClickced = () => {
    setCurrentPlayer(ZERO);
  };
  return (
    <div role="grid" className="grid" onClick={() => gridClickced(row, col)}>
      <div data-testid="currentPlayer">{currentPlayer}</div>
    </div>
  );
};

export default Grid;
