import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import GlobalContext from "./components/Global/GlobalContext";

const appSetUp = () => {
  render(
    <GlobalContext>
      <App />
    </GlobalContext>
  );
};

const fireEventByPosition = (cells, positions) => {
  positions.forEach((position) => {
    fireEvent.click(cells[position]);
  });
};

describe("tic tac toe game", () => {
  test("display game title", () => {
    appSetUp();

    const header = screen.getByText(/Tic Tac Toe/i);

    expect(header).toBeInTheDocument();
  });

  test("declare a player winner if all the first row boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [0, 4, 1, 3, 2]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the second row boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [3, 2, 4, 6, 5]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the third row boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [6, 2, 7, 5, 8]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the first column boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [0, 2, 3, 5, 6]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the second column boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [1, 2, 4, 5, 7]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the third column boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [2, 3, 5, 6, 8]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the left to right diagonal boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [0, 3, 4, 6, 8]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the right to left diagonal boxes is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [2, 1, 4, 5, 6]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player 0 winner if all the boxes in a row is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [3, 0, 4, 1, 6, 2]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player 0");
  });

  test("declare a player 0 winner if all the boxes in a column is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [3, 1, 2, 4, 6, 7]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player 0");
  });

  test("declare a player 0 winner if all the boxes in a diagonal is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [3, 2, 1, 4, 7, 6]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player 0");
  });

  test("declare the game as draw if neither of the players won", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [0, 1, 2, 3, 4, 6, 7, 8, 5]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Draw");
  });

  test("hide the current player when we have the winner or the game is over", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [3, 2, 1, 4, 7, 6]);

    const currentPlayer = screen.queryByText("Player:");
    expect(currentPlayer).toBeNull();
  });

  test("reset the game on reset game box click", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEventByPosition(cells, [3, 2, 1, 4, 7, 6]);

    const resetButton = screen.getByTestId("reset-btn");
    fireEvent.click(resetButton);

    const currentPlayer = screen.queryByText("Player:");
    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("");
    expect(currentPlayer).toHaveTextContent("Player: X");
    expect(resetButton).not.toBeInTheDocument();
  });
});
