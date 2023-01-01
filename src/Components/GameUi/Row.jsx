import { Square } from "../GameUi/Square";
import { boardDimention } from "../../Logic/Constants";

export function Row(props) {

  const { row } = props;
  const offset = row * boardDimention;

  const columnsArr = [...new Array(boardDimention).keys()];  // [0,1,2]

  return (
    <div className="board-row" style={{'display': 'flex'}} key={`row-${row}`}>
      {  columnsArr
          .map(col => offset + col)
          .map(index =>
            <Square index={index} key={`sq-${index}`}/> )
      }
    </div>
  );
}