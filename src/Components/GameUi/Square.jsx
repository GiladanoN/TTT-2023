
import { useContext } from 'react';
import { TicTacToeContext } from '../../Logic/DataContext';
import { boxStyle } from '../../Styles/Styles'
import { useClickLogic } from '../../Hooks/ClickLogic';

export function Square({index}) {

  const { movesState } = useContext(TicTacToeContext);
  const [moves, setMoves] = movesState;

  const curSqrMove = moves[index];
  const { markSquare: markSelf } = useClickLogic();

  return (
    <div
      className="square"
      style={boxStyle}
      onClick={() => markSelf(index)}
    >
      {(curSqrMove) && `${curSqrMove}`}
    </div>
  );
}
