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

describe("tic tac toe game", () => {
  test("display game title", () => {
    appSetUp();

    const header = screen.getByText(/Tic Tac Toe/i);

    expect(header).toBeInTheDocument();
  });

  test("declare a player winner if all the first row box is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEvent.click(cells[0]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[2]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });

  test("declare a player winner if all the second row box is marked in his name", () => {
    appSetUp();

    const cells = screen.getAllByRole("grid");
    fireEvent.click(cells[3]);
    fireEvent.click(cells[2]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[5]);

    const status = screen.getByTestId("status");
    expect(status).toHaveTextContent("Winner: Player X");
  });
});
