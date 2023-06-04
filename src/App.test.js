import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import GlobalContext from "./components/Global/GlobalContext";

describe("tic tac toe game", () => {
  test("display game title", () => {
    render(
      <GlobalContext>
        <App />
      </GlobalContext>
    );

    const header = screen.getByText(/Tic Tac Toe/i);

    expect(header).toBeInTheDocument();
  });

  test("declare a player winner if all the first row box is marked in his name", () => {
    render(
      <GlobalContext>
        <App />
      </GlobalContext>
    );

    const cells = screen.getAllByRole("grid");
    fireEvent.click(cells[0]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[2]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });
});
