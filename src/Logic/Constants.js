
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

const boardDimention = 3;

const players = ['X', 'O'];

const emptySqr = null;
const Labels = {
  noWinner: 'None',
  firstPlater: players[0],
};

export {winLines, players, emptySqr, Labels, boardDimention};
