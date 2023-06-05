import { render, screen } from "@testing-library/react";
import ResetButton from "./ResetButton";
import GlobalContext from "../Global/GlobalContext";

describe("Reset Button", () => {
  test("show reset button", () => {
    render(
      <GlobalContext>
        <ResetButton />
      </GlobalContext>
    );

    const resetButton = screen.getByTestId("reset-btn");

    expect(resetButton).toBeInTheDocument();
  });
});
