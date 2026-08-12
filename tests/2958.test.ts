import { test, expect } from 'vitest';

test('2958. Length of Longest Subarray With at Most K Frequency', () => {
    expect(maxSubarrayLength([2, 2, 3], 1)).toBe(2);
    expect(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)).toBe(6);
    expect(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)).toBe(2);
    expect(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)).toBe(4);
});

function maxSubarrayLength(nums: number[], k: number): number {
    let res = 0;
    const length = nums.length;
    const map = new Map<number, number>();

    let count = 0;
    let j = 0;
    for (let i = 0; i < length; i++) {
        const currentNum = nums[i];
        const countInMap = map.get(currentNum) || 0;

        if (countInMap === k) {
            map.clear();
            res = Math.max(res, count);
            count = 0;
            i = nums.indexOf(currentNum, j);
            j = i + 1;
            continue;
        }

        count++;
        res = Math.max(res, count);
        map.set(currentNum, countInMap + 1);
    }

    return res;
}

// function maxSubarrayLength(nums: number[], k: number): number {
//     let result = 0;
//     const map = new Map<number, number>();
//
//     let left = 0;
//
//     // 1. Expand the window by moving the right pointer
//     for (let right = 0; right < nums.length; right++) {
//         // Add the current element to our frequency map
//         map.set(nums[right], (map.get(nums[right]) || 0) + 1);
//
//         // 2. Shrink the window if the current element's frequency exceeds k
//         while ((map.get(nums[right]) || 0) > k) {
//             // Remove the leftmost element from our window tracking
//             map.set(nums[left], (map.get(nums[left]) || 0) - 1);
//             left++;
//         }
//
//         // 3. Update the maximum length of the valid window
//         result = Math.max(result, right - left + 1);
//     }
//
//     return result;
// }
