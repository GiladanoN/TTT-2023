import { boardDimention } from '../../Logic/Constants';
import { Row } from './Row';
import '../../Styles/Modules/GameBoard.css';

export function Board() {

  const rowsArr = [...new Array(boardDimention).keys()];  // [0,1,2]

  return (
    <div className="tttBoard containerStyle">
      <div className={"boardStyle"}>
        {
          rowsArr.map(row => 
            <Row row={row} key={`row-${row}`} />
          )
        }
      </div>
    </div>
  );
}