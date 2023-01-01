
// all possible win combinations (lines, rows, diag's)
const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const checkGameDone = (moves) => {
    for (const possibleWin of winLines) {
      const movesForLine = possibleWin.map(squareNum => moves[squareNum]);
      if (movesForLine.includes(null)) continue; // not all sq's in 'line' were played.
      if ( movesForLine[0] === movesForLine[1] &&
           movesForLine[1] === movesForLine[2]  ) { // all 3 spots are from the same player!
        return `Player ${movesForLine[0]} Wins!`;
      }  
    
      if (countMoves(moves) === moves.length) { // all spots were played, no remaining moves to do...
        return `Tie! - Game is over (=`;          
      }
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

export {checkGameDone, wasSqPlayed, countMoves};
