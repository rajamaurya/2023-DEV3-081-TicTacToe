import React from "react";
import "./Board.css";
import Grid from "../Grid/Grid";
import {
  FIRST_ROW,
  SECOND_ROW,
  THIRD_ROW,
  FIRST_COL,
  SECOND_COL,
  THIRD_COL,
} from "../../constant";

const Board = () => {
  return (
    <div className="board-container">
      <div>
        <Grid row={FIRST_ROW} col={FIRST_COL} />
        <Grid row={FIRST_ROW} col={SECOND_COL} />
        <Grid row={FIRST_ROW} col={THIRD_COL} />
      </div>
      <div>
        <Grid row={SECOND_ROW} col={FIRST_COL} />
        <Grid row={SECOND_ROW} col={SECOND_COL} />
        <Grid row={SECOND_ROW} col={THIRD_COL} />
      </div>
      <div>
        <Grid row={THIRD_ROW} col={FIRST_COL} />
        <Grid row={THIRD_ROW} col={SECOND_COL} />
        <Grid row={THIRD_ROW} col={THIRD_COL} />
      </div>
    </div>
  );
};

export default Board;
