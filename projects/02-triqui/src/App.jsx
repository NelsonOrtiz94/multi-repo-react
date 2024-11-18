import { useState } from "react";
import confetti from "canvas-confetti";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateboard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateboard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null = no hay ganador, false = empate

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // Si no hay ganador
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    };

    const checkEndGame = (newBoard) => {
      return newBoard.every((square) => square !== null);
    };

  const updateboard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
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
      
      {
        winner !== null && (
          <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false
                    ? "¡Empate!"
                    : 'Ganó ' + winner
                  }
                </h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
          </section>
        )
      }

      {winner && <p>El ganador es: {winner}</p>}
    </main>
  );
}

export default App;
