import {TicTacToe} from './Components/Main/TicTacToe';
import { TicTacToeProvider } from './Logic/DataContext';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <TicTacToeProvider {...{}}>
        <TicTacToe />
      </TicTacToeProvider>
    </div>
  );
}

export default App;
