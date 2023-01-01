import { useContext } from "react";
import { TicTacToeContext } from "../Logic/DataContext";
import { players } from "../Logic/Constants";
import { useGameLogic } from "../Hooks/GameLogic";
import { showConfetti } from "../Components/Extra/showConfetti";

export const useClickLogic = () => {

  const { playerState, winnerState, movesState } = useContext(TicTacToeContext);
  const [player, setPlayer] = playerState;
  const [winner, setWinner] = winnerState;
  const [moves, setMoves] = movesState;

  const { wasSqPlayed, countMoves, checkGameDone, isGameOverState } = useGameLogic();

  const markSquare = (index) => {
    if (isGameOverState()) {
      // todo: replace with onscreen msg
      return console.warn('Game is done, restart to play again...');
    }
    if (wasSqPlayed(index)) {
      // todo: replace with onscreen msg
      return console.warn('cannot play the same sqr twice...');
    }
  
    // mark sq (current player's move) & udpate next player
    moves[index] = player;
    setMoves(moves);
    setPlayer(players[countMoves() % 2]);
  
    // verify & display if game is done (per normal rules)
    let result = checkGameDone();
    if (result) {
      // alert(result);
      console.log(result);
      setWinner(result);
      showConfetti();
    }
  };

  return {markSquare};

}
