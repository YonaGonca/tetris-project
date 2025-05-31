import type { Board as BoardType } from './game/types';
import type { Tetromino } from './game/types';
import { Board } from './components/Board';
import { useState } from 'react';
import { useEffect } from 'react';
//import { tetrominoes } from './game/tetrominoes';

const initialBoard: BoardType = Array.from({ length: 20 }, () => Array(10).fill(0));

const initialTetromino: Tetromino = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [tetromino, setTetromino] = useState(initialTetromino);

  // Add the tetromino to the board at a specific position
  const addTetrominoToBoard = (tetromino: Tetromino, position: { x: number; y: number }) => {
    const newBoard = board.map(row => [...row]);
    for (let row = 0; row < tetromino.length; row++) {
      for (let col = 0; col < tetromino[row].length; col++) {
        if (tetromino[row][col] > 0) {
          const boardRow = position.y + row;
          const boardCol = position.x + col;
          if (boardRow >= 0 && boardRow < newBoard.length && boardCol >= 0 && boardCol < newBoard[0].length) {
            newBoard[boardRow][boardCol] = tetromino[row][col];
          }
        }
      }
    }
    setBoard(newBoard);
  };
  // Example usage of adding the tetromino to the board
  useEffect(() => {
    if ( tetromino.length === 2) {
      addTetrominoToBoard(tetromino, { x: 4, y: 0 });
    }else {
      addTetrominoToBoard(tetromino, { x: 3, y: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tetromino]);
    

  return (
    <>
    <main className="bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold w-full text-center mt-2">Tetris</h1>
      <section>
        <Board board={board} />
      </section>
    </main>
    </>
  )
}

export default App
