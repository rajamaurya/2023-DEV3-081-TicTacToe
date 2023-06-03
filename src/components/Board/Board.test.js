import { render, screen } from "@testing-library/react";
import Board from "./Board";
import GlobalContext from "../Global/GlobalContext";

describe("dispaly game board", () => {
  test("display 3 x 3 size game board", () => {
    render(
      <GlobalContext>
        <Board />
      </GlobalContext>
    );
    const cells = screen.getAllByRole("grid");
    expect(cells).toHaveLength(9);
  });
});
