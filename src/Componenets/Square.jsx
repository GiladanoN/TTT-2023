
const boxStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

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
