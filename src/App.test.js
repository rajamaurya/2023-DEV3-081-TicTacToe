import { render, screen } from "@testing-library/react";
import App from "./App";

test("display game title", () => {
  render(<App />);
  const header = screen.getByText(/Tic Tac Toe/i);
  expect(header).toBeInTheDocument();
});
