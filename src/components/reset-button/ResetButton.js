import React from "react";
import "./ResetButton.css";

const ResetButton = (props) => {
  return (
    <>
      <button
        data-testid="reset-btn"
        className="reset-btn"
        onClick={() => props.btnController()}
      >
        Reset Game
      </button>
    </>
  );
};
export default ResetButton;
