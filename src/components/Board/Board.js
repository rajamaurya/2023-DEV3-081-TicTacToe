import React from "react";
import "./Board.css";
import Grid from "../Grid/Grid";

const Board = () => {
  return (
    <div className="board-container">
      <div>
        <Grid row={0} col={0} />
        <Grid row={0} col={1} />
        <Grid row={0} col={2} />
      </div>
      <div>
        <Grid row={1} col={0} />
        <Grid row={1} col={1} />
        <Grid row={1} col={2} />
      </div>
      <div>
        <Grid row={2} col={0} />
        <Grid row={2} col={1} />
        <Grid row={2} col={2} />
      </div>
    </div>
  );
};

export default Board;
