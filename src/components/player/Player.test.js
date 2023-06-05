import { render, screen } from "@testing-library/react";
import Player from "./Player";
import GlobalContext from "../Global/GlobalContext";

describe("current player", () => {
  test("show current player turn", () => {
    render(
      <GlobalContext>
        <Player />
      </GlobalContext>
    );

    const currentPlayer = screen.getByTestId("currentPlayer");

    expect(currentPlayer).toHaveTextContent("Player: X");
  });
});
