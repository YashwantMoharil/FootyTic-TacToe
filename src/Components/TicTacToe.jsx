import React, {useEffect }  from 'react';
import { useState } from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './Reset';
import gameover from '../Assests/Sounds/go.wav';
import gamestart from '../Assests/Sounds/start.mp3';

function TicTacToe(){
  const [player, setPlayer] = useState('X');
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [strike, setStrike] = useState(null);
  const [gameState, setGameState] = useState(GameState.start);

  const over = new Audio(gameover);
  over.volume = 0.5;
  const start = new Audio(gamestart);
  start.volume = 0.2;


  const WinningCombinations = [
    {combo: [0, 1, 2], strike: "strike-row-1"},
    {combo: [3, 4, 5], strike: 'strike-row-2'},  
    {combo: [6, 7, 8], strike: 'strike-row-3'},
    {combo: [0, 3, 6], strike: 'strike-column-1'},
    {combo: [1, 4, 7], strike: 'strike-column-2'},
    {combo: [2, 5, 8], strike: 'strike-column-3'},
    {combo: [0, 4, 8], strike: 'strike-diagonal-1'},
    {combo: [2, 4, 6], strike: 'strike-diagonal-2'}
  ]
  const handleTileclick = (index) => {
    if(gameState !== GameState.start && gameState !== GameState.inProgress) return;
    setGameState(GameState.inProgress);
    if(tiles[index] !== null) return;
    const newTiles = [...tiles];
    newTiles[index] = player
    setTiles(newTiles);
    setPlayer(player === 'X' ? 'O' : 'X');
    
    //console.log(index);
  }

  const handleReset = () => {
      setTiles(Array(9).fill(null));
      setPlayer('X');
      setGameState(GameState.start);
      setStrike(null);
  }

  function checkWinner() {
    for (const {combo, strike} of WinningCombinations) { // Use 'combo' instead of 'combination'
      let [a, b, c] = combo;
      if(tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setStrike(strike);
        if(tiles[a] === 'X') {
          setGameState(GameState.playerXWins);
        } else {
          setGameState(GameState.playerOWins);
        }
        return tiles[a];
      }
    }

    const isBoardFull = !tiles.includes(null);
    if(isBoardFull) {
      setGameState(GameState.tie);  
    }
}
  useEffect(() => {checkWinner(tiles, setStrike)}, [tiles]);

  useEffect(() => {
    if(gameState === GameState.playerXWins || gameState === GameState.playerOWins || gameState === GameState.tie) {
      over.play();
    } else if(gameState === GameState.start) {
      start.play();
    }
  }, [gameState]);

  return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Board player = {player} tiles = {tiles} onTileClick = {handleTileclick} strike = {strike}/>
        <GameOver gameState = {gameState} />
        <Reset  gameState = {gameState} onReset = {handleReset}/>
    </div>
  );
}

export default TicTacToe;
