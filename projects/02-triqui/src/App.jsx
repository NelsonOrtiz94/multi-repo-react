import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";

import { TURNS } from "./constants";

import { checkWinnerFrom, checkEndGame } from "./logic/board";

import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    try {
      const parsedBoard = JSON.parse(boardFromStorage);
      if (Array.isArray(parsedBoard) && parsedBoard.length === 9) {
        return parsedBoard;
      }
    } catch (error) {
      console.warn("Error parsing board from localStorage:", error);
    }
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); // null = no hay ganador, false = empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateboard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Triqui ó Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {Array.isArray(board) &&
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateboard={updateboard}>
                {board[index]}
              </Square>
            );
          })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
