
import {boxStyle} from '../Styles/Styles'

export function Square({index, move, markSelf}) {
    return (
      <div
        className="square"
        style={boxStyle}
        onClick={() => markSelf(index)}
      >
        {(move) && `${move}`}
      </div>
    );
  }
