/**
 *
 * @param array {Array<Array>}
 */
function spiralTraverse (array) {
  if (array.length < 1) {
    return;
  }

  let height = array.length;
  let width = array[0].length;

  let counter = 1, x = 1, y = 0, max = width;
  let count = height * width;

  let traversingWidth = true;

  console.log(array[0][0]);
  while (counter <= count) {

    if (traversingWidth) {
      while (x < max) {
        let value = array[y][x];
        console.log(value);

        if (x === max - 1) {
          traversingWidth = false;

          // if (counter % 2 === 0) {
          max = max - 1;
          // }

          y++;
          break;
        }

        x++;
        counter++
      }
    } else {
      while (y < max) {
        let value = array[y][x];
        console.log(value);

        if (y === max - 1) {
          traversingWidth = true;
          // if (counter % 2 === 0) {
          max = max - 1;
          // }
          x++;
          break;
        }

        y++;
        counter++
      }
    }
    counter++
  }
}

function spiralTraverse2 (array) {
  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
      console.log(array[startRow][col])
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
      console.log(array[row][endCol])
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
      console.log(array[endRow][col])
    }

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
      console.log(array[row][startCol])
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}



const array = [
  [1,   2,  3,  4,  5],
  [6,   7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

// spiralTraverse(array);
spiralTraverse2(array);
