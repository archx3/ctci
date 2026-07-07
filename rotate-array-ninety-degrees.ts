function rotateArrayNinetyDegrees (arr: number[][]) {
  const ROWS_LENGTH = arr.length;
  const COLS_LENGTH = arr[0].length;

  console.table(arr)

  let result: number[][];
  result = new Array(ROWS_LENGTH).fill(0).map(() => new Array(COLS_LENGTH).fill(0));

  console.table(result);

  for (let row = 0; row < ROWS_LENGTH; row++) {
    for (let col = 0; col < COLS_LENGTH; col++) {
      const rowIndex = col;
      const colIndex =  ROWS_LENGTH - 1 - row;

      // console.log({
      //   rI : rowIndex,
      //   cI : colIndex
      // });

      result[rowIndex][colIndex] = arr[row][col];
    }
  }

  return result;
}

const TestArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotatedArray = rotateArrayNinetyDegrees(TestArray);

console.table(rotatedArray);
