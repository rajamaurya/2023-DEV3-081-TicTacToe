import { fireEvent, render, screen } from "@testing-library/react";
import Grid from "./Grid";
import Board from "../Board/Board";
import GlobalContext from "../Global/GlobalContext";

const gridSetUp = () => {
  render(
    <GlobalContext>
      <Board>
        <Grid />
      </Board>
    </GlobalContext>
  );
};

describe("display cells", () => {
  test("display a single box of board", () => {
    gridSetUp();

    const grid = screen.getAllByRole("grid");
    let singleBox = [grid[0]];

    expect(singleBox).toHaveLength(1);
    expect(singleBox[0]).toBeInTheDocument();
  });

  test("display X when player-X select the box", () => {
    gridSetUp();

    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(9);
    expect(grid[0]).toBeInTheDocument();

    const clickCell1 = fireEvent.click(grid[0]);
    expect(clickCell1).toBe(true);

    const currentPlayer = screen.getAllByTestId("currentPlayer");
    expect(currentPlayer[0]).toBeInTheDocument();
    expect(currentPlayer[0]).toHaveTextContent("X");
  });

  test("display 0 when player-0 select the box", () => {
    gridSetUp();

    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(9);
    expect(grid[0]).toBeInTheDocument();

    const clickCell1 = fireEvent.click(grid[0]);
    const clickCell2 = fireEvent.click(grid[1]);
    const currentPlayer = screen.getAllByTestId("currentPlayer");

    expect(clickCell1).toBe(true);
    expect(clickCell2).toBe(true);
    expect(currentPlayer[1]).toHaveTextContent("0");
  });

  test("toggle player X and 0", () => {
    gridSetUp();

    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(9);
    expect(grid[0]).toBeInTheDocument();

    const clickedOneCell = fireEvent.click(grid[0]);
    expect(clickedOneCell).toBe(true);
    const currentPlayer = screen.getAllByTestId("currentPlayer");

    expect(currentPlayer[0]).toBeInTheDocument();
    expect(currentPlayer[0]).toHaveTextContent("X");
    const clickedOneCell2 = fireEvent.click(grid[1]);

    expect(clickedOneCell2).toBe(true);
    const currentPlayer2 = screen.getAllByTestId("currentPlayer");

    expect(currentPlayer2[1]).toBeInTheDocument();
    expect(currentPlayer2[1]).toHaveTextContent("0");
  });

  test("player should not be able to select the box if it is already selected", () => {
    gridSetUp();

    const grid = screen.getAllByRole("grid");
    const clickedCell1 = fireEvent.click(grid[0]);

    expect(clickedCell1).toBe(true);
    expect(grid[0]).toHaveClass("disabled");
  });
});
