import type { Board as BoardType } from '../game/types';
import { Cell } from './Cell';


export const Board = ( { board } : { board : BoardType }) => {
  return (
    <div className="grid grid-cols-10 w-60 h-120 mx-auto mt-5">
      {board.map((row, rowIndex) => (
        row.map((cell, cellIndex) => (
          <Cell key={`${rowIndex}-${cellIndex}`} value={cell} />
        ))
      ))}
    </div>
  );
}


