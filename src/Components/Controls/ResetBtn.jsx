import { useContext } from "react";
import { TicTacToeContext } from "../../Logic/DataContext";
import { buttonStyle } from "../../Styles/Styles";
import { Labels } from "../../Logic/Constants";
import { useGameLogic, clearBoard } from "../../Hooks/GameLogic";

export function ResetBtn() {

  const { playerState, winnerState, movesState } = useContext(TicTacToeContext);

  const [player, setPlayer] = playerState;
  const [winner, setWinner] = winnerState;
  const [moves, setMoves] = movesState;

  const { isGameOverState } = useGameLogic();

  const resetGame = () => {
    if (isGameOverState() || window.confirm("Reset the game?")) {
      setPlayer(Labels.firstPlater);
      setWinner(Labels.noWinner);
      setMoves(clearBoard());
    }
  }

  return (
    <button style={buttonStyle} onClick={resetGame}>Reset</button>
  );
  
}
