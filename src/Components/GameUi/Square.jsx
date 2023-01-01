
import { useContext } from 'react';
import { TicTacToeContext } from '../../Logic/DataContext';
import { useClickLogic } from '../../Hooks/ClickLogic';
import '../../Styles/Modules/Square.css'

export function Square({index}) {

  const { movesState } = useContext(TicTacToeContext);
  const [moves, setMoves] = movesState;

  const curSqrMove = moves[index];
  const { markSquare: markSelf } = useClickLogic();

  return (
    <div
      className="square boxStyle"
      onClick={() => markSelf(index)}
    >
      {curSqrMove && (<span>{curSqrMove}</span>)}
    </div>
  );
}
