import { fireEvent, render, screen } from "@testing-library/react";
import Grid from "./Grid";

describe("display cells", () => {
  test("display a single box of board", () => {
    render(<Grid />);
    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(1);
    expect(grid[0]).toBeInTheDocument();
  });
  test("display X when player-X select the box", () => {
    render(<Grid />);
    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(1);
    expect(grid[0]).toBeInTheDocument();
    const clickCell1 = fireEvent.click(grid[0]);
    expect(clickCell1).toBe(true);
  });
  test("display 0 when player-0 select the box", () => {
    render(<Grid />);
    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(1);
    expect(grid[0]).toBeInTheDocument();
    const clickCell1 = fireEvent.click(grid[0]);
    expect(clickCell1).toBe(true);
    const currentPlayer = screen.getAllByTestId("currentPlayer");
    expect(currentPlayer[0]).toBeInTheDocument();
    expect(currentPlayer[0]).toHaveTextContent("0");
  });
});
