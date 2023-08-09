/*

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

    function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..2,147,483,647].

*/

function binaryGap(binarySequence) {
  const SIZE = binarySequence.length;

  let longestGap = 0;
  let gapLength = 0;
  let i = -1;

  let firstOneFound = false;

  while (++i < SIZE) {
    let previousIndex = i - 1
    if (binarySequence[i] === "1") {
      if (!firstOneFound) {
        firstOneFound = true;
      }

      if (previousIndex !== 0 && binarySequence[previousIndex] === "0") {
        if (gapLength > longestGap) {
          longestGap = gapLength;
        }
        gapLength = 0; // the great reset, lol
      }

      continue;
    }

    if (binarySequence[i] === "0" && i !== 0 && firstOneFound) {
      gapLength += 1;
    }
  }


  return longestGap;
}

function getBinarySequence(N) {
  return (N >>> 0).toString(2);
}

function solution(N) {
  // Implement your solution here
 return binaryGap(getBinarySequence(N));
}

// console.log(binaryGap("10000010001000000001"));
// console.log(binaryGap("1000001000100000000"));
// console.log(binaryGap("000001000100000000"));
// console.log(solution(1041));


function binaryGapWithSlidingWindow (binarySequence) {
  const SIZE = binarySequence.length;

  let longestGap = 0;
  let gapLength = 0;
  let i = -1;

  let left = 0;
  let right = 1;
  const gaps = [];

  while (left < SIZE) {
    console.log("left: ", left, "right: ", right, "gapLength: ", gapLength, "longestGap: ", longestGap)

    if (binarySequence[right] === "0") {
      if ( gapLength < 1) {
        // left = right;
      } else {
        // gapLength += 1;
        gapLength = (right - left) + 1;
      }
    }

    if (binarySequence[right] === "1") {
      if (binarySequence[right - 1] === "0") {
        if (gapLength > longestGap) {
          longestGap = gapLength;
          left = right;
        }

        gaps.push(gapLength);
        gapLength = 0;
      } else {
      }
    }

    right += 1;

    if (right === SIZE) {
      left = right;
    }
  }
  return longestGap;
}


console.log(binaryGapWithSlidingWindow("10000010001000000001"));
