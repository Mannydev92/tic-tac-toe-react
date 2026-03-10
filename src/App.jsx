import { useState } from "react";
import Board from "./components/board/board";

import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [actualPlayer, setActualPlayer] = useState({
    name: "Player-1",
    symbol: "X",
  });

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {};
  const tooglePlayer = () => {
    setActualPlayer(
      actualPlayer.symbol === "X"
        ? { name: "Player-2", symbol: "O" }
        : { name: "Player-1", symbol: "X" },
    );
  };
  const handleClick = (index) => {
    if (board[index] === "") {
      const newBoard = [...board];
      newBoard[index] = actualPlayer.symbol;
      setBoard(newBoard);
      tooglePlayer();
    } else alert("Already clicked!");
  };

  return (
    <>
      <Board board={board} handleClick={handleClick}></Board>
    </>
  );
}

export default App;
