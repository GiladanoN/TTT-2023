
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
      if (movesForLine.includes(null)) continue;
      if ( movesForLine[0] === movesForLine[1] &&
           movesForLine[1] === movesForLine[2]  ) {
        return `Player ${movesForLine[0]} Wins!`;
        // winner = movesForLine[0];
        // updateWinner(winner);
        // winEffect(line);
        // return winner;
      }  
    
      if (countMoves(moves) === moves.length) {
        return `Tie! - Game is over (=`;          
      }
  }
}

const wasSqPlayed = (index, moves) => {
  return moves[index] !== null;
};

const countMoves = (moves) => {
  return moves.filter(sq => sq !== null).length
}

export {checkGameDone, wasSqPlayed, countMoves}
