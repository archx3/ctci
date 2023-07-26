/*
A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if left rotations are performed on array , then the array would become

. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array
of integers and a number, , perform

left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

    int a[n]: the array to rotate
    int d: the number of rotations

Returns

    int a'[n]: the rotated array

Input Format

The first line contains two space-separated integers n and d, the size of a and the number of left rotations.

Constraints
1 <= n <= 10^5
1 <= d <= n
1 <= a[i] <= 10^6

Sample Input

5 4
1 2 3 4 5

Sample Output

5 1 2 3 4

Explanation

When we perform d = 4 left rotations, the array undergoes the following sequence of changes:
[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]

 */

/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts the following parameters:
 * 1. INTEGER_ARRAY a
 * 2. INTEGER d
 */

function rotateLeft(a, d) {
  if (!Array.isArray(a) || typeof d !== "number") {
    return [];
  }
  const SIZE = a.length

  if (SIZE < 2) {
    return a;
  }


  let j= 0
  var b = []

  for (let i = d; i < SIZE; i++){
    b[j] = a[i]
    j++
  }

  for (let i = 0; i < d; i++){
    b[j] = a[i]
    j++
  }
  return b
}

console.log(rotateLeft([1,2,3,4,5], 4))
