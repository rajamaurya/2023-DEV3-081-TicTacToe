import { render, screen } from "@testing-library/react";
import GameOver from "./GameOver";
import GlobalContext from "../Global/GlobalContext";

describe("Game Over", () => {
  test("show game over message", () => {
    render(
      <GlobalContext>
        <GameOver />
      </GlobalContext>
    );

    const gameOver = screen.getByText(/Game Over/i);

    expect(gameOver).toBeInTheDocument();
  });
});
