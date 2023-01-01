import { useContext, useEffect, useCallback } from "react";
import { TicTacToeContext } from "../../Logic/DataContext";
import { Labels } from "../../Logic/Constants";
import { useGameLogic, clearBoard } from "../../Hooks/GameLogic";
import "../../Styles/Modules/Button.css";

export function ResetBtn() {

  const { playerState, winnerState, winningLineState, movesState } = useContext(TicTacToeContext);

  const [player, setPlayer] = playerState;
  const [winner, setWinner] = winnerState;
  const [winLine, setWinLine] = winningLineState;  
  const [moves, setMoves] = movesState;

  const { isGameOverState, countMoves } = useGameLogic();
  const disableBtn = (countMoves() === 0);
  
  const resetGame = () => {
    if (isGameOverState() || window.confirm("Reset the game?")) {
      setPlayer(Labels.firstPlater);
      setWinner(Labels.noWinner);
      setWinLine([]);
      setMoves(clearBoard());
    }
  }

  return (
    <button
      className="buttonStyle"
      onClick={resetGame}
      disabled={disableBtn}
    >
      Reset
    </button>
  );
  
}
