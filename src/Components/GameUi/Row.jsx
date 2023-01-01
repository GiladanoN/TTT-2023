import { rowStyle } from "../../Styles/Styles";
import { Square } from "../GameUi/Square";
import { boardDimention } from "../../Logic/Constants";

export function Row(props) {

  const { row } = props;
  const offset = row * boardDimention;

  const arr = [...new Array(boardDimention).keys()];  // [0,1,2]

  return (
    <div className="board-row" style={rowStyle} key={`row-${row}`}>
      {   arr
          .map(col => offset + col)
          .map(index =>
            <Square index={index} key={`sq-${index}`}/> )
      }
    </div>
  );
}