import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

describe("display cells", () => {
  test("display a single box of board", () => {
    render(<Grid />);
    const grid = screen.getAllByRole("grid");
    expect(grid).toHaveLength(1);
    expect(grid[0]).toBeInTheDocument();
  });
});
