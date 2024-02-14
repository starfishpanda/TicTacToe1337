import Tile from "./Tile"
import Strike from "./Strike"

function Board({ tiles, onClick, playerTurn }) {
  return (
    <div className="board">
      {tiles.map((tile: string, index: number) => {
        let className = ''
        if (index % 3 !== 2) className += 'right-border';
        if (index < 6) className += ' bottom-border';
        return (
          <Tile 
          key = {index}
          playerTurn = {playerTurn}
          onClick = {() => {onClick(index)}}
          value = { tile }
          className = {className}
          />
        );
      })}
    </div>
  )
}

export default Board;