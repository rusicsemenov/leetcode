import { test, expect } from 'vitest';

test('3105. Longest Strictly Increasing or Strictly Decreasing Subarray', () => {
    expect(longestMonotonicSubarray([1, 4, 3, 3, 2])).toBe(2);
    expect(longestMonotonicSubarray([3, 3, 3, 3])).toBe(1);
    expect(longestMonotonicSubarray([3, 2, 1])).toBe(3);
    expect(longestMonotonicSubarray([1, 10, 10])).toBe(2);
    expect(longestMonotonicSubarray([1, 10, 9, 9, 10, 8, 1, 2, 3])).toBe(3);
});

function longestMonotonicSubarray(nums: number[]): number {
    let inc = 0;
    let dec = 0;
    let max = 0;

    let prev: number = 0;

    for (let n of nums) {
        inc = prev < n ? inc + 1 : 1;
        dec = prev > n ? dec + 1 : 1;

        max = Math.max(max, inc, dec);
        prev = n;
    }

    return max;
}
