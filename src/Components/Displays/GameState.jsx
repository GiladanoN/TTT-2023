
import { useContext } from 'react';
import { TicTacToeContext } from '../../Logic/DataContext';
import { messageStyle } from '../../Styles/Styles';

export function GameState() {

  const { playerState, winnerState, movesState } = useContext(TicTacToeContext);
  const [player] = playerState;
  const [winner] = winnerState;

  return (
    <>
      <div id="statusArea" className="status" style={messageStyle}>
        Current player: <span>{player}</span>
      </div>
      <div id="winnerArea" className="winner" style={messageStyle}>
        Winner: <span>{winner}</span>
      </div>
    </>
  );
}