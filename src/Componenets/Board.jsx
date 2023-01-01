import {Square} from './Square';
import { useState, useRef, useEffect } from 'react';
import {rowStyle, boardStyle, containerStyle, messageStyle, buttonStyle} from '../Styles/Styles'
import {wasSqPlayed, countMoves, checkGameDone} from '../Logic/Logic';

export function Board() {

  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState('None')
  const [moves, setMoves] = useState([null,null,null,null,null,null,null,null,null]);

  const resetGame = () => {
    if (winner !== 'None' || window.confirm("Reset the game?")) {
      setPlayer('X')
      setWinner('None')
      setMoves([null,null,null,null,null,null,null,null,null]);        
    }
  }

  console.log(moves);

  const players = ['X', 'O'];
  // const currentPlayer = () => players[moves.length % 2];

  const markSquare = (index) => {
    // console.log(index);
    if (winner !== 'None') {
      return console.warn('Game is done, restart to play again...');
    }
    if (wasSqPlayed(index, moves)) {
      return console.warn('cannot play the same sqr twice...');
    }
    moves[index] = player;
    setMoves(moves);
    setPlayer(players[countMoves(moves) % 2]);

    let result = checkGameDone(moves);
    if (result) {
      alert(result);
      setWinner(result);
    }
  }

  return (
    <div style={containerStyle} className="tttBoard">
      <div id="statusArea" className="status" style={messageStyle}>Current player: <span>{player}</span></div>
      <div id="winnerArea" className="winner" style={messageStyle}>Winner: <span>{winner}</span></div>
      <div style={boardStyle}>
      {
        [0,1,2].map(row => {
          return (
          <div className="board-row" style={rowStyle} key={`row-${row}`}>
            {
              [0,1,2].map(col => {
                const index = row * 3 + col;
                return (
                  <Square 
                    index={index} move={moves[index]}
                    markSelf={markSquare}
                    key={`sq-${index}`}/>
                );
              })
            }
          </div>
          )
        })
      }
        
      </div>
      <button style={buttonStyle} onClick={resetGame}>Reset</button>

    </div>
  );
}