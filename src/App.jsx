import { useState } from "react";
import Board from "./components/board/board";

import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [actualPlayer, setActualPlayer] = useState({
    name: "Player-1",
    symbol: "X",
  });

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const resetStates = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setActualPlayer({
      name: "Player-1",
      symbol: "X",
    });
  };
  const checkWinner = (board) => {
    for (const combination of WINNING_COMBINATIONS) {
      if (
        board[combination[0]] === board[combination[1]] &&
        board[combination[0]] === board[combination[2]] &&
        board[combination[0]] !== ""
      ) {
        return true;
      }
    }
    return false;
  };

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
      const isWinner = checkWinner(newBoard);
      if (isWinner) {
        setTimeout(() => {
          alert("There is a winner!");
          resetStates();
        }, 500);
      } else {
        tooglePlayer();
      }
    } else alert("Already clicked!");
  };

  return (
    <>
      <Board board={board} handleClick={handleClick}></Board>
    </>
  );
}

export default App;
