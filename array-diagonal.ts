

function printArrayDiagonal(arr: Array<Array<number>>) {
  const ROWS_LENGTH = arr.length;

  let result = 0;
  for (let row = 0; row < ROWS_LENGTH; row++) {
    console.log(arr[row][row]);
    result += arr[row][row];
  }
  console.log(`Sum of diagonal elements: ${result}`);
}

const TestArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printArrayDiagonal(TestArray);
