import { winLines, emptySqr } from "./Constants";

const checkGameDone = (moves) => {
  for (const possibleWin of winLines) {
    const movesForLine = possibleWin.map(squareNum => moves[squareNum]);
    if (movesForLine.includes(null)) continue; // not all sq's in 'line' were played.
    if ( movesForLine[0] === movesForLine[1] &&
          movesForLine[1] === movesForLine[2]  ) { // all 3 spots are from the same player!
      return `Player ${movesForLine[0]} Wins!`;
    }
  }

  if (countMoves(moves) === moves.length) { // all spots were played, no remaining moves to do...
    return `Tie! - Game is over (=`;          
  }
}

const wasSqPlayed = (index, moves) => {
  return moves[index] !== null;
    // todo: consider making 'null' a const somewhere for maintainability
    //       (may be replaced with another 'default' / 'empty' value in future)
};

const countMoves = (moves) => {
  return moves.filter(sq => sq !== null).length
}

const clearBoard = () => {
  return new Array(9).fill(emptySqr);
}

export {checkGameDone, wasSqPlayed, countMoves, clearBoard};
