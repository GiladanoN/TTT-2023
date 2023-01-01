import { TicTacToeProvider } from '../../Logic/DataContext';
import { GameState } from '../Displays/GameState';
import { Board } from '../GameUi/Board';
import { ResetBtn } from '../Controls/ResetBtn';

export function TicTacToe() {

  return (
    <div className="ttt">
      <h2> TicTacToe </h2>
      <div className="ttt-board">
        <TicTacToeProvider {...{}}>
          <GameState />
          <Board />
          <ResetBtn />
        </TicTacToeProvider>
      </div>
    </div>
  );
}