/**
 * Given an unsorted integer array nums, return the mean of the array.
 *
 * In a mathematics context, the mean is the average of the numbers in a set of numbers.
 * xˉ = (x₁ + x₂ + x₃ + ... + xₙ) / n
 *
 * If the data points have associated freuencies, the mean is the sum of the products of the data points and their frequencies, divided by the sum of the frequencies.
 *
 * xˉ =∑ᵢ (xᵢ * fᵢ) / ∑ᵢ fᵢ
 * If the array is empty, return 0.
 *
 * Example 1:
 *
 */

function getMean(nums) {
  let sum = 0;
  for (let i = 0, SIZE = nums.length; i < SIZE; i++) {
    sum += nums[i]
  }

  return sum / nums.length;
}

console.log(getMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5

/**
 *
 * @param dataPoints {{number: number}}
 * @returns {number}
 */
function getMeanOfDataPointsAndFrequencies(dataPoints) {
  let sum = 0;
  let sumOfFrequencies = 0;

  for (let [dataPoint, frequency] of Object.entries(dataPoints)) {
    sum += dataPoint * frequency;
    sumOfFrequencies += frequency;
  }

  return sum / sumOfFrequencies;
}

console.log(getMeanOfDataPointsAndFrequencies({
  1: 1,
  2: 6,
  3: 1,
  4: 1,
  5: 1})); // 3


