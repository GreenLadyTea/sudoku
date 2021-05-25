import { COLUMNS, ENDGAME_TYPES, GridType, MAXIMUM_AMOUNT_OF_ERRORS, ROWS } from '../store';

function checkIfSudokuIsSolved(grid: GridType): boolean {
  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS; columnIndex++) {
      if (grid[rowIndex][columnIndex].value === 0) {
        return false;
      }
    }
  }
  return true;
}

export function selector(grid: GridType, errorCounter: number): number {
  if (errorCounter > MAXIMUM_AMOUNT_OF_ERRORS - 1) {
    return ENDGAME_TYPES.FAIL;
  } else if (checkIfSudokuIsSolved(grid)) {
    return ENDGAME_TYPES.WIN;
  } else {
    return ENDGAME_TYPES.GAME_IS_NOT_OVER;
  }
}
