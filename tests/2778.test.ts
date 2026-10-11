import { test, expect } from 'vitest';

test('Sum of Squares of Special Elements', () => {
    expect(sumOfSquares([1, 2, 3, 4])).toEqual(21);
    expect(sumOfSquares([2, 7, 1, 19, 18, 3])).toEqual(63);
});

function sumOfSquares(nums: number[]): number {
    let res = 0;
    const len = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (len % (i + 1) !== 0) {
            continue;
        }

        res += nums[i] ** 2;
    }

    return res;
}
