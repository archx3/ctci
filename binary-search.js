

/*function binarySearch (array, target) {
  const SIZE = array.length;

  let middle = Math.floor(SIZE / 2);

  let start;
  let end;



  if (target < array[middle]) {
    start = 0;
    end = middle;
  } else {
    start = middle + 1;
    end = SIZE;
  }

  while (start < end) {
    console.log({start, end})
    if (target === array[middle]) {
      return middle;
    }
    if (target === array[start]) {
      return start;
    }
    if (target === array[end]) {
      return end;
    }

    middle =  Math.floor(end / 2)

    if (target < array[middle]) {
      start =
      end = middle;
    } else {
      start = middle + 1;
      end = SIZE;
    }
  }

  return -1;
}*/




/**
 * Binary search
 * @param array {Array} - sorted array
 * @param target {number}
 * @returns {number}
 */
function binarySearch (array, target) {
  /*region guard clauses*/
  if (!Array.isArray(array)) {
    throw new Error("Argument: array must be of type Array");
  }

  if (array.length === 0) {
    return -1;
  }

  if (typeof target !== "number") {
    throw new Error("Argument: target must be of type number");
  }

  if (target < array[0] || target > array[array.length - 1]) {
    return -1;
  }
  /*endregion*/

  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor(end / 2);

  while ( start <= end) {
    if (array[middle] === target) {
      return middle;
    }

    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9,], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

function binarySearch2 (array, target) {
  let start = 0;
  let end = array.length - 1;

  while(start <= end) {
    let middle = Math.floor((start + end) / 2);

    if(array[middle] === target) {
      // found the target
      return middle;
    }
    else if(array[middle] < target) {
      // continue search to the end
      start = middle + 1;
    }
    else {
      // search to the start
      end = middle - 1;
    }
  }

  // target not found
  return -1;
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7, 8, 9,], 9));
console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
