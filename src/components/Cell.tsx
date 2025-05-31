//Cell component
import type { CellValue }  from "../game/types";

export const Cell = ({ value }: { value: CellValue }) => {
  // Determine the background color based on the cell value
    let bgColor = "bg-gray-800"; // Default color for empty cells
    switch (value) {
        case 1:
            bgColor = "bg-blue-500"; // Color for Tetromino I
            break;
        case 2:
            bgColor = "bg-yellow-500"; // Color for Tetromino O
            break;
        case 3:
            bgColor = "bg-purple-500"; // Color for Tetromino T
            break;
        case 4:
            bgColor = "bg-blue-700"; // Color for Tetromino J
            break;
        case 5:
            bgColor = "bg-orange-500"; // Color for Tetromino L
            break;
        case 6:
            bgColor = "bg-green-500"; // Color for Tetromino S
            break;
        case 7:
            bgColor = "bg-red-500"; // Color for Tetromino Z
            break;
        }
  
  return (
    <div className={`w-6 h-6 ${bgColor} border border-gray-600`}/>
  );
};