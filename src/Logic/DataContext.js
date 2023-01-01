import { createContext, useState } from 'react';
import { Labels } from '../Logic/Constants';
import { clearBoard } from '../Hooks/GameLogic';

export const TicTacToeContext = createContext();
const Provider = TicTacToeContext.Provider;

export const TicTacToeProvider = props => {

  const playerState = useState(Labels.firstPlater);
  const winnerState = useState(Labels.noWinner);
  const movesState = useState(clearBoard());

  const state = {
    playerState,
    winnerState,
    movesState,
  };

  return <Provider value={state}>{props.children}</Provider>;
};