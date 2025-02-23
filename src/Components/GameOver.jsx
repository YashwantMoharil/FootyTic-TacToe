import React from "react";
import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.playerXWins:
      return <div className="game-over">Player X Wins!</div>;
    case GameState.playerOWins:
      return <div className="game-over">Player O Wins!</div>;
    case GameState.tie:
      return <div className="game-over">It's a tie!</div>;
    case GameState.start:
      return <div className="game-over">Let' Play!</div>;
    default:
      return <div className="game-over">Who wins? Place your bets!</div>;
  }
}

export default GameOver;
