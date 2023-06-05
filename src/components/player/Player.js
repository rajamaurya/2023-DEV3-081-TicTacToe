import React, { useContext } from "react";
import "./Player.css";
import { GlobalContextProvider } from "../Global/GlobalContext";
const Player = () => {
  const { currentPlayer } = useContext(GlobalContextProvider);

  return (
    <div data-testid="currentPlayer" className="player">
      Player: <span>{currentPlayer}</span>
    </div>
  );
};

export default Player;
