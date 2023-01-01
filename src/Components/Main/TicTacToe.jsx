import { TicTacToeContext } from '../../Logic/DataContext';
import { GameState } from '../Displays/GameState';
import { Board } from '../GameUi/Board';
import { ResetBtn } from '../Controls/ResetBtn';
import { useGameLogic } from '../../Hooks/GameLogic';
import { useEffect, useContext } from 'react';

export function TicTacToe() {

  const { playerState, winnerState, movesState } = useContext(TicTacToeContext);
  const [winner, setWinner] = winnerState;

  const { isGameOverState } = useGameLogic();
  const gameOverStyle = isGameOverState() ? " game-over" : "";
  const gameTieStyle = `${winner}`.toLowerCase().includes("tie") ? " tie" : "";

  const conditionalStyles = gameOverStyle + gameTieStyle;

  return (
    <div className="ttt">
      <h2> TicTacToe </h2>
      <div className={"ttt-board" + conditionalStyles}>
        <GameState />
        <Board />
        <ResetBtn />
      </div>
    </div>
  );
}
