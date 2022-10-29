import {partition} from "./W1D4_partition.mjs"

const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if(left<right){
        let pivotIndex=partition(nums,left,right);
        quickSort(nums, left, pivotIndex)
        quickSort(nums, pivotIndex+1, right);
    }
    return nums
}
let testArr = [22,444566,5,77,8,44,5,54,44566,46];
console.log(quickSort(nums4));