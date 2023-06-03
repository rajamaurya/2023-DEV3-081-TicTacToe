import React, { useState } from "react";
import "./Grid.css";
const Grid = ({ row, col }) => {
  const CROSS = "X";
  const [currentPlayer, setCurrentPlayer] = useState("");
  const gridClickced = () => {
    setCurrentPlayer(CROSS);
  };
  return (
    <div role="grid" className="grid" onClick={() => gridClickced(row, col)}>
      {currentPlayer}
    </div>
  );
};

export default Grid;
