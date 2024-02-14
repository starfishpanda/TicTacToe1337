import { useState } from "react";
import Board from './Board';

type PlayerTurn = "X" | "O";

interface TicTacToeProps {
  tiles: Array<PlayerTurn>;
  className?: string;
  value: number;
  playerTurn: string;
}

function TicTacToe() {
  // Initialize the state of tiles to an array of 9 null values
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("X");

  const handleTileClick = (index: number) => {
    if (tiles[index] !== null) return;
    // Make a copy of the tiles array that will be updated to set the new state
    const newTiles: Array<null | "X" | "O"> = [...tiles]
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === "X"){
      setPlayerTurn("O")
    }
    else {
      setPlayerTurn("X")
    }
  }

  return (
    <div>
    <h1>Tic Tac Toe</h1>
    <Board playerTurn = { playerTurn } tiles={ tiles } onClick = { handleTileClick }/>
    </div>
  )
}

export default TicTacToe;