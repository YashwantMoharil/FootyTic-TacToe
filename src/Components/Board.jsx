import React  from 'react';
import Tiles from './Tiles';
import StrikeThrough from './StrikeThrough';
import Constraints from './Constraints';

function Board({player, tiles, onTileClick, strike}) {
    return (  
        <div className='board'>
            <Constraints className = 'right-border upper-border left-border border-bottom' message = 'Icon'/>   
            <Constraints className = 'right-border upper-border  border-bottom' message = ' P/M/L/C'/>   
            <Constraints className = 'right-border upper-border  border-bottom' message = ' P/M/L/C'/>   
            <Constraints className = 'right-border upper-border  border-bottom' message = ' P/M/L/C'/>   
            <Constraints className = 'right-border left-border  border-bottom' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(0)} value = {tiles[0]} className = 'right-border  border-bottom' />
            <Tiles player = {player} onClick = {() => onTileClick(1)} value = {tiles[1]} className = 'right-border  border-bottom' />
            <Tiles player = {player} onClick = {() => onTileClick(2)} value = {tiles[2]} className = 'right-border border-bottom' />
            <Constraints className = 'right-border left-border  border-bottom' message = ' P/M/L/C'/>   
            <Tiles player = {player} onClick = {() => onTileClick(3)} value = {tiles[3]} className = 'right-border  border-bottom' />
            <Tiles player = {player} onClick = {() => onTileClick(4)} value = {tiles[4]} className = 'right-border border-bottom' />
            <Tiles player = {player} onClick = {() => onTileClick(5)} value = {tiles[5]} className = 'right-border  border-bottom' />
            <Constraints className = 'right-border left-border  border-bottom' message = ' P/M/L/C'/>          
            <Tiles player = {player} onClick = {() => onTileClick(6)} value = {tiles[6]} className = 'right-border  border-bottom' />
            <Tiles player = {player} onClick = {() => onTileClick(7)} value = {tiles[7]} className = 'right-border border-bottom' />
            <Tiles player = {player} onClick = {() => onTileClick(8)} value = {tiles[8]} className = 'right-border border-bottom' />
            <StrikeThrough strike = {strike}/>
            </div>
    );
}

export default Board;