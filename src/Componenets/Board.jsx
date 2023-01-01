import {Square} from './Square';
import { useState } from 'react';
import {rowStyle, boardStyle, containerStyle, messageStyle, buttonStyle}
  from '../Styles/Styles'
import {wasSqPlayed, countMoves, checkGameDone, clearBoard} from '../Logic/Logic';
import {Labels, players} from '../Logic/Constants';

export function Board() {

  const [player, setPlayer] = useState(Labels.firstPlater)
  const [winner, setWinner] = useState(Labels.noWinner)
  const [moves, setMoves] = useState(clearBoard());

  const resetGame = () => {
    if ( winner !== Labels.noWinner ||  // game already done, or -
         window.confirm("Reset the game?") ) // user comfimation for reset
    {
      setPlayer(Labels.firstPlater);
      setWinner(Labels.noWinner);
      setMoves(clearBoard());
    }
  }


  const markSquare = (index) => {
    if (winner !== Labels.noWinner) {
      // todo: replace with onscreen msg
      return console.warn('Game is done, restart to play again...');
    }
    if (wasSqPlayed(index, moves)) {
      // todo: replace with onscreen msg
      return console.warn('cannot play the same sqr twice...');
    }

    // mark sq (current player's move) & udpate next player
    moves[index] = player;
    setMoves(moves);
    setPlayer(players[countMoves(moves) % 2]);

    // verify & display if game is done (per normal rules)
    let result = checkGameDone(moves);
    if (result) {
      alert(result);
      setWinner(result);
    }
  }

  // todo: consider "row" component instead of nested loops (many indents...)

  return (
    <div style={containerStyle} className="tttBoard">
      <div id="statusArea" className="status" style={messageStyle}>
        Current player: <span>{player}</span>
      </div>
      <div id="winnerArea" className="winner" style={messageStyle}>
        Winner: <span>{winner}</span>
      </div>
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