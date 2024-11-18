import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";

import { TURNS } from "./constants";

import { checkWinnerFrom, checkEndGame } from "./logic/board";

import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null = no hay ganador, false = empate


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };


  const updateboard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti(); //Lanza los confettis
      setWinner(newWinner); //Actualiza el estado del ganador
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //Empate
    }
  };

  return (
    <main className="board">
      <h1>Triqui ó Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {board.map((_, index) => {
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
