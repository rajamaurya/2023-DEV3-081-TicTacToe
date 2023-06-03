import { render, screen } from "@testing-library/react";
import Board from "./Board";

describe("dispaly game board", () => {
  test("display 3 x 3 size game board", () => {
    render(<Board />);
    const cells = screen.getAllByRole("grid");
    expect(cells).toHaveLength(9);
  });
});
