
import { useContext } from 'react';
import { TicTacToeContext } from '../../Logic/DataContext';
import { useClickLogic } from '../../Hooks/ClickLogic';
import '../../Styles/Modules/Square.css'

export function Square({index}) {

  const { movesState, winningLineState } = useContext(TicTacToeContext);
  const [moves, setMoves] = movesState;
  const [winLine, setWinLine] = winningLineState;

  const curSqrMove = moves[index];
  const { markSquare: markSelf } = useClickLogic();

  const winSqrStyle = winLine.includes(index) ? " winning" : "";

  return (
    <div
      className={"square boxStyle" + winSqrStyle }
      onClick={() => markSelf(index)}
    >
      {curSqrMove && (<span>{curSqrMove}</span>)}
    </div>
  );
}
