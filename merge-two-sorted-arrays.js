/**
 * Given two sorted arrays, merge them into one sorted array.
 *
 *  Example:
 *  Input: nums1 = [1,2,4], nums2 = [1,3,4]
 *  Output: [1,1,2,3,4,4]
 *
 *  Example 2:
 *  Input: nums1 = [], nums2 = []
 *  Output: []
 *
 *  Example 3:
 *  Input: nums1 = [], nums2 = [0]
 *  Output: [0]
 *
 *
 */

function mergeTwoSortedArrays(nums1, nums2) {
  if (!nums1 || !nums1.length) {
    return nums2;
  }

  if (!nums2 || !nums2.length) {
    return nums1;
  }

  const SIZE = nums1.length + nums2.length;
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < SIZE) {
    if (nums1[j] < nums2[j]) {
      merged.push(nums1[j]);
      i++;
    } else {
      merged.push(nums2[j]);
      i++;
    }
  }

  return merged;
}

function f (nums1, nums2) {
  // region
  let m = nums1.length;
  let n = nums2.length;

  if ((!m && !n) || m > 1000 || n > 1000 || m + n > 2000) {
    return 0;
  }

  const MAX = 1_000_000 // Math.pow(10, 6); // replace the Math.pow(10, 6) with 1_000_000 literal reduced:
  // the time from 102ms to 81ms
  // and the memory from 47.MB to 46.6MB
  // beating 87.6% of submissions as against 22.84% (previously) of submissions
  const MIN = -MAX;

  const sorted = [];
  let i=0, j=0;
  // endregion

  // Merge process
  while(i<m && j<n) {
    if(nums1[i]<nums2[j]) {
      if(nums1[i] >= MIN && nums1[i] <= MAX) {
        sorted.push(nums1[i]);
      }
      i++;
    } else {
      if(nums2[j] >= MIN && nums2[j] <= MAX) {
        sorted.push(nums2[j]);
      }
      j++;
    }
  }

  // if nums1 has any elements left
  while(i<m) {
    if(nums1[i] >= MIN && nums1[i] <= MAX) {
      sorted.push(nums1[i]);
    }
    i++;
  }

  // if nums2 has any elements left
  while(j<n) {
    if(nums2[j] >= MIN && nums2[j] <= MAX) {
      sorted.push(nums2[j]);
    }
    j++;
  }
}
