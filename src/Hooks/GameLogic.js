import { useContext } from "react";
import { TicTacToeContext } from "../Logic/DataContext";
import { winLines, emptySqr, Labels, boardDimention } from "../Logic/Constants";

export function useGameLogic() {

  const { playerState, winnerState, movesState } = useContext(TicTacToeContext);
  const [player, setPlayer] = playerState;
  const [winner, setWinner] = winnerState;
  const [moves, setMoves] = movesState;


  const checkGameDone = () => {
  
    for (const possibleWin of winLines)
    {
      const movesForLine = possibleWin.map(squareNum => moves[squareNum]);
  
      if (movesForLine.includes(emptySqr))
        continue;  // not all sq's in 'line' were played.
  
      if ( movesForLine[0] === movesForLine[1] && movesForLine[1] === movesForLine[2] )
        return `Player ${movesForLine[0]} Wins!`;  // all 3 spots are from the same player!
    }
  
    if (countMoves() === moves.length)
      return `Tie! - Game is over (=`;  // all spots were played, no remaining moves to do...
    
  }
  
  const wasSqPlayed = (index) => {
    return moves[index] !== emptySqr;
  };
  
  const countMoves = () => {
    if (!moves) return 0; // safe-guard
    return moves.filter(sq => sq !== emptySqr).length
  }
  
  const isGameOverState = () => {
    return (winner !== Labels.noWinner);
  }
  
  return { checkGameDone, isGameOverState, wasSqPlayed, countMoves };
}

const clearBoard = () => {
  const length = boardDimention * boardDimention;
  return new Array(length).fill(emptySqr);
}

export { clearBoard };
