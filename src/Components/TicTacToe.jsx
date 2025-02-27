import React, { useEffect } from "react";
import { useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import Mines from "./Mines";

function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [tiles, setTiles] = useState(Array(64).fill(null));
  const [mines, setMines] = useState(Array(64).fill(null));
  const [mineCount, setMineCount] = useState(5);
  const [strike, setStrike] = useState(null);
  const [gameState, setGameState] = useState(GameState.mineCreation);

  function fillMines() {
    if (gameState !== GameState.mineCreation) return;
    let newGrid = Mines(mineCount);
    setMines(newGrid);
    //console.log(newGrid);
    setGameState(GameState.start);
  }

  useEffect(() => {
    fillMines(mines, setMines);
  }, [mines]);

  const handleTileclick = (index) => {
    if (gameState !== GameState.start && gameState !== GameState.inProgress)
      return;
    setGameState(GameState.inProgress);
    if (tiles[index] !== null) return;
    const newTiles = [...tiles];
    newTiles[index] = mines[index];
    setTiles(newTiles);
    
    if(newTiles[index] === -1){
      console.log(mineCount);
      const newMineCount = mineCount - 1;
      setMineCount(newMineCount);
      if(newMineCount === 0){
        setGameState(GameState.gameover);
      }
    }
    console.log(index);
  };

  const handleReset = () => {
    setTiles(Array(64).fill(null));
    setPlayer("X");
    setGameState(GameState.start);
    setStrike(null);
  };

  function checkWinner() {
    const isBoardFull = !tiles.includes(null);
    if (isBoardFull) {
      setGameState(GameState.tie);
    }
  }

  useEffect(() => {
    checkWinner(tiles, setStrike);
  }, [tiles]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        player={player}
        tiles={tiles}
        onTileClick={handleTileclick}
        strike={strike}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
}

export default TicTacToe;
