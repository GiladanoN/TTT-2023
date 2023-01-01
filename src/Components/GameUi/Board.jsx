import { boardStyle, containerStyle } from '../../Styles/Styles'
import { Row } from './Row';

export function Board() {

  return (
    <div style={containerStyle} className="tttBoard">
      <div style={boardStyle}>
        {
          [0,1,2].map(row => 
            <Row row={row} key={`row-${row}`} />
          )
        }
      </div>
    </div>
  );
}